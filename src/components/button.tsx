import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-blue-600 active:bg-blue-700 dark:hover:bg-blue-400 dark:active:bg-blue-500',
    primary: 'bg-primary text-primary-foreground hover:bg-blue-600 active:bg-blue-700 dark:hover:bg-blue-400 dark:active:bg-blue-500',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-700',
    outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground active:bg-gray-100 dark:active:bg-gray-800',
    ghost: 'hover:bg-accent hover:text-accent-foreground active:bg-gray-100 dark:active:bg-gray-800'
  };
  
  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg',
    icon: 'h-10 w-10'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };