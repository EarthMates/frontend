import classNames from 'classnames';
import styles from './role-selector.module.scss';
import ArrowRight from '../../assets/arrow-right.svg';
import BuildingIcon from '../../assets/building.svg';
import ManagerIcon from '../../assets/manager.svg';

export interface RoleSelectorProps {
    className?: string;
    onRoleSelected: (id: string) => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RoleSelector = ({ className, onRoleSelected }: RoleSelectorProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.p}>Welcome to Earthmates</p>
            <h1 className={styles.h1}>Please select your role or interest on Earthmates</h1>

            <div className={styles.role} id="startup" onClick={() => onRoleSelected('startup')}>
                <img src={BuildingIcon} alt="building" />
                <div className={styles.description}>
                    <h1 className={styles.h1}>Startup Founder</h1>
                    <p className={styles.p}>
                        For startup founders looking to showcase their venture, attract investment,
                        and drive growth.
                    </p>
                </div>
                <img src={ArrowRight} alt="building" />
            </div>

            <div className={styles.role} id="investor" onClick={() => onRoleSelected('investor')}>
                <img src={ManagerIcon} alt="manager" />
                <div className={styles.description}>
                    <h1 className={styles.h1}>Investor</h1>
                    <p className={styles.p}>
                        For investors seeking to discover promising startups, explore investment
                        opportunities, and support entrepreneurship.
                    </p>
                </div>
                <img src={ArrowRight} alt="building" />
            </div>
        </div>
    );
};
