import { Button } from '@applyfuture/ui';
import { Plugin, Template, TemplatePlaceholder } from '@devexpress/dx-react-core';
import { faUndo } from '@fortawesome/pro-light-svg-icons';
import { withStyles } from '@material-ui/core';
import React, { Dispatch, FC, SetStateAction } from 'react';

type ResizingPanelProps = {
    changeMode: Dispatch<SetStateAction<string>>;
    defaultValue: string;
    resetWidths: () => void;
};

type ResetWidthButtonBaseProps = {
    resetWidths: () => void;
};

const styles = () => ({
    button: {
        fontSize: '14px',
        height: '32px',
        paddingLeft: '8px',
        paddingRight: '8px'
    },
    container: {
        maxWidth: '17em'
    },
    input: {
        fontSize: '14px',
        paddingLeft: '8px',
        width: '78px'
    },
    label: {
        fontSize: '14px'
    },

    selector: {
        height: '32px'
    }
});

const ResetWidthButtonBase: FC<ResetWidthButtonBaseProps> = (props) => {
    const { resetWidths } = props;

    return (
        <Button startIcon={faUndo} variant="secondary" onClick={resetWidths}>
            Reset widths
        </Button>
    );
};
const ResetWidthButton = withStyles(styles, { name: 'ResetWidthButton' })(ResetWidthButtonBase);

const ResizingPanel: FC<ResizingPanelProps> = (props) => (
    <Plugin name="ResizingPanel">
        <Template name="toolbarContent">
            <ResetWidthButton {...props} />
            <TemplatePlaceholder />
        </Template>
    </Plugin>
);

export default ResizingPanel;
