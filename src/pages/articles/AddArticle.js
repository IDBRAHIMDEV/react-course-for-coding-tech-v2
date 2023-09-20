import React from 'react'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AddArticle() {
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
          <form action="">
            <div className="form-group my-3">
              <label htmlFor="">Title</label>
              <input type="text" name="title," id="title" className="form-control" placeholder="yourtitle" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="">Description</label>
              <textarea name="description," id="description" cols="30" rows="10" className="form-control" placeholder="Yourdescription"></textarea>
            </div>
            <div className="form-group my-3">
              <label htmlFor="">Image</label>
              <input type="url" name="image," id="image" className="form-control" placeholder="Yourimage" />
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