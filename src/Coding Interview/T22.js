import React, { useState } from "react";

function T22() {
    const unlockedScreen = () => (
        <div style={{ textAlign: "center" }}>You are logged in</div>
    );

    return (
        <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
    );
}

const CombinationLock = ({ combination, NextScreen }) => {
    const [entered, setEntered] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    const combinationsMatch = (combo) => {
        console.assert(combo.length === 4);

        for (let i = 0; i < combination.length; i++) {
            if (combination[i] !== combo[i]) return false;
        }
        return true;
    };

    const numberPress = (number) => {
        const newCombo = [...entered, number];
        setEntered(newCombo);
        if (newCombo.length === 4) {
            if (combinationsMatch(newCombo)) setLoggedIn(true);
            else {
                setEntered([]);
                alert("Incorrect combination");
            }
        }
    };

    const DigitRow = ({ startVal }) => {
        return (
            <div style={{ display: "flex" }}>
                {[startVal, startVal + 1, startVal + 2].map((num) => (
                    <div
                        style={{ height: 150, width: 150, borderStyle: "solid" }}
                        onClick={() => numberPress(num)}
                    >
                        {num}
                    </div>
                ))}
            </div>
        );
    };

    return loggedIn ? (
        <NextScreen />
    ) : (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: 100,
                fontSize: 100,
            }}
        >
            <div style={{ height: 150, width: 450, borderStyle: "solid" }}>
                {/*{entered.join("")}*/}
                {/*"1234"*/}
                {entered.map(e=>e)}
            </div>
            <DigitRow startVal={1} />
            <DigitRow startVal={4} />
            <DigitRow startVal={7} />
            <div
                style={{
                    textAlign: "center",
                    height: 150,
                    width: 150,
                    borderStyle: "solid",
                }}
                onClick={() => numberPress(0)}
            >
                0
            </div>
        </div>
    );
};

export default T22;