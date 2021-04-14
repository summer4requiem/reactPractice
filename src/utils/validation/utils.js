export const requiredField = (value) => {
    if (value) return undefined;
    return `Field is required`;
}

const maxLength = max => value => value && value.length > max ?
    `Must be ${max} characters or less` : undefined;

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address try something like this: example@email.com' : undefined

export const maxLength15 = maxLength(15);
export const maxLength100 = maxLength(100);