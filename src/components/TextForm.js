import React, {useState} from 'react'
let textLength;

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!", "success");
    }
    const handleLoClick = ()=>{
        // console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!!", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleClClick = ()=>{
        // console.log("Clear was clicked");
        setPreText(text);
        setText("");
    }
    const handleUnClick = ()=>{
        // console.log("Undo was clicked");
        setText(text+preText);
    }

    const [text, setText] = useState("");
    const [preText, setPreText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new Text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} value = {text} onChange={handleOnChange} id="myBox" rows = "8"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick = {handleUpClick}>Convert to upperCase</button>
        <button className="btn btn-success mx-1" onClick = {handleLoClick}>Convert to lowerCase</button>
        <button className="btn btn-success mx-1 my-1" onClick = {handleClClick}>Clear</button>
        <button className="btn btn-success mx-1 my-1" onClick = {handleUnClick}>Undo</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{textLength = text.split(" ")[text.split(" ").length-1] === ""?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>
        <p>{0.004 * textLength} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter in the box to preview"}</p>
    </div>
    </>
  )
}
