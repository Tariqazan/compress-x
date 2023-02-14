import React from "react";
import Lock from '@/public/assets/main/fi_lock.svg';
import Image from "next/image";
import UploadIcon from "@/public/assets/main/upload.svg";
import GoogleDrive from "@/public/assets/main/google_drive.png";
import OneDrive from "@/public/assets/main/one_drive.png";
import Dropbox from "@/public/assets/main/dropbox.png";
import Url from "@/public/assets/main/fi_link.png";
import Link from "next/link";
import { Exclude } from "../svg/Exclude";

const UploadFile = () => {
    const [imageLoading, setImageLoading] = React.useState(false)
    const [imageList, setImageList] = React.useState([])
    const [percentage, setPercentage] = React.useState(0);
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
        setImageLoading(true);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const [file] = e.dataTransfer.files
            // handleFiles(e.dataTransfer.files);
            if (file) {
                setImageList([...imageList, URL.createObjectURL(file)])
                setImageLoading(false);
            }
        }
    };
    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        setLoading(true);
        if (e.target.files && e.target.files[0]) {
            const [file] = e.target.files
            // handleFiles(e.dataTransfer.files);
            if (file) {
                setImageList([...imageList, URL.createObjectURL(file)])
                setImageLoading(false);
            }
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <>
            <div className="border-2 border-dashed border-minsk m-10 p-10 bg-lightMinsk">
                <form className="text-center" id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                    <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
                    <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                        <div className="text-center">
                            <Image src={UploadIcon} className="mx-auto mb-5" alt="upload-icon" />
                            <p className="my-1 font-mulish text-christalle text-sm font-normal normal uppercase tracking-wide">Drag & Drop your files here</p>
                            <p className="my-1 font-mulish text-christalle text-sm font-normal normal uppercase tracking-wide">or</p>
                            <button className="my-1 bg-gradient-to-r from-lavender to-minsk rounded py-3 px-10 font-mulish font-normal normal font-black text-white uppercase" onClick={onButtonClick}>Browse File</button>
                        </div>
                    </label>
                    {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                    <div className="flex justify-center mt-10">
                        <Link href={"#"} className="flex mr-10">
                            <Image src={GoogleDrive} className="h-5 mt-1" alt="GoogleDrive" />
                            <span className="ml-2 text-kimberly font-normal font-mulish">Google Drive</span>
                        </Link>
                        <Link href={"#"} className="flex mr-10">
                            <Image src={OneDrive} className="h-5 mt-1" alt="GoogleDrive" />
                            <span className="ml-2 text-kimberly font-normal font-mulish">OneDrive</span>
                        </Link>
                        <Link href={"#"} className="flex mr-10">
                            <Image src={Dropbox} className="h-5 mt-1" alt="GoogleDrive" />
                            <span className="ml-2 text-kimberly font-normal font-mulish">Dropbox</span>
                        </Link>
                        <Link href={"#"} className="flex mr-10">
                            <Image src={Url} className="h-5 mt-1" alt="GoogleDrive" />
                            <span className="ml-2 text-kimberly font-normal font-mulish text-base md:text-lg">via URL</span>
                        </Link>
                    </div>
                </form>
            </div>
            {imageList.length > 0 ?
                <div className="w-2/4 mx-auto">
                    <p className="text-center mb-5 font-normal normal text-kimberly font-mulish text-base">You have attached <span className="font-bold">{imageList.length}</span> files</p>
                    <div class="grid grid-cols-4 gap-4">
                        {imageList.map((image, index) => (
                            <div className="relative group" key={index}>
                                <img className="py-5 h-44 w-40" src={image} />
                                <p className="font-mukta font-normal normal text-sm text-martinique">Image_{index + 1}</p>
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
                                    <button className="bg-gradient-to-r absolute bottom-4 h-5 to-minsk from-lavender rounded w-full mx-1 py-1 font-mulish font-black normal text-white uppercase text-xs" onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = image;
                                        link.download = `Image_${index + 1}.jpg`;
                                        link.click();
                                    }}>
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center my-5">
                        <button className="bg-transparent w-48 px-5 py-2 font-mulish font-black normal text-martinique uppercase text-base mr-3 border-2 border-martinique" onClick={() => {
                            setImageList([])
                        }}>Delete all</button>
                        <button className="bg-gradient-to-r to-minsk from-lavender w-48 px-5 py-2 font-mulish font-black normal text-white uppercase text-base ml-3"
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