import type { Actions } from "./$types";
import fs from 'fs/promises';
import { env } from "$env/dynamic/private";

export const actions: Actions = {
    default: async ({ request }) => {
        const arrBuff = await request.arrayBuffer();
        const buff = Buffer.from(arrBuff);
        const file = buff.toString('utf-8');
        console.log({file})
        console.log(buff);
        console.log('actions');


    }
}