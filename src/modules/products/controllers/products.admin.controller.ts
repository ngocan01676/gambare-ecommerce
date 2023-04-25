import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthJwtAdminAccessProtected } from 'src/common/auth/decorators/auth.jwt.decorator';
import { AuthPermissionProtected } from 'src/common/auth/decorators/auth.permission.decorator';
import {
    IResponse,
    IResponsePaging,
} from 'src/common/response/interfaces/response.interface';
import { ProductCreateDto } from '../dtos/product.create.dto';
import {
    Response,
    ResponseExcel,
    ResponsePaging,
} from 'src/common/response/decorators/response.decorator';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import { ProductService } from '../services/product.service';
import {
    PRODUCT_DEFAULT_AVAILABLE_SEARCH,
    PRODUCT_DEFAULT_AVAILABLE_SORT,
    PRODUCT_DEFAULT_BLOCKED,
    PRODUCT_DEFAULT_IS_ACTIVE,
    PRODUCT_DEFAULT_PER_PAGE,
    PRODUCT_DEFAULT_SORT,
} from '../constants/product.list.constant';
import {
    PaginationQuery,
    PaginationQueryFilterInBoolean,
} from 'src/common/pagination/decorators/pagination.decorator';
import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { IProductEntity } from '../interfaces/product.interface';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { ProductListSerialization } from '../serializations/product.list.serialization';

@ApiTags('modules.admin.product')
@Controller({
    version: '1',
    path: '/product',
})
export class ProductsAdminController {
    constructor(
        private readonly productService: ProductService,
        private readonly paginationService: PaginationService
    ) {}

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
    ): Promise<any> {
        // return {
        //     data: 1234,
        // };
        await this.sleep(3000, () => {});
        //return this.productService.test();
        const create = await this.productService.create({ ...body });

        return {
            _id: create._id,
        };
    }

    //@UserListDoc()
    @ResponsePaging('product.list', {
        serialization: ProductListSerialization,
    })
    // @AuthPermissionProtected(ENUM_AUTH_PERMISSIONS.USER_READ)
    // @AuthJwtAdminAccessProtected()
    @Get('/list')
    async list(
        @PaginationQuery(
            PRODUCT_DEFAULT_PER_PAGE,
            PRODUCT_DEFAULT_AVAILABLE_SEARCH,
            PRODUCT_DEFAULT_SORT,
            PRODUCT_DEFAULT_AVAILABLE_SORT
        )
        {
            page,
            perPage,
            _sort,
            _search,
            _offset,
            _availableSort,
            _availableSearch,
        }: PaginationListDto,
        @PaginationQueryFilterInBoolean('isActive', PRODUCT_DEFAULT_IS_ACTIVE)
        isActive: Record<string, any>,
        @PaginationQueryFilterInBoolean('blocked', PRODUCT_DEFAULT_BLOCKED)
        blocked: Record<string, any>
    ): Promise<IResponsePaging> {
        const test = await this.sleep(10000, () => {});
        const find: Record<string, any> = {
            ..._search,
            ...isActive,
            ...blocked,
        };

        const products: IProductEntity[] = await this.productService.findAll(
            find,
            {
                paging: {
                    limit: perPage,
                    offset: _offset,
                },
                sort: _sort,
            }
        );
        const totalData: number = await this.productService.getTotal(find);
        const totalPage: number = this.paginationService.totalPage(
            totalData,
            perPage
        );

        return {
            totalData,
            totalPage,
            currentPage: page,
            perPage,
            _availableSearch,
            _availableSort,
            data: products,
        };
    }

    async sleep(time, fn, ...args) {
        await this.timeout(time);
        return fn(...args);
    }

    timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
