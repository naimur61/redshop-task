import Image from "next/image";
import eImg from "../../public/404_page_cover.jpg";

const ErrorPage = () => {
	return (
		<div className=" mt-5">
			<Image src={eImg} alt="error png" />
		</div>
	);
};

export default ErrorPage;
