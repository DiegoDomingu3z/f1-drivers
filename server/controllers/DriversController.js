import res from "express/lib/response";
import { driverService } from "../services/driverService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";



export class DriversController extends BaseController {
    constructor() {
        super('api/drivers')
        this.router
            .get('', this.getDrivers)
            .post('', this.createDriver)
            .delete('/:name', this.deleteDriver)
    }


    async getDrivers(req, res, next) {
        try {
            let driver = await driverService.getDriver()
            return res.send(driver)
        } catch (error) {
            next(error)
        }
    }

    async createDriver(req, res, next) {
        try {
            let drivers = await driverService.createDriver(req.body)
            return res.send(drivers)
        } catch (error) {
            next(error)
        }


    }
    async deleteDriver(req, res, next) {
        try {
            logger.log(req.params.name)
            let message = await driverService.deleteDriver(req.params.name)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }


}