// import React, {useContext, useEffect, useState} from 'react';
//
// function T5(props) {
//     const [userState, setUserState] = useState({
//         Bob: true,
//         Gary: true,
//         Jessica: true,
//         Sam: true,
//         Eric: true,
//     });
//
//     return (
//         // <UsersContext.Provider value={{ userState, setUserState }}>
//             <UserList />
//         // </UsersContext.Provider>
//     );
// }
//
// const UserList = () => {
//     const { userState, setUserState } = useContext(UsersContext);
//
//     const changeRandomUser = () => {
//         const keyArray = Object.keys(userState);
//         const randomNum = Math.floor(Math.random() * keyArray.length);
//         const newUsers = Object.assign({}, userState);
//         newUsers[keyArray[randomNum]] = !userState[keyArray[randomNum]];
//         setUserState(newUsers);
//     };
//
//     useEffect(() => {
//         const interval = setInterval(changeRandomUser, 2000);
//         return () => clearInterval(interval);
//     }, [userState]);
//
//     return (
//         <div style={{ padding: 20 }}>
//             {Object.keys(userState).map((key) => (
//                 <p>{`${key}: ${userState[key] ? "🟢" : "🔴"}`}</p>
//             ))}
//         </div>
//     );
// };
//
//
//
// export default T5;