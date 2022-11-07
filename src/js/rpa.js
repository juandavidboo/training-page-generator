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
  };
  //removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page
  removejscssfile("mulesoft-eb-agg.css", "css"); //remove all occurences "somestyle.css" on page
  //removejscssfile("bootstrap-override.css", "css"); //remove all occurences "somestyle.css" on page
  //removejscssfile("bootstrap.4.0.0.min.css", "css"); //remove all occurences "somestyle.css" on page

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
