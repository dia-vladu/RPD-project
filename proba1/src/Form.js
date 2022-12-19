import React from 'react'
import {useState} from 'react';

var userName;

function Form() {
    const [name, setName] = useState("");
    return (
        <div>
            <form>
                <label>Enter your name: </label>
                <input type="text" id='nameField' value={name} onChange=
                { (e) => {
                        setName(e.target.value);
                        userName = e.target.value;
                    }
                }/>
            </form><br/>
            {/* <h1>Your name is {name}, right?</h1> */}
            <input type="button" className='navbarButtons' id="buttonName" value="Check name" onClick={butonName}></input>
        </div>
    )
}

function butonName(){
    var buttonName = document.querySelector('#buttonName');
    if(document.querySelector('#textCuNumele')){
        document.querySelector('#textCuNumele').remove();
    }

    var text = document.createElement('h2');
    text.id = "textCuNumele";
    if(userName != null){
        text.innerHTML = `Your name is ${userName}, right?`;
    } else {
        text.innerHTML = `You hadn't typed in a name!`;
    }
    
    document.body.append(text);
}

export default Form;