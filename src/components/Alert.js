import React from 'react'

function Alert(props) {
    // Function to capitalize the given string
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        // Below will execute only when both conditions will be true. Hence, if alert object will be null then no alert will be displayed at all.
        // We could have used if else statements too to check for same.
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
