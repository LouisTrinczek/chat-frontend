/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import type { OpenAPIConfig } from "./core/OpenAPI";
import { AxiosHttpRequest } from "./core/AxiosHttpRequest";
import { ChannelMessagesService } from "./services/ChannelMessagesService";
import { ChannelsService } from "./services/ChannelsService";
import { FriendsService } from "./services/FriendsService";
import { ServersService } from "./services/ServersService";
import { UserMessagesService } from "./services/UserMessagesService";
import { UsersService } from "./services/UsersService";
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ChatApiClient {
    public readonly channelMessages: ChannelMessagesService;
    public readonly channels: ChannelsService;
    public readonly friends: FriendsService;
    public readonly servers: ServersService;
    public readonly userMessages: UserMessagesService;
    public readonly users: UsersService;
    public readonly request: BaseHttpRequest;
    constructor(
        config?: Partial<OpenAPIConfig>,
        HttpRequest: HttpRequestConstructor = AxiosHttpRequest
    ) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? "",
            VERSION: config?.VERSION ?? "1",
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? "include",
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.channelMessages = new ChannelMessagesService(this.request);
        this.channels = new ChannelsService(this.request);
        this.friends = new FriendsService(this.request);
        this.servers = new ServersService(this.request);
        this.userMessages = new UserMessagesService(this.request);
        this.users = new UsersService(this.request);
    }
}
