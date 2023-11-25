import { StaticImageData } from "next/image";

export interface IBanner {
	img: StaticImageData;
	alt: string;
	link: string;
}
