import { FC, MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'link' | 'secondary' | 'danger';
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseClasses =
    'inline-block px-4 py-2 rounded-lg font-semibold text-white focus:outline-none';
  let classes;

  switch (variant) {
    case 'primary':
      classes = `${baseClasses} bg-blue-500 hover:bg-blue-600`;
      break;
    case 'link':
      classes = `${baseClasses} bg-indigo-600  hover:bg-indigo-700`;
      break;
    case 'secondary':
      classes = `${baseClasses} bg-gray-500 hover:bg-gray-600`;
      break;
    case 'danger':
      classes = `${baseClasses} bg-red-500 hover:bg-red-600`;
      break;
    default:
      classes = `${baseClasses} bg-blue-500 hover:bg-blue-600`;
  }

  return (
    <button
      className={`${classes} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
