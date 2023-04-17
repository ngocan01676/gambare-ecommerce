import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { SubscribersEntity, SubscribersSchema } from './entities/subscribers.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: SubscribersEntity.name,
                    schema: SubscribersSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class SubscribersRepositoryModule {}
