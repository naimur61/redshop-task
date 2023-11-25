import logo from "@/asset/FLASH.png";
import Image from "next/image";
import sass from "@/asset/sass.png";
import Link from "next/link";

const Footer = () => {
	return (
		<div className=" mt-10 pt-14" style={{ borderTop: "1px solid #D1D5DB" }}>
			<Image src={logo} alt="logo" style={{ width: "100px", height: "40px" }} className="mx-auto" />

			<div className=" flex justify-center gap-4 mt-10">
				<p>Terms and condition</p>
				<p>Refund Policy</p>
				<p>Privacy Policy</p>
			</div>

			<Link className="flex justify-center items-center gap-3 pb-5 mt-20" href="#">
				<Image src={sass} alt="logo" width={20} height={20} />

				<p className="capitalize text-gray-400 text-xs">we run on Redshop</p>
			</Link>
		</div>
	);
};

export default Footer;
//
