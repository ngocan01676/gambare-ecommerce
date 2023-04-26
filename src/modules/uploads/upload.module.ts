import { Module } from '@nestjs/common';
import { UploadRepositoryModule } from './repository/upload.repository.module';
import { UploadService } from './services/upload.service';

@Module({
    imports: [UploadRepositoryModule],
    exports: [UploadService],
    providers: [UploadService],
    controllers: [],
})
export class UploadModule {}
