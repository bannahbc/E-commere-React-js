import React from "react";
import './Loading.css'
import loadingGif from '../../Assets/GIf/loading-7528_512.gif'

const Loading =()=>{

    return(
        <div className="loading">
            <div className="loading-wrap">
            <img src={loadingGif} alt="" />
            </div>
        </div>
    )
}
export default Loading;