import React from 'react';
import CountUpSec from '../../HomePage/CountUpSec/CountUpSec';
import Services from '../../HomePage/Services/Services/Services';
import FirstItem from './FirstItem';
import FourthItem from './FourthItem';
import SecondItem from './SecondItem';
import ThirdItem from './ThirdItem';

const ServicesPage = () => {
    return (
        <div id='home'>
            <FirstItem />
            <div style={{ background: 'white', paddingTop: '40px' }}>
                <CountUpSec />
            </div>

            <Services />
            {/* <ThirdItem />
            <SecondItem />
            <FourthItem /> */}
        </div>
    );
};

export default ServicesPage;