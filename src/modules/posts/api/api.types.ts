
export interface IImage {
    image: string
}
export interface ITag {
    tag: string
}
export interface ILink {
    link: string
}

export interface IPost {
    id: 1,
    title: "title",
    content: "content",
    creatorId: 1,
    tags: ITag[],
    images: IImage[],
    links: ILink[],
    _count: {
        likes: 1,
        views: 1,
        loves: 0
    }
}