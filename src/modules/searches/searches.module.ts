import { Module } from '@nestjs/common';
import { SearchesRepositoryModule } from './repository/searches.repository.module';

@Module({
    imports: [SearchesRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})

export class SearchesModule {}
