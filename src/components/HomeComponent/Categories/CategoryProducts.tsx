import { IProduct } from "@/Interface/IProduct";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

interface CategoryProductsProps {
	payload: string;
	filteredData: IProduct[];
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ payload, filteredData }) => {
	console.log(filteredData);
	return (
		<>
			<div className="flex justify-between items-center" id={payload}>
				<h1 className="text-lg py-2">{payload}</h1>
				<Link href={`/categories/${payload}`} className="flex items-center gap-2">
					<p>See All</p>
					<FaAngleRight />
				</Link>
			</div>

			{/* Use result data */}
			{filteredData.map((product, i) => (
				<div key={i}>
					{/* Display product information here */}
					<p>{product.name}</p>
					<p>{product.name}</p>
					{/* Add other product details */}
				</div>
			))}
		</>
	);
};

export default CategoryProducts;

export const getStaticProps: GetStaticProps = async () => {
	try {
		const res = await fetch("http://localhost:5000/product");
		const categoryData: IProduct[] = await res.json();
		console.log("object");
		return {
			props: {
				categoryData,
			},
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return {
			props: {
				categoryData: [],
			},
		};
	}
};
