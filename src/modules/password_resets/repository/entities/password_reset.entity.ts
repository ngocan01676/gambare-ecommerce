import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const PasswordResetDatabaseName = 'password_resets';
@DatabaseEntity({ collection: PasswordResetDatabaseName })
export class PasswordResetEntity extends DatabaseMongoUUIDEntityAbstract {
  
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

  @Prop({
    required: true,
    type: String,
  })
  token: string;

  @Prop({
    type: String,
  })
  passwordRemember: string;
}

export const PasswordResetSchema = SchemaFactory.createForClass(PasswordResetEntity);

PasswordResetSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  this.email = this.email.toLowerCase();
  next();
});
