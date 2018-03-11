window.onresize = function() 
{
	//console.log("mybrowser Width is: " + getWidth());

	//bounce animation for mobile on resize:::
  	const mobileNav = document.getElementsByClassName('mobileNav__links')[0];
	if (getWidth() < 799)
	{
		TweenMax.killTweensOf(mobileNav);

		mobileNav.style.top = "-25rem";
		TweenMax.to(mobileNav, 0.5, {top:0, ease:Back.easeOut.config(1.5)});

	}

	//delay animation for sideBar footer:::	
  	const sideNavFooter = document.getElementsByClassName('sidebar__footer')[0];
  	if (getWidth() >= 800)
	{
		TweenMax.killTweensOf(sideNavFooter);

		sideNavFooter.style.bottom 	= "-1.25rem";
		sideNavFooter.style.opacity = "0";
		TweenMax.to(sideNavFooter, 0.5, {
											delay:0.15, 
											opacity:1, 
											bottom:"1rem", 
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