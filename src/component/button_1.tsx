//@ts-check

import React, { useState } from 'react';
import { isConstructorDeclaration, NumericLiteral } from 'typescript';


type SentStatusFromParent = {
    i: number;
    λ: any;
};

const Button_1 = (props: SentStatusFromParent) => {

    const clickIncrement = () => props.λ(props.i + 1);


    return (
        <div className="button_1">
            <button onClick={clickIncrement}>+</button>
        </div>
    );

}


export default Button_1;
