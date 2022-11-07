document.addEventListener('DOMContentLoaded', () => {
  // REPLACE .container - full width background FIX
  $('#eb-my-items-section > .container').removeClass('container').addClass('container-fluid');

  function removejscssfile(filename, filetype) {
    const targetelement = (filetype == 'js') ? 'script' : (filetype == 'css') ? 'link' : 'none' // determine element type to create nodelist from
    const targetattr = (filetype == 'js') ? 'src' : (filetype == 'css') ? 'href' : 'none' // determine corresponding attribute to test for
    const allsuspects = document.getElementsByTagName(targetelement);
    for (let i = allsuspects.length; i >= 0; i--) { // search backwards in nodelist for matching elements to remove
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) !== -1) {
        allsuspects[i].parentNode.removeChild(allsuspects[i]); // remove element by calling parentNode.removeChild()
      }
    }
  }
  // removejscssfile('somescript.js', 'js') //remove all occurences of 'somescript.js' on page
  removejscssfile('mulesoft-eb-agg.css', 'css'); // remove all occurences 'somestyle.css' on page
  //removejscssfile('https://training.mulesoft.com/site/siteMgr.do?dispatch=css&v=18', 'css'); // remove all occurences 'somestyle.css' on page
  // removejscssfile('bootstrap-override.css', 'css'); //remove all occurences 'somestyle.css' on page
  // removejscssfile('bootstrap.4.0.0.min.css', 'css'); //remove all occurences 'somestyle.css' on page

  const allTiles = document.querySelectorAll('.bob-card-wide');
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

  // top banner__texts

  let today = new Date();
  let start = new Date('2022-9-22');
  let end = new Date('2022-10-31');

  if (today > start && today < end) {
    const tempBanner = document.createElement('div');
    const container = document.createElement('div');
    const row = document.createElement('div');
    const col = document.createElement('div');
    const text = document.createElement('p');
    const link = document.createElement('a');
    const linkSpan = document.createElement('span');
    text.innerHTML = 'Questions about Asia-Pacific’s Certober campaign? &nbsp;';
    text.className = 'bob-h4';
    link.href = 'https://training.mulesoft.com/contact';
    link.target = '_self';
    link.className = 'bob-link';
    linkSpan.innerHTML = 'Contact training';
    col.className = 'col-12';
    row.className = 'row';
    container.className = 'container';
    tempBanner.className = 'top-flag-banner h-bkg--zircon';

    link.appendChild(linkSpan);
    col.appendChild(text);
    col.appendChild(link);
    row.appendChild(col);
    container.appendChild(row);
    tempBanner.appendChild(container);

    const recipient = document.getElementsByClassName('eb-top-header')[0];
    recipient.appendChild(tempBanner);
    // }
  }
}, false);
