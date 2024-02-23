export class AuthService {
    static isLoggedIn() {
        return this.getToken() !== "";
    }

    static getToken() {
        if (typeof window !== "undefined") {
            return localStorage.getItem("token") ?? "";
        }
        return "";
    }

    static getUserId() {
        const token = this.getToken();

        const payload = token.split(".")[1];
        const decodedPayload = atob(payload);
        const payloadJson = JSON.parse(decodedPayload);

        return payloadJson["nameid"];
    }
}
