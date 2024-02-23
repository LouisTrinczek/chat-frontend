/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServerChannelCreateDto } from "../models/ServerChannelCreateDto";
import type { ServerChannelResponseDtoApiResponse } from "../models/ServerChannelResponseDtoApiResponse";
import type { ServerChannelResponseDtoArrayApiResponse } from "../models/ServerChannelResponseDtoArrayApiResponse";
import type { ServerChannelUpdateDto } from "../models/ServerChannelUpdateDto";
import type { StringApiResponse } from "../models/StringApiResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class ChannelsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a Channel
     * @param serverId
     * @param requestBody
     * @returns ServerChannelResponseDtoApiResponse Successfully Created Channel
     * @throws ApiError
     */
    public postApiV1ServersChannels(
        serverId: string,
        requestBody?: ServerChannelCreateDto
    ): CancelablePromise<ServerChannelResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "POST",
            url: "/api/v1/servers/{serverId}/channels",
            path: {
                serverId: serverId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to create a Channel he's not permitted to`,
            },
        });
    }
    /**
     * Gets all Channels within the server
     * @param serverId
     * @returns ServerChannelResponseDtoArrayApiResponse Successfully Get all channels a user sees
     * @throws ApiError
     */
    public getApiV1ServersChannels(
        serverId: string
    ): CancelablePromise<ServerChannelResponseDtoArrayApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/servers/{serverId}/channels",
            path: {
                serverId: serverId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a Servers Channels he's not permitted to`,
            },
        });
    }
    /**
     * Updates a Channel
     * @param serverId
     * @param channelId
     * @param requestBody
     * @returns ServerChannelResponseDtoApiResponse Successfully Updated Channel
     * @throws ApiError
     */
    public putApiV1ServersChannels(
        serverId: string,
        channelId: string,
        requestBody?: ServerChannelUpdateDto
    ): CancelablePromise<ServerChannelResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "PUT",
            url: "/api/v1/servers/{serverId}/channels/{channelId}",
            path: {
                serverId: serverId,
                channelId: channelId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `If the user tries to access a channel that is not part of the server`,
                401: `If the user isn't logged in`,
                403: `If the user tries to update a Channel he's not permitted to`,
            },
        });
    }
    /**
     * Deletes a Channel
     * @param serverId
     * @param channelId
     * @returns StringApiResponse Successfully Deleted Channel
     * @throws ApiError
     */
    public deleteApiV1ServersChannels(
        serverId: string,
        channelId: string
    ): CancelablePromise<StringApiResponse> {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/api/v1/servers/{serverId}/channels/{channelId}",
            path: {
                serverId: serverId,
                channelId: channelId,
            },
            errors: {
                400: `If the user tries to access a channel that is not part of the server`,
                401: `If the user isn't logged in`,
                403: `If the user tries to delete a Channel he's not permitted to`,
            },
        });
    }
    /**
     * Gets a Channel
     * @param serverId
     * @param channelId
     * @returns ServerChannelResponseDtoApiResponse Successfully Get Channel
     * @throws ApiError
     */
    public getApiV1ServersChannels1(
        serverId: string,
        channelId: string
    ): CancelablePromise<ServerChannelResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/servers/{serverId}/channels/{channelId}",
            path: {
                serverId: serverId,
                channelId: channelId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a Channel he's not permitted to`,
            },
        });
    }
}
