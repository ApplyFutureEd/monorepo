import { Program } from '@applyfuture/models';
import { Button } from '@applyfuture/ui';
import { faEye, faPencil } from '@fortawesome/pro-light-svg-icons';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
    value: Program;
};

const ActionFormatter: FC<Props> = (props) => {
    const { value } = props;

    return (
        <div className="space-x-2">
            <Link href={`/programs/${value.slug}`}>
                <Button startIcon={faEye} type="button" variant="secondary" />
            </Link>
            <Link href={`/admin/update/program/${value.id}`}>
                <Button startIcon={faPencil} type="button" variant="secondary" />
            </Link>
        </div>
    );
};

export default ActionFormatter;
