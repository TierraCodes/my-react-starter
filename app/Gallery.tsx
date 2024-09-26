'use client'
import {useState} from 'react';
import Images from './page';
import {AppProps} from 'next/app';


export default function Gallery() {
    const [count, currentImage] = useState(0);
    const hasNext = count < Images.length-1;
    const hasPrevious = count > Images.length-1;

    const image = Images[count];
    
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
            currentImage(Images.length-1)
        }
    }

    return(
        <>
            <h1>Image Gallery</h1>
            <p>
                <backButton count={count} onClick={handleDownClick}/>
                <imageDiv image = {image}/>
                <nextButton count={count} onClick={handleUpClick}/>
            </p>
        </>
    );
}

function nextButton({onClick}: AppProps){
    return(
        <button onClick={onClick}>Next</button>
    );
}

function backButton({onClick}: AppProps){
    return(
        <button onClick={onClick}>Back</button>
    );
}

function imageDiv({image}: AppProps){
    return(
        <img src={image.link} />
    );
}