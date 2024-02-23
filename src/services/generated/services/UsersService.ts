/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectApiResponse } from "../models/ObjectApiResponse";
import type { ServerResponseDtoArrayPaginatedApiResponse } from "../models/ServerResponseDtoArrayPaginatedApiResponse";
import type { StringApiResponse } from "../models/StringApiResponse";
import type { UserLoginDto } from "../models/UserLoginDto";
import type { UserRegistrationDto } from "../models/UserRegistrationDto";
import type { UserResponseDtoApiResponse } from "../models/UserResponseDtoApiResponse";
import type { UserResponseDtoArrayApiResponse } from "../models/UserResponseDtoArrayApiResponse";
import type { UserUpdateDto } from "../models/UserUpdateDto";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class UsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a new User
     * @param requestBody
     * @returns UserResponseDtoApiResponse Successfully generated User
     * @throws ApiError
     */
    public postApiV1UsersRegister(
        requestBody?: UserRegistrationDto
    ): CancelablePromise<UserResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "POST",
            url: "/api/v1/users/register",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Invalid Email or password too Short`,
                409: `User with Email or Username already exists`,
            },
        });
    }
    /**
     * Authenticates the User with a JWT Token
     * @param requestBody
     * @returns StringApiResponse Successfully generated JWT Token String
     * @throws ApiError
     */
    public postApiV1UsersLogin(
        requestBody?: UserLoginDto
    ): CancelablePromise<StringApiResponse> {
        return this.httpRequest.request({
            method: "POST",
            url: "/api/v1/users/login",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Invalid Email, wrong Password, or user does not exist`,
            },
        });
    }
    /**
     * Updates a User
     * @param userId
     * @param requestBody
     * @returns UserResponseDtoApiResponse Successfully Updated User
     * @throws ApiError
     */
    public putApiV1Users(
        userId: string,
        requestBody?: UserUpdateDto
    ): CancelablePromise<UserResponseDtoApiResponse> {
        return this.httpRequest.request({
            method: "PUT",
            url: "/api/v1/users/{userId}",
            path: {
                userId: userId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to update a user he's not permitted to`,
                409: `If the user tries to update to a username or email that is already taken`,
            },
        });
    }
    /**
     * Deletes a User
     * @param userId
     * @returns ObjectApiResponse Successfully Deleted User
     * @throws ApiError
     */
    public deleteApiV1Users(
        userId: string
    ): CancelablePromise<ObjectApiResponse> {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/api/v1/users/{userId}",
            path: {
                userId: userId,
            },
            errors: {
                400: `If the user tries to delete a user that doesn't exist`,
                401: `If the user isn't logged in`,
                403: `If the user tries to delete a user he's not permitted to`,
            },
        });
    }
    /**
     * Gets a User
     * @param userId
     * @returns UserResponseDtoArrayApiResponse Successfully Get User
     * @throws ApiError
     */
    public getApiV1Users(
        userId: string
    ): CancelablePromise<UserResponseDtoArrayApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/users/{userId}",
            path: {
                userId: userId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a user he's not permitted to`,
            },
        });
    }
    /**
     * Gets all Servers a User is a member of
     * @param userId
     * @returns ServerResponseDtoArrayPaginatedApiResponse Successfully get servers
     * @throws ApiError
     */
    public getApiV1UsersServers(
        userId: string
    ): CancelablePromise<ServerResponseDtoArrayPaginatedApiResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/api/v1/users/{userId}/servers",
            path: {
                userId: userId,
            },
            errors: {
                401: `If the user isn't logged in`,
                403: `If the user tries to get a chat he's not permitted to`,
            },
        });
    }
}
