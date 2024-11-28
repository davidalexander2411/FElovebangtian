import React, { useState, useEffect } from 'react';
import requestinput from "../../public/img/requestinput.png";
import feeinput from "../../public/img/feeinput.png";
import contactinput from "../../public/img/contactinput.png";
import expiryinput from "../../public/img/expiryinput.png";
import submitbutton from "../../public/img/submitbutton3.png";

const Jamboard = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    request: '',
    fee: 0,
    status: 'pending',
    contact: '',
    expiryTime: null,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req.expiryTime && new Date(req.expiryTime) <= now
            ? { ...req, status: 'expired' }
            : req
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const submitRequest = () => {
    setRequests([...requests, newRequest]);
    setNewRequest({
      request: '',
      fee: 0,
      status: 'pending',
      contact: '',
      expiryTime: null,
    });
  };

  const updateRequestStatus = (index, status) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = status;
    setRequests(updatedRequests);
  };

  return (
    <div
      className="wrapper flex flex-col items-center justify-center h-full overflow-y-hidden"
      style={{ backgroundImage: 'url(/img/backgroundrequest3.png)' }}
    >
      <div className="rounded-lg w-full max-w-6xl px-6 py-2 relative">
        <div className="p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitRequest();
            }}
            className="space-y-6"
          >
            {/* Inputs Container */}
            <div className="inputs-container space-y-6 mt-28">
              <div className="px-24 hover:scale-105 active:scale-100 transition-all cursor-pointer">
                <img src={requestinput} alt="Request" className="w-56 h-auto" />
                <input
                  type="text"
                  id="request"
                  value={newRequest.request}
                  onChange={(e) =>
                    setNewRequest({ ...newRequest, request: e.target.value })
                  }
                  className="border ml-4 rounded-md px-4 py-1 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="px-24 hover:scale-105 active:scale-100 transition-all cursor-pointer">
                <img src={expiryinput} alt="Expiry" className="w-52 h-auto ml-4 " />
                <select 
                  id="category" 
                  onChange={(e) => { 
                  const value = e.target.value; 
                  setNewRequest({ ...newRequest, category: value }); 
                  }} 
                  className="border ml-4 rounded-md px-4 py-1 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  required
                >
                  <option value="Makanan">Makanan</option>
                  <option value="Anterin">Anterin</option>
                  <option value="Pinjem">Pinjem</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="px-24 hover:scale-105 active:scale-100 transition-all cursor-pointer">
                <img src={contactinput} alt="Contact" className="w-56 h-auto" />
                <input
                  type="text"
                  id="contact"
                  value={newRequest.contact}
                  onChange={(e) =>
                    setNewRequest({ ...newRequest, contact: e.target.value })
                  }
                  className="border ml-4 rounded-md px-4 py-1 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="px-24 hover:scale-105 active:scale-100 transition-all cursor-pointer">
                <img src={expiryinput} alt="Expiry" className="w-52 h-auto ml-4 " />
                <select
                  id="expiry"
                  onChange={(e) => {
                    const now = new Date();
                    const value = e.target.value;
                    const expiryTime =
                      value === 'permanent'
                        ? null
                        : new Date(
                            now.getTime() + parseInt(value, 10)
                          ).toISOString();
                    setNewRequest({ ...newRequest, expiryTime });
                  }}
                  className="border ml-4 rounded-md px-4 py-1 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="900000">15 Minutes</option>
                  <option value="3600000">1 Hour</option>
                  <option value="28800000">8 Hours</option>
                  <option value="86400000">24 Hours</option>
                  <option value="permanent">Permanent</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit-container hover:scale-110 active:scale-110 transition-all cursor-pointer">
              <button type="submit" className="mt-[35px] ml-[260px]">
                <img src={submitbutton} alt="Submit" className="w-[606px] h-auto" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Jamboard;
