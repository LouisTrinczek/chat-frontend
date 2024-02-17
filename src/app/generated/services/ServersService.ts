/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ServerCreationDto } from "../models/ServerCreationDto";
import type { ServerResponseDtoApiResponse } from "../models/ServerResponseDtoApiResponse";
import type { ServerUpdateDto } from "../models/ServerUpdateDto";
import type { StringApiResponse } from "../models/StringApiResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class ServersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a Server
     * @param requestBody
     * @returns ServerResponseDtoApiResponse Successfully Created Server
     * @throws ApiError
     */
    public postApiV1Servers(
        requestBody?: ServerCreationDto
    ): CancelablePromise<ServerResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "POST",
            url: "/api/v1/servers",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                401: `If the user isn't logged in`,
            },
        });
    }
    /**
     * Updates a Server
     * @param serverId
     * @param requestBody
     * @returns ServerResponseDtoApiResponse Successfully updated Server
     * @throws ApiError
     */
    public putApiV1Servers(
        serverId: string,
        requestBody?: ServerUpdateDto
    ): CancelablePromise<ServerResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "PUT",
            url: "/api/v1/servers/{serverId}",
            path: {
                serverId: serverId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to update a Server he's not permitted to`,
            },
        });
    }
    /**
     * Deletes a Server
     * @param serverId
     * @returns StringApiResponse Successfully Deleted Server
     * @throws ApiError
     */
    public deleteApiV1Servers(
        serverId: string
    ): CancelablePromise<StringApiResponse> {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/api/v1/servers/{serverId}",
            path: {
                serverId: serverId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to delete a Server he's not permitted to`,
            },
        });
    }
    /**
     * Gets a Server
     * @param serverId
     * @returns ServerResponseDtoApiResponse Successfully Get Server
     * @throws ApiError
     */
    public getApiV1Servers(
        serverId: string
    ): CancelablePromise<ServerResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/servers/{serverId}",
            path: {
                serverId: serverId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a Server he's not permitted to`,
            },
        });
    }
}
