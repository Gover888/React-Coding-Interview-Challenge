import {useState} from "react";

const LADDER_IMAGE =
    "https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png";

function App() {
    return <Ladder img={LADDER_IMAGE}/>;
}

const Ladder = ({img}) => {
    const ladderNum = [5, 4, 3, 2, 1]
    const [hovered, setHovered] = useState(0)
    const sized = (id) => {
        return hovered >= id ? 150 :80
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            {ladderNum && ladderNum.map(item => <img
                src={img}
                onMouseEnter={()=>setHovered(item)}
                onMouseOut={()=>setHovered(0)}
                width={sized(item)}
                height={sized(item)}/>)}
        </div>
    )
}

// const Ladder = ({ img }) => {
//     // YOUR CODE HERE
//     const ladderIds = [5, 4, 3, 2, 1];
//     const [hovered, setHovered] = useState(0);
//
//     const getSize = (id) => {
//         return hovered >= id ? 150 : 80;
//     };
//
//     return (
//         <div
//             style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 padding: 20,
//             }}
//         >
//             {ladderIds.map((id) => (
//                 <img
//                     src={img}
//                     onMouseEnter={() => setHovered(id)}
//                     onMouseOut={() => setHovered(0)}
//                     height={getSize(id)}
//                     width={getSize(id)}
//                 />
//             ))}
//         </div>
//     );
// };

export default App;
