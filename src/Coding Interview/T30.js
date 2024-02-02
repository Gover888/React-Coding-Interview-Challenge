import React, {useEffect, useState} from 'react';
import axios from "axios";

function T30(props) {

    const [r,setR] =useState()
    // useEffect(()=>{
        const data1 = async () => {

            const data = await
                axios.get("https://api.exchangerate.host/latest?base=USD");
                // fetch("https://api.exchangerate.host/latest?base=USD")
                //     .then(res=>res.json())
                //     .then(data => data)

            // console.log(data)
            setR(data)
            // return  data
        }
        // data1()
        // console.log(data1())
    // },[])

    const sub = () => {
      data1()
    }

    console.log(r)
    return (
        <div>
            <form onSubmit={sub}>
                <input type="number"/>
            </form>
            <button onClick={sub}> click</button>
        </div>
    );
}

export default T30;