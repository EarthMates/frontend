import { createBoard } from '@wixc3/react-board';
import { StageSelector } from '../../../components/stage-selector/stage-selector';

export default createBoard({
    name: 'StageSelector',
    Board: () => (
        <StageSelector
            selectedStages={['']}
            onStageSelected={function (stageName: string): void {
                throw new Error('Function not implemented.');
            }}
            onStagesEmpty={function (isEmpty: boolean): void {
                throw new Error('Function not implemented.');
            }}
        />
    ),
    isSnippet: true,
});
