/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { MessageResponseDto } from "./MessageResponseDto";
import type { ResponseStatus } from "./ResponseStatus";
export type MessageResponseDtoArrayPaginatedApiResponse = {
    status: ResponseStatus;
    totalPages: number;
    currentPage: number;
    totalRecords: number;
    skippedRecords: number;
    recordsToSend: number;
    hasNext: boolean;
    data?: Array<MessageResponseDto> | null;
    messages: Array<string>;
};
