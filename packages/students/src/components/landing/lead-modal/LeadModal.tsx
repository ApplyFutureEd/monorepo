import { Modal } from '@applyfuture/ui';
import LeadModalForm from '@components/forms/landing/lead-modal/LeadModalForm';
import Cookies from 'js-cookie';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const LeadModal: FC = () => {
    const { t } = useTranslation();

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (Cookies.get('lead-modal')) {
            return;
        }
        setTimeout(() => {
            setOpen(true);
            Cookies.set('lead-modal', new Date().toISOString());
        }, 5000);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal open={isOpen} size="small" onClose={handleClose}>
            <h2 className="mt-1 text-gray-900 text-xl font-extrabold tracking-tight leading-9 sm:text-xl sm:leading-10">
                {t('landing:lead-modal-title')}
            </h2>
            <p className="mt-1">{t('landing:lead-modal-description')}</p>
            <div className="flex justify-center mt-4">
                <LeadModalForm setOpen={setOpen} />
            </div>
        </Modal>
    );
};

export default LeadModal;
