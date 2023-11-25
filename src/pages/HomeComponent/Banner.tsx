import Image from "next/image";
import banner1 from "@/asset/banner/Banner_01.png";
import banner2 from "@/asset/banner/Banner_02.png";
import banner3 from "@/asset/banner/Banner_03.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings} className="carousel rounded-box">
			{bannerInfo.map((info, i) => (
				<div key={i} className="carousel-item">
					<Image src={info?.img} alt={info?.alt} style={{ height: "255px" }} />
				</div>
			))}
			{/* Add more carousel items as My needed */}
		</Slider>
	);
};

export default Banner;

const bannerInfo = [
	{
		img: banner1,
		alt: "banner",
	},
	{
		img: banner2,
		alt: "banner",
	},
	{
		img: banner3,
		alt: "banner",
	},
];
