import React from 'react';


// type SentStatusFromParent = {
//   λ: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// };

const Button_2 = (props:any) => {

  const clickDecrement = () => props.λ(props.i - 1);

  return (
    <div className="button_2">
        <button onClick={clickDecrement}>-</button>
    </div>
  );
}

export default Button_2;
