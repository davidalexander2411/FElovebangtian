import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Menu from "./pages/Menu.jsx";
import SignUp from "./pages/SignUp.jsx";
import Cover from "./pages/Cover.jsx";
import MauApa from "./pages/MauApa.jsx";
import Jamboard from "./pages/Request.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Cover />} />
				<Route path="/mau-apa" element={<MauApa />} />
				<Route path="/main-menu" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<SignUp />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/request" element={<Jamboard />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
