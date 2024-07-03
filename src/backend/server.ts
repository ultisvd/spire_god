import express from "express";

import {Relic} from "../Relic";

import * as dbRepo from "./db";

const app = express();
const port = 6969;
console.log("Shit compiled!")
app.get('/relics', async (req, res) => {
                       res.send(JSON.stringify(await dbRepo.fetch_relics()))});
app.listen(port, () => console.log(`Listening on port ${port}`))