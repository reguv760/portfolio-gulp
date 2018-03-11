window.onload = function()
{
  const sideNav = document.getElementsByClassName('sidebar__nav')[0];
  const sideNavFooter = document.getElementsByClassName('sidebar__footer')[0];
  const mobileNav = document.getElementsByClassName('mobileNav__links')[0];
  //sideNavFooter.style.opacity = "0";
  //sideNavFooter.style.bottom     = "1.25rem"
  sideNav.style.left          = "-15rem";

  TweenMax.to(sideNav, 0.6, {delay:0.25,left:0, ease:Bounce.easeOut});

  const portOverlay = document.getElementsByClassName('portfolio__overlay'); 
  

  for (var i = 0; i < portOverlay.length; i++ )
  {
    //console.log(i);
    portOverlay[i].style.opacity = 0;

    portOverlay[i].addEventListener("mouseenter", function( event ) 
    {     
      var textContainer = this.getElementsByClassName("portfolio__overlay-container")[0];

      TweenMax.to(event.target, 0.25, {opacity:1, ease:Power2.easeOut});
      TweenMax.to(textContainer, 0.3, {scaleX:1, delay:0.2, transformOrigin:"50% 50%", ease:Power2.easeOut});

    });

    portOverlay[i].addEventListener("mouseleave", function( event ) 
    {
      var textContainer = this.getElementsByClassName("portfolio__overlay-container")[0];
      TweenMax.to(event.target, 0.25, {opacity:0, ease:Power1.easeOut});
      TweenMax.to(textContainer, 0.2, {scaleX:0, ease:Power1.easeOut});
    });   
  }

  lazyload();

  function getFileExtension(filename) {
    return filename.split('.').pop();
  }

}
