import matter from 'gray-matter';
import { readFile, readdir } from 'node:fs/promises';
export async function getPostNames(): Promise<string[]> {
    return (await readdir(`${process.cwd()}/data/`, {withFileTypes: true, recursive: true}))
        .filter(item => item.isFile())
        .map(item => `${item.path}/${item.name}`);
}

export async function getPostContents(): Promise<Promise<matter.GrayMatterFile<Buffer>>[]> {
    const names = await getPostNames();
    const contents = names.map(name => readFile(name))
    return contents.map(async content => matter(await content));
}

