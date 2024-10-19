import React, { useState } from "react";
import '../Home.css'

function AssignRoles() {
  // Dummy data for RMS, Manufacturer, Distributor, and Retailer
  const [RMS] = useState({
    0: { id: 1, name: "Raw Supplier 1", place: "City A" },
    1: { id: 2, name: "Raw Supplier 2", place: "City B" },
  });
  const [MAN] = useState({
    0: { id: 1, name: "Manufacturer 1", place: "City C" },
    1: { id: 2, name: "Manufacturer 2", place: "City D" },
  });
  const [DIS] = useState({
    0: { id: 1, name: "Distributor 1", place: "City E" },
    1: { id: 2, name: "Distributor 2", place: "City F" },
  });
  const [RET] = useState({
    0: { id: 1, name: "Retailer 1", place: "City G" },
    1: { id: 2, name: "Retailer 2", place: "City H" },
  });

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto grid-container">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 grid-item">
          <h4 className="text-2xl font-bold mb-4">Raw Material Supplier</h4>
          <form className="space-y-4">
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Ethereum Address"
              disabled
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Raw Material Supplier Name"
              disabled
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Based In"
              disabled
            />
            <button
              className="w-full p-2 bg-gray-600 text-white rounded"
              type="submit"
              disabled
            >
              Register
            </button>
          </form>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Place</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(RMS).map((key) => (
                <tr key={key}>
                  <td className="border px-4 py-2">{RMS[key].id}</td>
                  <td className="border px-4 py-2">{RMS[key].name}</td>
                  <td className="border px-4 py-2">{RMS[key].place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 grid-item">
          <h4 className="text-2xl font-bold mb-4">Manufacturer</h4>
          <form className="space-y-4">
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Ethereum Address"
              disabled
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Manufacturer Name"
              disabled
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Based In"
              disabled
            />
            <button
              className="w-full p-2 bg-gray-600 text-white rounded"
              type="submit"
              disabled
            >
              Register
            </button>
          </form>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Place</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(MAN).map((key) => (
                <tr key={key}>
                  <td className="border px-4 py-2">{MAN[key].id}</td>
                  <td className="border px-4 py-2">{MAN[key].name}</td>
                  <td className="border px-4 py-2">{MAN[key].place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 grid-item">
          <h4 className="text-2xl font-bold mb-4">Distributor</h4>
          <form className="space-y-4">
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Ethereum Address"
              disabled
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Distributor Name"
              disabled
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Based In"
              disabled
            />
            <button
              className="w-full p-2 bg-gray-600 text-white rounded"
              type="submit"
              disabled
            >
              Register
            </button>
          </form>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Place</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(DIS).map((key) => (
                <tr key={key}>
                  <td className="border px-4 py-2">{DIS[key].id}</td>
                  <td className="border px-4 py-2">{DIS[key].name}</td>
                  <td className="border px-4 py-2">{DIS[key].place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 grid-item">
          <h4 className="text-2xl font-bold mb-4">Retailers</h4>
          <form className="space-y-4">
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Ethereum Address"
              disabled
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Retailer Name"
              disabled
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Based In"
              disabled
            />
            <button
              className="w-full p-2 bg-gray-600 text-white rounded"
              type="submit"
              disabled
            >
              Register
            </button>
          </form>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Place</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(RET).map((key) => (
                <tr key={key}>
                  <td className="border px-4 py-2">{RET[key].id}</td>
                  <td className="border px-4 py-2">{RET[key].name}</td>
                  <td className="border px-4 py-2">{RET[key].place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AssignRoles;
