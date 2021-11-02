// @generated by protobuf-ts 2.0.7 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "authzed/api/v1/schema.proto" (package "authzed.api.v1", syntax proto3)
// tslint:disable
import { SchemaService } from "./schema";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { WriteSchemaResponse } from "./schema";
import type { WriteSchemaRequest } from "./schema";
import type { ReadSchemaResponse } from "./schema";
import type { ReadSchemaRequest } from "./schema";
import * as grpc from "@grpc/grpc-js";
/**
 * SchemaService implements operations on a Permissions System's Schema.
 *
 * @generated from protobuf service authzed.api.v1.SchemaService
 */
export interface ISchemaServiceClient {
    /**
     * Read returns the current Object Definitions for a Permissions System.
     *
     * Errors include:
     * - INVALID_ARGUMENT: a provided value has failed to semantically validate
     * - NOT_FOUND: no schema has been defined
     *
     * @generated from protobuf rpc: ReadSchema(authzed.api.v1.ReadSchemaRequest) returns (authzed.api.v1.ReadSchemaResponse);
     */
    readSchema(input: ReadSchemaRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ReadSchemaResponse) => void): grpc.ClientUnaryCall;
    readSchema(input: ReadSchemaRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: ReadSchemaResponse) => void): grpc.ClientUnaryCall;
    readSchema(input: ReadSchemaRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ReadSchemaResponse) => void): grpc.ClientUnaryCall;
    readSchema(input: ReadSchemaRequest, callback: (err: grpc.ServiceError | null, value?: ReadSchemaResponse) => void): grpc.ClientUnaryCall;
    /**
     * Write overwrites the current Object Definitions for a Permissions System.
     *
     * @generated from protobuf rpc: WriteSchema(authzed.api.v1.WriteSchemaRequest) returns (authzed.api.v1.WriteSchemaResponse);
     */
    writeSchema(input: WriteSchemaRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: WriteSchemaResponse) => void): grpc.ClientUnaryCall;
    writeSchema(input: WriteSchemaRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: WriteSchemaResponse) => void): grpc.ClientUnaryCall;
    writeSchema(input: WriteSchemaRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: WriteSchemaResponse) => void): grpc.ClientUnaryCall;
    writeSchema(input: WriteSchemaRequest, callback: (err: grpc.ServiceError | null, value?: WriteSchemaResponse) => void): grpc.ClientUnaryCall;
}
/**
 * SchemaService implements operations on a Permissions System's Schema.
 *
 * @generated from protobuf service authzed.api.v1.SchemaService
 */
export class SchemaServiceClient extends grpc.Client implements ISchemaServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * Read returns the current Object Definitions for a Permissions System.
     *
     * Errors include:
     * - INVALID_ARGUMENT: a provided value has failed to semantically validate
     * - NOT_FOUND: no schema has been defined
     *
     * @generated from protobuf rpc: ReadSchema(authzed.api.v1.ReadSchemaRequest) returns (authzed.api.v1.ReadSchemaResponse);
     */
    readSchema(input: ReadSchemaRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ReadSchemaResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ReadSchemaResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: ReadSchemaResponse) => void)): grpc.ClientUnaryCall {
        const method = SchemaService.methods[0];
        return this.makeUnaryRequest<ReadSchemaRequest, ReadSchemaResponse>(`/${SchemaService.typeName}/${method.name}`, (value: ReadSchemaRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): ReadSchemaResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * Write overwrites the current Object Definitions for a Permissions System.
     *
     * @generated from protobuf rpc: WriteSchema(authzed.api.v1.WriteSchemaRequest) returns (authzed.api.v1.WriteSchemaResponse);
     */
    writeSchema(input: WriteSchemaRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: WriteSchemaResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: WriteSchemaResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: WriteSchemaResponse) => void)): grpc.ClientUnaryCall {
        const method = SchemaService.methods[1];
        return this.makeUnaryRequest<WriteSchemaRequest, WriteSchemaResponse>(`/${SchemaService.typeName}/${method.name}`, (value: WriteSchemaRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): WriteSchemaResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
