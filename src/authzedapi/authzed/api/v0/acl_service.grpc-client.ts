// @generated by protobuf-ts 2.0.7 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "authzed/api/v0/acl_service.proto" (package "authzed.api.v0", syntax proto3)
// tslint:disable
import { ACLService } from "./acl_service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { LookupResponse } from "./acl_service";
import type { LookupRequest } from "./acl_service";
import type { ExpandResponse } from "./acl_service";
import type { ExpandRequest } from "./acl_service";
import type { ContentChangeCheckRequest } from "./acl_service";
import type { CheckResponse } from "./acl_service";
import type { CheckRequest } from "./acl_service";
import type { WriteResponse } from "./acl_service";
import type { WriteRequest } from "./acl_service";
import type { ReadResponse } from "./acl_service";
import type { ReadRequest } from "./acl_service";
import * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service authzed.api.v0.ACLService
 */
export interface IACLServiceClient {
    /**
     * @generated from protobuf rpc: Read(authzed.api.v0.ReadRequest) returns (authzed.api.v0.ReadResponse);
     */
    read(input: ReadRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ReadResponse) => void): grpc.ClientUnaryCall;
    read(input: ReadRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: ReadResponse) => void): grpc.ClientUnaryCall;
    read(input: ReadRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ReadResponse) => void): grpc.ClientUnaryCall;
    read(input: ReadRequest, callback: (err: grpc.ServiceError | null, value?: ReadResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: Write(authzed.api.v0.WriteRequest) returns (authzed.api.v0.WriteResponse);
     */
    write(input: WriteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: WriteResponse) => void): grpc.ClientUnaryCall;
    write(input: WriteRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: WriteResponse) => void): grpc.ClientUnaryCall;
    write(input: WriteRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: WriteResponse) => void): grpc.ClientUnaryCall;
    write(input: WriteRequest, callback: (err: grpc.ServiceError | null, value?: WriteResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: Check(authzed.api.v0.CheckRequest) returns (authzed.api.v0.CheckResponse);
     */
    check(input: CheckRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CheckResponse) => void): grpc.ClientUnaryCall;
    check(input: CheckRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: CheckResponse) => void): grpc.ClientUnaryCall;
    check(input: CheckRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CheckResponse) => void): grpc.ClientUnaryCall;
    check(input: CheckRequest, callback: (err: grpc.ServiceError | null, value?: CheckResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: ContentChangeCheck(authzed.api.v0.ContentChangeCheckRequest) returns (authzed.api.v0.CheckResponse);
     */
    contentChangeCheck(input: ContentChangeCheckRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CheckResponse) => void): grpc.ClientUnaryCall;
    contentChangeCheck(input: ContentChangeCheckRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: CheckResponse) => void): grpc.ClientUnaryCall;
    contentChangeCheck(input: ContentChangeCheckRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CheckResponse) => void): grpc.ClientUnaryCall;
    contentChangeCheck(input: ContentChangeCheckRequest, callback: (err: grpc.ServiceError | null, value?: CheckResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: Expand(authzed.api.v0.ExpandRequest) returns (authzed.api.v0.ExpandResponse);
     */
    expand(input: ExpandRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ExpandResponse) => void): grpc.ClientUnaryCall;
    expand(input: ExpandRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: ExpandResponse) => void): grpc.ClientUnaryCall;
    expand(input: ExpandRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ExpandResponse) => void): grpc.ClientUnaryCall;
    expand(input: ExpandRequest, callback: (err: grpc.ServiceError | null, value?: ExpandResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: Lookup(authzed.api.v0.LookupRequest) returns (authzed.api.v0.LookupResponse);
     */
    lookup(input: LookupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: LookupResponse) => void): grpc.ClientUnaryCall;
    lookup(input: LookupRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: LookupResponse) => void): grpc.ClientUnaryCall;
    lookup(input: LookupRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: LookupResponse) => void): grpc.ClientUnaryCall;
    lookup(input: LookupRequest, callback: (err: grpc.ServiceError | null, value?: LookupResponse) => void): grpc.ClientUnaryCall;
}
/**
 * @generated from protobuf service authzed.api.v0.ACLService
 */
export class ACLServiceClient extends grpc.Client implements IACLServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * @generated from protobuf rpc: Read(authzed.api.v0.ReadRequest) returns (authzed.api.v0.ReadResponse);
     */
    read(input: ReadRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ReadResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ReadResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: ReadResponse) => void)): grpc.ClientUnaryCall {
        const method = ACLService.methods[0];
        return this.makeUnaryRequest<ReadRequest, ReadResponse>(`/${ACLService.typeName}/${method.name}`, (value: ReadRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): ReadResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: Write(authzed.api.v0.WriteRequest) returns (authzed.api.v0.WriteResponse);
     */
    write(input: WriteRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: WriteResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: WriteResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: WriteResponse) => void)): grpc.ClientUnaryCall {
        const method = ACLService.methods[1];
        return this.makeUnaryRequest<WriteRequest, WriteResponse>(`/${ACLService.typeName}/${method.name}`, (value: WriteRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): WriteResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: Check(authzed.api.v0.CheckRequest) returns (authzed.api.v0.CheckResponse);
     */
    check(input: CheckRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CheckResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CheckResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: CheckResponse) => void)): grpc.ClientUnaryCall {
        const method = ACLService.methods[2];
        return this.makeUnaryRequest<CheckRequest, CheckResponse>(`/${ACLService.typeName}/${method.name}`, (value: CheckRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): CheckResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: ContentChangeCheck(authzed.api.v0.ContentChangeCheckRequest) returns (authzed.api.v0.CheckResponse);
     */
    contentChangeCheck(input: ContentChangeCheckRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CheckResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CheckResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: CheckResponse) => void)): grpc.ClientUnaryCall {
        const method = ACLService.methods[3];
        return this.makeUnaryRequest<ContentChangeCheckRequest, CheckResponse>(`/${ACLService.typeName}/${method.name}`, (value: ContentChangeCheckRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): CheckResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: Expand(authzed.api.v0.ExpandRequest) returns (authzed.api.v0.ExpandResponse);
     */
    expand(input: ExpandRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ExpandResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ExpandResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: ExpandResponse) => void)): grpc.ClientUnaryCall {
        const method = ACLService.methods[4];
        return this.makeUnaryRequest<ExpandRequest, ExpandResponse>(`/${ACLService.typeName}/${method.name}`, (value: ExpandRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): ExpandResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: Lookup(authzed.api.v0.LookupRequest) returns (authzed.api.v0.LookupResponse);
     */
    lookup(input: LookupRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: LookupResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: LookupResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: LookupResponse) => void)): grpc.ClientUnaryCall {
        const method = ACLService.methods[5];
        return this.makeUnaryRequest<LookupRequest, LookupResponse>(`/${ACLService.typeName}/${method.name}`, (value: LookupRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): LookupResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
