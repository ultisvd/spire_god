import { Relic } from "../Relic";
import { useState } from "react";

export default function ArrDisplayer({ arr, pred, callback }) {
    const spawnImgs = (arr: Relic[], predicate: string) => {
        const names = arr.filter((relic) =>
            relic.name.toLowerCase().includes(predicate.toLowerCase())
        );
        const descs = arr.filter((relic) =>
            relic.description.toLowerCase().includes(predicate.toLowerCase())
        );
        const dupeArr = [...names, ...descs];
        const prioArr = [...new Set(dupeArr)];
        return prioArr.map((relic) => (
            <img
                src={"/relic_images/" + relic.name.replaceAll(" ", "") + ".png"}
                className="w-16 border-4 border-transparent hover:border-gray-600 hover:animate-pulse"
                onMouseOver={() => callback(relic)}
            ></img>
        ));
    };

    return (
        <div className="flex flex-row w-full flex-wrap">
            {spawnImgs(arr, pred)}
        </div>
    );
}
