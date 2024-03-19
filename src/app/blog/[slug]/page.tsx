import React from "react"
import { fetchBlogBySlug, fetchBlogs } from "@/lib/blog"
import Link from "next/link"
import { formatDate } from "@/helper/formatDate"
import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import SideBar from "@/components/SideBar";

export const generateStaticParams = async () => {
    const posts = await fetchBlogs()

    return posts.map((post: { fields: { slug: string; } }) => ({
        params: post.fields.slug,
    }))
}

export async function generateMetadata(params : { params: { slug: string } }) {
    const slug = params.params.slug
    const blog = await fetchBlogBySlug(slug)

    const title = blog.fields.title
    const author = blog.fields.author.fields.name
    const date = blog.fields.date
    const authorSrc = blog.fields.author.fields.image.fields.file.url
    const src = `https://${blog.fields.img.fields.file.url}`
    const content = blog.fields.content; 
      
    return { 
        title: title,
        description: title,
        authors: author,
        openGraph: {
            images: [`https:${src}`, `https:${authorSrc}`]
        }
    }
}

export default async function BlogDetail(params : { params: { slug: string } }) {

    const slug = params.params.slug
    const blog = await fetchBlogBySlug(slug)

    const author = blog.fields.author.fields.name
    const date = blog.fields.date
    const authorSrc = blog.fields.author.fields.image.fields.file.url
    const src = `https://${blog.fields.img.fields.file.url}`
    const content = blog.fields.content; 

    const options: Options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <h1 className="my-[2.5px] md:text-3xl sm:text-2xl text-xl">{children}</h1>,
            [BLOCKS.HEADING_2]: (node, children) => <h2 className="my-[2.5px] md:text-2xl sm:text-xl text-lg">{children}</h2>,
            [BLOCKS.HEADING_3]: (node, children) => <h3 className="my-5 md:text-xl sm:text-lg text-base">{children}</h3>,
            [BLOCKS.HEADING_4]: (node, children) => <h4 className="my-5 md:text-lg sm:text-base text-sm">{children}</h4>,
            [BLOCKS.HEADING_5]: (node, children) => <h5 className="my-10 md:text-base sm:text-sm text-xs">{children}</h5>,
            [BLOCKS.HEADING_6]: (node, children) => <h6 className="my-10 mb-20 md:text-base sm:text-sm text-xs">{children}</h6>,
            [BLOCKS.PARAGRAPH]: (node, children) => <h6 className="my-10 mb-4 md:text-base sm:text-sm text-xs">{children}</h6>,
        }
    }  
        
    return (
        <div className="relative py-10 px-4">
            
            {/* side bar - fixed */}
            <div className="hidden xl:block fixed top-20 left-10">
                <SideBar authorSrc={authorSrc} author={author} slug={slug} className=""/>
            </div>

            <div className=" flex justify-center">
                <div className="p-4 w-[45rem] flex flex-col gap-4">

                    <div className="xl:hidden">
                        <SideBar className="" authorSrc={authorSrc} author={author} slug={slug} />
                    </div>

                    <h2 className="text-4xl font-bold">{blog.fields.title}</h2>   
                    <div className="flex gap-4">
                        <p>{author} |</p>
                        <p>{formatDate(date)}</p>
                    </div>
                    
                    <div className="">
                        <img src={src} alt="" />
                    </div>

                    <div className="text-justify">
                        {
                            documentToReactComponents(content, options)
                        }
                    </div>

                </div>

            </div>
        </div>
    )
};

