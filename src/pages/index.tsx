import React from "react";
import Header from "../components/HomeComponent/Header";
import Banner from "../components/HomeComponent/Banner";
import CategoriesSection from "@/components/HomeComponent/Categories/CategoriesSection";
import Footer from "@/components/HomeComponent/Footer";
import Head from "next/head";

const index = () => {
	return (
		<>
			<Head>
				<title>Flash</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className=" mx-auto" style={{ maxWidth: "1060px" }}>
				<Header />
				<Banner />
				<CategoriesSection />
				<Footer />
			</div>
		</>
	);
};

export default index;
