import { Module } from '@nestjs/common';
import { StaffRepositoryModule } from './repository/staff.repository.module';

@Module({
    imports: [StaffRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})

export class StaffModule {}
