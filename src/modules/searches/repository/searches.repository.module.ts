import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { SearchesEntity, SearchesEntitySchema } from './entities/searches.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: SearchesEntity.name,
                    schema: SearchesEntitySchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class SearchesRepositoryModule {}
