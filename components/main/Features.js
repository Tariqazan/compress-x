import Image from "next/image";
import React from "react";
import Feature1 from "@/public/assets/main/features-1.png";
import Feature2 from "@/public/assets/main/features-2.png";
import Feature3 from "@/public/assets/main/features-3.png";

const Features = () => {
    return (
        <div className="bg-gradient-to-bl from-anakiwa to-lightPink">
            <div className="container mx-auto">
                <p className="text-center uppercase font-mulish font-bold text-martinique normal
                lg:text-x48 md:text-x36 text-x20 py-6 md:py-10 mb-10">Features</p>
                <div className="grid grid-cols-1 md:grid-cols-2 md:mb-20 mb-5 gap-2">
                    <Image src={Feature1} alt="Feature1" className="block md:hidden" />
                    <div className="mr-3 md:text-start text-center">
                        <p className="text-martinique font-mulish font-bold normal lg:text-x36 md:text-x24 text-x18 mb-5">Smaller images, Faster websites</p>
                        <span className="font-mulish font-light normal lg:text-x20 md:text-x18 text-x16 text-butterflyBush">Websites images are usually too big and unoptimized for web purposes. It is easy to save a few megabytes by compressing your assets without noticing any loss in quality.</span>
                    </div>
                    <Image src={Feature1} alt="Feature1" className="hidden md:block" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:mb-20 mb-5 gap-2">
                    <Image src={Feature2} alt="Feature2" className="hidden md:block" />
                    <div className="mr-3 md:text-start text-center">
                        <p className="text-martinique font-mulish font-bold normal lg:text-x36 md:text-x24 text-x18 mb-5">SEO and Lighthouse optimized</p>
                        <span className="font-mulish font-light normal lg:text-x20 md:text-x18 text-x16 text-butterflyBush">Compress your images and improve your SEO ranking. <br /> Get a higher Lighthouse score and increase your visibility in search engines.</span>
                    </div>
                    <Image src={Feature2} alt="Feature2" className="block md:hidden" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Image src={Feature3} alt="Feature3" className="block md:hidden" />
                    <div className="mr-3 md:text-start text-center">
                        <p className="text-martinique font-mulish font-bold normal lg:text-x36 md:text-x24 text-x18 mb-5">High quality image compression</p>
                        <span className="font-mulish font-light normal lg:text-x20 md:text-x18 text-x16 text-butterflyBush">Achieve huge compressions while keeping the quality of the picture intact. <br /> CompressorX can help you reduce drastically the size of your images and photos whilst maintaining a high quality with almost no difference visible to the eye.</span>
                    </div>
                    <Image src={Feature3} alt="Feature3" className="hidden md:block" />
                </div>
            </div>
        </div>
    )
}

export default Features;