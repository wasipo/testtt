import React, { useState } from 'react';




function Button_1() {

    const [count, setCount] = useState(0);


    function ButtonClick1() {
        console.log(count+1);
    }


    return (
    <div className="button_1" onClick={ButtonClick1}>
        <button>+</button>
    </div>
    );

}


export default Button_1;
