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
                                <p className='my-5 text-base md:text-lg lg:text-xl text-butterflyBush font-mulish normal font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. </p>
                                <div className='flex my-5'>
                                    <Image className='mr-4' src={Facebook} alt="Facebook" />
                                    <Image className='mr-4' src={Line} alt="Line1" />
                                    <Image className='mr-4' src={Linkedin} alt="Linkedin" />
                                    <Image className='mr-4' src={Line} alt="Line2" />
                                    <Image className='mr-4' src={Twitter} alt="Twitter" />
                                </div>
                            </div>
                            <div className="links">
                                <p className="mb-5 text-pink font-mulish font-bold text-base md:text-lg px-0 md:px-20">Quick Links</p>
                                <ul className="menu menu-vertical px-0 md:px-20">
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Home</Link></li>
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">FAQ</Link></li>
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Blog</Link></li>
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Pricing</Link></li>
                                    <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="newsletter">
                                <p className="mb-10 text-pink font-mulish font-bold text-base md:text-lg">Newsletter</p>
                                <p className='mb-5 text-base md:text-lg lg:text-xl text-butterflyBush font-mulish normal font-normal'>Please enter your email</p>
                                <div className="flex">
                                    <input type="text" placeholder='Email' className='px-8 py-2 border-t border-l border-b border-r-0 border-martinique rounded' />
                                    <button className='bg-gradient-to-r from-lavender to-minsk rounded py-3 px-10 font-mulish font-normal normal font-black text-white uppercase'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-lightPink to-anakiwa py-5">
                    <div className="container mx-auto">
                        <div className="flex justify-between">
                            <p className='font-mulish font-normal normal text-minsk text-sm md:text-base'>© 2022 CompressorX. All rights reserved</p>
                            <div className="info-links">
                                <Link href={"#"} className="font-mulish font-normal normal underline text-minsk text-sm md:text-base">Cookies</Link>
                                <Link href={"#"} className="font-mulish font-normal normal underline text-minsk text-sm md:text-base ml-10">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}