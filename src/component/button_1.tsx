import React, { useState } from 'react';




function Button_1() {

    const [count, setCount] = useState();


    function ButtonClick1() {
        count+1;
    }


    return (
    <div className="button_1" onClick={ButtonClick1(count)}>
        <button>+</button>
    </div>
    );

}


export default Button_1;
