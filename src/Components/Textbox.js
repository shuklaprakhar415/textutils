// import React from 'react'

import React, { useState } from 'react'


export default function Textbox(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter your text here');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
                <h1> {props.heading} </h1>
                <div className="mb-3" >
                    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#616E7C':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10" ></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>To-UpperCase</button>
                <button type="button" className="btn btn-primary" onClick={handleloClick}>To-LowerCase</button>

            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}} >
                <h2>Text-Summary</h2>
                <p>Text contains {text.split(" ").length} words and {text.length} characters.</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}

