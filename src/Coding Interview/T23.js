import React, { useEffect, useState } from "react";
// import axios from "axios";

const useBitcoin = () => {
    const [value, setValue] = useState();

    useEffect(() =>  {
        const fetchValue = async () => {
            try {
                // const res = await axios.get(
                //     "https://api.coindesk.com/v1/bpi/currentprice.json"
                // );
                const res =  await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
                    .then(res =>res.json())
                    .then(data => data)
                console.log(res)
                setValue(res.bpi.USD.rate_float);
            } catch {
                console.error("Failed to update price");
            }
        };

        fetchValue()
        ;

        const interval = setInterval(() => fetchValue(), 100000);
        return () => clearInterval(interval);
    }, []);

    return value;
};

function T23() {
    const value = useBitcoin();

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {value ? (
                <h1>{"Bitcoin Price: $" + value + " USD"}</h1>
            ) : (
                <h4>Fetching price...</h4>
            )}
        </div>
    );
}


export default T23;