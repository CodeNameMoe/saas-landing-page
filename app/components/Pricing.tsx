import React from "react";
import CardLight from "./CardLight";
import CardDark from "./CardDark";

function Pricing() {
	return (
		<div className="py-[48px] lg:py-[60px]">
			<h1 className="text-[#172026] text-center font-medium text-2xl lg:text-[42px]">
				Flexible plans for you
			</h1>
			<p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
				No hidden fees!
			</p>
			<div className="flex flex-col gap-y-6 lg:flex-row">
				<CardLight
					title={"Free Trial"}
					subtitle={"Perfect for testing the waters"}
					price={"$0"}
					features={[
						"Lorem ipsum dolor sit amet",
						"Sed do eiusmod tempor incididunt",
						"Consectetur adipiscing elit",
					]}
					buttonText={"Start Trial"}
					isCustomPrice={false}
				/>
				<CardDark
					title={"Business"}
					subtitle={"Perfect for small businesses"}
					price={"$500"}
					features={[
						"Lorem ipsum dolor sit amet",
						"Sed do eiusmod tempor incididunt",
						"Consectetur adipiscing elit",
						"Sed do eiusmod tempor incididunt",
						"Lorem ipsum dolor sit amet",
					]}
					buttonText={"Get Started"}
				/>
				<CardLight
					title={"Enterprise"}
					subtitle={"Perfect for big companies"}
					price={"Custom"}
					features={[
						"Lorem ipsum dolor sit amet",
						"Sed do eiusmod tempor incididunt",
						"Consectetur adipiscing elit",
					]}
					buttonText={"Get Started"}
					isCustomPrice={true}
				/>
			</div>
		</div>
	);
}

export default Pricing;
