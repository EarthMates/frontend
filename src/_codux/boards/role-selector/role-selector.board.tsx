import { createBoard } from '@wixc3/react-board';
import { RoleSelector } from '../../../components/role-selector/role-selector';

export default createBoard({
    name: 'RoleSelector',
    Board: () => (
        <RoleSelector
            onRoleSelected={function (id: string): void {
                throw new Error('Function not implemented.');
            }}
        />
    ),
    isSnippet: true,
});
