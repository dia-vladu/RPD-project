import React from "react";

function switchMode(){
    var body = document.querySelector('body');
    var bgColor = body.style.backgroundColor;

    var butonSwitch = document.querySelector('#dayNightModeButton');

    if(bgColor === 'black'){
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        
        butonSwitch.style.backgroundColor = 'white';
        butonSwitch.style.color = 'black';
    }else{
        body.style.backgroundColor = 'black';
        body.style.color = 'black';
      
        butonSwitch.style.backgroundColor = 'black';
        butonSwitch.style.color = 'white';
    }
}

function DayNightMode() {
    return (
        <div className='containerDayNightMode'>
            <button className="dayNightModeButton" id="dayNightModeButton" onClick={switchMode}>DayNightMode</button>
        </div>
    );
}

export default DayNightMode;