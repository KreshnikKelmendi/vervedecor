import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="absolute right-1 bottom-1 items-center justify-center">
        <div className="text-white bg-emerald-600 h-auto w-fit justify-center items-center flex px-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.25 14.639a1.053 1.053 0 0 1-1.487 0l-4.016-4.017a1.053 1.053 0 1 1 1.487-1.487l3.013 3.014 6.25-6.25a1.053 1.053 0 1 1 1.487 1.487l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
          <div className='py-6 text-center'>
            <p>{message}</p>
            <Link className='text-gray-700 mt-6' to="/cart">Shko në shportë</Link>
          </div>
        </div>
    </div>
  );
};

export default SuccessModal;
