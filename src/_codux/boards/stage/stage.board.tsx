import { createBoard } from '@wixc3/react-board';
import { Stage } from '../../../components/stage/stage';

export default createBoard({
    name: 'Stage',
    Board: () => (
        <Stage
            stageName={''}
            onClick={function (stageName: string): void {
                throw new Error('Function not implemented.');
            }}
            selected={false}
        />
    ),
    isSnippet: true,
});
