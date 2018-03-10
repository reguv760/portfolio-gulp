window.onload = function()
{
  const sideNav = document.getElementsByClassName('sidebar__nav')[0];
  const mobileNav = document.getElementsByClassName('mobileNav__links')[0];
  sideNav.style.left= "-15rem";
  TweenMax.to(sideNav, 0.6, {delay:0.25,left:0, ease:Bounce.easeOut});

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

  lazyload();

  function getFileExtension(filename) {
    return filename.split('.').pop();
  }

}
