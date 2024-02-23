/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseStatus } from "./ResponseStatus";
import type { ServerResponseDto } from "./ServerResponseDto";
export type ServerResponseDtoArrayPaginatedApiResponse = {
    status: ResponseStatus;
    totalPages: number;
    currentPage: number;
    totalRecords: number;
    skippedRecords: number;
    recordsToSend: number;
    hasNext: boolean;
    data?: Array<ServerResponseDto> | null;
    messages: Array<string>;
};
