import React from 'react';
import Button_module from './button.module.scss';

interface ButtonComponentProps {
    className?: string;
    buttonText: string;
    onClick: () => void;
}

export const ButtonComponent = ({ className, buttonText, onClick }: ButtonComponentProps) => {
    return (
        <button onClick={onClick} className={Button_module.root}>
            {buttonText}
        </button>
    );
};

export default ButtonComponent;
