import { useEffect, useState } from "react";

function T27() {
    return <Timers />;
}

const Timers = () => {
    const [seconds, setSeconds] = useState(30);
    const [timerList, setTimerList] = useState([]);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setTimerList((list) =>
                    list
                        .map((timer) => {
                            return {
                                ...timer,
                                left: timer.total - (new Date().getTime() - timer.start),
                            };
                        })
                        .filter((timer) => timer.left > 500)
                ),
            100
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type={"number"}
                        value={seconds}
                        onChange={(e) => setSeconds(e.target.value)}
                        min={1}
                        required
                    />
                    <input
                        type={"submit"}
                        onClick={() =>
                            seconds > 0 &&
                            setTimerList([
                                ...timerList,
                                {
                                    start: new Date().getTime(),
                                    total: seconds * 1000,
                                    left: seconds * 1000,
                                },
                            ])
                        }
                        value={"Add Timer"}
                    />
                </form>
            </div>
            <div
                style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
            >
                {timerList.map((item) => (
                    <div key={item.start} style={{ margin: 30 }}>
                        {(item.left / 1000).toFixed(1)}
                    </div>
                ))}
            </div>
        </>
    );
};


export default T27;