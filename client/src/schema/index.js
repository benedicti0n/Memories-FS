import * as yup from 'yup';

const formSchema = yup.object().shape({
    creator: yup.string()
        .transform(value => {
            // Transform first letter of first name and last name to uppercase
            const names = value.split(' ');
            const transformedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
            return transformedNames.join(' ');
        })
        .matches(/^[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*$/, 'Creator field should have first name and last name with a space in between')
        .required('Creator is required'),

    title: yup.string()
        .max(40, 'Title must be at most 40 characters')
        .required('Title is required'),

    message: yup.string()
        .min(50, 'Message must be at least 50 characters')
        .max(200, 'Message must be at most 200 characters')
        .required('Message is required'),

    tags: yup.string()
        .transform(value => {
            // Split tags by comma, trim whitespace, and append # to each tag
            if (!value) return '';
            const tags = value.split(',').map(tag => `#${tag.trim()}`);
            return tags.join(',');
        })
});

export default formSchema;
