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

export class FilterApplicationDto {
    'id'?: number;
    'importer'?: string;
    'exporter'?: string;
    'speciesScientificName'?: string;
    'commonName'?: string;
    'userId'?: number;
    'userEmail'?: string;
    'reviewerId'?: number | null;
    'reviewerEmail'?: string;
    'types'?: Array<FilterApplicationDtoTypesEnum>;
    'statuses'?: Array<FilterApplicationDtoStatusesEnum>;
    'year'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "importer",
            "baseName": "importer",
            "type": "string",
            "format": ""
        },
        {
            "name": "exporter",
            "baseName": "exporter",
            "type": "string",
            "format": ""
        },
        {
            "name": "speciesScientificName",
            "baseName": "speciesScientificName",
            "type": "string",
            "format": ""
        },
        {
            "name": "commonName",
            "baseName": "commonName",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number",
            "format": ""
        },
        {
            "name": "userEmail",
            "baseName": "userEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "reviewerId",
            "baseName": "reviewerId",
            "type": "number",
            "format": ""
        },
        {
            "name": "reviewerEmail",
            "baseName": "reviewerEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<FilterApplicationDtoTypesEnum>",
            "format": ""
        },
        {
            "name": "statuses",
            "baseName": "statuses",
            "type": "Array<FilterApplicationDtoStatusesEnum>",
            "format": ""
        },
        {
            "name": "year",
            "baseName": "year",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FilterApplicationDto.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FilterApplicationDtoTypesEnum {
    Import = 'import',
    Export = 'export',
    Reexport = 'reexport',
    Other = 'other'
}
export enum FilterApplicationDtoStatusesEnum {
    Created = 'created',
    Submitted = 'submitted',
    Returned = 'returned',
    Reviewed = 'reviewed',
    Approved = 'approved',
    Declined = 'declined',
    Signed = 'signed',
    Canceled = 'canceled'
}

