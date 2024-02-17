/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AttachmentResponseDto } from "./AttachmentResponseDto";
export type MessageResponseDto = {
    id: string;
    authorId: string;
    content: string;
    attachments?: Array<AttachmentResponseDto> | null;
    createdAt: string;
};
