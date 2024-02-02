import React, { useState } from "react";

function T21() {
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

    return <FormTeams players={PLAYERS} />;
}

const FormTeams = ({ players }) => {
    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);
    const [remainingPlayers, setRemainingPlayers] = useState(players);
    const [selectedTeam, setSelectedTeam] = useState(1);

    const onClick = (player) => {
        if (selectedTeam === 1) {
            setTeam1([...team1, player]);
        } else setTeam2([...team2, player]);

        setRemainingPlayers(remainingPlayers.filter((person) => person !== player));
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: 60,
            }}
        >
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {remainingPlayers.map((player) => (
                    <p1
                        onClick={() => onClick(player)}
                        style={{ margin: 5, cursor: "pointer" }}
                    >
                        {player}
                    </p1>
                ))}
            </div>
            <div style={{ display: "flex", flexDirection: "row", margin: 30 }}>
                <button onClick={() => setSelectedTeam(selectedTeam === 1 ? 2 : 1)}>
                    {"Now selecting for Team " + selectedTeam}
                </button>
                <button
                    onClick={() => {
                        const shuffledPlayers = [...players];
                        shuffledPlayers.sort(() => 0.5 - Math.random());
                        setRemainingPlayers([]);
                        setTeam1(shuffledPlayers.slice(0, Math.floor(players.length / 2)));
                        setTeam2(
                            shuffledPlayers.slice(
                                Math.floor(players.length / 2),
                                players.length
                            )
                        );
                    }}
                    style={{ marginRight: 20, marginLeft: 20 }}
                >
                    Randomize Teams
                </button>
                <button
                    onClick={() => {
                        setTeam1([]);
                        setTeam2([]);
                        setRemainingPlayers(players);
                        setSelectedTeam(1);
                    }}
                >
                    Reset
                </button>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <div style={{ marginRight: 25 }}>
                    <h4>Team 1</h4>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {team1.map((player) => (
                            <p1 style={{ margin: 5 }}>{player}</p1>
                        ))}
                    </div>
                </div>
                <div style={{ marginLeft: 25 }}>
                    <h4>Team 2</h4>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {team2.map((player) => (
                            <p1 style={{ margin: 5 }}>{player}</p1>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default T21;