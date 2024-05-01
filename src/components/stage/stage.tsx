import React from 'react';
import classNames from 'classnames';
import styles from './stage.module.scss';

export interface StageProps {
    className?: string;
    stageName: string;
    onClick: (stageName: string) => void;
    selected: boolean;
}

export const Stage = ({ className, stageName, onClick, selected }: StageProps) => {
    const handleClick = () => {
        onClick(stageName);
    };

    return (
        <button
            className={classNames(styles.root, className, { [styles.selected]: selected })}
            onClick={handleClick}
        >
            {stageName}
        </button>
    );
};
