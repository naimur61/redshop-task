import Image from "next/image";
import eImg from "@/asset/404_page_cover.jpg";

const ErrorPage = () => {
	return (
		<div>
			<Image src={eImg} alt="error png" className=" h-screen w-screen" />
		</div>
	);
};

export default ErrorPage;
