import React, { useState } from 'react';

import '../styles/aboutUs/aboutUs.css'
import '../styles/aboutUs/footer.css'

import robotnik from "../assets/mister_rabotnik.jpg";


// function EmployeeBlock () {
//     return (
//         <div className="employee-block">
//             <h2 className="employee-block__header">Наш коллектив</h2>
            
//         </div>
//     );
// }

function EmployeeBlock() {
    const employees = [
        {
            id: 1,
            name: "Надежка",
            position: "Владелец кофейни",
            image: robotnik
        },
        {
            id: 2,
            name: "Лиза",
            position: "Управляющий",
            image: robotnik
        },
        {
            id: 3,
            name: "Тоня",
            position: "Бариста",
            image: robotnik
        },
        {
            id: 4,
            name: "Анфиса",
            position: "Бариста",
            image: robotnik
        },
        {
            id: 5,
            name: "Полина",
            position: "Бариста",
            image: robotnik
        },
        {
            id: 6,
            name: "Эмилия",
            position: "Бариста",
            image: robotnik
        },
        {
            id: 7,
            name: "Паша",
            position: "Бариста",
            image: robotnik
        },
    ];

    return (
        <div className="employee-block">
            <h2 className="employee-block__header">Наш коллектив</h2>
            <div className="employees-container">
                {employees.map(employee => (
                    <div key={employee.id} className="employee-card">
                        <div className="employee-image">
                            <img 
                                src={employee.image} 
                                alt={employee.name}
                                className="employee-img"
                            />
                        </div>
                        <h3 className="employee-name">{employee.name}</h3>
                        <p className="employee-position">{employee.position}</p>
                        <p className="employee-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ContactInfoBlock () {
    return (
        <div className="contactInfo-block">
            <div className="contactInfo-block-first">
                <h2 className="contactInfo-block-first__header">© 2025 CUP's. Все права защищены</h2>
                <div className="contactInfo-contacts">
                    <span className="contact-phone">+375 (29) 835-69-99</span>
                    <span className="contact-address">г.Минск ул.Папанина 11</span>
                </div>
            </div>
            <div className="contactInfo-block-second">
                <button className="download-app-btn">Скачать наше приложение</button>
                    <span className="contact-phone-second">+375 (44) 589-45-89</span>
                    <span className="company-name">ООО "Чашечки Надежды"</span>
            </div>
        </div>
    );
}




export default function AboutUs() {
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