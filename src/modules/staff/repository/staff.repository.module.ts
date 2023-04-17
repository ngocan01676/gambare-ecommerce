import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { StaffEntity, StaffEntitySchema } from './entities/staff.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: StaffEntity.name,
                    schema: StaffEntitySchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class StaffRepositoryModule {}
