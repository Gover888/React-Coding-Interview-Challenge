
// import axios from "axios";
import React, { useState, useEffect } from "react";

const DATA = {
    results: [
        {
            gender: "female",
            name: { title: "Miss", first: "Sara", last: "Johnson" },
            location: {
                street: { number: 6263, name: "Kingsway" },
                city: "Winchester",
                state: "West Yorkshire",
                country: "United Kingdom",
                postcode: "US4C 3HD",
                coordinates: { latitude: "13.7996", longitude: "179.3694" },
                timezone: {
                    offset: "-6:00",
                    description: "Central Time (US & Canada), Mexico City",
                },
            },
            email: "sara.johnson@example.com",
            login: {
                uuid: "d703a5ff-7e73-400a-a735-f330addfcb31",
                username: "goldenzebra309",
                password: "clevelan",
                salt: "3CobdNiB",
                md5: "bd978843e8b18cd6e7424a5a18f62af5",
                sha1: "7e6bafa636c6f7245241d8a2d3e0190f9cc40b87",
                sha256:
                    "224588a5360826e3495a16f16fa5007e4ef439930df47760616e2c79ca704534",
            },
            dob: { date: "1957-06-04T12:40:38.974Z", age: 64 },
            registered: { date: "2002-07-09T02:17:52.520Z", age: 19 },
            phone: "015242 69350",
            cell: "0792-242-687",
            id: { name: "NINO", value: "XP 63 26 10 L" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/64.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
            },
            nat: "GB",
        },
    ],
    info: { seed: "6bc47b82484c2761", results: 1, page: 1, version: "1.3" },
};
function T9(props) {

    const [users, setUsers] = useState();
    const [search, setSearch] = useState("");

    useEffect(() => {
        // const fetchUsers = async () => {
        //     try {
        //         const res = await axios.get("https://randomuser.me/api?results=200");
        //         setUsers(res.data.results);
        //     } catch {
        //         alert("User request failed");
        //     }
        // };
const fetchUsers =()=>{
    fetch("https://randomuser.me/api?results=200")
        .then (res=>res.json())
        // .then (res=> console.log(res.json))
        .then(dat => setUsers(dat.results))
}

        fetchUsers();
    }, []);

    return (
        <div style={{ fontSize: 30, width: "20%", margin: "auto", paddingTop: 20 }}>
            <input
                value={search}
                placeholder="Search users"
                onChange={(e) => setSearch(e.target.value)}
            />
            {users ? (
                <div>
                    {users
                        .filter((user) =>
                            `${user.name.first} ${user.name.last}`
                                .toLowerCase()
                                .startsWith(search.toLowerCase())
                        )
                        .map((user) => {
                            return (
                                <T9C user={user}/>
                                // <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
                            );
                        })}
                </div>
            ) : (
                <div />
            )}
        </div>
    );
}


function T9C({user}) {
const [select,setSelect] =useState()
    console.log(select)
    return (
        <div style={{border:"1px solid black"}} onClick={()=>{setSelect(user.name.first)}}>
            <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
        </div>
    );
}

export default T9;