import React, { useState } from 'react'

export const Calculator = () => {

    const [input ,setInput] = useState('');

    const handleClick = (value) => {
        if(value === '='){
            try{
                setInput = eval(input).toString();
            }catch(arror){
                setInput('ERROR');
            }
        }
        else if(value === 'C'){
            setInput(' ');
        }
        else{
            setInput(input+value);
        }
    }

    const buttons = [
        '7','8','9','/',
        '4','5','6','*',
        '3','2','1','-',
        '0','.','=','+',
        'C'
    ];


  return (
    <>
        <div className='calculator'>
            <input type='text' value={input} readOnly className='display'/>
            <div className='buttons'>
                {buttons.map((btn,idx) => (
                    <button key={idx} onClick={handleClick(btn)}>
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    </>
  )
}
