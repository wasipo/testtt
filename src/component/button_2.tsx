import React from 'react';


type SentStatusFromParent = {
  i: number;
  λ: any;
};

const Button_2 = (props:SentStatusFromParent) => {

  const clickDecrement = () => props.λ(props.i - 1);

  return (
    <div className="button_2">
        <button onClick={clickDecrement}>-</button>
    </div>
  );
}

export default Button_2;
