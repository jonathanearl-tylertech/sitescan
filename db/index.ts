import { Database } from "bun:sqlite";
import { readdir, readFile } from "node:fs/promises";
import { join } from 'node:path';

const db = new Database(join(import.meta.dir, './db.sqlite'), { create: true });

const migrationScriptFolder = join(import.meta.dir, 'migrations');
const fileNames = await readdir(migrationScriptFolder);

for(let i = 0; i < fileNames.length; i++) {
    if (i == 1)
        continue;
    const fileName = fileNames[i];
    const file = await readFile(join(migrationScriptFolder, fileName));
    db.exec(file.toString());
}

db.close();