import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlusSquare, FaTh, FaThList } from "react-icons/fa";
import axios from 'axios';

function ListArticle() {

  const apiUrl ="http://localhost:3001/articles"

  const [articles, setArticles] = useState([])
  const [switchToList, setSwitchToList] = useState(false)


  const getArticles = async () => {

    let result = []

    try {
      const {data} = await axios.get(apiUrl)
      setArticles(data)
    } catch (error) {
      console.log(error)
    }

    return result
  }

  useEffect(() => {

    getArticles()

  }, [])

  return (
    <>
      <div className="row my-3">
        <div className="col-md-6">
          <h1>List of articles</h1>
        </div>
        <div className="col-md-6 text-end">
          <Link to="/blog/add" className='btn btn-primary'>
            <FaPlusSquare /> Add
          </Link>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-12">
          <button className="btn btn-dark me-2" onClick={() => setSwitchToList(false)}>
            <FaTh />
          </button>
          <button className="btn btn-dark" onClick={() => setSwitchToList(true)}>
            <FaThList />
          </button>
          </div>
      </div>

      {switchToList && (
        <div className="row my-3">
        <div className="col-md-12">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {articles && articles.map(article => (
                <tr key={article.id}>
                  <td> <img src={article.image} alt={article.title} width="80px" /></td>
                  <td>{article.title}</td>
                  <td>{article.body}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )}

      

{!switchToList && (

        <div className="row">
        {articles && articles.map(article => (
          <div className="col-md-4" key={article.id}>
            <div className="card my-2">
              <img className="card-img-top" src={article.image} alt={article.title} />
              <div className="card-body">
                <h4 className="card-title">{article.title}</h4>
                <p className="card-text">{article.body.substring(0, 40)}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
)}
    </>
  )
}

export default ListArticle