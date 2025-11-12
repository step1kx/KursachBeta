import React, { useState } from 'react';
import Header from '../../components/Header';
import SupportForm from '../../components/SupportForm'
import './SupportLink.css'
import ContactInfoBlock from '../../components/AboutUs/ContactInfoBlock';

function SupportLink() {
    return (
        <div>
            <Header/>
            <div className="supportlink-block">
                <SupportForm/>
            </div>
            <ContactInfoBlock/>
        </div>
    );
}

export default SupportLink;