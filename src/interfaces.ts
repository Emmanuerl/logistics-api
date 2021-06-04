export interface ServerResponse {
    data: object | null,
    error: object | null | string,
    message?: string,
    status: HTTP_STATUS_CODES
}

export enum HTTP_STATUS_CODES {
    SUCCESS = 200,
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
    SERVER_ERROR = 500
}

export interface Customer {
    firstName: string,
    lastName: string,
    movingDate: string | Date,
    shipmentMode: string,
    status: 'not assigned' | 'assigned',
    fromLocation: string,
    toLocation: string,
    attachmentURL: string
}

export declare type Customers = Customer[];