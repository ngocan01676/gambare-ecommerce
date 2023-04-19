import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { ProductStocksEntity, ProductStocksSchema } from './entities/product_stocks.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
      MongooseModule.forFeature(
          [
            {
              name: ProductStocksEntity.name,
              schema: ProductStocksSchema,
            },
          ],
          DATABASE_CONNECTION_NAME
      ),
    ],
})
export class ProductStocksRepositoryModule {}
