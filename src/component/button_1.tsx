import React, { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';



const Button_1 = () => {

    // 親へのパラメータの渡し方が分からない


    const ButtonClick1 = () =>  {
        setCount(count+1);
    }


    return (
    <div className="button_1">
        <button onClick={ButtonClick1}>+</button>
    </div>
    );

}


export default Button_1;
