import { useRouter } from "next/router";

const Product = () => {
	const router = useRouter();
	const { productId } = router.query;

	return <div>Product Id: {productId}</div>;
};

export default Product;
