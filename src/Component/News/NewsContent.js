import React, { useEffect, useState } from 'react'

function NewsContent() {

    const [news, setNews] = useState([]);
    

   
      const newsdata = () =>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8866ccac6de44fdab52d9d21e23522b3')
        .then(res => res.json())
        .then((result) => {
            setNews(result.articles);
            console.warn(result)
        });

     }     

 useEffect(() =>{
    newsdata();
 },[])

 const dimg = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';


    return (
        <section className="new-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">News Apps</h1>
                    </div>
                </div>
                <div className="row d-flex mt-5">

                    {
                       news.length > 0 ?  news.map((element =>{
                            return(
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-fill">
                                  <div className="card">
                                      <img src={element.urlToImage === null ? dimg : element.urlToImage} className="card-img-top  img-fluid " alt="..."  />
                                     <div className="card-body">
                                        <h5 className="card-title">{element.title}</h5>
                                        <p className="card-text">
                                           {element.description}
                                        </p>
                                        <a href={element.url} target="_blank"  className="btn btn-sm btn-primary">
                                            Read More
                                        </a>
                                    </div>
                                   </div>
                                  </div>
                            )
                           
                        }))
                      :''

                    } 

              

                    {/* {
                    
                    news.map((result) => {
                        return(
                           
                        )}
                    )
                    
                    } */}

                </div>
            </div>
        </section>
    )
}

export default NewsContent
