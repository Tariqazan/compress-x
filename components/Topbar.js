import React from 'react';
import SocialIconLanguage from './SocialIconLanguage';


const Topbar = () => {
    return (
        <div className='bg-lavender hidden lg:block'>
            <div className="container mx-auto">
                <SocialIconLanguage className={"dropdown-end"} />
            </div>
        </div>
    )
}

export default Topbar;