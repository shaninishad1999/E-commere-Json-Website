import React from 'react';
import indiaOrganicLogo from '../assets/certified/indiaorganiclogo.jpeg';
import ecoCertLogo from '../assets/certified/ecocertlogo.jpeg';
import jaivikBharatLogo from '../assets/certified/jaivikbharatlogo.jpeg';
import usdaOrganicLogo from '../assets/certified/usdaorganiclogo.jpeg';
import haccpLogo from '../assets/certified/haccplogo.jpeg';
import nocaLogo from '../assets/certified/nocalogo.jpeg';

const CertificationLogos = () => {
  const certifications = [
    indiaOrganicLogo,
    ecoCertLogo,
    jaivikBharatLogo,
    usdaOrganicLogo,
    haccpLogo,
    nocaLogo
  ];

  return (
    <div className="  py-8 container">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-800">Our Certifications</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {certifications.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-40 h-40 p-0 rounded-full bg-white  shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={logo}
              alt="Certification Logo"
              className="max-w-7xl max-h-full object-contain rounded-full shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationLogos;
