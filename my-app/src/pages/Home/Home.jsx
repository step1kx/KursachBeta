import React from 'react';
import AboutUs from '../../components/AboutUs';
import MainPhotoSlider from '../../components/MainPhotoSlider';
import VideoBlock from '../../components/VideoBlock';
import MainMenu from '../../components/MainMenu';
import MapBlock from '../../components/MapBlock';
import ReviewsBlock from '../../components/ReviewsBlock';
import Header from '../../components/Header';
import './Home.css';

function Home() {
    return (
        <>
        <Header/>
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