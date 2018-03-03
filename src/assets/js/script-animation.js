window.onload = function()
{
  const sideNav = document.getElementsByClassName('sidebar__nav')[0];
  //const mobileNav = document.getElementsByClassName('nav_links')[1];
  sideNav.style.opacity = "0";
  sideNav.style.left= "-10rem";
  TweenMax.to(sideNav, 0.5, {opacity:1, left:0, ease:Bounce.easeOut});
  //mobileNav.style.opacity = "0";
  //TweenMax.to(mobileNav, 1, {opacity:1, ease:Circ.easeOut,});

  // var images = document.getElementsByTagName('img');
  // console.log(images.length);
  // for (var i = 0; i < images.length; i++)
  // {
  //   if (getFileExtension(images[i].src) === "jpg")
  //   {
  //     console.log(images[i]);
  //   }
  // }

  lazyload();

  function getFileExtension(filename) {
    return filename.split('.').pop();
  }

}
