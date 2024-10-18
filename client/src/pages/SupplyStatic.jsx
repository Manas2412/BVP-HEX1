import React, { useState } from 'react';

const SupplyChainPage = () => {
  const [medicineId, setMedicineId] = useState('');

  const handleSubmit = (event, action) => {
    event.preventDefault();
    console.log(`${action} action for Medicine ID: ${medicineId}`);
    // In a real app, this would trigger the corresponding action
    setMedicineId('');
  };

  const sampleMedicineData = [
    { id: 1, name: "Aspirin", description: "Pain reliever", stage: "Raw Material Supply" },
    { id: 2, name: "Amoxicillin", description: "Antibiotic", stage: "Manufacturing" },
    { id: 3, name: "Lisinopril", description: "Blood pressure medication", stage: "Distribution" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Supply Chain Management</h1>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Supply Chain Flow:</h3>
        <p className="text-gray-600">Medicine Order → Raw Material Supplier → Manufacturer → Distributor → Retailer → Consumer</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Current Inventory:</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-4 text-left">Medicine ID</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Description</th>
                <th className="py-2 px-4 text-left">Current Processing Stage</th>
              </tr>
            </thead>
            <tbody>
              {sampleMedicineData.map((medicine) => (
                <tr key={medicine.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">{medicine.id}</td>
                  <td className="py-2 px-4">{medicine.name}</td>
                  <td className="py-2 px-4">{medicine.description}</td>
                  <td className="py-2 px-4">{medicine.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-6">
        {[
          { title: "Supply Raw Materials", action: "RMSsupply" },
          { title: "Manufacture", action: "Manufacturing" },
          { title: "Distribute", action: "Distribute" },
          { title: "Retail", action: "Retail" },
          { title: "Mark as Sold", action: "Sold" }
        ].map((step, index) => (
          <div key={index} className="border-t pt-4">
            <h5 className="text-lg font-semibold mb-2">Step {index + 1}: {step.title}</h5>
            <form onSubmit={(e) => handleSubmit(e, step.action)} className="flex items-center space-x-2">
              <input
                type="text"
                value={medicineId}
                onChange={(e) => setMedicineId(e.target.value)}
                placeholder="Enter Medicine ID"
                className="border rounded px-2 py-1 flex-grow"
                required
              />
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplyChainPage;