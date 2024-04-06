import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Na Kontaktoni</h2>
        <p className="text-gray-600 mb-6">Ne do të donim të dëgjojmë nga ju. Na kontaktoni!</p>
        
        {/* Alternative Content */}
        <div>
          <p className="text-lg font-semibold mb-2">Faleminderit për interesin tuaj!</p>
          <p className="text-gray-700">Ne e vlerësojmë vizitën tuaj në faqen tonë. Nëse keni ndonjë pyetje ose koment, ju lutemi të na kontaktoni përmes informacionit të kontaktit të dhënë më poshtë.</p>
          <p className="text-gray-700">Email: example@example.com</p>
          <p className="text-gray-700">Telefoni: +1234567890</p>
        </div>
        {/* End of Alternative Content */}
        
      </div>
    </div>
  );
};

export default ContactUs;
