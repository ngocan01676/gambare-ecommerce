import { Module } from '@nestjs/common';
import { AttributeCategoryRepositoryModule } from './repository/attribute_category.repository.module';

@Module({
    imports: [AttributeCategoryRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})

export class AttributeCategoryModule {}
