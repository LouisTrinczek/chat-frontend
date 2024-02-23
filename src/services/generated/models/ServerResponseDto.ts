/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServerChannelResponseDto } from "./ServerChannelResponseDto";
import type { UserResponseDto } from "./UserResponseDto";
export type ServerResponseDto = {
    id: string;
    name: string;
    ownerId: string;
    iconUrl?: string | null;
    members: Array<UserResponseDto>;
    channels: Array<ServerChannelResponseDto>;
};
