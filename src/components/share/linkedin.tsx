'use client'

import { LinkedinIcon, LinkedinShareButton } from "react-share"

export default function LinkedInBtn({ slug, url }: { slug: string, url: string }) {
    return (
        <LinkedinShareButton url={`${url}/blog/${slug}`} >
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
    )
};

