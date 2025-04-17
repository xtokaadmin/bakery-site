import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

export const Label: React.FC<LabelProps> = ({ 
  children, 
  className = '', 
  htmlFor,
  ...props 
}) => {
  return (
    <label 
      htmlFor={htmlFor} 
      className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}; 