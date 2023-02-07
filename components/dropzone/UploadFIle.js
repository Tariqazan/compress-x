import React from "react";
import Lock from '@/public/assets/main/fi_lock.svg';
import Image from "next/image";
import UploadIcon from "@/public/assets/main/upload.svg";
import GoogleDrive from "@/public/assets/main/google_drive.png";
import OneDrive from "@/public/assets/main/one_drive.png";
import Dropbox from "@/public/assets/main/dropbox.png";
import Url from "@/public/assets/main/fi_link.png";
import Link from "next/link";

const UploadFile = () => {
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
            // handleFiles(e.dataTransfer.files);
            console.log("drop", e.dataTransfer.files[0])
        }
    };

    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            // handleFiles(e.target.files);
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
                            <Image src={GoogleDrive} alt="GoogleDrive" /><span className="ml-2 text-kimberly font-normal font-mulish">Google Drive</span>
                        </Link>
                        <Link href={"#"} className="flex mr-10">
                            <Image src={OneDrive} alt="GoogleDrive" />  <span className="ml-2 text-kimberly font-normal font-mulish">OneDrive</span>
                        </Link>
                        <Link href={"#"} className="flex mr-10">
                            <Image src={Dropbox} alt="GoogleDrive" /> <span className="ml-2 text-kimberly font-normal font-mulish">Dropbox</span>
                        </Link>
                        <Link href={"#"} className="flex mr-10">
                            <Image src={Url} alt="GoogleDrive" /> <span className="ml-2 text-kimberly font-normal font-mulish text-base md:text-lg">via URL</span>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UploadFile;