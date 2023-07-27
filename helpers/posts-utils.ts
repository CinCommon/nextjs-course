import * as grayMatter from 'gray-matter';
import fs from 'fs';
import {PostProp} from "../props/PostProp";

const path = require('path');


// Function to get all files in a directory recursively
function getPostNames(dir = `${process.cwd()}/data/`, files = []) {
    files = files || [];
    const filesInDir = fs.readdirSync(dir);
    for (let i = 0; i < filesInDir.length; i++) {
        const file = `${dir}/${filesInDir[i]}`;
        if (fs.statSync(file).isDirectory()) {
            getPostNames(file, files);
        } else {
            files.push(file);
        }
    }
    return files;
}

export function getPostContents(): PostProp[] {
    const names = getPostNames();
    const contents = names
        .map(name => fs.readFileSync(name, {encoding: "utf-8"}))
    return contents.map(str => {
        const {data, content, excerpt, language = 'en_US', ...rest} = grayMatter(str);
        return { data, content, excerpt, language }
    });
}

