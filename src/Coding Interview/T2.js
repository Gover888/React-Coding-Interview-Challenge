import {useState} from "react";

function App() {
    return <RobotList/>;
}

const RobotList = () => {
    const [robo, setRobo] = useState('')
    const [list,setList]=useState([])
    const robForm = (e) => {
        e.preventDefault()
        setList([...list,robo])
        setRobo('')
    }
    // YOUR CODE HERE
    return (
        <>
            <form onSubmit={robForm}>
                <input type="Robot number"
                       placeholder="Robot name"
                       onChange={e => setRobo(e.target.value)}
                       value={robo}
                />
                <button>Let's Go</button>
            </form>
            <p>{robo}</p>
            <div style={{ display: "flex",  flexWrap: "wrap" }}>
                {list &&  list.map(item =>
                    <img
                        width={200}
                        height={200}
                        key={item}
                        src={`https://robohash.org/1${item}`}

                         onClick={()=>setList(list.filter(item1 => item1 !== item))}
                    /> )}
            </div>


        </>

    )

};
export default App;