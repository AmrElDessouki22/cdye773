'use client';

import React from 'react';

const ErrorBoundary: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-xl">{error.message}</p>
    </div>
  );
};

export default ErrorBoundary;
