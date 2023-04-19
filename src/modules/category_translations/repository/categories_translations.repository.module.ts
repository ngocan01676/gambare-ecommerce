import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { CategoryTranslationsEntity, CategoryTranslationsSchema } from './entities/categories_translations.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
          [
            {
              name: CategoryTranslationsEntity.name,
              schema: CategoryTranslationsSchema,
            },
          ],
          DATABASE_CONNECTION_NAME
        ),
    ],
})
export class CategoryTranslationsRepositoryModule {}
