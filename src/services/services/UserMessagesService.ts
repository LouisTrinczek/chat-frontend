/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { MessageCreateDto } from "../models/MessageCreateDto";
import type { MessageResponseDtoApiResponse } from "../models/MessageResponseDtoApiResponse";
import type { MessageResponseDtoArrayPaginatedApiResponse } from "../models/MessageResponseDtoArrayPaginatedApiResponse";
import type { MessageUpdateDto } from "../models/MessageUpdateDto";
import type { StringApiResponse } from "../models/StringApiResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class UserMessagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Writes a Message to a User
     * @param userId
     * @param requestBody
     * @returns MessageResponseDtoApiResponse Successfully sent message
     * @throws ApiError
     */
    public postApiV1UsersMessages(
        userId: string,
        requestBody?: MessageCreateDto
    ): CancelablePromise<MessageResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "POST",
            url: "/api/v1/users/{userId}/messages",
            path: {
                userId: userId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to write a user he's not permitted to`,
            },
        });
    }
    /**
     * Gets a Paginated Chat with a user
     * @param userId
     * @returns MessageResponseDtoArrayPaginatedApiResponse Successfully get chat
     * @throws ApiError
     */
    public getApiV1UsersMessages(
        userId: string
    ): CancelablePromise<MessageResponseDtoArrayPaginatedApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/users/{userId}/messages",
            path: {
                userId: userId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a chat he's not permitted to`,
            },
        });
    }
    /**
     * Updates a Message
     * @param userId
     * @param messageId
     * @param requestBody
     * @returns MessageResponseDtoApiResponse Successfully updated message
     * @throws ApiError
     */
    public patchApiV1UsersMessages(
        userId: string,
        messageId: string,
        requestBody?: MessageUpdateDto
    ): CancelablePromise<MessageResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "PATCH",
            url: "/api/v1/users/{userId}/messages/{messageId}",
            path: {
                userId: userId,
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
     * @param userId
     * @param messageId
     * @returns StringApiResponse Successfully deleted message
     * @throws ApiError
     */
    public deleteApiV1UsersMessages(
        userId: string,
        messageId: string
    ): CancelablePromise<StringApiResponse> {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/api/v1/users/{userId}/messages/{messageId}",
            path: {
                userId: userId,
                messageId: messageId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to delete a message he's not permitted to`,
            },
        });
    }
}
