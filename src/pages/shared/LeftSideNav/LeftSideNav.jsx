import { useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories,setCategories]=useState([]);

    useState(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div className="space-y-6">
            <h2 className="text-3xl">All Categories</h2>

            {
                categories.map(category=><div className="ml-4 text-xl font-semibold" key={category.id}>
                 <Link
                    to={`/category/${category.id}`}
                     >{category.name}</Link>
                </div>)
            }
        </div>
    );
};

export default LeftSideNav;