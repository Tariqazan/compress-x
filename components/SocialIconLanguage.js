import React from 'react';
import Image from 'next/image';
import Facebook from '@/public/assets/topbar/facebook.svg';
import Linkedin from '@/public/assets/topbar/Linkedin.svg';
import Twitter from '@/public/assets/topbar/Twitter.svg';
import Line from '@/public/assets/topbar/line.svg';
import { BritishFlag } from './svg/BritishFlag';
import { DropdownIcon } from './svg/Dropdown';


const SocialIconLanguage = (props) => {
    return (
        <div className="flex justify-between">
            <div className='flex'>
                <Image className='mr-4' src={Facebook} alt="Facebook" />
                <Image className='mr-4' src={Line} alt="Line1" />
                <Image className='mr-4' src={Linkedin} alt="Linkedin" />
                <Image className='mr-4' src={Line} alt="Line2" />
                <Image className='mr-4' src={Twitter} alt="Twitter" />
            </div>
            <div>
                <div className={`dropdown ${props.className}`}> <label tabIndex={0} className="btn btn-ghost"><BritishFlag />
                    <span className='mx-2 text-martinique font-normal normal text-base font-mulish'>Eng</span><DropdownIcon /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><BritishFlag />
                            <span className='ml-2 text-martinique font-normal normal text-base font-mulish'>Eng</span></a></li>
                        <li><a><BritishFlag />
                            <span className='ml-2 text-martinique font-normal normal text-base font-mulish'>Eng</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SocialIconLanguage;