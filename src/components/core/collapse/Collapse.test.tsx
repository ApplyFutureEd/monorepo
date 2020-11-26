import Collapse from '@components/core/collapse/Collapse';
import { render, screen } from '@testing-library/react';

describe('Collapse', () => {
    const handleClick = jest.fn();
    const title = 'What happens after I submit all of my documents and pay my application fees?';
    const content = (
        <div>
            <p>
                After you have submitted all of your documents and paid your application fees,
                ApplyFuture will send your documents to the institutions that you selected for
                processing.
            </p>
            <br />
            <p>
                At this point, you have done everything you need to do. We will look after
                everything, including communicating with the institution(s) of your choice.
            </p>
            <br />
            <p>
                When ApplyFuture obtains your acceptance letter, we will notify you and help you
                through the visa application process.
            </p>
        </div>
    );

    it('can render without crashing', () => {
        render(<Collapse content={content} open={false} title={title} onClick={handleClick} />);

        const collapseTitle = screen.getByText(
            'What happens after I submit all of my documents and pay my application fees?'
        );

        expect(collapseTitle).toBeInTheDocument();
    });

    it('can render the content when open', () => {
        render(<Collapse content={content} open={true} title={title} onClick={handleClick} />);

        const collapseContent = screen.getByText(/After you have/);

        expect(collapseContent).toBeVisible();
    });

    it('can render a ChevronUp icon when open', () => {
        render(<Collapse content={content} open={true} title={title} onClick={handleClick} />);

        const chevronUpIcon = screen.getByRole('img', { hidden: true });

        expect(chevronUpIcon).toHaveClass('fa-chevron-up');
    });

    it('renders a ChevronDown icon when closed', () => {
        render(<Collapse content={content} open={false} title={title} onClick={handleClick} />);

        const chevronDownIcon = screen.getByRole('img', { hidden: true });

        expect(chevronDownIcon).toHaveClass('fa-chevron-down');
    });
});
