import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { UploadRepository } from './repositories/upload.repository';
import { UploadEntity, UploadSchema } from './entities/upload.entity';

@Module({
    providers: [UploadRepository],
    exports: [UploadRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: UploadEntity.name,
                    schema: UploadSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class UploadRepositoryModule {}
