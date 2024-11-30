import {useState, useEffect} from "react";
import "../App.css";
import Card from "../components/Card";
import logo from "../../public/img/logo.png";
import request from "../../public/img/request.png";
import axios from "axios";

function Pinjem() {
	const [data, setData] = useState([
		{
			title: "Pinjem 1",
			category: "Pinjem",
			username: "user1",
			contact: "081234567890",
			permintaan: "Pinjem 1",
		},
		{
			title: "Mau Pinjem Jaslab",
			category: "Pinjem",
			username: "user1",
			contact: "081234567890",
			permintaan: "Pinjem jaslab besok",
		},
		{
			title: "Pinjem 1",
			category: "Pinjem",
			username: "user1",
			contact: "081234567890",
			permintaan: "Pinjem 1",
		},
		{
			title: "Mau Pinjem Jaslab",
			category: "Pinjem",
			username: "user1",
			contact: "081234567890",
			permintaan: "Pinjem jaslab besok",
		},
		{
			title: "Pinjem 1",
			category: "Pinjem",
			username: "user1",
			contact: "081234567890",
			permintaan: "Pinjem 1",
		},
		{
			title: "Mau Pinjem Jaslab",
			category: "Pinjem",
			username: "user1",
			contact: "081234567890",
			permintaan: "Pinjem jaslab besok",
		},
	]);
	// const token = localStorage.getItem("token");

	// async function getPostIt() {
	// 	console.log("fetching data", localStorage.getItem("token"));
	// 	const response = await axios.get(
	// 		"https://proyek-akhir-exercise-be-5.vercel.app/card/get-cards",
	// 		{
	// 			headers: {
	// 				Authorization: `Bearer ${token}`,
	// 			},
	// 			withCredentials: true,
	// 		}
	// 	);
	// 	console.log("response", response);
	// 	const responseData = response.data;

	// 	// filter data by category === "Pinjem"

	// 	responseData.cards = responseData.cards.filter(
	// 		(card) => card.category === "Pinjem"
	// 	);
	// 	console.log(responseData);
	// 	setData(responseData.cards);
	// }

	// useEffect(() => {
	// 	getPostIt();
	// }, []);

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

export default Pinjem;
