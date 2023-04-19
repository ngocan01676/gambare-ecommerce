import { Module } from '@nestjs/common';
import { CategoryRepositoryModule } from './repository/categories.repository.module';

@Module({
    imports: [CategoryRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})
export class AttributeModule {}
