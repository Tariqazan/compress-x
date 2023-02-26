import Footer from "@/components/Footer";
import Navigation from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import React from "react";
import { LeftArrow } from "@/components/svg/LeftArrow";
import { SearchIcon } from "@/components/svg/SearchIcon";
import BlogCardImg1 from "@/public/assets/images/blog-card-img1.png";
import BlogCardImg2 from "@/public/assets/images/blog-card-img2.png";
import BlogCardImg3 from "@/public/assets/images/blog-card-img3.png";
import BlogCardImg4 from "@/public/assets/images/blog-card-img4.png";
import BlogCardImg5 from "@/public/assets/images/blog-card-img5.png";
import BlogCardImg6 from "@/public/assets/images/blog-card-img6.png";
import BlogCardImg7 from "@/public/assets/images/blog-card-img7.png";
import Image from "next/image";
import { LoadIcon } from "@/components/svg/Load";

const Blog = () => {
    const [activeTab, setActiveTab] = React.useState("All")
    return (
        <div className="blog">
            <Topbar />
            <Navigation />
            <div className="bg-gradient-to-r from-anakiwa via-pink to-anakiwa">
                <div className="container mx-auto">
                    <div className="py-16">
                        <p className="font-mulish normal font-semibold text-x18 text-white flex items-center"><LeftArrow /><span className='ml-3'>Back</span></p>
                        <p className='text-center font-mulish normal font-black text-x64 lg:text-x48 md:text-x36 uppercase text-white'>Blog</p>
                        <div className="flex justify-center items-center">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-3/5 mt-3 py-2 px-3 h-10 border-1 border-transparent rounded sm:text-sm"
                            />
                            <button className="bg-gradient-to-r to-minsk h-10 from-lavender w-16 px-5 py-2 font-mulish font-black
                            normal rounded text-white uppercase text-x18 lg:text-x16 mt-3"><SearchIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-lightPink via-anakiwa to-lightPink py-10">
                <div className="container mx-auto">
                    <div className="flex flex-row space-x-4 overflow-x-auto my-5">
                        <button onClick={() => setActiveTab("All")} className={activeTab === 'All' ?
                            "w-full py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                            : "w-full py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"}
                        >All Blog</button>
                        <button onClick={() => setActiveTab("Photo")} className={activeTab === 'Photo' ?
                            "w-full py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                            : "w-full py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"}>
                            Photo</button>
                        <button onClick={() => setActiveTab("Design")} className={activeTab === 'Design' ?
                            "w-full py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                            : "w-full py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"}>
                            Design</button>
                        <button onClick={() => setActiveTab("People")} className={activeTab === 'People' ?
                            "w-full py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                            : "w-full py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"}>
                            People</button>
                    </div>
                    {activeTab === "All" ? <>
                        <div className="card card-side bg-base-100 shadow-xl p-5">
                            <div className="flex flex-col md:flex-row justify-center">
                                <Image className="w-full md:w-2/7 lg:h-64 h-100" src={BlogCardImg1} alt="Card Image" />
                                <div className="w-full md:w-5/7 pl-0 md:pl-12 md:mt-0 mt-5">
                                    <h2 className="font-mulish normal font-bold lg:text-x24 text-x20 text-martinique">Lorem ipsum dolor sit amet</h2>
                                    <p className="font-mulish normal font-thin lg:text-x16 text-x14 text-butterflyBush my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor tristique iaculis tellus amet vel eget. Arcu, et, augue sapien vitae at enim, ac fames facilisi. Vulputate vitae pretium a eu dictum aenean. Eget sollicitudin fusce suspendisse neque, sed ut amet odio. Mattis eget varius ut condimentum laoreet libero pharetra, elit. Ultricies convallis fames quis scelerisque nisl aenean amet tortor eget. Viverra id nulla egestas sollicitudin aliquam a quisque laoreet. </p>
                                    <button className="font-mulish normal font-black text-x16 underline letter-spacing-2 uppercase text-christalle">Read more</button>
                                    <div className="w-100 mt-5 font-mulish text-thin lg:text-x18 text-x16 normal text-lavender">
                                        <span className="mr-4">#lorem</span><span className="mr-4">#ipsum</span><span className="mr-4">#sit</span><span className="mr-4">#amet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                            <div className="card card-side bg-base-100 shadow-xl p-5">
                                <div className="flex flex-col justify-center">
                                    <Image className="w-full md:w-2/7 lg:h-36 h-100" src={BlogCardImg2} alt="Card Image" />
                                    <div className="">
                                        <h2 className="font-mulish normal font-bold lg:text-x24 text-x20 text-martinique mt-5">Lorem ipsum dolor sit</h2>
                                        <p className="font-mulish normal font-thin lg:text-x16 text-x14 text-butterflyBush my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor tristique iaculis tellus amet vel eget. Arcu, et, augue sapien vitae at enim, ac fames facilisi. Vulputate vitae pretium a eu dictum aenean....</p>
                                        <button className="font-mulish normal font-black text-x16 underline letter-spacing-2 uppercase text-christalle">Read more</button>
                                        <div className="w-100 mt-5 font-mulish text-thin lg:text-x18 text-x16 normal text-lavender">
                                            <span className="mr-4">#lorem</span><span className="mr-4">#ipsum</span><span className="mr-4">#sit</span><span className="mr-4">#amet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl p-5">
                                <div className="flex flex-col justify-center">
                                    <Image className="w-full md:w-2/7 lg:h-36 h-100" src={BlogCardImg3} alt="Card Image" />
                                    <div className="">
                                        <h2 className="font-mulish normal font-bold lg:text-x24 text-x20 text-martinique mt-5">Lorem ipsum dolor sit</h2>
                                        <p className="font-mulish normal font-thin lg:text-x16 text-x14 text-butterflyBush my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor tristique iaculis tellus amet vel eget. Arcu, et, augue sapien vitae at enim, ac fames facilisi. Vulputate vitae pretium a eu dictum aenean....</p>
                                        <button className="font-mulish normal font-black text-x16 underline letter-spacing-2 uppercase text-christalle">Read more</button>
                                        <div className="w-100 mt-5 font-mulish text-thin lg:text-x18 text-x16 normal text-lavender">
                                            <span className="mr-4">#lorem</span><span className="mr-4">#ipsum</span><span className="mr-4">#sit</span><span className="mr-4">#amet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl p-5">
                                <div className="flex flex-col justify-center">
                                    <Image className="w-full md:w-2/7 lg:h-36 h-100" src={BlogCardImg4} alt="Card Image" />
                                    <div className="">
                                        <h2 className="font-mulish normal font-bold lg:text-x24 text-x20 text-martinique mt-5">Lorem ipsum dolor sit</h2>
                                        <p className="font-mulish normal font-thin lg:text-x16 text-x14 text-butterflyBush my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor tristique iaculis tellus amet vel eget. Arcu, et, augue sapien vitae at enim, ac fames facilisi. Vulputate vitae pretium a eu dictum aenean....</p>
                                        <button className="font-mulish normal font-black text-x16 underline letter-spacing-2 uppercase text-christalle">Read more</button>
                                        <div className="w-100 mt-5 font-mulish text-thin lg:text-x18 text-x16 normal text-lavender">
                                            <span className="mr-4">#lorem</span><span className="mr-4">#ipsum</span><span className="mr-4">#sit</span><span className="mr-4">#amet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl p-5">
                                <div className="flex flex-col justify-center">
                                    <Image className="w-full md:w-2/7 lg:h-36 h-100" src={BlogCardImg5} alt="Card Image" />
                                    <div className="">
                                        <h2 className="font-mulish normal font-bold lg:text-x24 text-x20 text-martinique mt-5">Lorem ipsum dolor sit</h2>
                                        <p className="font-mulish normal font-thin lg:text-x16 text-x14 text-butterflyBush my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor tristique iaculis tellus amet vel eget. Arcu, et, augue sapien vitae at enim, ac fames facilisi. Vulputate vitae pretium a eu dictum aenean....</p>
                                        <button className="font-mulish normal font-black text-x16 underline letter-spacing-2 uppercase text-christalle">Read more</button>
                                        <div className="w-100 mt-5 font-mulish text-thin lg:text-x18 text-x16 normal text-lavender">
                                            <span className="mr-4">#lorem</span><span className="mr-4">#ipsum</span><span className="mr-4">#sit</span><span className="mr-4">#amet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl p-5">
                                <div className="flex flex-col justify-center">
                                    <Image className="w-full md:w-2/7 lg:h-36 h-100" src={BlogCardImg6} alt="Card Image" />
                                    <div className="">
                                        <h2 className="font-mulish normal font-bold lg:text-x24 text-x20 text-martinique mt-5">Lorem ipsum dolor sit</h2>
                                        <p className="font-mulish normal font-thin lg:text-x16 text-x14 text-butterflyBush my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor tristique iaculis tellus amet vel eget. Arcu, et, augue sapien vitae at enim, ac fames facilisi. Vulputate vitae pretium a eu dictum aenean....</p>
                                        <button className="font-mulish normal font-black text-x16 underline letter-spacing-2 uppercase text-christalle">Read more</button>
                                        <div className="w-100 mt-5 font-mulish text-thin lg:text-x18 text-x16 normal text-lavender">
                                            <span className="mr-4">#lorem</span><span className="mr-4">#ipsum</span><span className="mr-4">#sit</span><span className="mr-4">#amet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl p-5">
                                <div className="flex flex-col justify-center">
                                    <Image className="w-full md:w-2/7 lg:h-36 h-100" src={BlogCardImg7} alt="Card Image" />
                                    <div className="">
                                        <h2 className="font-mulish normal font-bold lg:text-x24 text-x20 text-martinique mt-5">Lorem ipsum dolor sit</h2>
                                        <p className="font-mulish normal font-thin lg:text-x16 text-x14 text-butterflyBush my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor tristique iaculis tellus amet vel eget. Arcu, et, augue sapien vitae at enim, ac fames facilisi. Vulputate vitae pretium a eu dictum aenean....</p>
                                        <button className="font-mulish normal font-black text-x16 underline letter-spacing-2 uppercase text-christalle">Read more</button>
                                        <div className="w-100 mt-5 font-mulish text-thin lg:text-x18 text-x16 normal text-lavender">
                                            <span className="mr-4">#lorem</span><span className="mr-4">#ipsum</span><span className="mr-4">#sit</span><span className="mr-4">#amet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-12 flex justify-center">
                            <LoadIcon /> <span className="ml-5 font-mulish normal font-bold text-x20 text-butterflyBush">Show more</span>
                        </div>
                    </> : <></>}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog;