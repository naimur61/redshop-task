import Image from "next/image";
import banner1 from "@/asset/banner/Banner_01.png";
import banner2 from "@/asset/banner/Banner_02.png";
import banner3 from "@/asset/banner/Banner_03.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IBanner } from "@/Interface/Banner";

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
		<div className="container mx-auto">
			<Slider {...settings} className="carousel rounded-box mt-10">
				{bannerInfo.map((info, i) => (
					<div key={i} className="carousel-item">
						<Image src={info?.img} alt={info?.alt} style={{ height: "170px" }} />
					</div>
				))}
				{/* Add more carousel items as My needed */}
			</Slider>
		</div>
	);
};

export default Banner;

const bannerInfo: IBanner[] = [
	{
		img: banner1,
		alt: "banner",
		link: "",
	},
	{
		img: banner2,
		alt: "banner",
		link: "",
	},
	{
		img: banner3,
		alt: "banner",
		link: "",
	},
];
