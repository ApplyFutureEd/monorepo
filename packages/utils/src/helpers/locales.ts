type Options = {
    languageCodeOnly: boolean;
};

export const getBrowserLocales = (options: Options): string[] | undefined => {
    const browserLocales =
        navigator.languages === undefined ? [navigator.language] : navigator.languages;

    if (!browserLocales) {
        return undefined;
    }

    return browserLocales.map((locale) => {
        const trimmedLocale = locale.trim();

        return options.languageCodeOnly ? trimmedLocale.split(/-|_/)[0] : trimmedLocale;
    });
};
