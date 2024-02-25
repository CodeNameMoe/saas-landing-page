import React from "react";
import Image from "next/image";
import Check from "../../public/assets/check.svg";

interface CardProps {
	title: string;
	subtitle: string;
	price: string | number;
	isCustomPrice: boolean;
	features: string[];
	buttonText: string;
}

const CardLight: React.FC<CardProps> = ({
	title,
	subtitle,
	price,
	isCustomPrice,
	features,
	buttonText,
}) => {
	const displayPrice = isCustomPrice ? "custom" : `${price}`;

	return (
		<div className="flex flex-col w-full rounded-[8px] bg-[#F5F4FF] p-6">
			<div>
				<h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
					{title}
				</h3>
				<p className="pt-[12px] text-[#36485C] lg:text-[18px]">{subtitle}</p>
				<h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
					{displayPrice}
					{isCustomPrice ? "" : <span className="text-[#5F7896]">/mo</span>}
				</h2>
				<ul className="flex flex-col gap-y-2 pt-4 text-[#5f7896]">
					{features.map((feature, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={index} className="flex items-center gap-x-2">
							<span className="flex gap-x-4">
								<Image src={Check} alt="check" />
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

export default CardLight;
