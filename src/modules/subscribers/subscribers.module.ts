import { Module } from '@nestjs/common';
import { SubscribersRepositoryModule } from './repository/subscribers.repository.module';
@Module({
    imports: [SubscribersRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})
export class SubscribersModule {}
