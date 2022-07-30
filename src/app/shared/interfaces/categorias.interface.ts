export interface Categories {
    data: Categoria[];
    meta: Meta;
    links: CategoriesLinks;
}

export interface Categoria {
    id: string;
    type: Type;
    links: CategoriaLinks;
    attributes: Attributes;
    relationships: Relationships;
}

export interface Attributes {
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string;
    totalMediaCount: number;
    slug: string;
    nsfw: boolean;
    childCount: number;
}

export interface CategoriaLinks {
    self: string;
}

export interface Relationships {
    parent: Anime;
    anime: Anime;
    drama: Anime;
    manga: Anime;
}

export interface Anime {
    links: AnimeLinks;
}

export interface AnimeLinks {
    self: string;
    related: string;
}

export enum Type {
    Categories = 'categories',
}

export interface CategoriesLinks {
    first: string;
    next: string;
    last: string;
}

export interface Meta {
    count: number;
}
