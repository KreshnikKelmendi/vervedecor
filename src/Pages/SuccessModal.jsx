import React, { useEffect } from 'react';

const SuccessModal = ({ message, onClose, duration }) => {
  // Automatically close the modal after the specified duration
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, duration);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [onClose, duration]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-red-400 text-white h-20 justify-center items-center flex px-4 rounded shadow-md">
        <p>{message}</p>
        {/* You can customize the modal contents and styling as needed */}
      </div>
    </div>
  );
};

export default SuccessModal;
