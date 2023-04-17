import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { AttributeCategoryEntity, AttributeCategoryEntitySchema } from './entities/attribute_category.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: AttributeCategoryEntity.name,
                    schema: AttributeCategoryEntitySchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class AttributeCategoryRepositoryModule {}
