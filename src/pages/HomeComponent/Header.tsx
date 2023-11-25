import icon from "@/asset/FLASH.png";
import Image from "next/image";
import Link from "next/link";
import { BiCategoryAlt, BiSearchAlt } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
	const Categories = (
		<Link href="/categories">
			<div className=" flex items-center gap-1 hover:cursor-pointer font-semibold">
				<BiCategoryAlt />
				<p>Categories</p>
			</div>
		</Link>
	);

	const Bag = (
		<div className=" flex items-center gap-1  hover:cursor-pointer font-semibold">
			<FiShoppingBag />
			<p>Bag</p>
		</div>
	);

	const SearchBox = (
		<div className="w-64 relative mx-auto">
			<input
				type="text"
				placeholder="Search Product Here."
				className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
			/>
			<div className="absolute top-3 left-3 ">
				<BiSearchAlt />
			</div>
		</div>
	);

	return (
		<>
			<div className=" border border-b-2 ">
				<div className="navbar bg-base-100 gap-4 justify-between py-3 container mx-auto">
					{/* Icon  */}
					<div>
						<Link href="/">
							<Image src={icon} alt="logo" className=" h-8 w-20" />
						</Link>
					</div>

					{/* Search Box  */}
					<div className="hidden md:block"> {SearchBox} </div>

					<div className="flex justify-between gap-4">
						{/* Categories */}
						<div className="hidden md:block">{Categories}</div>

						{/* Bag  */}
						<div className="hidden md:block">{Bag}</div>
					</div>
					<div className="flex-none md:hidden block ">
						<div className="dropdown dropdown-end">
							{/* Menu  */}
							<label tabIndex={0} className="hover:cursor-pointer">
								<div className="flex-none ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										className="inline-block w-5 h-5 stroke-current"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										></path>
									</svg>
								</div>
							</label>

							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>{Categories}</li>
								<li>{Bag}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="items-center md:hidden block my-4">{SearchBox}</div>
		</>
	);
};

export default Header;
