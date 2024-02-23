import { ChatApiClient } from "@/services/generated";
import { AuthService } from "@/services/auth/AuthService";

export const api = new ChatApiClient({
    BASE: process.env.NEXT_PUBLIC_BACKEND_URL,
    TOKEN: AuthService.getToken(),
});
