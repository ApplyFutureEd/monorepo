import { faCopy, faExternalLinkSquare, faPencil, faTrash } from '@fortawesome/pro-light-svg-icons';
import { render } from '@testing-library/react';

import ContextMenu, { ContextMenuItem } from './ContextMenu';

describe.skip('ContextMenu', () => {
    const id = 'programs';
    const items: Array<ContextMenuItem> = [
        {
            icon: faPencil,
            label: 'Edit',
            onClick: jest.fn()
        },
        {
            icon: faCopy,
            label: 'Duplicate',
            onClick: jest.fn()
        },
        {
            icon: faExternalLinkSquare,
            label: 'Visit',
            onClick: jest.fn()
        },
        {
            icon: faTrash,
            label: 'Delete',
            onClick: jest.fn()
        }
    ];

    it('can render without crashing', async () => {
        render(<ContextMenu id={id} items={items} />);

        // should be tested with Cypress
    });
});
