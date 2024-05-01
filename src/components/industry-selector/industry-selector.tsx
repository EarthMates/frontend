import classNames from 'classnames';
import styles from './industry-selector.module.scss';

export interface IndustrySelectorProps {
    className?: string;
    role: string;
    stage: string[]; // Make stage prop optional
}

export const IndustrySelector = ({ className, role, stage }: IndustrySelectorProps) => {
    console.log(role);
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.h1}>Results</h1>
            <h2 className={styles.h2}>Role</h2>
            <p className={styles.p}>{role}</p>
            <h2 className={styles.h2}>Stages</h2>
            {stage &&
                stage.map((stageName, index) => (
                    <p key={index} className={styles.p}>
                        {stageName}
                    </p>
                ))}
        </div>
    );
};
