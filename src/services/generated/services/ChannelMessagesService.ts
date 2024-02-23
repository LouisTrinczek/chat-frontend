/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageCreateDto } from "../models/MessageCreateDto";
import type { MessageResponseDtoApiResponse } from "../models/MessageResponseDtoApiResponse";
import type { MessageResponseDtoArrayPaginatedApiResponse } from "../models/MessageResponseDtoArrayPaginatedApiResponse";
import type { MessageUpdateDto } from "../models/MessageUpdateDto";
import type { StringApiResponse } from "../models/StringApiResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class ChannelMessagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Writes a Message to a Channel
     * @param serverId
     * @param channelId
     * @param requestBody
     * @returns MessageResponseDtoApiResponse Successfully sent message
     * @throws ApiError
     */
    public postApiV1ServersChannelsMessages(
        serverId: string,
        channelId: string,
        requestBody?: MessageCreateDto
    ): CancelablePromise<MessageResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "POST",
            url: "/api/v1/servers/{serverId}/channels/{channelId}/messages",
            path: {
                serverId: serverId,
                channelId: channelId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to write in a channel he's not permitted to`,
            },
        });
    }
    /**
     * Gets a Paginated Chat from a channel
     * @param serverId
     * @param channelId
     * @returns MessageResponseDtoArrayPaginatedApiResponse Successfully get chat
     * @throws ApiError
     */
    public getApiV1ServersChannelsMessages(
        serverId: string,
        channelId: string
    ): CancelablePromise<MessageResponseDtoArrayPaginatedApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/servers/{serverId}/channels/{channelId}/messages",
            path: {
                serverId: serverId,
                channelId: channelId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a chat he's not permitted to`,
            },
        });
    }
    /**
     * Updates a Message
     * @param serverId
     * @param channelId
     * @param messageId
     * @param requestBody
     * @returns MessageResponseDtoApiResponse Successfully updated message
     * @throws ApiError
     */
    public patchApiV1ServersChannelsMessages(
        serverId: string,
        channelId: string,
        messageId: string,
        requestBody?: MessageUpdateDto
    ): CancelablePromise<MessageResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "PATCH",
            url: "/api/v1/servers/{serverId}/channels/{channelId}/messages/{messageId}",
            path: {
                serverId: serverId,
                channelId: channelId,
                messageId: messageId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to update a message he's not permitted to`,
            },
        });
    }
    /**
     * Deletes A Message
     * @param serverId
     * @param channelId
     * @param messageId
     * @returns StringApiResponse Successfully deleted message
     * @throws ApiError
     */
    public deleteApiV1ServersChannelsMessages(
        serverId: string,
        channelId: string,
        messageId: string
    ): CancelablePromise<StringApiResponse> {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/api/v1/servers/{serverId}/channels/{channelId}/messages/{messageId}",
            path: {
                serverId: serverId,
                channelId: channelId,
                messageId: messageId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to delete a message he's not permitted to`,
            },
        });
    }
}
