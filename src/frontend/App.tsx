import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import birdLogo from '/other/bird.png'
import "./App.css";
import { Relic } from "../Relic.ts";
import ArrDisplayer from "./ArrDisplayer.tsx";

function App() {
    // const [count, setCount] = useState(0)
    const [searchPredicate, setPredicate] = useState("");
    const [jsonarr, setjsonarr] = useState([]);

    fetch("/relics.json")
        .then((jsonfile) => jsonfile.text())
        .then((jsontext) => {
            const data = JSON.parse(jsontext);
            const arr = data.map((x: object) => new Relic(x));
            setjsonarr(arr);
        })
        .catch((err) => console.log(err));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function onInputHandler(e: any) {
        setPredicate(e.target.value);
    }

    return (
        <>
            <div className="bg-zinc-800 min-h-dvh">
                <nav className="w-full flex items-center justify-between h-14 border-b border-slate-500">
                    <div className="h-full flex flex-row">
                        <button className="text-lg md:text-2xl hover:bg-gray-600 h-full px-4 md:px-6">
                            <img
                                className="h-14 w-20 rounded-full"
                                src="/other/bird.png"
                            ></img>
                        </button>
                    </div>
                    <div>
                        <input
                            type="search"
                            onInput={onInputHandler}
                            className="h-14 pl-2 w-[220px] placeholder:text-xl"
                            placeholder="Search for relics..."
                        />
                    </div>
                </nav>
                <div>
                    <div></div>
                    <div>
                        <ArrDisplayer
                            pred={searchPredicate}
                            arr={jsonarr}
                        ></ArrDisplayer>
                    </div>
                </div>
                <p></p>
            </div>
        </>
    );
}

export default App;
