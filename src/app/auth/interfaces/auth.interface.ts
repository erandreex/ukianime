export interface AuthResponse {
    ok: boolean;
    user?: Usuario;
    token?: string;
    msg?: string;
}

export interface Usuario {
    firstname?: string;
    lastname?: string;
}
