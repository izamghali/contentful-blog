import FacebookBtn from "./facebook"
import LinkedInBtn from "./linkedin"
import TwitterBtn from "./twitter"
import WhatsappBtn from "./wa"
import CopyButton from "./copy"

const base_url = 'https://cdn.contentful.com';
export default function ShareBtn({ slug, className }: { slug: string, className: string} ) {


    return (
        <div className={` ${className} `}>
            <h3 className="font-semibold">SHARE</h3>

            {/* social */}
            <div className="flex gap-2 mt-2">
                <FacebookBtn slug={slug} url={base_url} />
                <LinkedInBtn slug={slug} url={base_url} />
                <TwitterBtn slug={slug} url={base_url} />
                <WhatsappBtn slug={slug} url={base_url} />
                <CopyButton  slug={slug} url={base_url} />
            </div>
        </div>
    )
};

