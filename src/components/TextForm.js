import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpperCase = () => {
        setText(text.toUpperCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text...');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea id="my-box" rows="5" className="form-control" onChange={handleOnChange} value={text}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Uppercase</button>
        </div>
    )
}
