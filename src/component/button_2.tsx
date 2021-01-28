import React from 'react';


const Button_2 = (props:any) => {


    const ButtonClick2:any = (props:any) =>  {
        return props.datacount-1;
    }

  return (
    <div className="button_2">
        <button onClick={ButtonClick2(props)}>-</button>
    </div>
  );
}

export default Button_2;
