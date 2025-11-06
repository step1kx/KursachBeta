import React from 'react';
import './ReviewsBlock.css';

function ReviewsBlock () {
    return (
        <div className="review-block-banner">
            <h2 className="review-block-banner__header">Ваши отзывы</h2>
            <div className="review-container">
                <div className="review-iframe-wrapper">
                    <iframe 
                        title="Отзывы CUP's" 
                        className="review-iframe-wrapper__iframe"
                        src="https://yandex.ru/maps-reviews-widget/232776647015?comments"
                        width="100%" 
                        height="100%" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
}

export default ReviewsBlock;
