import { useState } from "react";

function T28() {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <FeedbackWrapper
                onSubmit={(obj) => {
                    alert(`Rating from modal: ${obj.rating}`);
                }}
            >
                {/* UI composed of three no-op buttons */}
                <div style={{ display: "flex", marginBottom: 10 }}>
                    <button>A button</button>
                    <button>Another button</button>
                </div>
                <button style={{ padding: 20 }}>A bigger button</button>
            </FeedbackWrapper>
        </div>
    );
}

const FeedbackWrapper = ({ onSubmit, children }) => {
    const [clicks, setClicks] = useState(0);

    return (
        <>
            {clicks >= 3 && (
                <Modal
                    onSubmit={(val) => {
                        onSubmit(val);
                        setClicks(0);
                    }}
                />
            )}
            <div
                id="feedbackWrapper"
                onClick={(event) =>
                    event.target.id !== "feedbackWrapper" && setClicks(clicks + 1)
                }
            >
                {children}
            </div>
        </>
    );
};

const Modal = ({ onSubmit }) => {
    const [rating, setRating] = useState(1);
    const message = (() => {
        switch (rating) {
            case 1:
                return "Unsatisfied";
            case 2:
                return "Somewhat satisfied";
            case 3:
                return "Satisfied";
            case 4:
                return "Very satisfied";
            case 5:
                return "Extremely satisfied";
            default:
                return "error";
        }
    })();

    return (
        <div
            style={{
                zIndex: 100,
                backgroundColor: "AntiqueWhite",
                width: 500,
                height: 200,
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                    type="range"
                    min={1}
                    max={5}
                    value={rating}
                    onChange={(event) => setRating(parseInt(event.target.value))}
                />
                <p style={{ width: 160, marginLeft: 10 }}>{message}</p>
            </div>
            <button
                onClick={() => {
                    onSubmit({ rating });
                    setRating(1);
                }}
            >
                Submit
            </button>
        </div>
    );
};
export default T28;