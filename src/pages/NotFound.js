import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="title">
                <span>Ooops! Something went wrong...</span>
                <h2 style={{ marginBottom: "10em" }}>PAGE NOT FOUND</h2>
                {useEffect(() => {
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                })}
            </div>
        </div>
    );
};

export default NotFound;
