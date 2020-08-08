let scrollTop = 0; // keeps track of scroll position
let scrollProgress = 0;
let projectScrollTop = 0;

let _winW = 0; // width of the window
let _winH = 0;
let smallScreen; // boolean for < 960px
let mouseX = 0;

let currentSection;
let currentPerson;
let currentProject;
let isProjectOpen = false;

let currentImage = 0;

let oldSection;
let oldPerson = 0;

let sectionTops;
let personTops;
let storyTops;
let clientTops;

let scrollTimeout;

let isPaused = false;

let revealBuffer; // sections are revealed when they are scrolled this far into the screen

$(function() { // INITIALIZE AFTER JQUERY IS LOADED
  const WIN = $(window);
  const LOGO_VIDEO = $f(document.querySelector('.jsLogo__video'));
  const WORK_IMAGES_FOLDER = 'ui/assets/images/work/';

  let logoHeight = $('.jsAri').height();
  init();

  resizeHandler(); // Calculate sizes right away
  setTimeout(() => {
    $('body').addClass('is-loaded');
    $('.jsGrain').css({
      height: document.scrollingElement.scrollHeight
    })
  }, 1000);

// EVENTS
/////////

  // UTIL EVENTS
  WIN.on('resize',resizeHandler);

  WIN.on('touchstart', function(){
    isTouchDevice = true;
  })
  WIN.on('scroll', scrollHandler);

  $('.jsProject').on('scroll', projectScrollHandler);

  $('.Logo').on('click',logoClickHandler);

  // MENU EVENTS

  $('.jsAboutButton').on('click', () => {
    sectionClickHandler('about')
  });
  $('.jsWorkButton').on('click', () => {
    sectionClickHandler('work')
  });
  $('.jsPressButton').on('click', () => {
    sectionClickHandler('press')
  });
  $('.jsContactButton').on('click', () => {
    sectionClickHandler('contact')
  });
  
  $('.jsAri').on('click', homeClickHandler);

  // WORK EVENTS

  $('.jsProject').on('scroll', function(e){
    e.preventDefault();
    e.stopPropagation();
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
      $('.jsPerson__name', person).html(name);
      $('.jsPerson__title', person).html(data.title);
      $('.jsPerson__bio', person).html(data.bio);
      $('.jsPerson__cover', person).css({
        backgroundImage: `url(ui/assets/images/people/${data.throwback})`,
        backgroundPosition: data.focalPoint
      });
      $('.jsPerson__headshot img', person).attr('src', `ui/assets/images/people/${data.headshot}`);
      $('.jsPerson').last().after(person);
    })

    $('.jsPerson').eq(0).remove(); // clear the placeholder

    // WORK INIT
    $.each(projects, function(i){
      const project = projects[i];
      const folder = `${WORK_IMAGES_FOLDER}${project.folderName}/`;
      const thumbHTML = `<div class="jsThumbnail pos-r w-100p p-t-100p ov-h t-a-c op-0">
      <img src="${folder}${project.thumbnail}" class="image-fit center-hv pos-a h-100p t-0 l-0" />
        <div class="jsThumbnail__info fx-c j-c-center a-i-center p-h-2">
          <div class="jsThumbnail__client f-s-m">${project.clientName}</div>
          <div class="jsThumbnail__title f-s-l f-w-700">${project.title}</div>
        </div>
      </div>`

      $('.jsThumbnails').append(thumbHTML);
      revealThumbnail(i)
    })

    $('.jsThumbnail').on('click', function(e){
      e.stopPropagation();
      console.log($(this).index())
      showProject(e, $(this).index());
    })

    // CLIENTS INIT
    $.each(clients, function(i, client) {
      if (client !== '') {
        $('.jsClientLogos').append(`
          <div class="w-20p">
            <img class="w-100p" src="ui/assets/images/clients/${client}.svg" />
          </div>
        `)
      } else {
        $('.jsClientLogos').append(`<div class="w-25p"></div>`);
      }
    })

    // QUOTES INIT
    $.each(quotes, function(i, quote) {
      $('.jsQuotes').append(`
        <div class="m-h-a jsQuote max-w-560px m-t-0 m-b-4">
          <p class="f-s-m d-b m-t-0">${quote.quote}</p>
          <p class="f-s-m d-b op-60">${quote.author}</p>
        </div>
      `)
    })
  }

  function revealThumbnail(num) {
    setTimeout(() => {
      $('.jsThumbnail').css({
        opacity: 1,
        transition: '1s'
      })
    }, 1500)
  }
  function logoClickHandler(e) {
    $('body').stop();
    $('.jsMenuItem').removeClass('current');
    currentClient = null;
    currentPerson = null;
    $('body').animate({scrollTop: 400}, '1000');
  }

  function homeClickHandler() {
    if (isProjectOpen) {
      hideProject();
    }
    $('body').animate({scrollTop: 400}, '1000');
  }

  function sectionClickHandler(section) {
    if (isProjectOpen) {
      hideProject();
    }
    $('body').stop();
    $('body').removeClass('is-project-open');
    $('.jsProject').removeClass('in');
    $('body').addClass('current');
    currentClient = null;
    currentPerson = null;

    if (section === 'work') {
      $('body').animate({scrollTop: sectionTops[0]}, '1000');
    } else if (section === 'about') {
      $('body').animate({scrollTop: sectionTops[1]}, '1000');
    } else if (section === 'press') {
      $('body').animate({scrollTop: sectionTops[2]}, '1000');
    } else if (section === 'contact') {
      $('body').animate({scrollTop: sectionTops[3]}, '1000');
    }
  }

  function alignTop() {
    if (currentSection == 2) {
      setTimeout(function() {
        $('body').animate({scrollTop: personTops[currentPerson]},'500');
      },1000)
    }else if(currentSection == 1){
      setTimeout(function() {
        $('body').animate({scrollTop: clientTops[currentClient]},'500');
        $('.jsProject').scrollTop(0);
      },1000)
    }
  }

  function projectScrollHandler() {
    projectScrollTop = $('.jsProject').scrollTop();

    $('.jsProjectImage').each(function(i) {
      const image = $('.jsProjectImage').eq(i);
      const imageTop = image.offset().top - $('.jsProject').offset().top;
      if (imageTop < _winH - _winH/5 && !image.hasClass('in')) {
        image.addClass('in');
      } else if (imageTop >= _winH - _winH/5) {
        image.removeClass('in')
      }
    })
  }
  function scrollHandler(e) {
    if (isProjectOpen) return;
    if(e.type == 'wheel' || e.type == 'touchmove') {
      $('body').stop();
      $('body').removeClass('is-footer');
    }
    
    if (!isPaused) {
      pauseLogoVideo();

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        unpauseLogoVideo();
      }, 400);
    }

    
    const oldScrollTop = scrollTop;
    scrollTop = $('body').scrollTop();
    scrollProgress = Math.min(scrollTop * .002, Math.PI * .5);
    $('.jsMenu').css({
      opacity: scrollProgress
    })
    const logoScale = 1 - Math.sin(scrollProgress) * logoShrinkage;
    if(oldScrollTop != scrollTop){
      $('.jsAri').css({
        transition: '0s',
        transform: `scale(${logoScale})`
      })
    }
  }

  function pauseLogoVideo() {
    isPaused = true;
    LOGO_VIDEO.api("pause");
  }

  function unpauseLogoVideo() {
    isPaused = false;
    LOGO_VIDEO.api("play");
  }

  //////// WORK FUNCTIONS

  function doTransition(delay, io, callback) {
    pauseLogoVideo();
    $('body').addClass('is-transitioning-' + io);
    setTimeout(() => {
      $('body').addClass('is-transitioned-' + io);
      callback();
    }, 500);
    setTimeout(() => {
      $('body').removeClass('is-transitioned-' + io);
      $('body').removeClass('is-transitioning-' + io);
    }, 2500);
  }

  function showProject(e, num) {
    isProjectOpen = true;
    e.stopPropagation();
    alignTop();
    doTransition(2500, 'in', () => {
      setProject(num);
      $('body').addClass('is-project-open');
    })
    $('.jsAri').css({
      transform: `scale(${1 - logoShrinkage})`,
      transition: '.5s',
    })
    $('.jsMenu').css({
      transition: '.2s',
      opacity: 1
    })
  }

  function hideProject() {
    isProjectOpen = false;
    if (document.querySelectorAll('.jsProject__video').length > 0) {
      Array.from(document.querySelectorAll('.jsProject__video')).forEach((video) => {
        $f(video).api("pause");
      })
    }
    doTransition(1500, 'out', () => {
      $('body').removeClass('is-project-open');
      unpauseLogoVideo();
    })
    $('.jsAri').css({
      transform: `scale(${1 - Math.sin(scrollProgress) * logoShrinkage})`
    })
  }

  function setProject(num) {
    currentProject = num;
    const project = projects[num];
    const content = project.content;
    const clientName = project.clientName;
    const title = project.title;
    const description = project.description;
    const folder = `${WORK_IMAGES_FOLDER}${project.folderName}/`;
    const hero = `${folder}${project.hero}`;

    if (project.hero !== "") {
      $('.jsProject__hero img').attr('src', hero)
      $('.jsProject__hero img').css({
        display: "block"
      })
    } else {
      $('.jsProject__hero img').css({
        display: "none"
      })
    }
    $('.jsProject').scrollTop(0);
    $('.jsProject__client').html(clientName);
    $('.jsProject__title').html(title);
    $('.jsProject__description').html(description);
    $('.jsProject__content').html('');
    $.each(content, function(i){
      const item = content[i];
      if (item.type == "image") {
        $('.jsProject__content').append(`<div class="jsProjectImage pos-r d-b w-100p m-v-1"><img src=${folder}${item.src} class="pos-r d-b w-100p"></div>`)
      } else if (item.type == "video") {
        $('.jsProject__content').append(`<div class="pos-r jsProjectImage w-100p p-t-vid m-b-1">
          <iframe class="jsProject__video pos-a l-0 t-0 w-100p h-100p" src="${item.src}?api=1&title=0&portrait=0&byline=0&autoplay=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>`)
      } else if (item.type == "title") {
        $('.jsProject__content').append(`<div class="pos-r fx-c j-c-center a-i-center t-a-c a-i-start m-t-3">
          <div class="f-s-l w-100p">
            <div class="m-b-3">${item.title}</div>
          </div>
        </div>`)
      } else if (item.type == "text") {
        $('.jsProject__content').append(`<div class="f-s-s w-100p ms-w-50p pos-r m-b-3">${item.text}</div>`)
      } else if (item.type == "title_and_text") {
        $('.jsProject__content').append(`<div class="pos-r t-a-c m-b-3 max-w-720px m-h-a">
          <div class="f-s-m m-b-1">${clientName}</div>      
          <div class="f-s-xl m-b-1">${item.title}</div>
          <div class="jsChallenge f-s-s ms-f-s-s">${item.text}</div>
        </div>`)
      }
    })
  }

  ////// UTIL

  function setTops() {
    sectionTops = [$('.jsWork').offset().top, $('.jsAbout').offset().top, $('.jsPress').offset().top, $('.jsContact').offset().top];
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
    logoHeight = $('.jsAri').height();
    logoShrinkage = Math.min(.75, .4 + _winW / 1680 * .45);
  }
})
