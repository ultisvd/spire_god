import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import birdLogo from '/other/bird.png'
import "./App.css";
import { Relic, Relic_like } from "../Relic.ts";
import ArrDisplayer from "./ArrDisplayer.tsx";

function App() {
    // const [count, setCount] = useState(0)
    const [searchPredicate, setPredicate] = useState("");
    const [jsonarr, setjsonarr] = useState([]);
    const [hoveredItem, changeHovered] = useState(0);

    useEffect(() => {
        fetch("http://localhost:6969/relics")
            .then((jsonfile) => {
                return jsonfile.text();
            })
            .then((jsontext) => {
                const data = JSON.parse(jsontext);
                const arr = data.map(
                    (x: Relic_like) =>
                        new Relic(
                            x.name,
                            x.description,
                            x.flavor,
                            x.rarity,
                            x.class
                        )
                );
                const CommonArr = arr.filter((x) => x.rarity == "Common");
                const UncommonArr = arr.filter((x) => x.rarity == "Uncommon");
                const RareArr = arr.filter((x) => x.rarity == "Rare");
                const BossArr = arr.filter((x) => x.rarity == "Boss");
                const ShopArr = arr.filter((x) => x.rarity == "Shop");
                const groupedArr = [
                    CommonArr,
                    UncommonArr,
                    RareArr,
                    BossArr,
                    ShopArr,
                ];
                setjsonarr(groupedArr);
                console.log("Fetched!");
                console.log(groupedArr);
            })
            .catch((err) => console.log(err));
    }, []);

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
                <div className="flex flex-row w-full">
                    <div className="flex flex-col items-center w-1/4 py-2 border-r-4 flex-shrink-0">
                        <div className="flex flex-col min-h-[5.5rem]">
                            <p className="w-full text-center pb-0 text-xl underline">
                                {hoveredItem.name}
                            </p>
                            <p className="w-full px-2 text-sm text-orange-300 text-center">
                                Rarity: {hoveredItem.rarity}
                            </p>
                            <p className="w-full text-center text-xs px-2 text-green-900">
                                {hoveredItem.flavor}
                            </p>
                        </div>
                        <p className="w-full px-2 pb-2">
                            {hoveredItem.description}
                        </p>
                        <p className="w-full px-2 text-sm text-gray-600">
                            Class: {hoveredItem.class}
                        </p>
                    </div>
                    <div className="flex flex-col w-full">
                        {jsonarr.map((arr_group) => {
                            return (
                                <div>
                                    <p className="text-center pt-2 text-lg uppercase duration-200 text-gray-300">
                                        {arr_group[0].rarity} relics (
                                        {arr_group.length})
                                    </p>
                                    <ArrDisplayer
                                        pred={searchPredicate}
                                        arr={arr_group}
                                        callback={changeHovered}
                                    ></ArrDisplayer>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <p></p>
            </div>
        </>
    );
}

export default App;
