import React from 'react';
import Image from 'next/image';
import Facebook from '@/public/assets/topbar/facebook.svg';
import Linkedin from '@/public/assets/topbar/Linkedin.svg';
import Twitter from '@/public/assets/topbar/Twitter.svg';
import Line from '@/public/assets/topbar/line.svg';
import Logo from "@/public/assets/navbar/logo.svg"
import Link from 'next/link';

export default class Footer extends React.Component {

    render() {
        return (
            <>
                <div className="footer py-10">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="logo">
                                <Image src={Logo} alt="logo" />
                                <p className='my-5 text-x16 md:text-x18 lg:text-x20 text-butterflyBush font-mulish normal font-normal leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. </p>
                                <div className='flex my-5'>
                                    <Image className='mr-4' src={Facebook} alt="Facebook" />
                                    <Image className='mr-4' src={Line} alt="Line1" />
                                    <Image className='mr-4' src={Linkedin} alt="Linkedin" />
                                    <Image className='mr-4' src={Line} alt="Line2" />
                                    <Image className='mr-4' src={Twitter} alt="Twitter" />
                                </div>
                            </div>
                            <div className="links">
                                <p className="mb-5 text-lavender font-mulish font-bold text-x14 md:text-x16 lg:text-x18 px-0 md:px-5 lg:px-10">Quick Links</p>
                                <ul className="menu menu-vertical px-0 md:px-5 lg:px-7">
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-x14 md:text-x16 lg:text-x18 text-martinique">Home</Link></li>
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-x14 md:text-x16 lg:text-x18 text-martinique">FAQ</Link></li>
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-x14 md:text-x16 lg:text-x18 text-martinique">Blog</Link></li>
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-x14 md:text-x16 lg:text-x18 text-martinique">Pricing</Link></li>
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-x14 md:text-x16 lg:text-x18 text-martinique">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="newsletter mt-5 md:mt-0">
                                <p className="md:mb-10 mb-4 text-lavender font-mulish font-bold text-x14 md:text-x16 lg:text-x18">Newsletter</p>
                                <p className='mb-5 text-x14 md:text-x16 lg:text-x18 text-butterflyBush font-mulish normal font-normal'>Please enter your email</p>
                                <div className="flex md:block lg:flex">
                                    <input type="text" placeholder="Email" className="mb-0 md:mb-8 lg:mb-0 w-48 md:w-52 lg:w-64 input input-bordered px-8 py-2 border-martinique rounded" />
                                    <span className='text-x14 md:text-x16 lg:text-x18 w-32 md:w-44 lg:w-32 text-center bg-gradient-to-r from-lavender to-minsk rounded py-3 px-5 font-mulish font-normal normal font-black text-white uppercase'>send</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-lightPink to-anakiwa py-5">
                    <div className="container mx-auto">
                        <div className="block md:flex md:justify-between text-center">
                            <p className='font-mulish font-normal normal text-minsk text-x12 md:text-x14 lg:text-x18 md:mb-0 mb-3'>© 2022 CompressorX. All rights reserved</p>
                            <div className="info-links">
                                <Link href={"#"} className="font-mulish font-normal normal underline text-minsk text-x12 md:text-x14 lg:text-x18">Cookies</Link>
                                <Link href={"#"} className="ml-4 font-mulish font-normal normal underline text-minsk text-x12 md:text-x14 lg:text-x18">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}