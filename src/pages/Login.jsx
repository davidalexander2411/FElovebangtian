// page login buat disini

import {useState} from "react";

function Login() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	async function HandleLogin() {
		const response = await fetch("https://api.example.com/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: userName,
				password: password,
			}),
		});
		const responseData = await response.json();

		if (responseData.success) {
			alert("Login successful");
		} else {
			alert(responseData.message);
		}
	}

	async function HandleLoginDummy() {
		if (userName === "admin" && password === "admin") {
			alert("Login successful");
			window.location.href = "/";
		} else {
			alert("Login failed");
		}
	}

	return (
		// Lanjutkan design tampilan login disini
		<>
			<div className='wrapper flex justify-center items-center text-center min-h-screen p-8'>
				<div className="bg-[#104EA2] rounded-lg p-8">
					<form action="">

						<div className="input-box flex flex-row p-4">
							<h1 className="text-white mr-2">Username</h1>
							<input className="rounded-lg" type="text" required />
						</div>

						
						<div className="input-box flex flex-row p-4">
							<h1 className="text-white ml-1 mr-2">Password</h1>
							<input className="rounded-lg" type="password" required />
						</div>

						<div className="w-full rounded-lg mb-4 p-2"> 
    						<button type="submit" className="bg-white rounded-full px-6 py-1 hover:bg-blue-600">
        						Login
    						</button>
						</div>

						<div className="register-link">
							<p>Don't have an account? <a href="#">Register</a></p>
						</div>					
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
