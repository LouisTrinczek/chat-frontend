/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { FriendsRequestDto } from "../models/FriendsRequestDto";
import type { ObjectApiResponse } from "../models/ObjectApiResponse";
import type { StringApiResponse } from "../models/StringApiResponse";
import type { UserResponseDtoApiResponse } from "../models/UserResponseDtoApiResponse";
import type { UserResponseDtoArrayApiResponse } from "../models/UserResponseDtoArrayApiResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class FriendsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adds a Friend
     * @param userId
     * @param requestBody
     * @returns UserResponseDtoApiResponse Successfully Added Friend
     * @throws ApiError
     */
    public postApiV1UsersFriends(
        userId: string,
        requestBody?: FriendsRequestDto
    ): CancelablePromise<UserResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "POST",
            url: "/api/v1/users/{userId}/friends",
            path: {
                userId: userId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to add a friend he's not permitted to, or if the users are already friends`,
            },
        });
    }
    /**
     * Gets the friend list
     * @param userId
     * @returns UserResponseDtoArrayApiResponse Successfully Get Server
     * @throws ApiError
     */
    public getApiV1UsersFriends(
        userId: string
    ): CancelablePromise<UserResponseDtoArrayApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/users/{userId}/friends",
            path: {
                userId: userId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a friend list he's not permitted to`,
            },
        });
    }
    /**
     * Accepts a Friend Request
     * @param userId
     * @param friendId
     * @returns ObjectApiResponse Successfully accepted a friend request
     * @throws ApiError
     */
    public postApiV1UsersFriendsAccept(
        userId: string,
        friendId: string
    ): CancelablePromise<ObjectApiResponse> {
        return this.httpRequest.request({
            method: "POST",
            url: "/api/v1/users/{userId}/friends/{friendId}/accept",
            path: {
                userId: userId,
                friendId: friendId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to accept a request, he's not permitted to`,
            },
        });
    }
    /**
     * Removes a Friend
     * @param userId
     * @param friendId
     * @returns StringApiResponse Successfully removed a friend
     * @throws ApiError
     */
    public deleteApiV1UsersFriends(
        userId: string,
        friendId: string
    ): CancelablePromise<StringApiResponse> {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/api/v1/users/{userId}/friends/{friendId}",
            path: {
                userId: userId,
                friendId: friendId,
            },
            errors: {
                401: `If the user isn't logged in`,
            },
        });
    }
    /**
     * Gets the received friend request list
     * @param userId
     * @returns UserResponseDtoArrayApiResponse Successfully Get received friend quests
     * @throws ApiError
     */
    public getApiV1UsersFriendsReceivedRequests(
        userId: string
    ): CancelablePromise<UserResponseDtoArrayApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/users/{userId}/friends/received-requests",
            path: {
                userId: userId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a friend list he's not permitted to`,
            },
        });
    }
    /**
     * Gets the sent friend request list
     * @param userId
     * @returns UserResponseDtoArrayApiResponse Successfully Get sent request friendlist
     * @throws ApiError
     */
    public getApiV1UsersFriendsSentRequests(
        userId: string
    ): CancelablePromise<UserResponseDtoArrayApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/users/{userId}/friends/sent-requests",
            path: {
                userId: userId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a friend list he's not permitted to`,
            },
        });
    }
}
