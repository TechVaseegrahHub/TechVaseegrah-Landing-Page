import React from "react";

export const Label = ({ children, className, ...props }: { children: React.ReactNode; className?: string }) => {
  return (
    <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 ${className || ""}`} {...props}>
      {children}
    </label>
  );
};
