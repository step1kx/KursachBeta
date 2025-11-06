import React from 'react';
import EmployeeBlock from './EmployeeBlock';
import ContactInfoBlock from './ContactInfoBlock';
import './AboutUs.css';

function AboutUs() {
    return (
        <>
            <div className="aboutUs-block">
                <EmployeeBlock/>
            </div>
            <div className="footer-block">
                <ContactInfoBlock/>
            </div>
        </>
    );
}

export default AboutUs;