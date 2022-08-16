import React from "react";
import LoadingImg from "../../assets/img/loading.gif";
import "./style.css"
const Loading = () => {
    return (
        <div className = "loading">
            <img src = {LoadingImg} alt = "loading"/>
        </div>
    )
}
export default Loading;