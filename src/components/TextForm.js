import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea id="my-box" rows="5" className="form-control"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}
