window.onload = function()
{
  const sideNav = document.getElementsByClassName('sidebar__nav')[0];
  //const mobileNav = document.getElementsByClassName('nav_links')[1];
  sideNav.style.opacity = "0";
  sideNav.style.left= "-10rem";
  TweenMax.to(sideNav, 0.5, {opacity:1, left:0, ease:Bounce.easeOut});
  //mobileNav.style.opacity = "0";
  //TweenMax.to(mobileNav, 1, {opacity:1, ease:Circ.easeOut,});

  //find all images
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++)
  {
    if (getFileExtension(images[i].src) != "svg")
    {
      console.log(getFileExtension(images[i].src));
      images[i].style.opacity = "0";
      TweenMax.to(images[i], 1, {delay:0.6, opacity:1, ease:SlowMo.easeOut});
    }
  }

  function getFileExtension(filename) {
    return filename.split('.').pop();
  }

}
