import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions } from "src/common/database/interfaces/database.interface";
import { ProductsEntity } from "../repository/entities/products.entity";
import { ProductCreateDto } from "../dtos/product.create.dto";

export interface IProductService {
      findAll<T>(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<T[]>;

    findOneById<T>(_id: string, options?: IDatabaseFindOneOptions): Promise<T>;

    findOne<T>(
        find: Record<string, any>,
        options?: IDatabaseFindOneOptions
    ): Promise<T>;

    findOneByUsername<T>(
        username: string,
        options?: IDatabaseFindOneOptions
    ): Promise<T>;

    getTotal(
        find?: Record<string, any>,
        options?: IDatabaseOptions
    ): Promise<number>;

    create(
        data: ProductCreateDto,
        options?: IDatabaseCreateOptions
    ): Promise<ProductsEntity>;
}