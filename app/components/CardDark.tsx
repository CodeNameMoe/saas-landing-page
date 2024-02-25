import React from "react";
import Image from "next/image";
import Check from "../../public/assets/check.svg";

interface CardProps {
	title: string;
	subtitle: string;
	price: string;
	features: string[];
	buttonText: string;
}

const CardDark: React.FC<CardProps> = ({
	title,
	subtitle,
	price,
	features,
	buttonText,
}) => {
	return (
		<div className="flex flex-col w-full rounded-[8px] bg-[#4328EB] p-6">
			<div>
				<h3 className=" text-white text-[18px] lg:text-xl ">{title}</h3>
				<p className="pt-[12px] text-white lg:text-[18px] font-thin">
					{subtitle}
				</p>
				<h2 className="pt-4 text-2xl lg:text-[32px] text-white ">
					{price}
					<span className="text-white">/mo</span>
				</h2>
				<ul className="flex flex-col gap-y-2 pt-4 text-white font-thin">
					{features.map((feature, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={index} className="flex items-center gap-x-2">
							<span className="flex gap-x-4 text-[#f2f2f2]">
								<Image src={Check} alt="check" className=" filter invert " />
								{feature}
							</span>
						</li>
					))}
				</ul>
			</div>
			<button
				type="button"
				className="mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]"
			>
				{buttonText}
			</button>
		</div>
	);
};

export default CardDark;
