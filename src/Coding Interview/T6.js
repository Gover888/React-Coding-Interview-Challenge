import React, {useState} from 'react';

function T6(props) {
    const INITIAL_LIST = {
        "Organize closet": [
            { "Donate old clothes and shoes": false },
            { "Buy new shelf": false },
            { "Put in shelf by color": false },
        ],
        "Finish homework": [
            { "Finish math homework": false },
            { "Finish science homework": false },
            { "Finish Reactjs homework": false },
        ],
        "Achieve nirvana": [
            { "Meditate a little": false },
            { "Gain some wisdom": false },
        ],
    };
    const [list, setList] = useState(INITIAL_LIST);

    const clickTask = (topTask, index, taskText) => {
        const newList = {...list}

        newList[topTask][index][taskText] = !newList[topTask][index][taskText];
        setList(newList);
    };

    return (
        <div
            style={{
                diplay: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 40,
            }}
        >
            {Object.entries(list).map(([topTask, subTasks]) => {
                return (
                    <>
                        <h2>{topTask}</h2>
                        <div style={{ display: "flex" }}>
                            <DisplaySubtasks
                                topTask={topTask}
                                subTasks={subTasks}
                                clickTask={clickTask}
                            />
                        </div>
                    </>
                );
            })}
        </div>
    );
}
const DisplaySubtasks = ({ topTask, subTasks, clickTask }) => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 50,
                    width: 250,
                }}
            >
                <h3>Not yet completed</h3>
                {subTasks.map((subTask, index) => {
                    const taskText = Object.keys(subTask)[0];
                    if (!subTask[taskText])
                        return (
                            <p onClick={() => clickTask(topTask, index, taskText)}>
                                {taskText}
                            </p>
                        );
                })}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Completed</h3>
                {subTasks.map((subTask, index) => {
                    const taskText = Object.keys(subTask)[0];
                    if (subTask[taskText])
                        return (
                            <p onClick={() => clickTask(topTask, index, taskText)}>
                                {taskText}
                            </p>
                        );
                })}
            </div>
        </>
    );
};

export default T6;