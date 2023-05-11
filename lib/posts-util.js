import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

// md파일이 있는 디렉토리 절대경로 설정
const postDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles(){
    return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier){
    const postSlug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    /* 반드시 이키로만 받아야 */
    const { data, content } = matter(fileContent);

    // const postSlug = fileName.replace(/\.md$/, ''); // remove file extension
    const postData = {
        slug: postSlug,
        ...data,
        content
    };

    return postData;
}

export function getAllPosts(){
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}