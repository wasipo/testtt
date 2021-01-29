import React, { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';


// type SentStatusFromParent = {
//     λ: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// };


const Button_1 = (props: any) => {

    const clickIncrement = () => props.λ(props.i + 1);


    return (
        <div className="button_1">
            <button onClick={clickIncrement}>+</button>
        </div>
    );

}


export default Button_1;
