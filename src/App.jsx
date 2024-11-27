import {useState, useEffect} from "react";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";
import logo from "../public/img/logo.png"
import request from "../public/img/request.png"

function App() {
	const [data, setData] = useState([]);

	async function getPostIt() {
		const response = await fetch(
			"https://datausa.io/api/data?drilldowns=Nation&measures=Population"
		);
		const responseData = await response.json();
		console.log(responseData.data);
		setData(responseData.data);
	}

	useEffect(() => {
		getPostIt();
	}, []);

	return (
		<>
			{/* xs md lg xl */}
			{/* Lanjutkan design homePage (cover) disini */}
		
			
            <div 
    			className='wrapper relative flex flex-col justify-center overflow-x-hidden items-center text-center min-h-screen p-8'
    			style={{
        		backgroundImage: "url(img/background2.png)",
        		backgroundSize: 'cover',
        		backgroundPosition: 'center'
    			}} 
			>

    		<img 
        		src={request} 
        		alt="Request" 
        		className="absolute top-4 right-4 -rotate-6 hover:scale-105 cursor-pointer" 
				onClick={() => {
					window.location.href = "/request"
				}}
    		/>

    		<div className="flex flex-col items-center">
        		<img src={logo} alt="logo" className="mb-4"></img>
    		</div>

    		<div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4 md:p-8">
        		{data.map((post, index) => (
            		<Card key={index} post={post} index={index} />
        		))}
    		</div>
		</div>
		</>
	);
}

export default App;
