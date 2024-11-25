import {useState, useEffect} from "react";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";

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
			<Header />
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-4 md:p-8">
				{data.map((post, index) => (
					<Card key={index} post={post} index={index} />
				))}
			</div>
		</>
	);
}

export default App;
