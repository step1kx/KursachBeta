import React from 'react';
import seasonMenuPhoto1 from '../../assets/cupsiFinal.png';
import cupsiVideo from '../../assets/cupsiVideo.mp4';
import './VideoBlock.css';


function VideoBlock() {
    return (
        <div className="video-container">
            <div className="video-wrapper">
                <video 
                    className="video-player"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={seasonMenuPhoto1}
                    preload="none"
                >
                    <source src={cupsiVideo} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
        </div>
    );
}

export default VideoBlock;