import React from 'react';
import Banner from '../Pages/Banner';
import HomeStaticSections from '../Pages/HomeStaticSections ';
import ChallengesCard from './ChallengesCard';
import Active from '../Pages/Active';
import UpComing from '../Pages/UpComing'
import Tips from '../Pages/Tips';

const Home = () => {
    return (
        <div className='mx-h-[460px] mt-4'>
            <Banner></Banner>
            <HomeStaticSections></HomeStaticSections>
            <ChallengesCard></ChallengesCard>
           
            <UpComing></UpComing>
            <Tips></Tips>
        </div>
    );
};

export default Home;