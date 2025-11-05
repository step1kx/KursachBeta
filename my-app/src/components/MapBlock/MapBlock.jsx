import React from 'react';
import './MapBlock.css';

function MapBlock() {
    return (
    <>
        <section className="main-block-banner shadow-box">
            <h2 className="map-block__header">Приходите к нам</h2>
            <div className="map-container">
                <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '20px'
                }}>
                    <iframe 
                        src="https://yandex.by/map-widget/v1/?ll=27.518033%2C53.885323&mode=poi&poi%5Bpoint%5D=27.517968%2C53.884771&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D232776647015&z=16" 
                        width="100%" 
                        height="400" 
                        frameBorder="0"
                        allowFullScreen 
                        style={{
                            display: 'block',
                            border: '0',
                            borderRadius: '20px'
                        }}
                        title="Карта расположения кофейни Cups coffee bar"
                    ></iframe>
                </div>
            </div>
        </section>   
    </>
    );
}

export default MapBlock;