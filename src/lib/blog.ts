import resolveResponse from "contentful-resolve-response";

// const base_url = process.env.BASE_URL_CONTENTFUL;
// const space_id = process.env.SPACE_ID_CONTENTFUL;
// const token = process.env.TOKEN_CONTENTFUL;
const base_url = 'https://cdn.contentful.com';
const space_id = 'mgv6y6u87hqx';
const token = '-ruRHYwzCJUwzYSnyIhVDPZOGIlm-dZNya73QsOU6Bk'

export async function fetchBlogs() {

    try {
        const res = await (await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog`, { next: { revalidate: 10 } })).json()
        
        const response = {
            items: res.items,
            includes: res.includes
        }
        
        const items = resolveResponse(response);
        return items;

    } catch (error) {
        throw error
    } 
}

export async function fetchBlogBySlug(slug: string) {
    const res = await (await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&include=10&fields.slug=${slug}`, { next: { revalidate: 10 }})).json()

    const response = {
        items: res.items,
        includes: res.includes
    }

    const items = resolveResponse(response)
    
    return items[0]
}