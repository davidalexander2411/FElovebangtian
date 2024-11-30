import { useState, useEffect } from "react";
import Card from "./components/Card";
import logo from "../public/img/logo.png";
import request from "../public/img/request.png";

function MainMenu() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [data, setData] = useState([
        // Import data from other pages
        ...makananData,
        ...anterinData
    ]);

    const categories = [
        { name: 'all', label: 'Semua' },
        { name: 'makanan', label: 'Makanan' },
        { name: 'anterin', label: 'Anterin' },
    ];

    const filteredData = activeCategory === 'all' 
        ? data 
        : data.filter(item => item.category === activeCategory);

    return (
        <div 
            className="wrapper relative flex flex-col justify-center overflow-x-hidden items-center text-center min-h-screen p-8"
            style={{
                backgroundImage: "url(../img/background2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <img
                src={request}
                alt="Request"
                className="absolute top-4 right-4 -rotate-6 hover:scale-105 cursor-pointer"
                onClick={() => {
                    window.location.href = "/request";
                }}
            />

            <div className="flex flex-col items-center">
                <img src={logo} alt="logo" className="mb-4" />
            </div>

            <div className="flex justify-center mb-4 space-x-2">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        className={`px-4 py-2 rounded ${
                            activeCategory === category.name 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => setActiveCategory(category.name)}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4 md:p-8">
                {filteredData.map((post, index) => (
                    <Card key={index} post={post} index={index} />
                ))}
            </div>
        </div>
    );
}

export default MainMenu;