import * as grayMatter from 'gray-matter';
import fs from 'fs';
import {PostProp} from "../props/PostProp";

// Function to get all files in a directory recursively
export function getPostNames(dir = `${process.cwd()}/data`, files = []) {
    files = files || [];
    const filesInDir = fs.readdirSync(dir);
    for (let i = 0; i < filesInDir.length; i++) {
        const file = `${dir}/${filesInDir[i]}`;
        if (fs.statSync(file).isDirectory()) {
            getPostNames(file, files);
        } else if (file.endsWith('.md')){
            files.push(file);
        }
    }
    return files;
}

export function getPostsContents(): PostProp[] {
    const names = getPostNames();
    return names
        .map(name => getPostContent(name))
}

export function getPostContent(filePath): PostProp {
    const str = fs.readFileSync(filePath, {encoding: "utf-8"});
    const {data, content, excerpt, language = 'en_US', ...rest} = grayMatter(str);
    return { data, content, excerpt, language };
}
