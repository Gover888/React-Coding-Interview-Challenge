import React, { useEffect, useState } from "react";
function T13(props) {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
            <GrowingButton />
        </div>
    );
}

const GrowingButton = () => {
    const [size, setSize] = useState({ height: 40, width: 80 });
    const [isGrowing, setIsGrowing] = useState(true);

    const adjustSize = (height, width) => {
        if (isGrowing && height < 200) {
            setSize({ height: height + 10, width: width + 10 });
        }
        if (!isGrowing && height > 20) {
            setSize({ height: height - 10, width: width - 10 });
        }
    };

    useEffect(() => {
        const timer = setInterval(() => adjustSize(size.height, size.width), 1000);
        return () => {
            clearInterval(timer);
        };
    }, [size, adjustSize]);

    return (
        <button
            style={{ height: size.height, width: size.width }}
            onClick={() => setIsGrowing(!isGrowing)}
        >
            {isGrowing ? "Shrink" : "Grow"}
        </button>
    );
};


export default T13;