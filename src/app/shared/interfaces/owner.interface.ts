export interface Owner {
    pathImage: String;
    name: String;
    role: String;
    desc: String;
    social?: socialNet[];
}

export interface socialNet {
    image: String;
    url: String;
}
