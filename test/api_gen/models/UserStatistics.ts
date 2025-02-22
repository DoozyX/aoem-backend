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

export class UserStatistics {
    'inactive': number;
    'verified': number;
    'pending': number;
    'approved': number;
    'rejected': number;
    'total': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inactive",
            "baseName": "inactive",
            "type": "number",
            "format": ""
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "number",
            "format": ""
        },
        {
            "name": "pending",
            "baseName": "pending",
            "type": "number",
            "format": ""
        },
        {
            "name": "approved",
            "baseName": "approved",
            "type": "number",
            "format": ""
        },
        {
            "name": "rejected",
            "baseName": "rejected",
            "type": "number",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserStatistics.attributeTypeMap;
    }

    public constructor() {
    }
}

