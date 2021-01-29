import React, { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';


type SentStatusFromParent = {
    λ: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};


const Button_1 = (props: SentStatusFromParent) => {


    return (
        <div className="button_1">
            <button onClick={props.λ}>+</button>
        </div>
    );

}


export default Button_1;
