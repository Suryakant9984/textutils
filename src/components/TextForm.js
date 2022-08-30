import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here");

//HandleOn change function to write somthing in text area
    const handleOnChange =(event) =>{
        // console.log("Handle On Change");
        setText(event.target.value)
   
    }

//Convert Text tro upper acse

    const handleupClick = () =>{
        // console.log("Upper Case clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case', 'success')
    }

    //Convert to lower Case

    const handleLowerClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case', 'success')
    }

    // Copy the text from text area
    const handleCopyClick =()=>{
        let text = document.getElementById("myBox");
        text.select(Text);
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Cpied', 'success')
    }

    //clear The text

    const handleClearCLick = () =>{
        setText(" ")
    }
  return (
    <>
    <div className="container" style={{color: props.mode=='light'?'black':'white'}}>
        <h2 >{props.heading}</h2>
      <div className=" mb-3" >
        <textarea className="form-control" style={{backgroundColor: props.mode=='light'?'white':'grey',color:props.mode=='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
   <button className="btn btn-primary mx-2"  onClick={handleupClick}>Convert to UpperCase</button>
   <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
   <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
   <button className="btn btn-primary mx-2" onClick={handleClearCLick}>ClearText</button>

    </div>
    <div className="container my-3" style={{color: props.mode=='light'?'whiblack':'white'}}>
        <h1>Your Text Summary</h1>
        <p><b>{text.split(" ").length} Words</b> and <b>{text.length} characters</b></p>
        <h1>Reading Time</h1>
        <p><b>{0.008 * text.split(" ").length}</b>  Minutes Read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:'Enter The text to preview here'}</p>
    </div>
    </>
  );
}
