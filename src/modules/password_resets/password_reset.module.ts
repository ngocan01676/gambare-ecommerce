import { Module } from '@nestjs/common';
import { PasswordResetRepositoryModule } from './repository/password_reset.repository.module';
@Module({
    imports: [PasswordResetRepositoryModule],
    exports: [],
    providers: [],
    controllers: [],
})
export class PasswordResetModule {}
