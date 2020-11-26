class AmplifyError extends Error {
    code: string;
    constructor(code: string) {
        super();
        this.code = code;
        Object.setPrototypeOf(this, AmplifyError.prototype);
    }
}

export default AmplifyError;
