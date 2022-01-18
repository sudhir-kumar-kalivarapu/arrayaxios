import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function Admin() {
    const[news,setNews] = useState([])
    const getapi=()=>{
        axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-01-05&to=2022-01-05&sortBy=popularity&apiKey=a77537de687c4e718dda25e50f487f7d").then(
            (response)=>{
                console.log("success",response);
                setNews(response.data.articles)
            }
      );
    };
    const arr1=[news.articles]
    console.log("my articles",arr1);
    return (
        <div>
            get news <button onClick={getapi}>
                news
            </button>
            <p style={{color:"wheat"}}>{news.description} is written by {news.author}</p>
             {news.map(news=>(
                <li>
                    {news.description} is written by {news.author}
                </li>
            ))}
        </div>
    )
}
export default Admin