let scrollTop = 0; // keeps track of scroll position
let scrollProgress = 0;
let projectScrollTop = 0;
let isScrolling = false;

let _winW = 0; // width of the window
let _winH = 0;
let smallScreen; // boolean for < 960px
let mouseX = 0;
let vidPadding = 'p-t-vid';
let isResizing = false;

let currentSection;
let currentPerson;
let currentProject;
let isProjectOpen = false;
let slideshowInterval;

let currentImage = 0;

let oldSection;
let oldPerson = 0;

let sectionTops;
let personTops;
let storyTops;
let clientTops;

let scrollTimeout;
let resizeTimeout;
let initialResize = true;

let isPaused = false;

let revealBuffer; // sections are revealed when they are scrolled this far into the screen

$(function() { // INITIALIZE AFTER JQUERY IS LOADED
  const WIN = $(window);
  const LOGO_VIDEO = $f(document.querySelector('.jsLogo__video'));
  const PROJECTS_IMAGE_FOLDER = 'ui/assets/images/projects/';
  const BUZZ_IMAGE_FOLDER = 'ui/assets/images/buzz/';

  init();

  resizeHandler(); // Calculate sizes right away

  setTimeout(() => {
    $('body').addClass('is-loaded');
    $('.jsGrain').css({
      height: document.scrollingElement.scrollHeight
    })

    if (window.location.hash) {
      if (window.location.hash.substr(1) === 'about') {
        sectionClickHandler('.jsAboutButton', 'About')
      } else if (window.location.hash.substr(1) === 'work') {
        sectionClickHandler('.jsWorkButton', 'Work')
      } else if (window.location.hash.substr(1) === 'buzz') {
        sectionClickHandler('.jsBuzzButton', 'Buzz')
      } else if (window.location.hash.substr(1) === 'hello') {
        sectionClickHandler('.jsContactButton', 'Hello')
      } else {
        projects.forEach((project, i) => {
          if (window.location.hash.substr(1) === project.folderName) {
            showProject(null, i);
          }
        })
      }
    }
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

  $('.jsContact__form input[type="checkbox"]').on('change', updateLikes);

  // MENU EVENTS

  $('.jsAboutButton').on('click', () => {
    sectionClickHandler('.jsAboutButton', 'About')
  });
  $('.jsWorkButton').on('click', () => {
    sectionClickHandler('.jsWorkButton', 'Work')
  });
  $('.jsBuzzButton').on('click', () => {
    sectionClickHandler('.jsBuzzButton', 'Buzz')
  });
  $('.jsContactButton').on('click', () => {
    sectionClickHandler('.jsContactButton', 'Hello')
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
      const folder = `${PROJECTS_IMAGE_FOLDER}${project.folderName}/`;
      const thumbHTML = `<div class="jsThumbnail pos-r w-100p p-t-100p ov-h t-a-c op-0">
      <img src="${folder}thumbnail.jpg" class="image-fit center-hv pos-a h-100p t-0 l-0" />
        <div class="jsThumbnail__info fx-c j-c-center a-i-center p-h-2">
          <div class="jsThumbnail__client f-s-m">${project.clientName}</div>
          <div class="jsThumbnail__title f-w-700 white">${project.saySomething}<br>Friend</div>
        </div>
      </div>`

      $('.jsThumbnails').append(thumbHTML);
      setTimeout(() => {
        revealThumbnail(i)
      }, i * 100)
    })

    $('.jsThumbnail').on('click', function(e){
      e.stopPropagation();
      showProject(e, $(this).index());
    })

    // CLIENTS INIT
    $.each(clients, function(i, client) {
      if (client !== '') {
        $('.jsClientLogos').append(`
          <div class="jsClientLogo w-33p ms-w-20p">
            <img class="w-100p" src="ui/assets/images/clients/${client}.svg" />
          </div>
        `)
      } else {
        $('.jsClientLogos').append(`<div class="w-25p"></div>`);
      }
    })

    let buzzThumbsHTML = '';
    $.each(buzz, function(i){
      const item = buzz[i];
      const folder = `${BUZZ_IMAGE_FOLDER}`;
      if (i === 0) {
        buzzThumbsHTML += `<div class="jsThumbnail pos-r w-100p t-a-c op-0 m-b-3">
          <a href="${item.link}" target="_blank">
            <img src="${folder}${item.image}" class="image-fit w-100p" />
            <div class="jsStory__info fx-c j-c-center a-i-center p-2">
              <div class="jsThumbnail__client f-s-m">${item.source}</div>
              <div class="jsThumbnail__title f-w-700 dark">${item.title}</div>
            </div>
          </a>
        </div>`
      } else {
        if (i % 3 === 1) {
          buzzThumbsHTML += '<div class="jsNewsRow p-v-1vw">';
        }

        buzzThumbsHTML += `<div class="jsThumbnail pos-r w-100p p-t-100p ov-h t-a-c op-0">
          <a href="${item.link}" target="_blank">
            <img src="${folder}${item.image}" class="image-fit center-hv pos-a h-100p t-0 l-0" />
            <div class="jsThumbnail__info fx-c j-c-center a-i-center p-h-2 gray">
              <div class="jsThumbnail__client f-s-m">${item.source}</div>
              <div class="jsThumbnail__title f-w-700 white">${item.title}</div>
            </div>
          </a>
        </div>`

        if (i % 3 === 0) {
          buzzThumbsHTML += '</div>';
        }
      }
      setTimeout(() => {
        revealStory(i)
      }, i * 100)
    })
    $('.jsBuzz').append(buzzThumbsHTML);
  }

  function revealThumbnail(num) {
    $('.jsWork .jsThumbnail').eq(num).addClass('in');
    $('.jsProject .jsThumbnail').eq(num).addClass('in');
  }

  function revealStory(num) {
    $('.jsBuzz .jsThumbnail').eq(num).addClass('in');
  }
  function logoClickHandler() {
    window.location.hash = ``;
    $('body').stop();
    $('.jsMenuItem').removeClass('current');
    currentClient = null;
    currentPerson = null;
    $('body').animate({scrollTop: 400}, '1000');
    ga('send', {
      'hitType': 'pageview',
      'page': `/home`
    });
  }

  function homeClickHandler() {
    window.location.hash = ``;
    if (isProjectOpen) {
      hideProject();
    }
    $('body').animate({scrollTop: 400}, '1000');
    ga('send', {
      'hitType': 'pageview',
      'page': `/home`
    });
  }

  function sectionClickHandler(button, sectionName) {
    window.location.hash = `#${sectionName.toLowerCase()}`;
    ga('send', {
      'hitType': 'pageview',
      'page': `/${sectionName}`
    });
    let delay = 0;
    let duration = 1000;
    if (isProjectOpen) {
      hideProject();
      delay = 500;
    }
    $('body').stop();
    $('.jsProject').removeClass('in');
    $('body').addClass('current');
    $('.jsMenuItem.active').removeClass('active');
    $(button).addClass('active');
    currentClient = null;
    currentPerson = null;
    
    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 1000)
    setTimeout(() => {
      $('body').removeClass('is-project-open');
      if (button === '.jsWorkButton') {
        $('body').animate({scrollTop: Number(sectionTops[0] - 150)}, duration);
      } else if (button === '.jsAboutButton') {
        $('body').animate({scrollTop: Number(sectionTops[1] - 150)}, duration);
      } else if (button === '.jsBuzzButton') {
        $('body').animate({scrollTop: Number(sectionTops[2] - 150)}, duration);
      } else if (button === '.jsContactButton') {
        $('body').animate({scrollTop: Number(sectionTops[3] - 150)}, duration);
      }
    }, delay)
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
    if (isProjectOpen && !isResizing) return;
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      unpauseLogoVideo();
    }, 400);
    if (!isPaused) {
      pauseLogoVideo();
    }
    
    const oldScrollTop = scrollTop;
    let activeButton;
    scrollTop = $('body').scrollTop();

    for (let i=sectionTops.length - 1; i>=0 ;i--) {
      if (scrollTop > sectionTops[i] - _winH && !activeButton) {
        if (!$('.jsMenuItem').eq(i).hasClass('active') && !isScrolling) {
          ga('send', {
            'hitType': 'pageview',
            'page': `/${$('.jsMenuItem').eq(i)[0].innerText}`
          });
        };
        $('.jsMenuItem').eq(i).addClass('active');
        activeButton = i;
      } else {
        $('.jsMenuItem').eq(i).removeClass('active');
      }
    }
    scrollProgress = Math.min(scrollTop * scrollFraction, Math.PI * .5);
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
    }, 600);
    setTimeout(() => {
      $('body').removeClass('is-transitioned-' + io);
      $('body').removeClass('is-transitioning-' + io);
    }, 2500);
  }

  function showProject(e, num) {
    isProjectOpen = true;
    if (e) e.stopPropagation();
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
    const title = project.saySomething;
    const description = project.description;
    const meta = project.meta;
    const metaFooter = project.metaFooter;
    const folder = `${PROJECTS_IMAGE_FOLDER}${project.folderName}/`;
    const hero = `${folder}${project.hero}`;
    window.location.hash = `#${project.folderName}`
    ga('send', {
      'hitType': 'pageview',
      'page': `/projects/${clientName}}`
    });

    if (project.hero !== "") {
      $('.jsProject__hero').html('<img class="w-100p" src="">');
      $('.jsProject__hero img').attr('src', hero)
      $('.jsProject__hero img').css({
        display: "block"
      })
    } else {
      $('.jsProject__hero img').css({
        display: "none"
      })
      $('.jsProject__hero').html('');
    }
    $('.jsProject').scrollTop(0);
    $('.jsProject__client').html(clientName);
    $('.jsProject__title').html(`${title} Friend`);
    $('.jsProject__description').html(description);
    $('.jsProject__content').html('');

    if (meta) {
      $('.jsProject__metaContainer').css({display: 'block'})
      $('.jsProject__meta').html(meta.join(' | '));
    } else {
      $('.jsProject__metaContainer').css({display: 'none'})
      $('.jsProject__meta').html('');
    }
    if (metaFooter) {
      $('.jsProject__metaFooter').css({display: 'block'})
      $('.jsProject__metaFooter').html(metaFooter.join(' | '));
    } else {
      $('.jsProject__metaFooter').css({display: 'none'})
      $('.jsProject__metaFooter').html('');
    }
    
    $.each(content, function(i){
      let projectHTML = '';
      const item = content[i];
      let isSlideShow;
      if (item.type === "image") {
        if (typeof(item.src) === "object") {
          const layout = item.layout ? item.layout : item.src.length;
          projectHTML += `<div class="jsProjectImageRow d-g grid-${layout} gap-2vw">`
          for (let i=0; i < item.src.length; i++) {
            projectHTML += `<div class="jsProjectImage pos-r d-b m-b-2vw"><img src=${folder}${item.src[i]} class="pos-r d-b w-100p"></div>`;
          }
          projectHTML += `</div>`;
        } else {
          projectHTML = `<div class="jsProjectImage pos-r d-b w-100p m-b-2vw"><img src=${folder}${item.src} class="pos-r d-b w-100p"></div>`;
        }
      } else if (item.type === "slideshow") {
        isSlideShow = true;
        projectHTML += `<div class="jsProjectSlideshow m-b-2vw pos-r">`
        for (let i=0; i < item.src.length; i++) {
          projectHTML += `<div class="jsProjectImage ${i === 0 ? 'pos-r' : 'pos-a'} d-b t-0 l-0"><img src=${folder}${item.src[i]} class="pos-r d-b w-100p"></div>`;
        }
        projectHTML += `</div>`;
      } else if (item.type === "video") {
        if (item.aspect && item.aspect === '3_4') {
          vidPadding = 'p-t-vid-3-4'
        } else {
          vidPadding = 'p-t-vid';
        }
        const autoplay = item.autoplay ? 'autoplay=1&loop=1&background=1' : '&autoplay=0';
        projectHTML += `<div class="pos-r jsProjectImage w-100p ${vidPadding} m-b-2vw">
          <iframe class="jsProject__video pos-a l-0 t-0 w-100p h-100p" src="${item.src}?api=1&title=0&portrait=0&byline=0${autoplay}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>`
      } else if (item.type === "title") {
        projectHTML += `<div class="pos-r fx-c j-c-center a-i-center t-a-c a-i-start m-t-3">
          <div class="f-s-l w-100p">
            <div class="m-b-3">${item.title}</div>
          </div>
        </div>`
      } else if (item.type === "text") {
        projectHTML += `<div class="f-s-s w-100p ms-w-50p pos-r m-b-3">${item.text}</div>`
      } else if (item.type === "title_and_text") {
        projectHTML += `<div class="pos-r t-a-c m-b-3 max-w-720px m-h-a">
          <div class="f-s-m m-b-1">${clientName}</div>      
          <div class="f-s-xl m-b-1">${item.title}</div>
          <div class="jsChallenge f-s-s ms-f-s-s">${item.text}</div>
        </div>`
      }
      if (project.hero === "" && i === 0) {
        $('.jsProject__hero').append(projectHTML);
        $('.jsProject__content').css({display: 'none'})
      } else {
        $('.jsProject__content').append(projectHTML);
        $('.jsProject__content').css({display: 'block'})
      }
      if (isSlideShow) {
        startSlideShow();
      }
    })
  }

  function startSlideShow() {
    let count = $('.jsProjectSlideshow .jsProjectImage').length;
    let current = 0;
    let z = count;
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(() => {
      $('.jsProjectSlideshow .jsProjectImage').eq(current).css({
        zIndex: z,
      })
      current++;
      z++;
      if (current >= count) {
        current = 0;
      }
    }, 1000)
  }

  function updateLikes(e) {
    let likeCount = 0;
    let el;
    let index;
    $('.jsContact__form input[type="checkbox"]').each((i) => {
      el = $('.jsContact__form input[type="checkbox"]').eq(i);
      if(el[0].checked) likeCount++;
    })
    let type = $(this)[0].name;
    if (likeCount > 2) {
      if (type === "great") {
        index = 1;
      } else if (type === "fast") {
        index = 2;
      } else {
        index = 0;
      }
      $('.jsContact__form input[type="checkbox"]').eq(index)[0].checked = false;
    }
    ga('send', 'event', {
      'eventCategory': 'Great/Fast/Cheap',
      'eventAction': type
    });
    // if ($(this).name)
  }

  ////// UTIL

  function setTops() {
    sectionTops = [
      $('.jsWork').offset().top, 
      $('.jsAbout').offset().top, 
      $('.jsBuzz').offset().top, 
      $('.jsContact').offset().top
    ];
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
    }, 2000);
    logoHeight = $('.jsAri').height();
    logoShrinkage = Math.min(.8, .4 + _winW / 1680 * .55);
    scrollFraction = .002 * (1680 / _winW);

    if (!initialResize) {
      isResizing = true;
      $('.jsGrain').css({
        position: 'fixed',
        transition: '0s',
      })
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        
        setTimeout(() => {
          const scrollHeight = document.scrollingElement.scrollHeight;
          $('.jsGrain').css({
            position: 'absolute',
            transition: '0s',
            height: scrollHeight
          })
        }, 500)
        isResizing = false;
        
      }, 200)
    }
    window.addEventListener('click', () => {
      // console.log(document.scrollingElement.scrollHeight)
    })
    
    initialResize = false;
  }
})
