export interface Genres {
    data: Generos[];
    meta: Meta;
    links: GenresLinks;
}

export interface Generos {
    id: string;
    type: string;
    links: GenerosLinks;
    attributes: Attributes;
}

export interface Attributes {
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug: string;
    description: null | string;
}

export interface GenerosLinks {
    self: string;
}

export interface GenresLinks {
    first: string;
    last: string;
}

export interface Meta {
    count: number;
}
