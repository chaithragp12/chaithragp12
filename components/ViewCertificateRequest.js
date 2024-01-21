import React from 'react';

const ViewCertificateRequest = ({ request }) => {
  return (
    <div>
      <h2>Certificate Request Details</h2>
      <p>Reference No.: {request.reference_no}</p>
      <p>Address to: {request.address_to}</p>
      <p>Purpose: {request.purpose}</p>
      <p>Issued on: {request.issued_on}</p>
      <p>Status: {request.status}</p>

      {request.status === 'Done' && (
        <iframe
          title="Certificate Viewer"
          src={`https://example.com/certificates/${request.reference_no}`}
          width="600"
          height="400"
        />
      )}
    </div>
  );
};

export default ViewCertificateRequest;
