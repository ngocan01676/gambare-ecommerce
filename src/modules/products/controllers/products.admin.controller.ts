import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthJwtAdminAccessProtected } from 'src/common/auth/decorators/auth.jwt.decorator';
import { AuthPermissionProtected } from 'src/common/auth/decorators/auth.permission.decorator';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { ProductCreateDto } from '../dtos/product.create.dto';
import {
    Response,
    ResponseExcel,
    ResponsePaging,
} from 'src/common/response/decorators/response.decorator';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import { ProductService } from '../services/product.service';

@ApiTags('modules.admin.product')
@Controller({
    version: '1',
    path: '/product',
})
export class ProductsAdminController {
    constructor(private productService: ProductService) {}

    @Response('product.create', {
        serialization: ResponseIdSerialization,
    })
    // @AuthPermissionProtected(
    //     ENUM_AUTH_PERMISSIONS.USER_READ,
    //     ENUM_AUTH_PERMISSIONS.USER_CREATE
    // )
    //@AuthJwtAdminAccessProtected()
    @Post('/create')
    async create(
        @Body()
        { ...body }: ProductCreateDto
    ): Promise<IResponse> {
        const create = await this.productService.create({ ...body });

        return {
            _id: create._id,
        };
    }
}
