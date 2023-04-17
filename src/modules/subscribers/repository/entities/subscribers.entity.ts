import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const SubscribersDatabaseName = 'subscribers';
@DatabaseEntity({ collection: SubscribersDatabaseName })
export class SubscribersEntity extends DatabaseMongoUUIDEntityAbstract {
  
  @Prop({
    required: true,
    index: true,
    unique: true,
    trim: true,
    lowercase: true,
    type: String,
    maxlength: 100,
  })
  email: string;
}

export const SubscribersSchema = SchemaFactory.createForClass(SubscribersEntity);

SubscribersSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  this.email = this.email.toLowerCase();
  next();
});
