import React from 'react';
import { useFormik } from 'formik';
import formSchema from '../schema/index.js';
import axios from 'axios';

const InputForm = () => {
    const formik = useFormik({
        initialValues: {
            creator: "",
            title: "",
            message: "",
            tags: "",
            image: ""
        },
        validationSchema: formSchema,
        onSubmit: async () => {
            const { image } = formik.values
            const formData = new FormData()
            try {
                formData.append("file", image)
                formData.append("upload_preset", "banner")
                const res = await axios.post("https://api.cloudinary.com/v1_1/dst4663ws/image/upload", formData)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    });

    return (
        <div className='w-[30%] h-[30rem] bg-pink-400 flex justify-center'>
            <form onSubmit={formik.handleSubmit}>
                <h3 className='text-2xl'>Log your Memory</h3>

                <label htmlFor="creator">Creator</label><br />
                <input
                    type="text"
                    name="creator"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.creator}
                />
                {formik.touched.creator && formik.errors.creator ? <div>{formik.errors.creator}</div> : null}
                <br />

                <label htmlFor="title">Title</label><br />
                <input
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}
                <br />

                <label htmlFor="message">Message</label><br />
                <input
                    type="text"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}
                <br />

                <label htmlFor="tags">Tags (comma separated)</label><br />
                <input
                    type="text"
                    name="tags"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tags}
                />
                {formik.touched.tags && formik.errors.tags ? <div>{formik.errors.tags}</div> : null}
                <br />

                <label htmlFor="image">Picture</label><br />
                <input
                    type="file"
                    name="image"
                    onChange={(e) => formik.setFieldValue("image", e.target.files[0])}
                />
                {formik.touched.image && formik.errors.image ? <div>{formik.errors.image}</div> : null}
                <br />

                <div className='flex w-[80%] bg-slate-100'>
                    <button type='submit' className='w-[70%] bg-green-500'>Submit</button>
                    <button type='button' className='w-[30%] bg-red-500' onClick={formik.resetForm}>Clear</button>
                </div>
            </form>
        </div>
    );
};

export default InputForm;
