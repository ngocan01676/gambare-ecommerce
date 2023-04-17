import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const ColorDatabaseName = 'colors';
@DatabaseEntity({ collection: ColorDatabaseName })
export class ColorsEntity extends DatabaseMongoUUIDEntityAbstract {
  @Prop({
    type: String
  })
  code: string;

  @Prop({
    type: String
  })
  name: string;
}

export const ColorsEntitySchema = SchemaFactory.createForClass(ColorsEntity);

ColorsEntitySchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
