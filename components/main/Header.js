import Image from "next/image";
import React from "react";
import fi_lock from "@/public/assets/main/fi_lock.svg";
import UploadFIle from "../dropzone/UploadFIle";


const MainHeader = () => {
    return (
        <div className="bg-gradient-to-r from-lightPink to-anakiwa">
            <div className="container mx-auto">
                <div className="py-10">
                    <p className="font-mulish normal font-bold text-minsk text-xl md:text-4xl lg:text-5xl text-center mb-5">Fast & efficient </p>
                    <p className="font-mulish normal font-bold text-lavender text-2xl md:text-5xl lg:text-6xl text-center uppercase mb-5">image compression </p>
                    <p className="text-martinique font-normal normal text-xs md:text-sm lg:text-base text-center font-mukta">Optimize <span className="font-semibold">JPEG</span>, <span className="font-semibold">PNG</span>, <span className="font-semibold">SVG</span>, <span className="font-semibold">GIF</span> and <span className="font-semibold">WEBP</span></p>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className="font-mulish normal font-medium text-lg md:text-xl lg:text-2xl text-christalle text-center">Upload files</p>
                        <p className="font-mulish font-normal text-xs text-kimberly flex justify-center"><Image src={fi_lock} alt="fi_lock" /><span className="ml-2 mt-1">Your files are secure & private</span></p>
                    </div>
                    <div className="my-5 px-10 flex justify-between">
                        <button className="bg-lightLavender w-full py-2 px-4 text-christalle font-mulish font-bold normal lg:text-base md:text-sm text-sx uppercase">Lossless</button>
                        <button className="w-full py-2 px-4 py-2 px-4 text-pink font-mulish font-bold normal lg:text-base md:text-sm text-sx uppercase">Lossy</button>
                        <button className="w-full py-2 px-4 py-2 px-4 text-pink font-mulish font-bold normal lg:text-base md:text-sm text-sx uppercase">Custom</button>
                    </div>
                    <UploadFIle />
                </div>
            </div>
        </div>
    )
}


export default MainHeader;