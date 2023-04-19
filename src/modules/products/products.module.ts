import { Module } from '@nestjs/common';
import { ProductsRepositoryModule } from './repository/products.repository.module';

@Module({
    imports: [ProductsRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})

export class ProductsModule {}
