import Link from "next/link";
import React from "react";
import CategoryProducts from "./CategoryProducts";

const CategoriesSection = () => {
	// const callCategory=(payload)=>{

	// }

	return (
		<div style={{ borderTop: "1px solid #D1D5DB", marginTop: "1rem" }}>
			<div className="grid grid-cols-5 gap-4">
				<div className="col-span-1 lg:block hidden font-semibold mt-5">
					{/* Fixed div for Categories */}
					<ul className=" sticky top-10">
						<li>Categories</li>
						{CategoryInfo.map((info, i) => (
							<li key={i} className="mt-3">
								<Link href={`/categories/${info}`}>{info}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="col-span-4 overflow-y-auto pl-5 " style={{ borderLeft: "2px solid #D1D5DB" }}>
					{/* Scrollable div */}
					{CategoryInfo.map((e, i) => (
						<CategoryProducts key={i} payload={e} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CategoriesSection;

const CategoryInfo: string[] = ["IPHONE CASE", "AIRPODS PRO CASE", "LIGHTNING CABLE", "POWER BANK"];
