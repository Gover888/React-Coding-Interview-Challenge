import React, {useEffect, useState} from 'react';
import axios from "axios";

function Tg1(props) {
    const API = `https://www.algoexpert.io/api/fe/questions`

    const [data,setData]=useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("https://www.algoexpert.io/api/fe/questions");
                // const userArray = await  fetch(API)
                //     .then(res=>res.json())
                //     .then(data=>data.results)
                // const userArray = res.data.result;
                console.log(res);
                setData(res);
            } catch {
                console.log("User request failed");
            }
        };
        // console.log(fetchUsers());
    }, []);
    console.log(data);
    return (
        <div>
        </div>
    );
}

export default Tg1;