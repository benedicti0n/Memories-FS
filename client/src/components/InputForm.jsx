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
        <div className='w-[30%] h-[30rem] bg-pink-400 flex justify-center'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-2xl'>Log your Memory</h3>
                <label htmlFor="creator">Creator</label><br />
                <input type="text" name="creator" onChange={handleChange} onBlur={handleBlur} value={values.creator} /><br />

                <label htmlFor="title">Title</label><br />
                <input type="text" name='title' /><br />

                <label htmlFor="message">Message</label><br />
                <input type="text" name='message' /><br />

                <label htmlFor="tags">Tags(comma separated)</label><br />
                <input type="text" name='tags' /><br />

                <label htmlFor="picture">Picture</label><br />
                <input type="file" name="picture" /><br />

                <div className='flex w-[80%] bg-slate-100'>
                    <button className='w-[70%] bg-green-500'>Submit</button>
                    <button className='w-[30%] bg-red-500'>Clear</button>
                </div>
            </form>
        </div>
    );
};

export default InputForm;