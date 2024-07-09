import React from 'react';
import { useFormik } from 'formik'
import formSchema from '../schema';

const InputForm = () => {
    const { handleSubmit, handleChange, values, handleBlur } = useFormik({
        initialValues: {
            creator: ""
        },
        validationSchema: formSchema,
    }
    );

    return (
        <div className='w-[30%] h-[30rem] bg-pink-400'>
            <form onSubmit={handleSubmit}>
                <h3>Log your Memory</h3>
                <label htmlFor="creator">Creator</label>
                <input type="text" name="creator" onChange={handleChange} onBlur={handleBlur} value={values.creator} />

                <label htmlFor="title">Title</label>
                <input type="text" name='title' />

                <label htmlFor="message">Message</label>
                <input type="text" name='message' />

                <label htmlFor="tags">Tags(comma separated)</label>
                <input type="text" name='tags' />

                <label htmlFor="picture">Picture</label>
                <input type="file" name="picture" />

                <div>
                    <button>Submit</button>
                    <button>Clear</button>
                </div>
            </form>
        </div>
    );
};

export default InputForm;