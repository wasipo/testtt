import React, { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';


type SentStatusFromParent = {
    λ: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};


const Button_1 = (props: any) => {


    return (
        <div className="button_1" onClick={props.λ}>
            <button>+</button>
        </div>
    );

}


export default Button_1;
