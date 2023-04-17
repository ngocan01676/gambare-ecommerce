import { Module } from '@nestjs/common';
import { ColorsRepositoryModule } from './repository/colors.repository.module';

@Module({
    imports: [ColorsRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})

export class ColorsModule {}
