import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpperCase = () => {
        setText(text.toUpperCase())
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearText = () => {
        setText('')
    }

    const handleCapitalizeText = () => {
        let newArr = text.split(" ")
        let res = ""
        newArr.forEach(element => {
            res += element.charAt(0).toUpperCase() + element.slice(1) + " "
        })
        setText(res.trim())
    }

    const handleRemoveSpace = () => {
        let newArr = text.split(/[ ]+/)
        setText(newArr.join(" "))
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea id="my-box" rows="5" placeholder='Enter text...' className="form-control" onChange={handleOnChange} value={text}></textarea>
                </div>
                <button className="btn btn-primary m-1" onClick={handleUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary m-1" onClick={handleLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary m-1" onClick={handleClearText}>Clear</button>
                <button className="btn btn-primary m-1" onClick={handleCapitalizeText}>Capitalize</button>
                {/* Implement Remove extra spaces with regex */}
                <button className="btn btn-primary m-1" onClick={handleRemoveSpace}>Remove Spaces</button>
                {/* Implement Copy text of textarea */}
                <button className="btn btn-danger m-1">Copy</button>
            </div>
            <hr />
            <div className="container">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p style={{ fontFamily: 'Copperplate' }}>{text}</p>
            </div>
        </>
    )
}
