import React from "react";
import Header from "../components/HomeComponent/Header";
import Banner from "../components/HomeComponent/Banner";
import CategoriesSection from "@/components/HomeComponent/Categories/CategoriesSection";
import Footer from "@/components/HomeComponent/Footer";

const index = () => {
	return (
		<div className=" mx-auto" style={{ maxWidth: "1060px" }}>
			<Header />
			<Banner />
			<CategoriesSection />
			<Footer />
		</div>
	);
};

export default index;
