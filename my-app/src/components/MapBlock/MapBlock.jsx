import React from 'react';
import './MapBlock.css';

function MapBlock() {
    return (
        <>
            <section className="main-block-banner shadow-box">
                <h2 className="main-block-banner__header">Приходите к нам</h2>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.8092986209335!2d27.51818342835553!3d53.885208239468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd15625eac5f7%3A0x79d4f6801a013442!2sCups%20coffee%20bar!5e0!3m2!1sru!2sby!4v1737988296870!5m2!1sru!2sby&style=feature:all|element:all|hue:0xffd700|saturation:-50|lightness:0" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Карта расположения кофейни Cups coffee bar"
                    ></iframe>
                </div>
            </section>   
        </>
    );
}

export default MapBlock;