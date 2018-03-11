window.onload = function()
{
  const sideNav = document.getElementsByClassName('sidebar__nav')[0];
  const sideNavFooter = document.getElementsByClassName('sidebar__footer')[0];
  const mobileNav = document.getElementsByClassName('mobileNav__links')[0];
  //sideNavFooter.style.opacity = "0";
  //sideNavFooter.style.bottom     = "1.25rem"
  sideNav.style.left          = "-15rem";

  TweenMax.to(sideNav, 0.6, {delay:0.25,left:0, ease:Bounce.easeOut});
  // TweenMax.to(sideNav, 0.6, {delay:0.25,left:0,  ease:Bounce.easeOut, onComplete: function()
  // {
  //   TweenMax.to(sideNavFooter, 0.5, {opacity:1, bottom:"1rem", ease:Circ.easeOut});
  // }});

  // mobileNav.style.opacity = "0";
  // mobileNav.style.top="-20rem";
  // TweenMax.to(mobileNav, 0.5, {top:0, opacity:1, ease:Bounce.easeOut});

  // var images = document.getElementsByTagName('img');
  //console.log(images.length);
  // for (var i = 0; i < images.length; i++)
  // {
  //   console.log(images[i].src);
  //   if (getFileExtension(images[i].src) === "jpg")
  //   {
  //     console.log(images[i]).src;
  //   }
  // }

  const portOverlay = document.getElementsByClassName('portfolio__overlay'); 
  const portOverlayCount = portOverlay.length;
  
  //const portImage = document.getElementsByClassName('portfolio__website-container--hero');

  for (var i = 0; i < portOverlay.length; i++ )
  {
    //console.log(i);
    portOverlay[i].style.opacity = 0;

    portOverlay[i].addEventListener("mouseenter", function( event ) 
    {     
      var textContainer = this.getElementsByClassName("portfolio__overlay-container")[0];

      TweenMax.to(event.target, 0.25, {opacity:1, onStart: scaleTextContainer, ease:Power2.easeOut});
      TweenMax.to(textContainer, 0.3, {scaleX:1, delay:0.2, transformOrigin:"50% 50%", ease:Power2.easeOut});

      function scaleTextContainer()
      {
        textContainer.style.transform = "scaleX(0)";
      }
    });

    portOverlay[i].addEventListener("mouseleave", function( event ) 
    {
      var textContainer = this.getElementsByClassName("portfolio__overlay-container")[0];
      TweenMax.to(event.target, 0.25, {opacity:0, ease:Power1.easeOut});
      TweenMax.to(textContainer, 0.2, {scaleX:0, ease:Power1.easeOut});
    });   
  }

  console.log(portOverlayCount);

  lazyload();

  function getFileExtension(filename) {
    return filename.split('.').pop();
  }

}
