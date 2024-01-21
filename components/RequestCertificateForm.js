import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
const RequestCertificateForm = () => {
  const [formData, setFormData] = useState({
    address_to: '',
    purpose: '',
    issued_on: '',
    employee_id: '',
  });

  const [errorMessages, setErrorMessages] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://zalexinc.azure-api.net/request-certificate?subscription-ke=[type key here]',
        //key=65d10a70c9a74056b1df4e7190024b1b
        formData
      );

      if (response.data.response === 'Ok') {
        alert('Request submitted successfully!');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessages(error.response.data.errors);
      }
    }
  };

  
  
  return (
<div class="bg-img">
      <h2>Request Certificate</h2>
      <form class="container">
        <label>Address to:</label>
        <textarea
          name="address_to"
          value={formData.address_to}
          onChange={handleInputChange}
        />
        {errorMessages.address_to && <p>{errorMessages.address_to}</p>}

        <label>Purpose:</label>
        <textarea
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
        />
        {errorMessages.purpose && <p>{errorMessages.purpose}</p>}

        <label>Issued on:</label>
        <input className='input'
          type="date"
          name="issued_on"
          value={formData.issued_on}
          onChange={handleInputChange}
        />
        {errorMessages.issued_on && <p>{errorMessages.issued_on}</p>}

        <label>Employee ID:</label>
        <input
          type="text"
          name="employee_id"
          value={formData.employee_id}
          onChange={handleInputChange}
        />
        {errorMessages.employee_id && <p>{errorMessages.employee_id}</p>}

        <button className='btn' type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RequestCertificateForm;
