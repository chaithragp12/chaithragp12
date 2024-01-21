import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestsList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          'https://zalexinc.azure-api.net/request-list?subscription-key=65d10a70c9a74056b1df4e7190024b1b'
        );

        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Requests List</h2>
      <table>
        <thead>
          <tr>
            <th>Reference No.</th>
            <th>Address to</th>
            <th>Purpose</th>
            <th>Issued on</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.reference_no}>
              <td>{request.reference_no}</td>
              <td>{request.address_to}</td>
              <td>{request.purpose}</td>
              <td>{request.issued_on}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsList;
