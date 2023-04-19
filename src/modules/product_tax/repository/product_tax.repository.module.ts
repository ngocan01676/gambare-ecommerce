import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { ProductTaxEntity, ProductTaxSchema } from './entities/product_tax.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
      MongooseModule.forFeature(
          [
            {
              name: ProductTaxEntity.name,
              schema: ProductTaxSchema,
            },
          ],
          DATABASE_CONNECTION_NAME
      ),
    ],
})
export class ProductTaxRepositoryModule {}
