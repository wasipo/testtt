import React, { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';



const Button_1 = (props:Number) => {

    // 親へのパラメータの渡し方が分からない

    const ButtonClick2 = (props: Number) =>  {
        setCount(props.count-1);
    } 



    return (
    <div className="button_1">
        <button>+</button>
    </div>
    );

}


export default Button_1;
