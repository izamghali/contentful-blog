'use client'
import { TwitterIcon, TwitterShareButton } from "react-share"

export default function TwitterBtn({ slug, url} : { slug: string, url: string }) {
    return (
        <TwitterShareButton url={`${url}/blog/${slug}`} >

            <TwitterIcon size={32} round/>
        </TwitterShareButton>
    )
};

