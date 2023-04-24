import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import {
    ProductsEntity,
    ProductsEntitySchema,
} from './entities/products.entity';
import { ProductRepository } from './repositories/product.repository';

@Module({
    providers: [ProductRepository],
    exports: [ProductRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: ProductsEntity.name,
                    schema: ProductsEntitySchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class ProductsRepositoryModule {}
