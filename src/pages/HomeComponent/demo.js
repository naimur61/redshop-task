import React from "react";
import { FiMenu } from "react-icons/fi";

const Demo = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
				{/* Icon  */}
				<div className="flex-1">
					<a className="btn btn-ghost text-xl">daisyUI</a>
				</div>
				<div className="flex-none">
					<div className="dropdown dropdown-end">
						{/* Mene  */}
						<label tabIndex={0} className=" md:hidden block ">
							<div className="flex-none  btn btn-circle btn-md ">
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
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Demo;
