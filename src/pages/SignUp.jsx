// Agnes yang bikin
import React from 'react';
import { useState } from 'react';
import rawr from "../../public/img/rawr.png";
import petirdte from "../../public/img/petirdte.png";
import bekgron from "../../public/img/bekgron.png";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [npm, setNpm] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted', { username, password, npm, contact });
  };

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundColor: 'black',
        backgroundImage: `url(${bekgron})`, // Correctly referencing the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        <h1
          className="text-6xl font-extrabold text-black"
          style={{
            fontFamily: "'fonts', sans-serif",
            letterSpacing: '20px'
          }}
        >
          WELCOME!
        </h1>

        <div className="bg-gradient-to-br from-blue-500 to-blue-950 w-[850px] h-[450px] rounded-[30px] flex items-center justify-start p-2 border-[3px] border-black">
          <div className="flex flex-col items-center space-y-4">
            {[...Array(7)].map((_, index) => (
              <img
                key={index}
                src={petirdte}
                alt="petirdte"
                className="w-[45px] h-[45px]"
              />
            ))}
          </div>

          <div className="bg-white w-[260px] h-[300px] rounded-[40px] shadow-md flex items-center justify-center relative ml-4">
            <img
              src={rawr}
              alt="Profile Photo"
              className="absolute top-[0px] w-[260px] h-[300px] rounded-[30px]"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="text-white ml-3 flex items-center flex-col space-y-4 p-10"
          >
            <p className="text-2xl whitespace-nowrap font-bold">
              PERMANENT ACCOUNT LICENSE
            </p>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-blue-800 w-full px-2 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-blue-800 block text-base w-full px-2 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="NPM"
              value={npm}
              onChange={(e) => setNpm(e.target.value)}
              className="text-blue-800 w-full px-2 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="text-blue-800 w-full px-2 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="font-extrabold w-[-50px] px-4 py-2 bg-white text-black rounded-[20px] hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 hover:scale-110 duration-300"
            >
              SIGN UP
            </button>

            <p className="text-[13px] whitespace-nowrap font-light -mt-2">
              Already have an account license?
              <a
                href="/login"
                className="text-blue-200 underline hover:text-blue-400 ml-1"
              >
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;