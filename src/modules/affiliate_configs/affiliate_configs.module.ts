import { Module } from '@nestjs/common';
import { AffiliateConfigRepositoryModule } from './repository/affiliate_configs.repository.module';

@Module({
    imports: [AffiliateConfigRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})
export class AffiliateConfigModule {}
