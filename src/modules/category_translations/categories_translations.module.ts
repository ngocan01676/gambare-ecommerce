import { Module } from '@nestjs/common';
import { CategoryTranslationsRepositoryModule } from './repository/categories_translations.repository.module';

@Module({
    imports: [CategoryTranslationsRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})
export class CategoryTranslationsModule {}
