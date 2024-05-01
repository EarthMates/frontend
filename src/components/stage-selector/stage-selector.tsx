import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './stage-selector.module.scss';
import { Stage } from '../stage/stage';

export interface StageSelectorProps {
    className?: string;
    selectedStages: string[];
    onStageSelected: (stageName: string) => void;
    onStagesEmpty: (isEmpty: boolean) => void; // Callback to notify HomePage if stages are empty
}

export const StageSelector = ({
    className,
    selectedStages,
    onStageSelected,
    onStagesEmpty,
}: StageSelectorProps) => {
    const handleStageClick = (stageName: string) => {
        onStageSelected(stageName);
    };

    // Notify HomePage if stages are empty
    useEffect(() => {
        onStagesEmpty(selectedStages.length === 0);
    }, [selectedStages, onStagesEmpty]);

    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.h1}>What's your company's current stage?</h1>
            <p className={styles.p}>Choose one that applies to your company</p>

            <div className={styles.stages}>
                <Stage
                    stageName="Pre-Seed"
                    onClick={handleStageClick}
                    selected={selectedStages.includes('Pre-Seed')}
                />
                <Stage
                    stageName="Seed"
                    onClick={handleStageClick}
                    selected={selectedStages.includes('Seed')}
                />
                <Stage
                    stageName="Series A"
                    onClick={handleStageClick}
                    selected={selectedStages.includes('Series A')}
                />
                <Stage
                    stageName="Series B"
                    onClick={handleStageClick}
                    selected={selectedStages.includes('Series B')}
                />
                <Stage
                    stageName="Series C"
                    onClick={handleStageClick}
                    selected={selectedStages.includes('Series C')}
                />
                <Stage
                    stageName="Bridge"
                    onClick={handleStageClick}
                    selected={selectedStages.includes('Bridge')}
                />
            </div>
        </div>
    );
};
