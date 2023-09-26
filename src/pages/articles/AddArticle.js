import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ArticleSchema } from '../../validationSchemas/ArticleSchema'

function AddArticle() {

  const navigate = useNavigate()

  const onSubmit = async (values, actions) => {
   
   try {

    const { data } = await axios.post('http://localhost:3001/articles', values)

    navigate('/blog')
    
   } catch (error) {
      console.error(error)
   }
  }


  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      image: ''
    },
    validationSchema: ArticleSchema,
    onSubmit
  })

  console.log(formik)

  return (
    <>
    
    <div className="row my-3">
        <div className="col-md-6">
          <h1>New article</h1>
        </div>
        <div className="col-md-6 text-end">
          <Link to="/blog" className='btn btn-primary'>
            <FaArrowLeft /> Back to list
          </Link>
        </div>  
      </div>

      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="">Title</label>
              <input 
                onChange={formik.handleChange}
                value={formik.values.title}
                type="text" 
                name="title" 
                id="title" 
                className="form-control" 
                placeholder="your title" />
                {formik.errors.title && <p className='mt-1 text-danger'>{formik.errors.title}</p>}
            </div>
            <div className="form-group my-3">
              <label htmlFor="">Description</label>
              <textarea 
                onChange={formik.handleChange}
                name="body" 
                id="description" 
                rows="5" 
                className="form-control" 
                placeholder="Your description">{formik.values.description}</textarea>
            </div>
            <div className="form-group my-3">
              <label htmlFor="">Image</label>
              <input 
                onChange={formik.handleChange}
                value={formik.values.image}
                type="url" 
                name="image" 
                id="image" 
                className="form-control" 
                placeholder="Your image" />
            </div>
            <div className="d-grid my-3">
              <button className="btn btn-primary">
                <FaPlus />
                <span className="ms-2">Add an article</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddArticle