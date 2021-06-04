import { CustomersService, customersService } from "./customers.service"
import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS_CODES, ServerResponse } from '../interfaces'

export class CustomersController {
    private static customerService = customersService;

    static getCustomers(req: Request, res: Response) {
        const customers = CustomersController.customerService.getCustomers();
        return res.status(HTTP_STATUS_CODES.SUCCESS).json({
            data: customers,
            error: null
        } as ServerResponse)
    }
}