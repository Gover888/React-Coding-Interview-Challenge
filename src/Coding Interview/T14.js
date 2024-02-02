import React, { useState } from "react";
const ONE =
    "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
    "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
    "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
    "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
    "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
    "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function T14(props) {
    return <Captcha />;
}

const Captcha = () => {
    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState(1);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <button
                style={{ zIndex: 1, marginTop: 200 }}
                onClick={() => {
                    setOpen(true);
                    setAnswer(Math.floor(Math.random() * 5 + 1));
                }}
            >
                I'm not a robot
            </button>
            {open && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        marginTop: 100,
                        position: "fixed",
                        zIndex: 2,
                    }}
                >
                    <Images answer={answer} setOpen={setOpen} />
                </div>
            )}
        </div>
    );
};

const Images = ({ answer, setOpen }) => {
    const isAnswer = (id) => {
        id === answer ? setOpen(false) : alert("Intruder!");
    };

    return (
        <>
            <div style={{ alignSelf: "center", fontSize: 20 }}>
                {"Select " + answer}
            </div>
            <div style={{ display: "flex", justifyContent: "center", flex: "row" }}>
                <img
                    src={ONE}
                    style={{ width: 200, height: 200 }}
                    onClick={() => isAnswer(1)}
                />
                <img
                    src={TWO}
                    style={{ width: 200, height: 200 }}
                    onClick={() => isAnswer(2)}
                />
                <img
                    src={THREE}
                    style={{ width: 200, height: 200 }}
                    onClick={() => isAnswer(3)}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center", flex: "row" }}>
                <img
                    src={FOUR}
                    style={{ width: 200, height: 200 }}
                    onClick={() => isAnswer(4)}
                />
                <img
                    src={FIVE}
                    style={{ width: 200, height: 200 }}
                    onClick={() => isAnswer(5)}
                />
                <img
                    src={SIX}
                    style={{ width: 200, height: 200 }}
                    onClick={() => isAnswer(6)}
                />
            </div>
        </>
    );
};

export default T14;