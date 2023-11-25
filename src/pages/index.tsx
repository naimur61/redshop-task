import React from "react";
import Header from "../components/HomeComponent/Header";
import Banner from "../components/HomeComponent/Banner";
import CategoriesSection from "@/components/CategoriesComponent/CategoriesSection";

const index = () => {
	return (
		<div className=" mx-auto" style={{ maxWidth: "1060px" }}>
			<Header />
			<Banner />
			<CategoriesSection />
		</div>
	);
};

export default index;
