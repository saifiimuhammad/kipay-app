import { useState } from "react";

const UserManagement = () => {
  const [isIndividual, setIsIndividual] = useState(true);

  const handleToggle = () => {
    setIsIndividual(!isIndividual);
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <button
          onClick={handleToggle}
          className={`relative inline-flex items-center w-48 h-10 rounded-full p-1 transition-colors duration-300 ease-in-out ${
            isIndividual ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute w-20 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              isIndividual ? "translate-x-0" : "translate-x-28"
            }`}
          />
          <span
            className={`flex-1 text-center text-sm font-medium transition-colors duration-300 ${
              isIndividual ? "text-white" : "text-gray-800"
            }`}
          >
            Individual
          </span>
          <span
            className={`flex-1 text-center text-sm font-medium transition-colors duration-300 ${
              isIndividual ? "text-gray-400" : "text-white"
            }`}
          >
            Corporate
          </span>
        </button>
      </div>

      <div className="w-full h-10 bg-black flex items-center justify-center">
        <svg width="200" height="20" className="relative">
          <polyline
            points="10,10 80,10 90,0 190,0"
            stroke="gray"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default UserManagement;
