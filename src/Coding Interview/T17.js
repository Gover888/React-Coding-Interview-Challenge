import React, { useEffect, useState } from "react";

function T17(props) {
    return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
    const [startVal, setstartVal] = useState();
    const [funcList, setfuncList] = useState([]);
    const [prevExecution, setprevExecution] = useState("? -> My Function -> ?");

    const onSubmit = (e) => {
        e.preventDefault();
        const res = funcList.reduce(
            (prevVal, func) => eval(func)(prevVal),
            startVal
        );
        setprevExecution(startVal + " -> My Function -> " + res);
        setstartVal("");
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                padding: 60,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <FuncButtons funcList={funcList} setfuncList={setfuncList} />
                <h2>My Function</h2>
                {funcList.map((funcName) => (
                    <p1>{funcName}</p1>
                ))}

                {/* Start value input form: */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        margin: 60,
                    }}
                >
                    <form onSubmit={onSubmit}>
                        <input
                            type={"number"}
                            required
                            value={startVal}
                            min={-500}
                            max={500}
                            step={0.001}
                            onChange={(e) => setstartVal(e.target.value)}
                            style={{ width: 92 }}
                        />
                        <input type={"submit"} style={{ width: 100 }} />
                    </form>
                </div>
                <div style={{ margin: 20 }}>Last execution:</div>
                <div>{prevExecution}</div>
            </div>
        </div>
    );
};

const FuncButtons = ({ funcList, setfuncList }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}
        >
            <button onClick={() => setfuncList([...funcList, "half"])}>half</button>
            <button onClick={() => setfuncList([...funcList, "double"])}>
                double
            </button>
            <button onClick={() => setfuncList([...funcList, "increment"])}>
                increment
            </button>
            <button onClick={() => setfuncList([...funcList, "decrement"])}>
                decrement
            </button>
            <button style={{ marginLeft: 10 }} onClick={() => setfuncList([])}>
                Clear
            </button>
        </div>
    );
};
export default T17;