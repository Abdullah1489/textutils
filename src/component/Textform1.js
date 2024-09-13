import React, { useState } from 'react'
export default function TextForm(props) {
    const handleupClick = () => {
        // console.log("upper case is clicked" + text)
        let newText = text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    }
    const handleclearClick = () => {
        // console.log("upper case is clicked" + text)
        let newText = '';
        setText(newText)
    props.showAlert("Text has been cleared", "success")
    }
    const handlelowClick = () => {
        // console.log("upper case is clicked" + text)
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success")
    }
    const hanadleonChange = (event) => {
        // console.log("on Change")
        setText(event.target.value)
      
    }
    const [text, setText] = useState();
    return (
        <>
            <div className="container"  style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>

                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} onChange={hanadleonChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupClick}> click to convert uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearClick}> click to clear</button>
                <button className="btn btn-primary mx-2" onClick={handlelowClick}> click to convert lower case</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>

                <h2>Preview</h2>
                <div
                    id="textPreview"
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                        minHeight: '100px',
                        backgroundColor: '#f9f9f9',
                        whiteSpace: 'pre-wrap', // Preserve whitespace and line breaks
                    }}
                >
                    {text}
                </div>
            </div>




        </>
    )

}