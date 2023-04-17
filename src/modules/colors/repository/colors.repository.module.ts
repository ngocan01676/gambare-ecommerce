import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { ColorsEntity, ColorsEntitySchema } from './entities/colors.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: ColorsEntity.name,
                    schema: ColorsEntitySchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class ColorsRepositoryModule {}
