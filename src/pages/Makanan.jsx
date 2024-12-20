import { useState, useEffect } from "react";
import "../App.css";
import Card from "../components/Card";
import logo from "../../public/img/logo.png";
import request from "../../public/img/request.png";
import axios from "axios";

function Makanan() {
    const [data, setData] = useState([
        {
            title: "Makanan 1",
            category: "makanan",
            username: "user1",
            contact: "081234567890",
            permintaan: "Makanan 1",
        },
        {
            title: "Bantu makan di ayceb",
            category: "makanan",
            username: "user1",
            contact: "081234567890",
            permintaan: "Makanan 1",
        },
        {
            title: "Makanan 1",
            category: "makanan",
            username: "user1",
            contact: "081234567890",
            permintaan: "Makanan 1",
        },
        {
            title: "Bantu makan di ayceb",
            category: "makanan",
            username: "user1",
            contact: "081234567890",
            permintaan: "Makanan 1",
        },
        {
            title: "Beliin makan",
            category: "makanan",
            username: "user1",
            contact: "081234567890",
            permintaan: "Anter ke Even",
        },
        {
            title: "Bantu makan di ayceb",
            category: "makanan",
            username: "user1",
            contact: "081234567890",
            permintaan: "Makanan 1",
        },
    ]);

    return (
        <>
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
                    <img src={logo} alt="logo" className="mb-4"></img>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4 md:p-8">
                    {data.map((post, index) => (
                        <div
                            key={index}
                            className="relative"
                            style={{
                                transform: `rotate(${Math.random() * 10 - 5}deg)`,
                                left: `${Math.random() * 20 - 10}px`,
                                top: `${Math.random() * 20 - 10}px`,
                            }}
                        >
                            <Card post={post} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Makanan;