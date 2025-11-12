import React from 'react';
import seasonMenuPhoto1 from '../../assets/cupsiFinal.png';
import cupsiVideo from '../../assets/cupsiVideo.mp4';
import video2 from '../../assets/cupsiVideo2.mp4';
import video3 from '../../assets/cupsiVideo3.mp4';
import './VideoBlock.css';

function VideoBlock() {
    const videos = [
        { src: cupsiVideo, poster: seasonMenuPhoto1 },
        { src: video2, poster: seasonMenuPhoto1 },
        { src: video3, poster: seasonMenuPhoto1 }
        // Добавьте больше видео при необходимости
    ];

    return (
        <div className="video-container">
            <div className="video-playlist">
                {videos.map((video, index) => (
                    <div key={index} className="video-item">
                        <div className="video-wrapper">
                            <video 
                                className="video-player"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster={video.poster}
                                preload="none"
                            >
                                <source src={video.src} type="video/mp4" />
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoBlock;