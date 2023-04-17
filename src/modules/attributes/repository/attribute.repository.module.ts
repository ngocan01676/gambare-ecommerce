import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { AttributeEntity, AttributeSchema } from './entities/attributes.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
          [
            {
              name: AttributeEntity.name,
              schema: AttributeSchema,
            },
          ],
          DATABASE_CONNECTION_NAME
        ),
    ],
})
export class AttributeRepositoryModule {}
