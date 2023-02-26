import Image from "next/image";
import React from "react";
import PlaneImg from "@/public/assets/main/plane.png";
import { RightArrow } from "../svg/RightArrow";
import DoubleTickIcon from "@/public/assets/main/double-tick.svg"

const BuyNow = () => {
    return (
        <div className="bg-minsk py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 relative">
                    <div className="col-span-3 py-12 max-w-xs md:max-w-lg lg:max-w-full">
                        <p className="font-mulish text-x20 md:text-x36 lg:text-x48 text-white font-bold normal mb-10 md:text-start text-center">Facilisis fermentum aliquet semper!</p>
                        <div className="flex mb-6">
                            <Image src={DoubleTickIcon} alt="double-tick" />
                            <span className="ml-4 font-mulish text-x18 md:text-x20 lg:text-x24 font-medium normal text-white">Elementum sed sed semper placerat duis vitae sodales. </span>
                        </div>
                        <div className="flex mb-6">
                            <Image src={DoubleTickIcon} alt="double-tick" />
                            <span className="ml-4 font-mulish text-x18 md:text-x20 lg:text-x24 font-medium normal text-white">Maecenas ante sit interdum justo ut pulvinar. </span>
                        </div>
                        <div className="flex mb-6">
                            <Image src={DoubleTickIcon} alt="double-tick" />
                            <span className="ml-4 font-mulish text-x18 md:text-x20 lg:text-x24 font-medium normal text-white">Mattis in cursus varius gravida tincidunt gravida adipiscing sit. </span>
                        </div>
                        <div className="flex mb-6">
                            <Image src={DoubleTickIcon} alt="double-tick" />
                            <span className="ml-4 font-mulish text-x18 md:text-x20 lg:text-x24 font-medium normal text-white">Volutpat et, vulputate enim dignissim. </span>
                        </div>
                        <button className="bg-pink py-2 px-5 flex rounded"><span className="mt-1 mr-5 font-mulish font-black normal text-white uppercase tracking-wider text-sm md:text-x16">Buy Premium</span> <RightArrow /></button>
                    </div>
                    <Image src={PlaneImg} className="plane-img" alt="PlaneImg" />
                </div>
            </div>
        </div>
    )
}


export default BuyNow;