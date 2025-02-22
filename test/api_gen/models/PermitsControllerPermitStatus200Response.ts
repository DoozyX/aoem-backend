/**
 * MOEPP CITES API
 * MOEPP CITES API docs
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PermitsControllerPermitStatus200Response {
    'name': string;
    'data': any;
    'id': string;
    'progress': any;
    'timestamp': number;
    'state': PermitsControllerPermitStatus200ResponseStateEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "progress",
            "baseName": "progress",
            "type": "any",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "PermitsControllerPermitStatus200ResponseStateEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PermitsControllerPermitStatus200Response.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PermitsControllerPermitStatus200ResponseStateEnum {
    Completed = 'completed',
    Failed = 'failed',
    Active = 'active',
    Delayed = 'delayed',
    Prioritized = 'prioritized',
    Waiting = 'waiting',
    WaitingChildren = 'waiting-children',
    Unknown = 'unknown'
}

