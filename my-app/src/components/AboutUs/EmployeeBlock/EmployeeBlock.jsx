import React from 'react';
import catOwner from "../../../assets/catBiznes.jpg";
import catControl from "../../../assets/catControl.jpg";
import catBarista from "../../../assets/catBarista.jpg";
import './EmployeeBlock.css';

function EmployeeBlock() {
    const employees = [
        {
            id: 1,
            name: "Надежка",
            position: "Владелец кофейни",
            image: catOwner
        },
        {
            id: 2,
            name: "Лиза",
            position: "Управляющий",
            image: catControl
        },
        {
            id: 3,
            name: "Тоня",
            position: "Бариста",
            image: catBarista
        },
        {
            id: 4,
            name: "Анфиса",
            position: "Бариста",
            image: catBarista
        },
        {
            id: 5,
            name: "Полина",
            position: "Бариста",
            image: catBarista
        },
        {
            id: 6,
            name: "Эмилия",
            position: "Бариста",
            image: catBarista
        },
        {
            id: 7,
            name: "Паша",
            position: "Бариста",
            image: catBarista
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

export default EmployeeBlock;