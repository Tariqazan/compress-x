import React from "react";
import RangeSlider from "../rangeslider/RangeSlider";

const CustomizeFile = () => {
    const [resize_tab, setResizeTab] = React.useState("px")
    return (
        <div className="m-10 p-10">
            <div className="grid grid-cols-3 gap-16">
                <div className="font-mulish">
                    <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">Resize</p>
                    <button
                        className={resize_tab === "px" ?
                            "text-sm border-r-2 px-5 py-1 my-10 bg-lavender font-bold normal text-christalle border-lavender rounded-l-lg md:text-base"
                            : "text-sm border-r-2 px-5 py-1 my-10 bg-lightLavender text-lavender font-bold normal border-lavender rounded-l-lg md:text-base"
                        } onClick={() => {
                            setResizeTab("px")
                        }}>px</button>
                    <button
                        className={resize_tab === "percentage" ?
                            "text-sm border-r-2 px-5 py-1 my-10 bg-lavender font-bold normal text-christalle border-lavender md:text-base" :
                            "text-sm border-r-2 px-5 py-1 my-10 bg-lightLavender text-lavender font-bold normal border-lavender md:text-base"
                        } onClick={() => {
                            setResizeTab("percentage")
                        }}>percentage</button>
                    <button
                        className={resize_tab === "device" ?
                            "text-sm border-r-2 px-5 py-1 my-10 bg-lavender font-bold normal text-christalle border-lavender rounded-r-lg md:text-base" :
                            "text-sm border-r-2 px-5 py-1 my-10 bg-lightLavender text-lavender font-bold normal border-lavender rounded-r-lg md:text-base"
                        } onClick={() => {
                            setResizeTab("device")
                        }}>device</button>
                    <p className="font-mulish font-medium normal text-sm md:text-lg lg:text-base text-butterflyBush">Size( max size 10000 x 10000)</p>

                    {resize_tab === "px" ? <>
                        <div className="flex my-5">
                            <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">Width</span>
                            <input type="text" placeholder="Enter size" className="input input-bordered rounded-lg mx-3 text-butterflyBush" />
                            <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">px</span>
                        </div>
                        <div className="form-control my-5">
                            <label className="flex justify-center">
                                <input type="checkbox" className="border-lavender" />
                                <span className="bg-transparent text-butterflyBush text-sm font-normal normal ml-3">Resize to fit</span>
                            </label>
                        </div>
                    </> : <></>}
                    {resize_tab === "percentage" ? <>
                        <div className="flex my-5">
                            <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">Size</span>
                            <input type="text" placeholder="Enter size" className="input input-bordered rounded-lg mx-3 text-butterflyBush" />
                            <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3"> %</span>
                        </div>
                    </> : <></>}
                    {resize_tab === "device" ?
                        <div className="my-5">
                            <select className="select select-bordered w-full max-w-xs mt-5 text-christalle text-sm font-semibold normal">
                                <option selected disabled>Phone</option>
                                <option>Tablet</option>
                                <option>Desktop</option>
                                <option>Watch</option>
                            </select>
                        </div> : <></>}
                    <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">Compression type:</p>
                    <select className="select select-bordered w-full max-w-xs mt-5 text-christalle text-sm font-semibold normal">
                        <option selected>best quality</option>
                    </select>
                </div>
                <div className="font-mulish">
                    <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">Globals</p>
                    <div className="form-control my-5">
                        <label className="input-group">
                            <input type="checkbox" className="border-lavender" />
                            <span className="bg-transparent text-butterflyBush text-sm font-normal normal">Keep EXIT data</span>
                        </label>
                    </div>
                    <div className="form-control my-5">
                        <label className="input-group">
                            <input type="checkbox" className="border-lavender" />
                            <span className="bg-transparent text-butterflyBush text-sm font-normal normal">Fix orientation</span>
                        </label>
                    </div>
                    <div className="form-control my-5">
                        <label className="input-group">
                            <input type="checkbox" className="border-lavender" />
                            <span className="bg-transparent text-butterflyBush text-sm font-normal normal">Package for all devices</span>
                        </label>
                    </div>
                    <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">Rename</p>
                    <div className="flex my-5">
                        <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">prefix</span>
                        <input type="text" placeholder="Enter size" className="input input-bordered rounded-lg mx-3 text-butterflyBush" />
                    </div>
                    <div className="flex">
                        <input type="text" placeholder="Enter size" className="input input-bordered rounded-lg mx-3 text-butterflyBush" />
                        <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">suffix</span>
                    </div>
                </div>
                <div className="font-mulish">
                    <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base mb-5">Image Quality</p>
                    <div className="my-2">
                        <span className="bg-transparent text-butterflyBush text-sm font-normal normal pr-5 mb-3">JPG</span>
                        <RangeSlider value={70} />
                    </div>
                    <div className="my-2">
                        <span className="bg-transparent text-butterflyBush text-sm font-normal normal pr-5 mb-3">PNG</span>
                        <RangeSlider value={70} />
                    </div>
                    <div className="my-2">
                        <span className="bg-transparent text-butterflyBush text-sm font-normal normal pr-5 mb-3">WEBP</span>
                        <RangeSlider value={70} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomizeFile;