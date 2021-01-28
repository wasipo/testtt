import React, { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';



const Button_1 = (props: any) => {

    const ButtonClick1 = (props: any) =>  {
        return props.f1(props.datacount+1);
    } 

    console.log(props.setCount)

    return (
        <div className="button_1" onClick={props.f1(props.dataCount+1)}>
            <button>+</button>
        </div>
    );

}


export default Button_1;
