import { Link, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";

const News = () => {

    const {id}=useParams();
    const [newsDetails,setNewsDetails]=useState([]);

    useEffect(()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=>setNewsDetails(data))
    },[])

    

    const news=newsDetails.find(news=>news._id===id)
    // console.log(news._id);
    console.log(news);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                <h2 className="text-3xl mb-4">Dragon News</h2>
               <div className="border rounded p-4">
                <img className="w-full" src={news?.image_url} alt="News" />
                <h2 className="card-title my-4">{news?.title}</h2>
                <p>{news?.details}</p>
                <Link to='/'>
                    <button className="btn btn-secondary mt-4">All News</button>
                </Link>
               </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>

                </div>

            </div>
        </div>
    );
};

export default News;