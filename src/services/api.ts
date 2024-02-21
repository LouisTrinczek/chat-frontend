import { ChatApiClient } from "@/services/generated";

export const api = new ChatApiClient({ BASE: "http://localhost:5090" });
