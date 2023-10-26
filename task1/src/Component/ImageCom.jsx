import React from"react";
import img from './img.jpeg';
import './style.css';

function ImageCom(){
    return (
        <div>
            <img src={img} alt="Paris" class="center"></img>
        </div>
    )
}

export default ImageCom;