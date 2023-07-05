import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'Black',
    //     backgroundColor: 'White',
    // })
    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'black':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark'?'white':'black',
    }


  return (
    <div className = "container" style = {{color: props.mode ==='dark'?'white':'black'}}>
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                UpperCase
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
                <strong>Tool 1</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                LowerCase
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style = {myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Tool 2</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Clear
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style = {myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Tool 3</strong>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
