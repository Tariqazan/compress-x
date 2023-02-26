import React from 'react';
import GradientButton from '../button/GradientButton';
import GradientTitle from '../GradientTitle';
import { PlusIconPink } from '../svg/PlusIconPink';

const Main = () => {
    return (
        <div className='privacy-policy'>
            <GradientTitle title={"Privacy policy"} />
            <div className="bg-gradient-to-br from-lightPink via-anakiwa to-lightPink">
                <div className="container mx-auto py-10">
                    <p className="font-mulish normal font-bold text-x20 lg:text-x18 text-christalle py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='font-montserrat font-normal normal text-x16 lg:text-x14 text-butterflyBush'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet, libero tristique diam. Amet, egestas phasellus at nec et vitae ut. Tincidunt tristique elementum a nec, vitae. Sed tempus tellus in venenatis quis nam.</p>
                    <p className="font-mulish normal font-bold text-x20 lg:text-x18 text-christalle py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='font-montserrat font-normal normal text-x16 lg:text-x14 text-butterflyBush'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet, libero tristique diam. Amet, egestas phasellus at nec et vitae ut. Tincidunt tristique elementum a nec, vitae. Sed tempus tellus in venenatis quis nam.</p>
                    <div className="flex mt-5">
                        <div className="mt-1">
                            <PlusIconPink />
                        </div>
                        <p className='font-montserrat font-normal normal text-x16 lg:text-x14 text-butterflyBush ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet, libero tristique diam. Amet, egestas phasellus at nec et vitae ut. Tincidunt tristique elementum a nec, vitae. </p>
                    </div>
                    <div className="flex mt-5">
                        <div className="mt-1">
                            <PlusIconPink />
                        </div>
                        <p className='font-montserrat font-normal normal text-x16 lg:text-x14 text-butterflyBush ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex mt-5">
                        <div className="mt-1">
                            <PlusIconPink />
                        </div>
                        <p className='font-montserrat font-normal normal text-x16 lg:text-x14 text-butterflyBush ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit amet, libero tristique diam. Amet, egestas phasellus at nec et vitae ut. Tincidunt tristique elementum a nec, vitae.</p>
                    </div>
                    <p className="font-mulish normal font-bold text-x20 lg:text-x18 text-christalle py-5">Lorem ipsum dolor sit amet.</p>
                    <p className='font-montserrat font-normal normal text-x16 lg:text-x14 text-butterflyBush'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et et sed elementum enim. Quis quam sed sodales nibh cursus amet, ut consectetur mi. Erat enim, iaculis elit luctus orci nec, rhoncus. Nunc dolor, blandit suspendisse pharetra nunc dignissim scelerisque tristique senectus. Tortor neque in nisi, aliquam iaculis ornare senectus. Mauris sit cursus lobortis mauris arcu malesuada semper euismod tincidunt. Viverra viverra vel lorem laoreet velit et urna. Id sit at porttitor rhoncus sed mattis elit sollicitudin. Leo fermentum pulvinar tellus neque. Dignissim eget consequat id risus augue leo, arcu, pretium bibendum. Purus arcu quis urna mattis. Ac nec neque mattis a ullamcorper elit, arcu placerat amet. Eget dictum ac a vel. Nisi, in feugiat scelerisque sed lorem urna.</p>
                    <p className='font-montserrat font-normal normal text-x16 lg:text-x14 text-butterflyBush mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et et sed elementum enim. Quis quam sed sodales nibh cursus amet, ut consectetur mi. Erat enim, iaculis elit luctus orci nec, rhoncus. Nunc dolor, blandit suspendisse pharetra nunc dignissim scelerisque tristique senectus. Tortor neque in nisi, aliquam iaculis ornare senectus. Mauris sit cursus lobortis mauris arcu malesuada semper euismod tincidunt. Viverra viverra vel lorem laoreet velit et urna. Id sit at porttitor rhoncus sed mattis elit sollicitudin. Leo fermentum pulvinar tellus neque. Dignissim eget consequat id risus augue leo, arcu, pretium bibendum. </p>
                    <div className="flex flex-col justify-center items-center my-10 md:flex-row">
                        <button className="bg-white w-48 px-5 py-2 my-0 font-mulish font-black normal text-martinique uppercase text-x18 lg:text-x16 mr-0 md:mr-3 border-2 border-martinique">Decline</button>
                        <GradientButton text={"Accept"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;