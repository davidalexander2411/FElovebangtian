import React, { useState, useEffect } from 'react';

const Jamboard = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    request: '',
    fee: 0,
    status: 'pending',
    contact: '',
    expiryTime: null,
  });

  // Fungsi untuk menangani kadaluarsa request
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
    }, 1000); // Periksa setiap detik
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl px-6 py-8 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover" style={{
          backgroundImage: 'url(https://www.transparenttextures.com/patterns/white-wall.png)'
        }}></div>

        <h1 className="text-4xl font-bold text-center mb-6 relative z-10">Request Form</h1>

        {/* Formulir untuk input */}
        <div className="p-6 rounded-lg border border-gray-200 shadow-md bg-white relative z-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitRequest();
            }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="request" className="block font-semibold text-lg mb-2">
                Request
              </label>
              <input
                type="text"
                id="request"
                value={newRequest.request}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, request: e.target.value })
                }
                className="border rounded-md px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="fee" className="block font-semibold text-lg mb-2">
                Fee
              </label>
              <input
                type="number"
                id="fee"
                value={newRequest.fee}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, fee: e.target.value })
                }
                className="border rounded-md px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="contact" className="block font-semibold text-lg mb-2">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                value={newRequest.contact}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, contact: e.target.value })
                }
                className="border rounded-md px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="expiry" className="block font-semibold text-lg mb-2">
                Expiry Time
              </label>
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
                className="border rounded-md px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="900000">15 Minutes</option>
                <option value="3600000">1 Hour</option>
                <option value="28800000">8 Hours</option>
                <option value="86400000">24 Hours</option>
                <option value="permanent">Permanent</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* List Requests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {requests.map((request, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-lg p-6 transition-all duration-300 text-center ${
                request.status === 'pending'
                  ? 'bg-yellow-100'
                  : request.status === 'responded'
                  ? 'bg-green-100'
                  : 'bg-red-100'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{request.request}</h3>
              <p className="text-gray-700 mb-2">Fee: ${request.fee}</p>
              <p className="text-gray-700 mb-4">Status: {request.status}</p>
              <div className="text-sm text-gray-500">Contact: {request.contact}</div>
              {request.expiryTime && (
                <p className="text-sm text-gray-500 mt-2">
                  Expires: {new Date(request.expiryTime).toLocaleString()}
                </p>
              )}
              {request.status === 'pending' && (
                <button
                  onClick={() => updateRequestStatus(index, 'responded')}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md mt-4"
                >
                  Respond
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jamboard;
