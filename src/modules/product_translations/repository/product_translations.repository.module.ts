import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { ProductTranslationsEntity, ProductTranslationsSchema } from './entities/product_translations.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
      MongooseModule.forFeature(
          [
            {
              name: ProductTranslationsEntity.name,
              schema: ProductTranslationsSchema,
            },
          ],
          DATABASE_CONNECTION_NAME
      ),
    ],
})
export class ProductTranslationsRepositoryModule {}
