document.addEventListener('DOMContentLoaded', () => {
  // REPLACE .container - full width background FIX
  $('#eb-my-items-section > .container').removeClass('container').addClass('container-fluid');

  function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
  }
  
  //removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page
  removejscssfile("mulesoft-eb-agg.css", "css") //remove all occurences "somestyle.css" on page

  // LEARNING PATH carousel
  $(function() {
    var owl = $('.owl-carousel-paths'),
    owlOptions = {
      loop: false,
      responsive: {
        0: {
          items: 1,
          margin: 8,
        },
        600: {
          items: 1,
          margin: 16,
        }
      }
    };

    if ( $(window).width() < 977 ) {
      var owlActive = owl.owlCarousel(owlOptions);
    } else {
      owl.addClass('off');
    }

    $(window).resize(function() {
      if ( $(window).width() < 977 ) {
        if ( owl.hasClass('off') ) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass('off');
        }
      } else {
        if ( !owl.hasClass('off') ) {
          owl.addClass('off').trigger('destroy.owl.carousel');
          owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
      }
    });
  });

  //
  // LEARNING TAB1 carousel

  $(function() {
    var owl = $('.owl-carousel-tab1'),
    owlOptions = {
      loop: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
          margin: 8,
        },
        600: {
          items: 1,
          margin: 16,
        }
      }
    };

    if ( $(window).width() < 977 ) {
      var owlActive = owl.owlCarousel(owlOptions);
    } else {
      owl.addClass('off');
    }

    $(window).resize(function() {
      if ( $(window).width() < 977 ) {
        if ( owl.hasClass('off') ) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass('off');
        }
      } else {
        if ( !owl.hasClass('off') ) {
          owl.addClass('off').trigger('destroy.owl.carousel');
          owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
      }
    });
  });

  //
  // LEARNING TAB2 carousel

  $(function() {
    var owl = $('.owl-carousel-tab2'),
    owlOptions = {
      loop: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
          margin: 8,
        },
        600: {
          items: 1,
          margin: 16,
        }
      }
    };

    if ( $(window).width() < 977 ) {
      var owlActive = owl.owlCarousel(owlOptions);
    } else {
      owl.addClass('off');
    }

    $(window).resize(function() {
      if ( $(window).width() < 977 ) {
        if ( owl.hasClass('off') ) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass('off');
        }
      } else {
        if ( !owl.hasClass('off') ) {
          owl.addClass('off').trigger('destroy.owl.carousel');
          owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
      }
    });
  });

  //
  // LEARNING TAB3 carousel

  $(function() {
    var owl = $('.owl-carousel-tab3'),
    owlOptions = {
      loop: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
          margin: 8,
        },
        600: {
          items: 1,
          margin: 16,
        }
      }
    };

    if ( $(window).width() < 977 ) {
      var owlActive = owl.owlCarousel(owlOptions);
    } else {
      owl.addClass('off');
    }

    $(window).resize(function() {
      if ( $(window).width() < 977 ) {
        if ( owl.hasClass('off') ) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass('off');
        }
      } else {
        if ( !owl.hasClass('off') ) {
          owl.addClass('off').trigger('destroy.owl.carousel');
          owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
      }
    });
  });

  //
  // LEARNING TAB4 carousel

  $(function() {
    var owl = $('.owl-carousel-tab4'),
    owlOptions = {
      loop: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
          margin: 8,
        },
        600: {
          items: 1,
          margin: 16,
        }
      }
    };

    if ( $(window).width() < 977 ) {
      var owlActive = owl.owlCarousel(owlOptions);
    } else {
      owl.addClass('off');
    }

    $(window).resize(function() {
      if ( $(window).width() < 977 ) {
        if ( owl.hasClass('off') ) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass('off');
        }
      } else {
        if ( !owl.hasClass('off') ) {
          owl.addClass('off').trigger('destroy.owl.carousel');
          owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
      }
    });
  });

  //
  // BRANDS carousel

  $('.owl-carousel-brands').owlCarousel({
    autoplay: true,
    autoplaySpeed: 3500,
    autoplayTimeout: 3500,
    autoWidth: true,
    loop: true,
    margin: 120,
    slideTransition: 'linear',
    dots: false,
  });

  //
  //TRAINING tabcordion 

  //'use strict';

  const keyboardSupport = function (container, hasTabs) {
    const tablist = container.querySelectorAll('[role="tablist"]')[0];
    let tabs;
    let panels;
    let cards;
    let btnsView;

    const generateArrays = function () {
      panels = container.querySelectorAll('[role="tabpanel"]');
      tabs = container.querySelectorAll('[role="tab"]');
      cards = container.querySelectorAll('.bob-card__link-cover');
      btnsView = container.querySelectorAll('.ootb-tabcordion__view-all');
    };

    generateArrays();

    // For easy reference
    const keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      delete: 46,
      enter: 13,
      space: 32,
    };

    // Add or subtract depending on key pressed
    const direction = {
      37: -1,
      38: -1,
      39: 1,
      40: 1,
    };

    // Deactivate all tabs and tab panels
    const deactivateTabs = function() {
      for (let t = 0; t < tabs.length; t++) {
        tabs[t].setAttribute('tabindex', '-1');
        tabs[t].setAttribute('aria-selected', 'false');
      }
      for (let t = 0; t < panels.length; t++) {
        panels[t].setAttribute('tabindex', '-1');
      }
      for (let t = 0; t < cards.length; t++) {
        cards[t].setAttribute('tabindex', '-1');
      }
      for (let t = 0; t < btnsView.length; t++) {
        btnsView[t].setAttribute('tabindex', '-1');
      }
    };

    // Activates any given tab panel
    const activateTab = function (tab, setFocus) {
      setFocus = setFocus || true;
      // Deactivate all other tabs
      deactivateTabs();

      //let current = tab.getAttribute('aria-controls');

      // Remove tabindex attribute
      tab.removeAttribute('tabindex');

      //console.log(tab);

      // Set the tab as selected
      tab.setAttribute('aria-selected', 'true');

      // Add tabindex to children
      const sectionId = tab.getAttribute('aria-controls');
      const section = document.getElementById(sectionId);
      const cCards = section.querySelectorAll('.bob-card__link-cover');
      const cbtnsView = section.querySelectorAll('.ootb-tabcordion__view-all');

      for (let t = 0; t < cCards.length; t++) {
        cCards[t].setAttribute('tabindex', '0');
      }
      cbtnsView[0].setAttribute('tabindex', '0');

      // Set focus when required
      if (setFocus) {
        tab.focus();
      }
    };

    const triggerTabClick = function(e) {
      const clickedId = e.target.getAttribute('id');
      if (clickedId) {
        const clickedTab = container.querySelector('[aria-controls="' + clickedId + '"]');
        clickedTab.click();
        document.getElementById(clickedId).scrollIntoView({
          behavior: 'smooth',
        });
        //console.log(clickedId);
      }
    };

    const accordionClickEventListener = function(event) {
      triggerTabClick(event);
    };

    // When a tab is clicked, activateTab is fired to activate it
    const clickEventListener = function(event) {
      const tab = event.target;
      activateTab(tab, false);
    };

    // Make a guess
    const focusFirstTab = function() {
      const target = hasTabs ? tabs : panels;
      target[0].focus();
    };

    // Make a guess
    const focusLastTab = function() {
      const target = hasTabs ? tabs : panels;
      target[target.length - 1].focus();
    };

    // Either focus the next, previous, first, or last tab
    // depending on key pressed
    const switchTabOnArrowPress = function(event) {
      const pressed = event.keyCode;

      if (direction[pressed]) {
        const target = event.target;
        const targetElems = hasTabs ? tabs : panels;
        if (target.index !== undefined) {
          if (targetElems[target.index + direction[pressed]]) {
            targetElems[target.index + direction[pressed]].focus();
          } else if (pressed === keys.left || pressed === keys.up) {
            focusLastTab();
          } else if (pressed === keys.right || pressed == keys.down) {
            focusFirstTab();
          }
        }
      }
    };

    // When a tablist's aria-orientation is set to vertical,
    // only up and down arrow should function.
    // In all other cases only left and right arrow function.
    const determineOrientation = function(event) {
      const key = event.keyCode;
      const vertical = tablist ? tablist.getAttribute('aria-orientation') === 'vertical' : null;
      let proceed = false;

      if (vertical || !hasTabs) {
        if (key === keys.up || key === keys.down) {
          event.preventDefault();
          proceed = true;
        }
      } else {
        if (key === keys.left || key === keys.right) {
          proceed = true;
        }
      }

      if (proceed) {
        switchTabOnArrowPress(event);
      }
    };

    // Handle keydown on tabs
    const keydownEventListener = function(event) {
      const key = event.keyCode;
      switch (key) {
        case keys.end:
          event.preventDefault();
          // Activate last tab
          focusLastTab();
          break;
        case keys.home:
          event.preventDefault();
          // Activate first tab
          focusFirstTab();
          break;

          // Up and down are in keydown
          // because we need to prevent page scroll >:)
        case keys.up:
        case keys.down:
          determineOrientation(event);
          break;
        default:
          break;
      }
    };

    // Handle keyup on tabs
    const keyupEventListener = function(event) {
      const key = event.keyCode;
      switch (key) {
        case keys.left:
        case keys.right:
          determineOrientation(event);
          break;
        case keys.enter:
        case keys.space:
          if(hasTabs) {
            activateTab(event.target);
          } else {
            triggerTabClick(event);
          }
          break;
      }
    };

    const addListeners = function(index) {
      const target = hasTabs ? tabs[index] : panels[index];
      tabs[index].addEventListener('click', clickEventListener);
      if(target) {
        if(!hasTabs) {
          target.addEventListener('click', accordionClickEventListener);
        }
        target.addEventListener('keydown', keydownEventListener);
        target.addEventListener('keyup', keyupEventListener);
        // Build an array with all tabs (<button>s) in it
        target.index = index;
      }
    };

    // Bind listeners
    for (let i = 0; i < tabs.length; ++i) {
      addListeners(i);
    }
    
    // Accordion mode
    if(!hasTabs) {
      for (const panel of panels) {
        panel.onclick = function(e) {
          triggerTabClick(e);
        };
      }
    }   
};
  
  const toggleClass = function (otherElems, thisELem, className = 'is-active') {
    for (const otherElem of otherElems) {
      otherElem.classList.remove(className);
    }
    thisELem.classList.add(className);
  };
  
  const toggleVerticalTabs = function (tabContainer, tabs, items, item) {
    item.onclick = function (e) {
        const currId = item.getAttribute('id');
        const tab = tabContainer.querySelector('.ootb-tabcordion--tabs [aria-controls="' + currId + '"]');
        toggleClass(tabs, tab);
        toggleClass(items, item);
      };
  };
  
  const toggleTabs = function (tabContainer) {
    const tabs = tabContainer.querySelectorAll('.ootb-tabcordion--tabs .tab');
    const items = tabContainer.querySelectorAll('.ootb-tabcordion--entry');
    for (const tab of tabs) {
      tab.onclick = function() {
        const target = tab.getAttribute('aria-controls');
        const content = document.getElementById(target);
        toggleClass(tabs, tab);
        toggleClass(items, content);
      };
    }
    for (const item of items) {
      toggleVerticalTabs(tabContainer, tabs, items, item);
    }
  };

  const hasTabs = function(container) {
    return container.classList.contains('has-tabs');
  };
  
  const modeSwitcher = function (tabContainer, containerWidth) {
    const tabs = tabContainer.querySelectorAll('.tab');
    const container = tabs[0].closest('.ootb-tabcordion');
    let totalW = 0;
    for (const tab of tabs) {
      //totalW += tab.offsetWidth;
      totalW += tab.offsetWidth;
    }
    if (912 >= containerWidth) {
      console.log('total' + totalW);
      console.log('cw' + containerWidth);
    //if (totalW >= 992) {
      container.classList.remove('has-tabs');
    } else {
      container.classList.add('has-tabs');
    }
    keyboardSupport(tabContainer, hasTabs(container));
  };
  
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      modeSwitcher(entry.target, entry.contentRect.width);
      //modeSwitcher(entry.target, entry.contentRect.width);

    }
  });

  const tabContainers = document.querySelectorAll('.ootb-tabcordion');
  for (const tabContainer of tabContainers) {
    const tabList = tabContainer.querySelector('.ootb-tabcordion--tabs');
    resizeObserver.observe(tabList);
    toggleTabs(tabContainer);
    keyboardSupport(tabContainer, hasTabs(tabContainer));
  };

  const allTiles = document.querySelectorAll('.bob-card, .bob-card-wide');
  // console.log(allTiles);
  for (let i = 0; i < allTiles.length; i++) {
    const myElem = allTiles[i];
    myElem.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log(myElem);
      const myLink = myElem.querySelector('a');
      // console.log(myLink); 
      if (myLink.getAttribute('href')) {
        const myURL = myLink.href;
        const myTarget = myLink.target;
        // console.log(myURL);
        // console.log(myTarget);
        if (e.ctrlKey || e.metaKey || (myTarget === '_blank'))window.open(myURL, '_blank');
        else window.location.href = myURL;
      } else {
        myLink.click();
      }
    });
  }
}, false);
