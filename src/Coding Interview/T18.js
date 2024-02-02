import React, { useEffect, useState } from "react";

function T18(props) {
    return <Pagination />;
}

const Pagination = () => {
    const [users, setUsers] = useState();

    // fetch("https://randomuser.me/api?results=19")
    //     .then(res=>console.log(res.json()))
    //     .then(data=>console.log(data))
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // const res = await axios.get("https://randomuser.me/api?results=19");
                const userArray = await  fetch("https://randomuser.me/api?results=19")
                    .then(res=>res.json())
                    .then(data=>data.results)
                // const userArray = res.data.result;
            console.log(userArray);
                const cleanArray = userArray.map((user,index) => {
                    return {
                        name: user.name.first + " " + user.name.last,
                        age: user.dob.age,
                        email: user.email,
                    };
                });
                setUsers(cleanArray);
            } catch {
                alert("User request failed");
            }
        };
        console.log(users);
        console.log(fetchUsers());
    }, []);

    return users ? (
        <Pages content={users} itemsPerPage={5} />
    ) : (
        <h1>Loading users...</h1>
    );
};

// generic component for displaying table from array
// of objects where fields of objects are columns
const Pages = ({ content}) => {
    const itemsPerPage = 3
    console.log(content);
    const [page, setPage] = useState(0);
    const start = itemsPerPage * page; // 3 * 0 = 0             // 3 * 1 = 3
    const end = start + itemsPerPage; // 0 + 3 = 3  // item 0 ~ 3  // 3 + 3 = 6 // item 3 ~ 6
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
                }}
            >
                {Object.keys(content[0]).map((key) => (
                    <h3 style={{ width: 160, fontWeight: "bold" }}>
                        {key}
                    </h3>
                ))}
            </div>
            {content.slice(start, end).map((obj) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        {Object.values(obj).map((value) => (
                            <div style={{ width: 200 }}>{value}</div>
                        ))}
                    </div>
                );
            })}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                {Array.from(Array(Math.ceil(content.length / itemsPerPage)).keys()).map(
                    (number) => (
                        <p1
                            style={{
                                width: 30,
                                color: "blue",
                                marginTop: 20,
                                cursor: "pointer",
                                fontWeight: page === number ? "bold" : "normal",
                            }}
                            onClick={() => setPage(number)}
                        >
                            {number + 1}
                        </p1>
                    )
                )}
            </div>
        </div>
    );
};


export default T18;