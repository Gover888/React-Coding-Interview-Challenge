import { useState } from "react";

const TASKS = [
    {
        task: "Clean bedroom",
        subtasks: ["Do laundry", "Organize desk", "Wipe floors"],
    },
    {
        task: "Study",
        subtasks: ["Review chemistry", "Do a React coding challenge"],
    },
    {
        task: "Build website",
        subtasks: ["Choose tech stack", "Design other-pages", "Develop", "Publish"],
    },
];

function T29() {
    const [tasks, setTasks] = useState(TASKS);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 30,
            }}
        >
            <TasksAndSubtasks taskArray={tasks} setTaskArray={setTasks} />
        </div>
    );
}

const TasksAndSubtasks = ({ taskArray, setTaskArray }) => {
    const [completed, setCompleted] = useState(() =>
        taskArray.map((taskObj) => taskObj.subtasks.map(() => false))
    );

    const flipCompleted = (outerIndex, innerIndex) =>
        setCompleted(
            completed.map((arr, index) =>
                index != outerIndex
                    ? arr
                    : arr.map((bool, jIndex) => (jIndex != innerIndex ? bool : !bool))
            )
        );

    const clearCompleted = () => {
        const completedCopy = [];

        setTaskArray(
            taskArray.filter((_, index) => {
                if (completed[index].some((value) => !value)) {
                    completedCopy.push(completed[index]);
                    return true;
                } else return false;
            })
        );
        setCompleted(completedCopy);
    };

    return (
        <div>
            <input
                type={"button"}
                onClick={clearCompleted}
                value={"Clear completed tasks"}
            />
            {taskArray.map((obj, i) => (
                <>
                    <p>
                        {completed[i].some((value) => !value) ? (
                            obj.task
                        ) : (
                            <s>{obj.task}</s>
                        )}
                    </p>
                    <div style={{ marginLeft: 20 }}>
                        {obj.subtasks.map((subtask, j) => (
                            <p onClick={() => flipCompleted(i, j)}>
                                {completed[i][j] ? <s>{subtask}</s> : subtask}
                            </p>
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
};

export default T29;