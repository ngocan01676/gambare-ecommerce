import { Module } from '@nestjs/common';
import { ProductTaxRepositoryModule } from './repository/product_tax.repository.module';
@Module({
    imports: [ProductTaxRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})
export class ProductTaxModule {}
