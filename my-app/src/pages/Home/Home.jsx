import React from 'react';
import AboutUs from '../../components/AboutUs';
import MainPhotoSlider from '../../components/MainPhotoSlider';
import VideoBlock from '../../components/VideoBlock';
import MainMenu from '../../components/MainMenu';
import MapBlock from '../../components/MapBlock';
import DessertBlock from '../../components/DessertBlock';
import ReviewsBlock from '../../components/ReviewsBlock';
import './Home.css';

function Home() {
    return (
        <>
            <div className="main">
                <div className="main-content-row">
                    <MainPhotoSlider/>
                    <VideoBlock/> 
                </div>
            </div>
            <div className="main-top-row">
                <MainMenu/>
                <div className="main-top-column">
                    <MapBlock/>
                    {/* <DessertBlock/> */}
                    <ReviewsBlock/>
                </div>
            </div>
            <div>
                <AboutUs/>
            </div>
        </>
    );
}

export default Home;