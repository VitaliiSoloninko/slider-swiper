const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.arrow_right',
		prevEl: '.arrow_left',
	},
	// Parallax
	parallax: true,
	speed: 900,
})
