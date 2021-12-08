class Errors {
    constructor() {
        this.errors = {};
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    clear(field) {
        if (this.has(field)) {
            delete this.errors[field];
        }
    }

    empty() {
        Object.keys(this.errors).forEach(field => this.clear(field));
    }

    first() {
        const [field = null] = Object.keys(this.errors);

        return this.get(field);
    }

    get(field) {
        return this.has(field) ? this.errors[field][0] : null;
    }

    has(field) {
        return Object.keys(this.errors).includes(field);
    }

    set(errors) {
        this.errors = errors;
    }
}

export default Errors;
