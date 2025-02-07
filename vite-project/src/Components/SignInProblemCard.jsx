import React from 'react';

const SignInProblemCard = ({ message }) => {
  return (
    <div className="border border-red-500 bg-white rounded-lg shadow-md flex p-4 mb-4 relative">
      <div className="bg-red-600 rounded-l-lg w-2 absolute left-0 top-0 bottom-0"></div>
      <div className="ml-4 flex items-start">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-red-600 text-white font-bold rounded-full">
          !
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium ">There was a problem</h3>
          <p className="text-sm text-gray-800">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SignInProblemCard;
