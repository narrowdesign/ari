let scrollTop = 0; // keeps track of scroll position
let campaignScrollTop = 0;

let _winW = 0; // width of the window
let _winH = 0;
let smallScreen; // boolean for < 960px
let mouseX = 0;

let currentSection;
let currentPerson;
let currentClient;
let currentCampaign;
let currentStory;
let currentNewsHeadline = 0;

let currentImage = 0;

let oldSection;
let oldPerson = 0;

let sectionTops;
let personTops;
let storyTops;
let clientTops;

let newsInterval;

let revealBuffer; // sections are revealed when they are scrolled this far into the screen

$(function() { // INITIALIZE AFTER JQUERY IS LOADED
  const WIN = $(window);
  const BODY = $("body");
  init();

  resizeHandler(); // Calculate sizes right away

// EVENTS
/////////

  // UTIL EVENTS
  WIN.on('resize',resizeHandler);

  WIN.on('touchstart', function(){
    isTouchDevice = true;
  })
  WIN.on('scroll', scrollHandler);

  $('.jsCampaignInfo').on('scroll', campaignScrollHandler);

  $('.Logo').on('click',logoClickHandler);

  // MENU EVENTS

  $('.jsPeopleButton').on('click', sectionClickHandler);
  $('.jsWorkButton').on('click', sectionClickHandler);
  $('.jsPressButton').on('click', sectionClickHandler);
  $('.jsContactButton').on('click', sectionClickHandler);

  $('.jsNewsButton .jsText').on('click', newsClickHandler);
  $('.jsNewsButton .jsNewsNumber').on('click', newsNumberClickHandler);
  $('.jsNewsButton .jsNewsAll').on('click', newsClickHandler);

  $('.jsOverlay').on('click', closeNews)
  $('.jsOverlay').on('click', closeInfo)

  // WORK EVENTS

  $('.jsCampaignInfo').on('scroll', function(e){
    e.preventDefault();
    e.stopPropagation();
  })
  $('.jsNextCampaign').on('click', function(e){
    nextCampaign(e);
  })

  $('.jsCloseNews').on('click', closeNews);

  // $('.jsClient .jsName').on('click', showWork);
  $('.jsCloseInfo').on('click', closeInfo);
  $('.jsClient > .jsContent').on('click', function(){
    if (BODY.hasClass('is-work')) {
      hideWork();
    }
  })

  // FUNCTIONS
  ////////////
  function init() {

    // PEOPLE INIT


    $('.jsPeopleNum').html(people.length);
    $.each(people, function(i){
      const person = $('.jsPerson').eq(0).clone();
      const data = people[i];
      const name = data.name;
      $('.jsName', person).html(name);
      $('.jsTitle span', person).html(data.title);
      $('.jsBio', person).html(data.bio);
      $('.jsCover', person).css({
        backgroundImage: 'url(ui/assets/images/people/'+data.cover+')',
        backgroundPosition: data.focalPoint
      });
      $('.jsPerson').last().after(person);
    })

    $('.jsPerson').eq(0).remove(); // clear the placeholder

    // WORK INIT
    $('.jsClientsNum').html(work.length);
    $.each(work, function(i){
      const client_el = $('.jsClient').eq(0).clone();
      const data = work[i];
      const clientName = data.clientName;
      const folderName = data.folderName
      client_el.attr('id', data.clientName.toLowerCase());
      $('.jsName span', client_el).html(clientName);
      $('.jsName span > span', client_el).each(function(i){
        $(this).css({
          'transition-delay': i/15 + 's'
        });
      });

      $.each(data.campaigns, function(j) {
        $('.jsThumbnails', client_el).append(
          `<div class="jsThumb--work pos-r w-100p">
            <div class="pos-r w-100p ms-h-a cur-p hov">
              <div class="jsThumb__cover w-100p h-a pos-r"><img class="pos-r w-100p"></div>
              <div class="jsThumb__title pos-a w-66p b-0 ms-b-05rem l-0 p-1 f-s-xs ms-f-s-s w-s-w m-t-05 ms-m-l-05"></div>
            </div>
          </div>`
        );
        const thumbnail = $('.jsThumb--work', client_el).eq(j)
        const cover = $('.jsThumb--work .jsThumb__cover img', client_el).eq(j)
        const title = $('.jsThumb--work .jsThumb__title', client_el).eq(j)
        cover.attr('src', 'ui/assets/images/work/' + folderName + '/' + data.campaigns[j].poster);
        title.html(data.campaigns[j].title)
        title.css({color: data.campaigns[j].textColor})
        thumbnail.on('click', function(e){
          e.stopPropagation();
          currentClient = i;
          showWork(e);
          setCampaign(client_el, data, $(this).index(), 'campaign');
        })
        cover.css({
          'transition-delay': (.5 + j/15) + 's'
        })
      })

      client_el.appendTo('#Section--work');
    })
    $('.jsClient').eq(0).remove(); // clean up the dummy

    // NEWS INIT
    $.each(news, function(i){
      const story = $('.jsNews .jsStory').eq(0).clone();
      const data = news[i];
      $('.jsHeadline a', story).html(data.headline);
      $('.jsSource', story).text(data.source)
      $('.jsDate', story).text(data.date)
      $('a', story).attr('href',data.link)
      story.appendTo('.jsNews');
    })
    $('.jsStory').each(function(i){
      $(this).css({
        '-webkit-transition-delay': i/20 + 's'
      });
    });
    $('.jsNews .jsStory').eq(0).remove();

    updateNewsHeadline();
    newsInterval = setInterval(
      function(){
        setTimeout(
          function(){
            if (currentSection === 0) {
              $('.jsNewsNumber').eq(currentNewsHeadline).removeClass('current');
              if (currentNewsHeadline >= 2) {
                currentNewsHeadline = 0;
              }else {
                currentNewsHeadline++;
              }
              $('.jsNewsNumber').eq(currentNewsHeadline).addClass('current');
              updateNewsHeadline();
            }
          }
        ,3000);
      }
    ,5000);
  }
  function logoClickHandler(e) {
    BODY.stop();
    $('.jsMenuItem').removeClass('current');
    currentClient = null;
    currentPerson = null;
    BODY.animate({scrollTop: 0}, '1000');
  }

  function sectionClickHandler(e) {
    const sectionNum = $(this).index()+1;
    BODY.stop();
    BODY.removeClass('is-work');
    $('.jsNewsButton').removeClass('current')
    $('.jsCampaignInfo', $('.jsClient').eq(currentClient)).removeClass('in');
    BODY.addClass('current');
    currentClient = null;
    currentPerson = null;
    BODY.scrollTop(sectionTops[sectionNum]);
  }

  function newsClickHandler(e) {
    BODY.addClass('is-news');
    $('.jsNews .jsStory').each(function(i){
      const story = $(this);
      story.addClass('in')
    })
  }
  function updateNewsHeadline() {
    $('.jsNewsHeadline .jsHeadline').text(news[currentNewsHeadline].headline)
    $('.jsNewsHeadline .jsSource').text(news[currentNewsHeadline].source)
    $('.jsNewsHeadline .jsDate').text(news[currentNewsHeadline].date)
    $('.jsNewsHeadline a').attr('href', news[currentNewsHeadline].link)
  }
  function newsNumberClickHandler(e) {
    clearInterval(newsInterval);
    $('.jsNewsNumber').eq(currentNewsHeadline).removeClass('current');
    currentNewsHeadline = $(this).index();
    $('.jsNewsNumber').eq(currentNewsHeadline).addClass('current');
    updateNewsHeadline();
  }
  function closeNews(e) {
    BODY.removeClass('is-news');
    $('.jsNews .jsStory').removeClass('in')
  }
  function closeInfo(e) {
    e.stopPropagation();
    hideWork();
  }

  function alignTop() {
    if (currentSection == 2) {
      setTimeout(function() {
        BODY.animate({scrollTop: personTops[currentPerson]},'500');
      },1000)
    }else if(currentSection == 1){
      setTimeout(function() {
        BODY.animate({scrollTop: clientTops[currentClient]},'500');
        $('.jsCampaignInfo').scrollTop(0);
      },1000)
    }
  }

  function campaignScrollHandler() {
    campaignScrollTop = $('.jsCampaignInfo').scrollTop();

    $('.jsCampaignImage').each(function(i) {
      const image = $('.jsCampaignImage').eq(i);
      const imageTop = image.offset().top - $('.jsCampaignInfo').offset().top;
      if (imageTop < _winH - _winH/5 && !image.hasClass('in')) {
        image.addClass('in');
      } else if (imageTop >= _winH - _winH/5) {
        image.removeClass('in')
      }
    })
  }
  function scrollHandler(e) {
    if(e.type == 'wheel' || e.type == 'touchmove') {
      BODY.stop();
      BODY.removeClass('is-footer');
    }

    
    const oldScrollTop = scrollTop;
    scrollTop = BODY.scrollTop();
    const scrollProgress = Math.min(scrollTop * .002, Math.PI * .5);
    $('.jsMenu').css({
      transform: `translateY(-${Math.sin(scrollProgress) * $('.jsAri').height() * .59}px)`
    })
    const logoScale = 1 - Math.sin(scrollProgress) * .666;
    if(oldScrollTop != scrollTop){
      $('.jsAri').css({
        transform: `scale(${logoScale})`
      })
      shiftCovers();
    }
  }

  function shiftCovers() {
    $('.jsPerson').each(function(i){
      let myTop = personTops[i]
      let nextTop;
      if(oldPerson != i){
        oldPerson = currentPerson;
        if(i < $('.jsPerson').length-1){
          nextTop = personTops[i+1] - revealBuffer;
        }else{
          nextTop = personTops[i] + _winH - revealBuffer;
        }
        if(scrollTop > myTop - revealBuffer && scrollTop < nextTop){
          currentPerson = i;
          if (!$(this).hasClass('current')) {
            $(this).addClass('current');
          }
        }else{
          if ($(this).hasClass('current')) {
            $(this).removeClass('current');
          }
        }
      }
    });

    $('.jsClient').each(function(i){
      const myTop = clientTops[i]
        let nextTop;
        if(i < $('.jsClient').length - 1){
          nextTop = clientTops[i + 1] - revealBuffer;
        }else{
          nextTop = clientTops[i] + _winH - revealBuffer;
        }
        if(scrollTop > myTop - revealBuffer && scrollTop < nextTop){
          if (!$(this).hasClass('current')) {
            currentClient = i;
            $(this).addClass('current');
          }
        }else{
          if ($(this).hasClass('current')) {
            $(this).removeClass('current')
          }
        }
    });

    $('.jsSection').each(function(i){
      const myTop = sectionTops[i]
      let nextTop;
      if(i < $('.jsSection').length - 1){
        nextTop = sectionTops[i + 1] - revealBuffer;
      }else{
        nextTop = sectionTops[i] + _winH - revealBuffer;
      }
      if(scrollTop > myTop - revealBuffer && scrollTop < nextTop){
        if (!$(this).hasClass('current')) {
          currentSection = i;
          $(this).addClass('current');
          $('.jsMenuItem').removeClass('current');

          if (i > 0) {
            $('.jsMenuItem').eq(i - 1).addClass('current');
          }
        }
      }else{
        $(this).removeClass('current')
      }
    });
    if (scrollTop < personTops[0] - revealBuffer) {
      currentPerson = -1;
    }
    if (scrollTop < clientTops[0] - revealBuffer) {
      currentClient = -1;
    }
  }

  //////// WORK FUNCTIONS

  function showWork(e) {
    alignTop();
    e.stopPropagation();
    alignTop();
    const client_el = $('.jsClient').eq(currentClient);
    $('.jsCampaignInfo', client_el).addClass('in');
    $('body').addClass('is-work');
    setTimeout(function(){
      $('.jsCampaignImage').eq(0).addClass('in');
    },500)
  }
  function hideWork() {
    const client_el = $('.jsClient').eq(currentClient);
    $('.jsCampaignInfo', client_el).removeClass('in');
    $('.jsClient.current .jsCampaignInfo .jsThumbnail').removeClass('in');
    $('.jsCampaignImage').eq(0).removeClass('in');
    BODY.removeClass('is-work');
  }

  function nextCampaign(e) {
    const client_el = $('.jsClient').eq(currentClient);
    const data = work[currentClient]
    const campaign = currentCampaign + 1;
    if (campaign > work[currentClient].campaigns.length - 1 && currentClient == $('.jsClient').length - 1) {
      hideWork();
      return;
    } else if (campaign > work[currentClient].campaigns.length - 1) {
      BODY.stop();
      client_el = $('.jsClient').eq(currentClient + 1);
      data = work[currentClient + 1];
      BODY.animate({scrollTop: client_el.offset().top}, 1000);
      currentClient = currentClient + 1;
      campaign = 0;
    }
    setCampaign(client, data, campaign, 'campaign');
  }

  function setCampaign(client, data, num, type) {
    const campaign = data.campaigns[num];
    const content = campaign.content;
    const clientName = work[currentClient].clientName;
    const folderName = work[currentClient].folderName;

    $('.jsCampaignInfo').scrollTop(0);
    
    if (num < data.campaigns.length - 1) {
      $('.jsNextCampaignName').html(data.campaigns[num+1].title);
    } else if (currentClient < work.length - 1) {
      clientName = work[currentClient + 1].client;
      $('.jsNextCampaignName').html(work[currentClient + 1].campaigns[0].title);
    } else {
      $('.jsNextCampaignName').html("The End");
    }
    currentCampaign = num;
    $('.jsCampaign__content').html('');
    $.each(content, function(i){
      if (content[i].type == "image") {
        $('.jsCampaign__content').append(`<div class="jsCampaignImage pos-r d-b w-100p m-v-1"><img src=ui/assets/images/work/${folderName}/${content[i].src} class="pos-r d-b w-100p"></div>`)
      } else if (content[i].type == "video") {
        $('.jsCampaign__content').append(`<div class="pos-r jsCampaignImage jsVideoPlayer w-100p p-t-vid m-b-1">
          <iframe class="pos-a l-0 t-0 w-100p h-100p" src="${content[i].src}?title=0&portrait=0&byline=0&autoplay=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>`)
      } else if (content[i].type == "title") {
        $('.jsCampaign__content').append(`<div class="pos-r fx-c j-c-center a-i-center t-a-c a-i-start m-t-3">
              <div class="f-s-l w-100p">
                <div class="m-b-3">${content[i].title}</div>
              </div>
            </div>`)
      } else if (content[i].type == "text") {
        $('.jsCampaign__content').append(`<div class="f-s-s w-100p ms-w-50p pos-r m-b-3">${content[i].text}</div>`)
      } else if (content[i].type == "title_and_text") {
        $('.jsCampaign__content').append(`<div class="pos-r t-a-c m-b-3 max-w-720px m-h-a">
              <div class="f-s-m m-b-1">${clientName}</div>      
              <div class="f-s-xl m-b-1">${content[i].title}</div>
              <div class="jsChallenge f-s-s ms-f-s-s">${content[i].text}</div>
            </div>`)
      }
    })
  }

  ////// UTIL

  function setTops() {
    sectionTops = [];
    $('.jsSection').each(function(i){
      sectionTops.push($(this).offset().top);
    })
    personTops = [];
    $('.jsPerson').each(function(i){
      personTops.push($(this).offset().top);
    })
    storyTops = [];
    $('.jsStory').each(function(i){
      storyTops.push($(this).offset().top);
    })
    clientTops = [];
    $('.jsClient').each(function(i){
      clientTops.push($(this).offset().top);
    })
    finalTops = [];
    $('.jsFinal').each(function(i){
      finalTops.push($(this).offset().top);
    })
    shiftCovers();
  }

  function resizeHandler () { // Set the size of images and preload them
    _winW = window.innerWidth;
    _winH = window.innerHeight;
    revealBuffer = 230;
    if(_winW > 960){
      smallScreen = false;
    }else{
      smallScreen = true;
    }
    setTops();
    setTimeout(function(){
      setTops();
    },800);
  }
})
