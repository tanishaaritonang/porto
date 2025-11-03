import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-card rounded-xl shadow-sm border border-border overflow-hidden hover-lift ${className}`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>;
};

const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>{children}</h3>;
};

const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <p className={`text-gray-600 ${className}`}>{children}</p>;
};

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <div className={`p-6 pt-4 ${className}`}>{children}</div>;
};

const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <div className={`p-6 pt-4 border-t border-gray-100 ${className}`}>{children}</div>;
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };