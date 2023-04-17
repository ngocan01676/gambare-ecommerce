import { Module } from '@nestjs/common';
import { AttributeRepositoryModule } from './repository/attribute.repository.module';
@Module({
    imports: [AttributeRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})
export class AttributeModule {}
