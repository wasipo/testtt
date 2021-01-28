import React from 'react';


const Button_2 = () => {

    const Props = {
        count: Number
    }

    const ButtonClick2 = (props:Number) =>  {
        setCount(props.count-1);
    }

  return (
    <div className="button_2">
        <button onClick={ButtonClick2(props)}>-</button>
    </div>
  );
}

export default Button_2;
