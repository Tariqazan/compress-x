import React from "react";
import Image from "next/image";
import UploadIcon from "@/public/assets/main/upload.svg";
import GoogleDrive from "@/public/assets/main/google_drive.png";
import OneDrive from "@/public/assets/main/one_drive.png";
import Dropbox from "@/public/assets/main/dropbox.png";
import Url from "@/public/assets/main/fi_link.png";
import Link from "next/link";
import { Exclude } from "../svg/Exclude";
import droppedImg1 from "@/public/assets/images/dropped_img1.png";
import droppedImg2 from "@/public/assets/images/dropped_img2.png";
import droppedImg3 from "@/public/assets/images/dropped_img3.png";
import droppedImg4 from "@/public/assets/images/dropped_img4.png";
import time_left from "@/public/assets/images/time-left.png";

const UploadFile = () => {
    const [error, setError] = React.useState("error")
    const [loading, setLoading] = React.useState("loading")
    const [completed, setCompleted] = React.useState("completed")

    const [imageList, setImageList] = React.useState([
        {
            'image': droppedImg1,
            'status': error
        },
        {
            'image': droppedImg2,
            'status': loading
        },
        {
            'image': droppedImg3,
            'status': completed
        },
        {
            'image': droppedImg4,
            'status': completed
        },
    ])
    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const [file] = e.dataTransfer.files
            // handleFiles(e.dataTransfer.files);
            if (file) {
                setImageList([...imageList, URL.createObjectURL(file)])
            }
        }
    };
    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            const [file] = e.target.files
            // handleFiles(e.dataTransfer.files);
            if (file) {
                setImageList([...imageList, URL.createObjectURL(file)])
            }
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <>
            <div className="border-2 border-dashed border-minsk m-5 md:m-10 p-5 md:p-10 bg-lightMinsk">
                <form className="text-center" id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                    <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
                    <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                        <div className="text-center">
                            <Image src={UploadIcon} className="mx-auto mb-5" alt="upload-icon" />
                            <p className="my-1 font-mulish text-christalle md:text-x14 text-x12 font-normal normal uppercase
                            tracking-wide">Drag & Drop your files here</p>
                            <p className="my-1 font-mulish text-christalle md:text-x14 text-x12 font-normal normal
                            uppercase tracking-wide">or</p>
                            <button className="my-1 bg-gradient-to-r from-lavender to-minsk rounded py-3 px-10
                             font-mulish font-normal normal font-black text-white uppercase md:text-x16 text-x14" onClick={onButtonClick}>Browse File</button>
                        </div>
                    </label>
                    {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                    <div className="flex justify-center mt-4 md:mt-8">
                        <Link href={"#"} className="flex mr-6 md:mr-10">
                            <Image src={GoogleDrive} className="h-5 w-5 mt-1 ml-6 md:ml-0" alt="GoogleDrive" />
                            <span className="ml-2 text-kimberly font-normal font-mulish hidden md:block lg:text-x18">Google Drive</span>
                        </Link>
                        <Link href={"#"} className="flex mr-6 md:mr-10">
                            <Image src={OneDrive} className="h-5 w-5 mt-1" alt="GoogleDrive" />
                            <span className="ml-2 text-kimberly font-normal font-mulish hidden md:block lg:text-x18">OneDrive</span>
                        </Link>
                        <Link href={"#"} className="flex mr-6 md:mr-10">
                            <Image src={Dropbox} className="h-5 w-5 mt-1" alt="GoogleDrive" />
                            <span className="ml-2 text-kimberly font-normal font-mulish hidden md:block lg:text-x18">Dropbox</span>
                        </Link>
                        <Link href={"#"} className="flex mr-6 md:mr-10">
                            <Image src={Url} className="h-5 w-5 mt-1" alt="GoogleDrive" />
                            <span className="ml-2 text-kimberly font-normal font-mulish text-base hidden md:block lg:text-x18">via URL</span>
                        </Link>
                    </div>
                </form>
            </div>
            {imageList.length > 0 ?
                <div className="w-full md:w-1/2 mx-auto">
                    <p className="text-center mb-5 font-normal normal text-kimberly font-mulish text-base">You have attached <span className="font-bold">{imageList.length}</span> files</p>
                    <div class="grid grid-cols-4 gap-2">
                        {imageList.map((image, index) => (
                            <div className="relative group" key={index}>
                                {image.status == "error" ? <>
                                    <Image className="py-5 h-44 w-full" src={image.image} />
                                    <p className="font-mukta font-normal normal text-x16 text-martinique">Image_{index + 1}</p>
                                    <div className="absolute top-6 right-2 z-10">
                                        <button className="bg-transparent" onClick={() => {
                                            const newImageList = [...imageList]
                                            newImageList.splice(index, 1)
                                            setImageList(newImageList)
                                        }}>
                                            <Exclude />
                                        </button>
                                    </div>
                                    <div className="absolute p-1 inset-0 h-[135px] top-5 flex justify-center w-full">
                                        <button className="bg-white absolute bottom-2 h-8 rounded w-full mx-1 py-1 font-mulish font-black normal text-red uppercase text-x12 border-2 border-red">
                                            Loading error
                                        </button>
                                    </div></> : <></>}
                                {image.status == "loading" ? <>
                                    <Image className="py-5 h-44 w-40" src={image.image} />
                                    <p className="font-mukta font-normal normal text-x16 text-martinique">Image_{index + 1}</p>
                                    <div className="absolute top-6 right-2 z-10">
                                        <button className="bg-transparent" onClick={() => {
                                            const newImageList = [...imageList]
                                            newImageList.splice(index, 1)
                                            setImageList(newImageList)
                                        }}>
                                            <Exclude />
                                        </button>
                                    </div>
                                    <div className="absolute p-1 inset-0 h-[135px] top-5 flex justify-center w-full">
                                        <div className="absolute bottom-1/2 left-1/3 h-5 rounded w-full mx-1 py-1 font-mulish font-black normal text-white uppercase text-xs">
                                            <Image src={time_left} alt="time_left" />
                                        </div>
                                        <div className="abosolute bottom-2 w-full h-8 bg-white rounded-sm" style={{position:'absolute'}}>
                                            <div className="h-full bg-lavender rounded-sm" style={{ width: "90%" }}>
                                                <p className="font-mulish normal uppercase font-black pt-2 text-center text-x12 text-white">90%</p>
                                            </div>
                                        </div>
                                    </div>
                                </> : <></>}
                                {image.status == "completed" ? <>
                                    <Image className="py-5 h-44 w-40" src={image.image} />
                                    <p className="font-mukta font-normal normal text-x16 text-martinique">Image_{index + 1}</p>
                                    <div className="absolute top-6 right-2 z-10">
                                        <button className="bg-transparent" onClick={() => {
                                            const newImageList = [...imageList]
                                            newImageList.splice(index, 1)
                                            setImageList(newImageList)
                                        }}>
                                            <Exclude />
                                        </button>
                                    </div>
                                    <div className="absolute p-1 inset-0 bg-black bg-opacity-50 h-36 top-4 flex justify-center w-full invisible group-hover:visible">
                                        <button className="bg-gradient-to-r absolute bottom-4 h-8 to-minsk from-lavender rounded w-full mx-1 py-1 font-mulish font-black normal text-white uppercase text-xs" onClick={() => {
                                            const link = document.createElement('a');
                                            link.href = image;
                                            link.download = `Image_${index + 1}.jpg`;
                                            link.click();
                                        }}>
                                            Download
                                        </button>
                                        <div className="absolute p-1 inset-0 h-[135px] top-1/4 left-1/4 flex justify-center w-full">
                                            <div className="absolute h-5 rounded w-full mx-1 py-1 font-mulish font-black normal text-white uppercase text-xs">
                                                <p className="font-mulish normal font-black text-x30 center uppercase text-white">-80%</p>
                                            </div>
                                        </div>
                                    </div></> : <></>}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center my-5">
                        <button className="bg-transparent w-48 px-5 py-2 font-mulish font-black normal text-martinique uppercase text-base mr-0 md:mr-3 border-2 border-martinique" onClick={() => {
                            setImageList([])
                        }}>Delete all</button>
                        <button className="bg-gradient-to-r to-minsk from-lavender w-48 px-5 py-2 font-mulish font-black normal text-white uppercase text-base ml-0 md:ml-3 mt-3 md:mt-0"
                            onClick={() => {
                                imageList.forEach((image, index) => {
                                    const link = document.createElement('a');
                                    link.href = image;
                                    link.download = `Image_${index + 1}.jpg`;
                                    link.click();
                                })
                            }}>Download all</button>
                    </div>
                </div> : <></>}
        </>
    )
}

export default UploadFile;