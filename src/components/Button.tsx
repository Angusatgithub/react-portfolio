import React from 'react';

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode | React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({ primary = false, children, onClick, icon }) => {
  const buttonClass = primary ? 'button-primary' : 'button-secondary';

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

export default Button;
