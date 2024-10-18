import React, { useState } from 'react';

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
      <div className="mt-8">
        <h4 className="text-xl font-bold mb-4">Tracking Information</h4>
        <div className="flex justify-between">
          {stages.map((stage, index) => (
            <div key={stage} className="flex flex-col items-center">
              <div 
                className={`w-24 h-24 rounded-full flex items-center justify-center text-center p-2 ${
                  index <= currentStageIndex ? 'bg-green-500 text-white' : 'bg-gray-200'
                }`}
              >
                {stage}
              </div>
              {index < stages.length - 1 && (
                <div className="w-full h-1 bg-gray-300 mt-4">
                  <div 
                    className={`h-full ${
                      index < currentStageIndex ? 'bg-green-500' : 'bg-gray-300'
                    }`} 
                    style={{width: index < currentStageIndex ? '100%' : '0%'}}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Medicine Tracking System</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex items-center justify-center">
          <label htmlFor="medicineId" className="mr-2">Medicine ID:</label>
          <input 
            type="text" 
            id="medicineId"
            value={medicineId} 
            onChange={(e) => setMedicineId(e.target.value)}
            placeholder="Enter Medicine ID"
            required
            className="border border-gray-300 rounded px-2 py-1 mr-2"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
            Track
          </button>
        </div>
      </form>

      {renderTrackingInfo()}

      <h3 className="text-2xl font-bold mt-12 mb-4">Available Medicines</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Medicine ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Current Processing Stage</th>
            </tr>
          </thead>
          <tbody>
            {mockMedicines.map(medicine => (
              <tr key={medicine.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{medicine.id}</td>
                <td className="border border-gray-300 px-4 py-2">{medicine.name}</td>
                <td className="border border-gray-300 px-4 py-2">{medicine.description}</td>
                <td className="border border-gray-300 px-4 py-2">{medicine.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicineTrackingPage;