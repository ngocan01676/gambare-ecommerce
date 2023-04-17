import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const AttributeDatabaseName = 'attributes';
@DatabaseEntity({ collection: AttributeDatabaseName })
export class AttributeEntity extends DatabaseMongoUUIDEntityAbstract {
  
  @Prop({
    required: true,
    type: String,
  })
  name: string;

}

export const AttributeSchema = SchemaFactory.createForClass(AttributeEntity);

AttributeSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
