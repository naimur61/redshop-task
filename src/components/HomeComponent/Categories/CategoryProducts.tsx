import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

interface CategoryProductsProps {
	payload: string;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ payload }) => {
	return (
		<>
			<div className="flex justify-between items-center" id={payload}>
				<h1 className="text-lg py-2">{payload}</h1>
				<Link href={`/categories/${payload}`} className="flex items-center gap-2">
					<p>See All</p>
					<FaAngleRight />
				</Link>
			</div>
			<p className="my-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore tempora repudiandae esse iste?
				Enim perferendis ducimus sequi recusandae, modi facere harum. Officiis beatae perspiciatis culpa minus
				aliquam inventore atque non ex, architecto sint. Repudiandae, sint vero. Maiores quibusdam voluptatem
				fugiat sed numquam quidem. Repudiandae dolore eveniet sed aliquam nulla?
			</p>
		</>
	);
};

export default CategoryProducts;
