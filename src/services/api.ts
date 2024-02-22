import { ChatApiClient } from "@/services/generated";
import { AuthService } from "@/services/auth/AuthService";

export const api = new ChatApiClient({
    BASE: "http://localhost:5090",
    TOKEN: AuthService.getToken(),
});
