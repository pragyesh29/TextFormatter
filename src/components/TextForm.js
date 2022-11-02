import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpperCase = () => {
        setText(text.toUpperCase())
        props.showalert("Converted to Uppercase!", "success")
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase())
        props.showalert("Converted to Lowercase!", "success")

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
        props.showalert("Text has been Capitalized!", "success")
    }

    const handleRemoveSpace = () => {
        let newArr = text.split(/[ ]+/)
        setText(newArr.join(" "))
        props.showalert("Space has been removed successfully!", "success")
    }

    // declaring state
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea id="my-box" style={{ background: (props.mode === 'light') ? 'white' : '#0f0e21', color: (props.mode === 'light') ? 'black' : 'white' }} rows="5" placeholder='Enter text...' className="form-control" onChange={handleOnChange} value={text}></textarea>
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
                <p style={{ fontFamily: 'Copperplate' }}>{text.length > 0 ? text : "Enter something in above textarea to preview..."}</p>
            </div>
        </>
    )
}
