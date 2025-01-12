// @generated by protobuf-ts 2.0.7 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "authzed/api/v0/watch_service.proto" (package "authzed.api.v0", syntax proto3)
// tslint:disable
// @deprecated
import { WatchService } from "./watch_service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { WatchResponse } from "./watch_service";
import type { WatchRequest } from "./watch_service";
import * as grpc from "@grpc/grpc-js";
/**
 * @deprecated
 * @generated from protobuf service authzed.api.v0.WatchService
 */
export interface IWatchServiceClient {
    /**
     * @deprecated
     * @generated from protobuf rpc: Watch(authzed.api.v0.WatchRequest) returns (stream authzed.api.v0.WatchResponse);
     */
    watch(input: WatchRequest, metadata?: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<WatchResponse>;
    watch(input: WatchRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<WatchResponse>;
}
/**
 * @deprecated
 * @generated from protobuf service authzed.api.v0.WatchService
 */
export class WatchServiceClient extends grpc.Client implements IWatchServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * @deprecated
     * @generated from protobuf rpc: Watch(authzed.api.v0.WatchRequest) returns (stream authzed.api.v0.WatchResponse);
     */
    watch(input: WatchRequest, metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientReadableStream<WatchResponse> {
        const method = WatchService.methods[0];
        return this.makeServerStreamRequest<WatchRequest, WatchResponse>(`/${WatchService.typeName}/${method.name}`, (value: WatchRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): WatchResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), options);
    }
}
