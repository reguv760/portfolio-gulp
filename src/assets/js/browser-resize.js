window.onresize = function() 
{
	//console.log("mybrowser Width is: " + getWidth());

	//bounce animation for mobile on resize:::
  	const mobileNav = document.getElementsByClassName('mobileNav__links')[0];


	//delay animation for sideBar footer:::	
  	const sideNavFooter = document.getElementsByClassName('sidebar__footer')[0];

  	//killAllAnimations first:::
  	TweenMax.killTweensOf(mobileNav);  
	TweenMax.killTweensOf(sideNavFooter);

	//do not display while slow resize:::
	mobileNav.style.display = "none";
	sideNavFooter.style.display = "none";

	if (getWidth() <= 799)
	{
		mobileNav.style.display = "flex";
		mobileNav.style.top = "-25rem";	
		TweenMax.to(mobileNav, 0.5, {top:0, ease:Back.easeOut.config(1.5)});

	} else 
  	if (getWidth() > 799)
	{
		
		sideNavFooter.style.display = "flex";
		sideNavFooter.style.bottom 	= "-1rem";
		sideNavFooter.style.opacity = "0";
		TweenMax.to(sideNavFooter, 0.5, {
											delay:0.1,
											opacity: 1, 
											bottom: "1rem", 
											ease:Back.easeOut.config(5.0)
		});
	}

	function getWidth() {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.documentElement.clientWidth
	  );
	}

	// function getHeight() {
	//   return Math.max(
	//     document.body.scrollHeight,
	//     document.documentElement.scrollHeight,
	//     document.body.offsetHeight,
	//     document.documentElement.offsetHeight,
	//     document.documentElement.clientHeight
	//   );
	// }
};

//prevent multiple window.onresize trigger by
//setInterval by wait variable)
// function debounce(func, wait, immediate) {
//     var timeout;
//     return function() {
//       var context = this, args = arguments;
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       if (immediate && !timeout) func.apply(context, args);
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//     };
//   }