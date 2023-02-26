import Image from "next/image";
import React from "react";
import fi_lock from "@/public/assets/main/fi_lock.svg";
import UploadFIle from "../dropzone/UploadFIle";
import CustomizeFile from "./CustomizeFile";


const MainHeader = () => {
    const [tab, setTab] = React.useState("LOSSLESS")
    return (
        <div className="bg-gradient-to-r from-lightPink to-anakiwa">
            <div className="container mx-auto">
                <div className="py-10">
                    <p className="font-mulish normal font-bold text-minsk
                     text-x20 md:text-x36 lg:text-x50 text-center mb-5">Fast & efficient </p>
                    <p className="font-mulish normal font-black text-lavender text-x28
                     md:text-x50 lg:text-x60 text-center uppercase mb-5">image compression </p>
                    <p className="text-martinique font-normal normal text-x16 md:text-x20 lg:text-x24
                     text-center font-mukta">Optimize
                        <span className="font-semibold"> JPEG</span>,
                        <span className="font-semibold">PNG</span>,
                        <span className="font-semibold">SVG</span>,
                        <span className="font-semibold">GIF</span> and
                        <span className="font-semibold">WEBP</span></p>
                </div>
                <div className="card w-full h-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className="font-mulish normal font-medium text-x18 md:text-x20 lg:text-x24
                         text-christalle text-center">Upload files</p>
                        <p className="font-mulish font-normal text-x13 md:text-x14 lg:text-x15 text-kimberly flex justify-center">
                            <Image src={fi_lock} alt="fi_lock" />
                            <span className="ml-2 mt-1">Your files are secure & private</span>
                        </p>
                    </div>
                    <div className="my-5 px-5 md:px-10 flex justify-between">
                        <button className={tab === "LOSSLESS" ?
                            "bg-lightLavender w-full py-2 px-2 text-christalle font-mulish font-bold normal lg:text-x16 md:text-x14 text-x12 uppercase" :
                            "bg-extraLightLavender w-full py-2 px-2 py-2 text-lavender font-mulish font-bold normal lg:text-x16 md:text-x14 text-x12 uppercase"
                        } onClick={() => {
                            setTab("LOSSLESS")
                        }}>Lossless</button>
                        <button className={tab === "LOSSY" ?
                            "bg-lightLavender w-full py-2 mx-4 px-2 text-christalle font-mulish font-bold normal lg:text-x16 md:text-x14 text-x12 uppercase" :
                            "bg-extraLightLavender w-full mx-4 py-2 px-2 py-2 text-lavender font-mulish font-bold normal lg:text-x16 md:text-x14 text-x12 uppercase"
                        } onClick={() => {
                            setTab("LOSSY")
                        }}>Lossy</button>
                        <button className={tab === "CUSTOM" ?
                            "bg-lightLavender w-full py-2 px-2 text-christalle font-mulish font-bold normal lg:text-x16 md:text-x14 text-x12 uppercase" :
                            "bg-extraLightLavender w-full py-2 px-2 py-2 text-lavender font-mulish font-bold normal lg:text-x16 md:text-x14 text-x12 uppercase"
                        } onClick={() => {
                            setTab("CUSTOM")
                        }}>Custom</button>
                    </div>
                    {tab === "LOSSLESS" ?
                        <UploadFIle /> : <></>}
                    {tab === "CUSTOM" ?
                        <CustomizeFile /> : <></>}
                </div>
            </div>
        </div>
    )
}


export default MainHeader;