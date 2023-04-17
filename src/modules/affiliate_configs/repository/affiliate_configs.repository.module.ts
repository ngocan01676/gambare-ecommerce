import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { AffiliateConfigEntity, AffiliateConfigEntitySchema } from './entities/affiliate_configs.entity';

@Module({
    providers: [],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: AffiliateConfigEntity.name,
                    schema: AffiliateConfigEntitySchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class AffiliateConfigRepositoryModule {}
