import { Modal } from '@applyfuture/ui';
import { FC } from 'react';

const CompletionModal: FC = () => {
    return (
        <Modal
            open={true}
            onClose={() => {
                console.log(close);
            }}>
            test
        </Modal>
    );
};

export default CompletionModal;
