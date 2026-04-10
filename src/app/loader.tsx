import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <style jsx>{`
        .google-spinner {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 4px solid transparent;
          border-top-color: #4285F4; /* Google blue */
          border-right-color: #34A853; /* Google green */
          border-bottom-color: #FBBC05; /* Google yellow */
          border-left-color: #EA4335; /* Google red */
          animation: google-spin 1s linear infinite;
        }

        @keyframes google-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      
      <div 
        className="google-spinner"
        role="status" 
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default Loader;