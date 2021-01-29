import React, { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';


// type SentStatusFromParent = {
//     λ: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// };


const Button_1 = (props: any) => {

    const count = 0;
    const clickIncrement = () => props.λ(count + 1);


    return (
        <div className="button_1">
            <button onClick={clickIncrement}>+</button>
        </div>
    );

}


export default Button_1;
