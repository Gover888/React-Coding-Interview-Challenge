import React, {useState} from 'react';

function T21P(props) {
    const PLAYERS = [
        "Alice",
        "Bob",
        "Carol",
        "Daniel",
        "Elaine",
        "Finley",
        "Gary",
        "Hector",
    ];
    return <Ele PLAYERS={PLAYERS} />

}

const Ele = ({PLAYERS}) => {
    console.log(PLAYERS)
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])
    const [left,setLeft] =useState(PLAYERS)
    const [selectTeam,setSelectTeam] = useState(true)

    const nameHandler=(e)=>{
        const newLeft = left.filter(item => item !== e )
        // const newteamMate = left.filter(item => item === e )
        const newTeam = selectTeam ? [...team1,e] : [...team2,e]
        selectTeam ? setTeam1(newTeam):setTeam2(newTeam)
        setLeft(newLeft)
    }

    return (
        <div   style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 60,
        }}>
            {left && left.map(e => <button key={e} onClick={()=>{nameHandler(e)}}>{e}</button>)}
            <div>
                <button onClick={()=>{setSelectTeam(!selectTeam)}}>{selectTeam? "team1":"team2"}</button>
            </div>
            <div>team1
                {
                    team1&& team1.map(item =>item)
                }
            </div>
            <div>team2
                {
                    team2&& team2.map(item =>item)
                }
            </div>
            <button
                onClick={() => {
                    setTeam1([]);
                    setTeam2([]);
                    setLeft(PLAYERS);
                    setSelectTeam(true);
                }}
            >
                Reset
            </button>
        </div>
    )


}


export default T21P;