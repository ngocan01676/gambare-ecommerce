import { Module } from '@nestjs/common';
import { ProductsRepositoryModule } from './repository/products.repository.module';
import { ProductService } from './services/product.service';

@Module({
    imports: [ProductsRepositoryModule],
    exports: [ProductService],
    providers: [ProductService],
    controllers: [],
})

export class ProductsModule {}
