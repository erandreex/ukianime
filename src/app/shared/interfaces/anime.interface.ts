export interface Anime {
    data: Data;
}

export interface Animes {
    data: Data[];
    meta: AnimesMeta;
    links: AnimesLinks;
}

export interface Data {
    id: string;
    type: Type;
    links: DatumLinks;
    attributes: Attributes;
    relationships: { [key: string]: Relationship };
}

export interface Attributes {
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    synopsis: string;
    description: string;
    coverImageTopOffset: number;
    titles: Titles;
    canonicalTitle: string;
    abbreviatedTitles: string[];
    averageRating: null | string;
    ratingFrequencies: { [key: string]: string };
    userCount: number;
    favoritesCount: number;
    startDate: Date | null;
    endDate: Date | null;
    nextRelease: null;
    popularityRank: number;
    ratingRank: number | null;
    ageRating: null | string;
    ageRatingGuide: null | string;
    subtype: string;
    status: Status;
    tba: null | string;
    posterImage: PosterImage;
    coverImage: CoverImage;
    episodeCount: number | null;
    episodeLength: number | null;
    totalLength: number | null;
    youtubeVideoId: null | string;
    showType: string;
    nsfw: boolean;
}

export interface PosterImage {
    tiny: string;
    large: string;
    small: string;
    medium: string;
    original: string;
    meta: PosterImageMeta;
}

export interface PosterImageMeta {
    dimensions: Dimensions;
}

export interface Dimensions {
    tiny: Large;
    large: Large;
    small: Large;
    medium: Large;
}

export interface Large {
    width: number | null;
    height: number | null;
}

export enum Status {
    Current = 'current',
    Finished = 'finished',
    Tba = 'tba',
}

export interface Titles {
    en_jp?: string;
    ja_jp: null | string;
    en_us?: string;
    en?: string;
}

export interface CoverImage {
    tiny: string;
    large: string;
    small: string;
    original: string;
    medium: string;
}

export interface DatumLinks {
    self: string;
}

export interface Relationship {
    links: RelationshipLinks;
}

export interface RelationshipLinks {
    self: string;
    related: string;
}

export enum Type {
    Anime = 'anime',
}

export interface AnimesLinks {
    first: string;
    next: string;
    last: string;
}

export interface AnimesMeta {
    count: number;
}
