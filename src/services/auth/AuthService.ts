export class AuthService {
    static isLoggedIn() {
        return localStorage.getItem("token") !== null;
    }

    static getToken() {
        if (typeof window !== "undefined") {
            return localStorage.getItem("token") ?? "";
        }
        return "notoken";
    }
}
