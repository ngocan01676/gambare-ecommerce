import { Module } from '@nestjs/common';
import { ProductTranslationsRepositoryModule } from './repository/product_translations.repository.module';

@Module({
    imports: [ProductTranslationsRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})
export class ProductTranslationsModule {}
