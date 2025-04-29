import React from 'react' ;
import { getPayload } from '../../../../lib/payload';
import {RichText as SerializedRichText} from "@payloadcms/richtext-lexical/react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
const Page = async ({params}) =>{
    const {postId} = await params ;
    console.log(postId) ;
    const payload = await getPayload() ;
    let post = await payload.find({
        collection : "posts",
        where: {
            id : {
               equals : postId 
            }
        }
        //id: postId // Directly pass the postId
    }) ;

    if (!post){
        return <div>Post not Found</div> ;
    }

    let data = post.docs[0] ;
    console.log("The post data in the page of posts will be :")
    console.log(data) ;


    return (
        <div className='container mx-auto p-8 pb-20 sm:p-20'>
            <h1 className='text-5xl fond-bold mb-5 leading-normal text-center'>{data.title}</h1>
            <SerializedRichText data= {data.content} />
        </div>
    )
}

export default Page;