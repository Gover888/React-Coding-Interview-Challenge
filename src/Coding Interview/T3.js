import React, {useEffect, useState} from 'react';
// import axios from "axios";
function T3(props) {

    const [list,setList] =useState([])
    // ([{
    //
    //     "activity": "Take your dog on a walk",
    //     "type": "relaxation",
    //     "participants": 1,
    //     "price": 0,
    //     "link": "",
    //     "key": "9318514",
    //     "accessibility": 0.2
    // }])
    console.log(list)
const handler = () => {
  fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(data => setList([...list,data]))
}
// const handler2 = async () => {
//   const listAxios = await axios.get("https://www.boredapi.com/api/activity")
// }
useEffect(()=>{
    handler()
},[])
    return (
        <div>
            <button onClick={handler}>Generate Activity</button>
            <br/>
            {(list) ? list.map(obj =>
            <T3Child key={Math.random()} item={obj}/>
            )
                : 'nothing'
            }
        </div>
    );
}

export default T3;


function T3Child({item}) {
    const [btn,setBtn] = useState(false)
    console.log(item)
    return (
        <div style={{border:"1px black solid"}}>
            <p>{item.activity}</p>
            <button onClick={()=>{setBtn(!btn)}}>{btn?"collapse"  : "expand"}</button>
            <div>{
                btn ? <T3CC item={item}/>  :''
            }</div>

        </div>
    );
}



function T3CC({item}) {
    return (
        <div>{item.type}</div>
    );
}