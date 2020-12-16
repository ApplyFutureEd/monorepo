import * as Showdown from 'showdown';

const converter = new Showdown.Converter({
    simplifiedAutoLink: true,
    strikethrough: true,
    tables: true,
    tasklists: true
});

type MarkdownOptions = {
    value: string;
};

export const markdown = (options: MarkdownOptions): string => {
    const { value } = options;

    return converter.makeHtml(value);
};
