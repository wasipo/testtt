import React, { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';



const Button_1 = (props:any) => {

    const ButtonClick1:any = (props: any) =>  {
        return props.count+1;
    } 

    return (
        <div className="button_1" onClick={ButtonClick1(props)}>
            <button>+</button>
        </div>
    );

}


export default Button_1;
