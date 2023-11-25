export type IProduct = {
	category: string;
	image: { img: string }[];
	name: string;
	price: number;
	discountPercentage: number;
	compatible: string;
	incompatible?: string;
	types?: string;
	materials: string;
	dimensions?: (Record<string, unknown> | number | string | boolean)[];
	taxInfo: string;
};
