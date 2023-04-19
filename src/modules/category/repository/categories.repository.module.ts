import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { CategoryEntity, CategorySchema } from './entities/categories.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
          [
            {
              name: CategoryEntity.name,
              schema: CategorySchema,
            },
          ],
          DATABASE_CONNECTION_NAME
        ),
    ],
})
export class CategoryRepositoryModule {}
