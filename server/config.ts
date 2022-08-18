import dotenv from "dotenv";
// import { ConfigType } from "./types/config.type";

const { PORT }:any = dotenv.config({ path: __dirname + "/../.env"}).parsed;

const config = {
    PORT
}

export default config;
