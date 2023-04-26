import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UploadEntity } from '../entities/upload.entity';

@Injectable()
export class UploadRepository extends DatabaseMongoUUIDRepositoryAbstract<UploadEntity> {
    constructor(
        @DatabaseModel(UploadEntity.name)
        private readonly uploadModel: Model<UploadEntity>
    ) {
        super(uploadModel);
    }
}
