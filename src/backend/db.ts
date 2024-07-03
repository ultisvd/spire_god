import dotenv from "dotenv";
dotenv.config({path : './.env'})

import pgPromise from "pg-promise";
import {Relic} from "../Relic";

const pgp = pgPromise();

const rar_from_name = new Map([
    [ 'Common', 1 ], [ 'Uncommon', 2 ], [ 'Rare', 3 ], [ 'Shop', 4 ],
    [ 'Boss', 5 ]
]);
const cl_from_name = new Map([
    [ 'Ironclad', 1 ], [ 'Silent', 2 ], [ 'Defect', 3 ], [ 'Watcher', 4 ],
    [ 'Any', 5 ]
]);

// const rar_from_id = new Map(Array.from(rar_from_name).reverse());
// const cl_from_id = new Map(Array.from(cl_from_name).reverse());

const db = pgp(process.env.connString);

// export function insert_relic(rel: Relic) {
//     db.one('INSERT INTO relic(name, description, flavor, rarity_id, class_id)
//     \
//         VALUES ($1,$2,$3,$4,$5) RETURNING id',
//            [
//                rel.Name, rel.Description, rel.Flavor,
//                rar_from_name.get(rel.Rarity), cl_from_name.get(rel.Class)
//            ])
//         .then(data => { console.log('DATA: ', data.id); })
//         .catch(err => {console.log('ERROR: ', err)})
// }

export async function fetch_relics() {
    return db.any(
        'SELECT relic.name, relic.description, relic.flavor, rarity.name Rarity, class.name Class\
        FROM relic JOIN rarity ON relic.rarity_id = rarity.id\
        JOIN class ON relic.class_id = class.id\
        ORDER BY relic.id');
}

(async () => { console.log(await fetch_relics()); })();
