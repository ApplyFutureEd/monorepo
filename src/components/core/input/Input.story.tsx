import Input from '@components/core/input/Input';
import React, { ReactNode } from 'react';

export default {
    component: Input,
    title: 'Input'
};

export const Default = (): ReactNode => <Input label="First Name" />;

export const TextArea = (): ReactNode => <Input label="Message" rows={5} />;

export const WithPlaceholder = (): ReactNode => (
    <Input label="Email" placeholder="Enter your email address" />
);

export const WithTooltip = (): ReactNode => (
    <Input
        label="Passport Number"
        tooltip="We collect your passport information for identity verification proposes, your school or program of interest may require this information to process your application. If applicable, it may also be used for processing your visa."
    />
);

export const Optional = (): ReactNode => <Input optional label="Middle Name" />;

export const Disabled = (): ReactNode => <Input disabled label="Student ID" />;

export const onError = (): ReactNode => (
    <Input
        label="First Name"
        meta={{
            error: 'This field is required',
            initialTouched: false,
            touched: true,
            value: ''
        }}
    />
);

export const Loading = (): ReactNode => <Input isLoading label="First Name" />;
