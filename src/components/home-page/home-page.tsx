import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './home-page.module.scss';
import Slider from '../slider/slider';
import Button from '../button/button';
import { RoleSelector } from '../role-selector/role-selector';
import { StageSelector } from '../stage-selector/stage-selector';
import { IndustrySelector } from '../industry-selector/industry-selector';

export interface HomePageProps {
    className?: string;
}

interface UserData {
    user_type: string;
    stage: string[];
}

export const HomePage = ({ className }: HomePageProps) => {
    const userFlow: string[] = ['RoleSelector', 'StageSelector', 'IndustrySelector'];

    const [userData, setUserData] = useState<UserData>({
        user_type: 'admin',
        stage: [],
    });

    const [position, setPosition] = useState(0);
    const [currentComponent, setCurrentComponent] = useState(userFlow[0]);

    const [areStagesEmpty, setAreStagesEmpty] = useState(false);

    // Callback function to handle stages empty status change
    const handleStagesEmptyChange = (isEmpty: boolean) => {
        setAreStagesEmpty(isEmpty);
    };

    const findIndexInArray = (searchString: string): number => {
        return userFlow.indexOf(searchString);
    };

    const handleForward = async () => {
        const index = findIndexInArray(currentComponent);
        if (index === userFlow.length - 1) {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });
                if (response.ok) {
                    // Handle success
                    console.log('User data sent successfully.');
                } else {
                    // Handle error
                    console.error('Failed to send user data.');
                }
            } catch (error) {
                // Handle network errors
                console.error('Network error:', error);
            }
        } else {
            setCurrentComponent(userFlow[index + 1]);
        }
    };

    const handleBackward = () => {
        const index = findIndexInArray(currentComponent);
        if (index > 0) {
            setCurrentComponent(userFlow[index - 1]);
        }
    };

    const handleRoleSelected = (id: string) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            user_type: id,
        }));
        setCurrentComponent('StageSelector');
    };

    const handleStageSelected = (stageName: string) => {
        // Toggle stage selection
        const updatedStages = [...userData.stage];
        const index = updatedStages.indexOf(stageName);
        if (index === -1) {
            updatedStages.push(stageName);
        } else {
            updatedStages.splice(index, 1);
        }
        setUserData((prevUserData) => ({
            ...prevUserData,
            stage: updatedStages,
        }));
    };

    const renderComponent = () => {
        switch (currentComponent) {
            case 'RoleSelector':
                return <RoleSelector onRoleSelected={handleRoleSelected} />;
            case 'StageSelector':
                return (
                    <StageSelector
                        selectedStages={userData.stage}
                        onStageSelected={handleStageSelected}
                        onStagesEmpty={handleStagesEmptyChange}
                    />
                );
            case 'IndustrySelector':
                return <IndustrySelector role={userData.user_type} stage={userData.stage} />;
            default:
                return null;
        }
    };

    useEffect(() => {
        setPosition(findIndexInArray(currentComponent) * 7.15);
    }, [currentComponent]);

    const index = findIndexInArray(currentComponent);

    return (
        <div className={classNames(styles.root)}>
            <Slider position={position} />
            <div className={styles.registration}>
                {index > 0 ? (
                    <div className={styles.button}>
                        <Button buttonText="Back" onClick={handleBackward} />
                    </div>
                ) : (
                    <div className={styles.placeholder} />
                )}
                <div className={styles.form}>{renderComponent()}</div>
                {index === 0 || areStagesEmpty ? (
                    <div className={styles.placeholder} />
                ) : (
                    <div className={styles.button}>
                        <Button buttonText="Next" onClick={handleForward} />
                    </div>
                )}
            </div>
        </div>
    );
};
