import React from 'react'

const EffectOnDifferentData = () => {
    let name = "nitan";
    let age = 29;
    let isMarried = true;
    let favFood = [<div>Yomari</div>,<div>Chatamari</div>];
    let info = { address: "gagal", fatherName: "shiva" };
  return (
    <div>
        {/* {name}
        <br></br>
        {age}
        <br></br>
        Are you married?{isMarried ? "Yes":"No"} */}
        {age}
        
    </div>
  )
}

export default EffectOnDifferentData