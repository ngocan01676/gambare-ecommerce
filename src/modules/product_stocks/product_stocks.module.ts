import { Module } from '@nestjs/common';
import { ProductStocksRepositoryModule } from './repository/product_stocks.repository.module';
@Module({
    imports: [ProductStocksRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})
export class ProductStocksModule {}
