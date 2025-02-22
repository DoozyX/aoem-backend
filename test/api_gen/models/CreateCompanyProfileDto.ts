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

import { AddressDto } from '../models/AddressDto';
import { CreateIndividualProfileDto } from '../models/CreateIndividualProfileDto';
import { HttpFile } from '../http/http';

export class CreateCompanyProfileDto {
    'name': string;
    'address': AddressDto;
    'taxNumber': number;
    'identificationDocument': string;
    'contact': CreateIndividualProfileDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "AddressDto",
            "format": ""
        },
        {
            "name": "taxNumber",
            "baseName": "taxNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "identificationDocument",
            "baseName": "identificationDocument",
            "type": "string",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "CreateIndividualProfileDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateCompanyProfileDto.attributeTypeMap;
    }

    public constructor() {
    }
}

