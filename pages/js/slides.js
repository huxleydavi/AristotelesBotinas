$(".carrosel").slick({
	dots: true,
	centerMode: false,
	slidesToShow: 3,
	arrows: false,
	responsive:[

		{
			breakpoint:768,
			settings:{
				centerMode:false,
				slidesToShow:2
			}
		},

		{
			breakpoint:580,
			settings:{
				arrows:false,
				centerMode:false,
				slidesToShow:1
			}
		},
	]
});