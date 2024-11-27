// page login buat disini
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsLightningFill } from "react-icons/bs";
import { Link } from "react-router-dom";



function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function HandleLogin(e) {
        e.preventDefault(); 

        // Real API login 
        // const response = await fetch("https://api.example.com/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         username: userName,
        //         password: password,
        //     }),
        // });
        // const responseData = await response.json();

        // if (responseData.success) {
        //     alert("Login successful");
        //     navigate("/"); // Redirect to home page
        // } else {
        //     alert(responseData.message);
        // }

        // Dummy login for testing
        HandleLoginDummy(e);
    }

    function HandleLoginDummy(e) {
        e.preventDefault();
        if (userName === "admin" && password === "admin") {
            alert("Login successful");
            navigate("/"); // Redirect to home page
        } else {
            alert("Login failed");
        }
    }

    return (
        <>

            <div 
                className='wrapper flex flex-col justify-center items-center text-center min-h-screen p-8'
				style={{
					backgroundImage: "url('/img/backgroundlogin.png')",
					fontFamily: "'Special Elite', cursive"
				}} 
            >
				
					<img src="/img/welcome.png" alt="Welcome!" className="mb-2"/>

                	<div className="bg-[#104EA2] rounded-xl p-14 flex items-center relative">
    
                    	{[...Array(17)].map((_, index) => (
                        	<BsLightningFill 
                         	   key={`top-${index}`} 
                         	   className="absolute top-1 ml-2 mt-2 text-yellow-300 rotate-12" 
                         	   style={{left: `${index * 36.4}px`}} 
                        	/>
                    	))}

                   		{[...Array(17)].map((_, index) => (
                        	<BsLightningFill 
                            	key={`bottom-${index}`} 
                            	className="absolute bottom-1 ml-2 mb-2 text-yellow-300 rotate-12" 
                            	style={{left: `${index * 36.4}px`}} 
                       	 	/>
                    	))}

                    	{[...Array(6)].map((_, index) => (
                        	<BsLightningFill 
                            	key={`left-${index}`} 
                            	className="mt-12 ml-1 absolute left-1 text-yellow-300 rotate-12" 
                            	style={{top: `${index * 37.5}px`}} 
                        	/>
                    	))}

                    	{/* Right Border Icons */}
                    	{[...Array(6)].map((_, index) => (
                        	<BsLightningFill 
                            	key={`right-${index}`} 
                            	className="mt-12 mr-2 absolute right-1 text-yellow-300 rotate-12" 
                            	style={{top: `${index * 37.5}px`}} 
                        	/>
                    	))}

                    	<img 
                        	src="/img/cat.png" 
                        	alt="Login illustration" 
                        	className="w-full h-full mr-4 object-cover" 
                    	/>					

                    	<form onSubmit={HandleLogin}>

							<div className="flex flex-row text-xl justify-center text-white">
								PERMANENT ACCOUNT LICENSE
							</div>

                        	<div className="input-box flex flex-row p-2">
                            	<h1 className="text-white mr-2">Username</h1>
                            	<input 
                                	className="rounded-lg" 
                                	type="text" 
                                	value={userName}
                                	onChange={(e) => setUserName(e.target.value)}
                                	required 
                            	/>
                        	</div>

                        	<div className="input-box flex flex-row p-2">
                            	<h1 className="text-white ml-0.5 mr-2">Password</h1>
                            	<input 
                                	className="rounded-lg" 
                                	type="password" 
                                	value={password}
                                	onChange={(e) => setPassword(e.target.value)}
                                	required 
                            	/>
                        	</div>

                        	<div className="w-full rounded-lg mb-2 p-2"> 
                            	<button 
                                	type="submit" 
                                	className="bg-white rounded-full px-6 py-1 hover:bg-blue-600"
                            	>
                                	Login
                            	</button>
                        	</div>

                        	<div className="register-link text-white">
								<p>
        							Don't have an account?{" "}
        							<Link to="/register" className="text-blue-500 hover:underline">
            							Register
        							</Link>
    							</p>
                       	 	</div>

                    	</form>

                	</div>

				</div>

            
        </>
    );
}

export default Login;