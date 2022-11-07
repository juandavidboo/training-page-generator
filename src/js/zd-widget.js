//document.addEventListener('DOMContentLoaded', () => {
// HEAD content loading
const imported = document.createElement('script');
imported.type = 'text/javascript';
imported.async = '';
imported.id = 'ze-snippet';
imported.characterSet = 'utf8';
imported.src = 'https://static.zdassets.com/ekr/snippet.js?key=web_widget/muletraining.zendesk.com';
document.head.appendChild(imported);

// WIDGET customization
window.zESettings = {
  webWidget: {
    color: {
      theme: '#00A0DF',
      launcher: '#00044C',
      launcherText: '#ffffff',
      button: '#00044C',
      resultLists: '#00A0DF',
      header: '#00044C',
      articleLinks: '#00A0DF',
    },
  },
};

const style = document.createElement('style');
document.head.appendChild(style);
style.sheet.insertRule(`
  @media screen and (min-width: 600px) {
    #launcher {
      bottom: 65px !important;
    }
  }
`);
style.sheet.insertRule(`
  #launcher {
    bottom: 57px !important;
  }
`);

const today = new Date();
const start = new Date('2022-9-27');
const end = new Date('2022-11-28');

if (today > start && today < end) {
  const currentURL = window.location.href;
  const certURL = 'https://training.mulesoft.com/certification';

  if (certURL === currentURL) {
    document.head.innerHTML += '<link rel="stylesheet" href="https://www.mulesoft.com/training/assets/css/zd-widget.css" type="text/css"/>';
    const tempBanner = document.createElement('div');
    const container = document.createElement('div');
    const row = document.createElement('div');
    const col = document.createElement('div');
    const text = document.createElement('p');
    const link = document.createElement('a');
    const linkSpan = document.createElement('span');
    text.innerHTML = 'Looking to extend your existing MuleSoft Certification?&nbsp;';
    text.className = 'bob-h4';
    link.href = 'https://training.mulesoft.com/campaign/certification-maintenance-pilot';
    link.target = '_self';
    link.className = 'bob-link';
    linkSpan.innerHTML = 'Register for continued learning sessions';
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
  }
}



//}, false);
