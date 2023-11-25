interface CategoryProductsProps {
	payload: string; // Define the type of payload as a string
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ payload }) => {
	return (
		<div>
			<h1> {payload}</h1>
			<p className="my-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore tempora repudiandae esse iste?
				Enim perferendis ducimus sequi recusandae, modi facere harum. Officiis beatae perspiciatis culpa minus
				aliquam inventore atque non ex, architecto sint. Repudiandae, sint vero. Maiores quibusdam voluptatem
				fugiat sed numquam quidem. Repudiandae dolore eveniet sed aliquam nulla?
			</p>
			<p className="my-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore tempora repudiandae esse iste?
				Enim perferendis ducimus sequi recusandae, modi facere harum. Officiis beatae perspiciatis culpa minus
				aliquam inventore atque non ex, architecto sint. Repudiandae, sint vero. Maiores quibusdam voluptatem
				fugiat sed numquam quidem. Repudiandae dolore eveniet sed aliquam nulla?
			</p>
		</div>
	);
};

export default CategoryProducts;
