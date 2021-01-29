import React from 'react';


// type SentStatusFromParent = {
//   λ: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// };

const Button_2 = (props:any) => {


  return (
    <div className="button_2">
        <button onClick={props.λ}>-</button>
    </div>
  );
}

export default Button_2;
