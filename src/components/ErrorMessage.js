import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
      <AlertCircle className="w-5 h-5 text-red-500" />
      <div>
        <h3 className="font-medium text-red-800">Something went wrong</h3>
        <p className="text-red-600 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;