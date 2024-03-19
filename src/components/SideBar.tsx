import React from "react"
import ShareButton from "@/components/share";
import Link from "next/link"

export default function SideBar({ authorSrc, author, slug, className } : { authorSrc: string, author: string, slug: string, className: string }) {

    

    return (
        <div>
            <Link className="w-fit flex items-center gap-2" href={'/blog'} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                Back
            </Link>

            {/* author */}
            <div className="btn flex items-center gap-2 mt-10 w-fit">
                <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img src={authorSrc} alt="" />
                </div>
                <h3 className="text-lg font-semibold">{author}</h3> 
            </div>

            {/* share */}
            <div className="mt-4">
                <ShareButton slug={slug} className="" />
            </div>
        </div>
    )
};

