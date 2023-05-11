import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from '../components/home-page/featured-posts';
import Head from 'next/head';

import {getFeaturedPosts} from '../lib/posts-util.js';
// const DUMMY_POSTS = [
//     {
//         slug: 'getting-started-next',
//         title: 'Getting Started Nextjs',
//         image: 'next.png',
//         excerpt: 'NextJS is a SSR frameWorks',
//         date: '2023-03-01'
//     },
//     {
//         slug: 'getting-started-next2',
//         title: 'Getting Started Nextjs',
//         image: 'next.png',
//         excerpt: 'NextJS is a SSR frameWorks',
//         date: '2023-03-01'
//     },
//     {
//         slug: 'getting-started-next3',
//         title: 'Getting Started Nextjs',
//         image: 'next.png',
//         excerpt: 'NextJS is a SSR frameWorks',
//         date: '2023-03-01'
//     },
//     {
//         slug: 'getting-started-next4',
//         title: 'Getting Started Nextjs',
//         image: 'next.png',
//         excerpt: 'NextJS is a SSR frameWorks',
//         date: '2023-03-01'
//     }
// ]


function HomePage(props){
    return(
        <Fragment>
            <Head>
                <title>My Blog</title>
                <meta name="description" content="I post about programming" />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps(){
    const featuredPosts = getFeaturedPosts();

    return{
        props:{
            posts: featuredPosts
        },
        revalidate: 60
    }
}

export default HomePage;