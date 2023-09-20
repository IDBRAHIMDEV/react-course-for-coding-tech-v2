import axios from 'axios'
import { useFormik } from 'formik'
import React, {useEffect} from 'react'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditArticle() {

  const {id} = useParams()
  
  console.log('params: ', id)
  
  const navigate = useNavigate()


  const updateArticle = async (values, actions) => {

    try {

      const response = await axios.put(`http://localhost:3001/articles/${id}`, values)
      actions.resetForm()
      navigate('/blog')
      
    } catch (error) {
      
    }

}
  

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      image: '',
      tags: [],
      category: ''
    },
    onSubmit: updateArticle
  })


  const getArticleById = async (id) => {

    const { data } = await axios.get(`http://localhost:3001/articles/${id}`)
    formik.setValues({
      ...formik.values,
      ...data
    })
  }

 




  useEffect(() => {
    getArticleById(id)
  }, [])

  return (
    <>
    
    <div className="row my-3">
        <div className="col-md-6">
          <h1>Edit article</h1>
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
            </div>
            <div className="form-group my-3">
              <label htmlFor="">Description</label>
              <textarea 
                onChange={formik.handleChange}
                value={formik.values.body}
                name="body" 
                id="description" 
                rows="5" 
                className="form-control" 
                placeholder="Your description"></textarea>
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
              <button className="btn btn-warning">
                <FaPlus />
                <span className="ms-2">Update an article</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditArticle