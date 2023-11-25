import React from "react";
import { GetStaticProps } from "next";
import { IProduct } from "@/Interface/IProduct";

interface CategoriesHomeProps {
	categoryData: IProduct[];
}

const CategoriesHome: React.FC<{ filteredData: IProduct[] }> = ({ filteredData }) => {
	console.log("Filtered data in component:", filteredData);
	return <div>Categories Home Page.</div>;
};

export default CategoriesHome;

export const getStaticProps: GetStaticProps = async () => {
	try {
		const res = await fetch("http://localhost:5000/product");
		const categoryData: IProduct[] = await res.json();
		console.log("Fetched categoryData:", categoryData);

		const filteredData = categoryData.filter((obj) => obj.category.includes("POWER BANK"));
		console.log("Filtered data:", filteredData);

		return {
			props: {
				filteredData,
			},
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return {
			props: {
				filteredData: [],
			},
		};
	}
};
