import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';

const UploadsDatabaseName = 'uploads';
@DatabaseEntity({ collection: UploadsDatabaseName })
export class UploadEntity extends DatabaseMongoUUIDEntityAbstract {
    @Prop({
        required: false,
        type: String,
    })
    fileOriginalName: string;

    @Prop({
        required: false,
        type: String,
    })
    fileName: string;

    @Prop({
        required: false,
        type: String,
    })
    userId: string;

    @Prop({
        required: false,
        type: Number,
    })
    fileSize: number;

    @Prop({
        required: false,
        type: String,
    })
    extension: string;

    @Prop({
        required: false,
        type: String,
    })
    fileType: string;

    @Prop({
        required: false,
        type: String,
    })
    externalLink: string;
}

export const UploadSchema = SchemaFactory.createForClass(UploadEntity);

UploadSchema.pre(
    'save',
    function (next: CallbackWithoutResultAndOptionalError) {
        next();
    }
);
