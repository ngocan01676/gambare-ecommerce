import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { PasswordResetEntity, PasswordResetSchema } from './entities/password_reset.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: PasswordResetEntity.name,
                    schema: PasswordResetSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class PasswordResetRepositoryModule {}
