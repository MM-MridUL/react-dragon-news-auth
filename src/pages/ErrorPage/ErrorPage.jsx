import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-3xl font-bold w-3/6 mx-auto text-center mt-9">
            <h2 className="">Error 404 Not Found</h2>
            <Link to='/' className="btn mt-4">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;