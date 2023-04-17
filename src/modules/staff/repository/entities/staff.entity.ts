import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const StaffDatabaseName = 'staffs';
@DatabaseEntity({ collection: StaffDatabaseName })
export class StaffEntity extends DatabaseMongoUUIDEntityAbstract {
  @Prop({
    type: String,
    required: true
  })
  userId: string;

  @Prop({
    type: String,
    required: true
  })
  roleId: string;
}

export const StaffEntitySchema = SchemaFactory.createForClass(StaffEntity);

StaffEntitySchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
