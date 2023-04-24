import {
    Controller,
    Get,
    Logger,
    Post,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
@Controller({
    version: '1',
    path: '/products',
})
export class ProductsController {
    constructor() {}
    @Get('/create')
    async create() {
        const logger = new Logger();
        logger.log('NestApplication test');
        logger.log('/create');
        throw new HttpException('Error message', HttpStatus.BAD_REQUEST);
        // return {
        //   message: "Product call success",
        //   statusCode: 400
        // };
    }

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}
