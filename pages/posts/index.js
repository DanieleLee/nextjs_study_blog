import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";


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
// ];


function AllPostsPage(props){
    return(
        <AllPosts posts={props.posts} />
    )
    
}

export function getStaticProps(){
    const allPosts = getAllPosts();

    return{
        props:{
            posts: allPosts
        },
        revalidate: 120
    }
}

export default AllPostsPage;