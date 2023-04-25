import {
    IDatabaseFindAllOptions,
    IDatabaseFindOneOptions,
    IDatabaseOptions,
    IDatabaseCreateOptions,
} from 'src/common/database/interfaces/database.interface';
import { ProductCreateDto } from '../dtos/product.create.dto';
import { IProductService } from '../interfaces/product.service.interface';
import { ProductsEntity } from '../repository/entities/products.entity';
import { ProductRepository } from '../repository/repositories/product.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService implements IProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    findAll<T>(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions<any>
    ): Promise<T[]> {
        return this.productRepository.findAll(find, options);
    }

    findOneById<T>(
        _id: string,
        options?: IDatabaseFindOneOptions<any>
    ): Promise<T> {
        return this.productRepository.findOneById(_id, options);
    }

    findOne<T>(
        find: Record<string, any>,
        options?: IDatabaseFindOneOptions<any>
    ): Promise<T> {
        return this.productRepository.findOne(find, options);
    }

    findOneByUsername<T>(
        username: string,
        options?: IDatabaseFindOneOptions<any>
    ): Promise<T> {
        return this.productRepository.findOne<T>({ username }, options);
    }

    getTotal(
        find?: Record<string, any>,
        options?: IDatabaseOptions
    ): Promise<number> {
        return this.productRepository.getTotal(find, options);
    }

    create(
        data: ProductCreateDto,
        options?: IDatabaseCreateOptions<any>
    ): Promise<ProductsEntity> {
        const create = new ProductsEntity();
        create.name = data.name;
        create.userId = data.userId;
        create.addedBy = data.addedBy;
        create.attrValue = data.attrValue;
        create.purchasePrice = data.purchasePrice;
        create.approved = data.approved;
        create.todayDeals = data.todayDeals;
        create.auctionProduct = data.auctionProduct;
        create.attrValue = data.attrValue;
        create.barCode = data.barCode;
        create.colors = data.colors;
        create.categoryId = data.categoryId;
        create.brandsId = data.brandsId;
        //return Promise.resolve(new ProductsEntity());
        return this.productRepository.create(create, options);
    }

    test() {
        return 'test FUNC';
    }
}
