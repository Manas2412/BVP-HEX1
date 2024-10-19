import React, { useState } from 'react';

const AddMedStatic = () => {
  // Add some dummy data in the initial state
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: 'Paracetamol',
      description: 'Pain reliever and fever reducer',
      stage: 'Delivered'
    },
    {
      id: 2,
      name: 'Amoxicillin',
      description: 'Antibiotic for bacterial infections',
      stage: 'In Transit'
    },
    {
      id: 3,
      name: 'Ibuprofen',
      description: 'Anti-inflammatory medication',
      stage: 'Ordered'
    }
  ]);
  
  const [medName, setMedName] = useState('');
  const [medDes, setMedDes] = useState('');

  const handleChangeNameMED = (event) => {
    setMedName(event.target.value);
  };

  const handleChangeDesMED = (event) => {
    setMedDes(event.target.value);
  };

  const handleSubmitMED = (event) => {
    event.preventDefault();
    const newMedicine = {
      id: medicines.length + 1,
      name: medName,
      description: medDes,
      stage: 'Ordered'
    };
    setMedicines([...medicines, newMedicine]);
    setMedName('');
    setMedDes('');
  };

  return (
    <div className="p-4">
      <h5 className="text-xl font-bold mb-4">Add Medicine Order</h5>
      <form onSubmit={handleSubmitMED} className="flex gap-3 justify-center items-center mb-6">
        <input
          className="form-control-sm border-solid border-2 shadow p-2"
          type="text"
          value={medName}
          onChange={handleChangeNameMED}
          placeholder="Medicine Name"
          required
        />
        <input
          className="form-control-sm border-solid border-2 shadow p-2"
          type="text"
          value={medDes}
          onChange={handleChangeDesMED}
          placeholder="Medicine Description"
          required
        />
        <button className="btn btn-outline-success btn-sm shadow px-4 py-2 bg-green-500 text-white rounded" type="submit">
          Order
        </button>
      </form>

      <h5 className="text-xl font-bold mb-4">Ordered Medicines</h5>
      <div className="flex justify-center">
        <table className="table-auto w-full border-collapse border border-gray-400 shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Description</th>
              <th className="border border-gray-400 px-4 py-2">Current Stage</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td className="border border-gray-400 px-4 py-2">{medicine.id}</td>
                <td className="border border-gray-400 px-4 py-2">{medicine.name}</td>
                <td className="border border-gray-400 px-4 py-2">{medicine.description}</td>
                <td className="border border-gray-400 px-4 py-2">{medicine.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddMedStatic;
