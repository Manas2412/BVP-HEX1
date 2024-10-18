import React, { useState } from 'react';
import { ArrowRight, Package } from 'lucide-react';

const MedicineTrackingPage = () => {
  const [medicineId, setMedicineId] = useState('');
  const [trackingStage, setTrackingStage] = useState(null);

  const mockMedicines = [
    { id: 1, name: 'Aspirin', description: 'Pain reliever', stage: 'Sold' },
    { id: 2, name: 'Amoxicillin', description: 'Antibiotic', stage: 'Retail' },
    { id: 3, name: 'Lisinopril', description: 'Blood pressure medication', stage: 'Distribution' },
    { id: 4, name: 'Metformin', description: 'Diabetes medication', stage: 'Manufacture' },
    { id: 5, name: 'Simvastatin', description: 'Cholesterol medication', stage: 'Raw Materials' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const medicine = mockMedicines.find(med => med.id === parseInt(medicineId));
    setTrackingStage(medicine ? medicine.stage : 'Not Found');
  };

  const renderTrackingInfo = () => {
    if (!trackingStage) return null;

    const stages = ['Raw Materials', 'Manufacture', 'Distribution', 'Retail', 'Sold'];
    const currentStageIndex = stages.indexOf(trackingStage);

    return (
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-bold mb-6">Tracking Information</h4>
        <div className="flex justify-between items-center">
          {stages.map((stage, index) => (
            <div key={stage} className="flex flex-col items-center flex-1">
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center text-center p-2 ${
                  index <= currentStageIndex ? 'bg-green-500 text-white' : 'bg-gray-200'
                }`}
              >
                <Package size={24} />
              </div>
              <p className="mt-2 text-sm font-medium">{stage}</p>
              {index < stages.length - 1 && (
                <ArrowRight className="text-gray-400 mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Medicine Tracking System</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <label htmlFor="medicineId" className="mr-2 font-medium">Medicine ID:</label>
          <input 
            type="text" 
            id="medicineId"
            value={medicineId} 
            onChange={(e) => setMedicineId(e.target.value)}
            placeholder="Enter Medicine ID"
            required
            className="border border-gray-300 rounded px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Track
          </button>
        </div>
      </form>

      {renderTrackingInfo()}

      <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-600">Available Medicines</h3>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Processing Stage</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockMedicines.map(medicine => (
              <tr key={medicine.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{medicine.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{medicine.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{medicine.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{medicine.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicineTrackingPage;