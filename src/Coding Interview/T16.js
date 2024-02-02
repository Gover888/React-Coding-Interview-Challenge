import React, { useState } from "react";

const INITIAL_LIST = [
    { name: "Tomatoes", value: 5.0 },
    { name: "Basil", value: 2.5 },
    { name: "Mozzarella", value: 9.99 },
];

function T16(props) {
    return <ItemValueList />;
}

const ItemValueList = () => {
    const [list, setList] = useState(INITIAL_LIST);
    const [newName, setNewName] = useState("");
    const [newValue, setNewValue] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        setList([...list, { name: newName, value: Number(newValue) }]);
        setNewName("");
        setNewValue();
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
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
                        type={"text"}
                        value={newName}
                        required
                        onChange={(e) => setNewName(e.target.value)}
                        style={{ width: 92 }}
                    />
                    <input
                        type={"number"}
                        required
                        value={newValue}
                        min={0}
                        step={0.01}
                        onChange={(e) => setNewValue(e.target.value)}
                        style={{ width: 92 }}
                    />
                    <input type={"submit"} style={{ width: 100 }} />
                </form>
            </div>

            {list.map((item) => {
                console.log(list);
                console.log("working");
                return (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <div style={{ width: 100 }}>{item.name}</div>
                        <div style={{ width: 100 }}>{"$" + item.value}</div>
                        <div
                            style={{ textAlign: "center", width: 100 }}
                            onClick={() => setList(list.filter((ele) => ele !== item))}
                        >
                            ❌
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default T16;