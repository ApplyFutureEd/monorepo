import Input from '@components/core/input/Input';
import { withKnobs } from '@storybook/addon-knobs';
import React, { ReactNode } from 'react';

export default {
    component: Input,
    decorators: [withKnobs],
    title: 'Input'
};

export const Default = (): ReactNode => <Input label="First Name" name="firstName" />;

export const WithPlaceholder = (): ReactNode => (
    <Input label="Email" name="email" placeholder="Enter your email address" />
);

export const WithTooltip = (): ReactNode => (
    <Input
        label="Passport Number"
        name="passportNumber"
        tooltip="We collect your passport information for identity verification proposes, your school or program of interest may require this information to process your application. If applicable, it may also be used for processing your visa."
    />
);

export const Optional = (): ReactNode => <Input optional label="Middle Name" name="middleName" />;

export const Disabled = (): ReactNode => <Input disabled label="Student ID" name="studentId" />;

export const onError = (): ReactNode => (
    <Input
        errors={{ firstName: { message: 'This field is required', type: 'required' } }}
        label="First Name"
        name="firstName"
    />
);

export const Loading = (): ReactNode => <Input isLoading label="First Name" name="firstName" />;
