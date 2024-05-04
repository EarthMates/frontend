import { createBoard } from '@wixc3/react-board';
import { Industry } from '../../../components/onboarding/industry/industry';

export default createBoard({
    name: 'Industry',
    Board: () => <Industry />,
    isSnippet: true,
});