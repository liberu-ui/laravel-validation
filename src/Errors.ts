```typescript
class Errors {
  /**
   * Holds the error messages for each field.
   */
  private errors: { [field: string]: string[] } = {};

  /**
   * Returns all error messages.
   *
   * @returns {Object} All error messages.
   */
  public all(): { [field: string]: string[] } {
    return this.errors;
  }

  /**
   * Checks if there are any error messages.
   *
   * @returns {boolean} True if there are error messages, false otherwise.
   */
  public any(): boolean {
    return Object.keys(this.errors).length > 0;
  }

  /**
   * Clears the error messages for a specific field.
   *
   * @param {string} field - The field name.
   */
  public clear(field: string): void {
    if (this.has(field)) {
      delete this.errors[field];
    }
  }

  /**
   * Clears all error messages.
   */
  public empty(): void {
    Object.keys(this.errors).forEach((field) => this.clear(field));
  }

  /**
   * Returns the first error message for a specific field.
   *
   * @param {string} field - The field name.
   * @returns {string|null} The first error message for the field, or null if there are no error messages or the field is not found.
   */
  public first(field: string): string | null {
    const keys = Object.keys(this.errors);
    const currentField = keys.find((key) => key === field);
    return this.get(currentField);
  }

  /**
   * Returns the error messages for a specific field.
   *
   * @param {string} field - The field name.
   * @returns {string[]} The error messages for the field, or an empty array if there are no error messages or the field is not found.
   */
  public get(field: string): string[] {
    return this.has(field) ? this.errors[field] : [];
  }

  /**
   * Checks if there are error messages for a specific field.
   *
   * @param {string} field - The field name.
   * @returns {boolean} True if there are error messages for the field, false otherwise.
   */
  public has(field: string): boolean {
    return Object.keys(this.errors).includes(field);
  }

  /**
   * Sets the error messages for all fields.
   *
   * @param {Object} errors - The error messages for each field.
   */
  public set(errors: { [field: string]: string[] }): void {
    this.errors = errors;
  }
}

export default Errors;
```