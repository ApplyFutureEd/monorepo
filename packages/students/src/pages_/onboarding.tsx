import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import { FC } from 'react';

const Onboarding: FC = () => {
    return (
        <LandingLayout title="Onboarding">
            <Chatbot
                avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                name="Charly">
                <p className="mt-1">Bonjour ! Je suis Charly.</p>
                <p className="mt-1">
                    Apparemment vous souhaitez étudier dans une école en Europe, faisons un tour de
                    votre projet ensemble.
                </p>
                <p className="mt-6">Où avez-vous fais vos études ?</p>
            </Chatbot>
        </LandingLayout>
    );
};

export default Onboarding;
