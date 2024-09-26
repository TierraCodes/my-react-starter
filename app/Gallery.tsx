"use client"
import {useState} from 'react';



export default function Gallery(pics) {
    const [count, currentImage] = useState(0);
    const hasNext = count < pics.length-1;
    const hasPrevious = count > pics.length-1;
    const image = pics(currentImage);
    
    function handleUpClick() {
        if(hasNext){
            currentImage(count+1);
        } else {
            currentImage(0)
        }
    }
    function handleDownClick() {
        if(hasPrevious){
            currentImage(count-1);
        } else {
            currentImage(pics.length-1)
        }
    }

    return(
        <>
            <h1>Image Gallery</h1>
            <p>
                <BackButton count={count} onClick={handleDownClick}/>
                <ImageDiv image = {image}/>
                <NextButton count={count} onClick={handleUpClick}/>
            </p>
        </>
    );
}

function NextButton({onClick}){
    return(
        <button onClick={onClick}>Next</button>
    );
}

function BackButton({onClick}){
    return(
        <button onClick={onClick}>Back</button>
    );
}

function ImageDiv({image}){
    return(
        <img src={image.link} />
    );
}