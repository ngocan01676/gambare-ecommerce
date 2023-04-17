import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const AttributeCategoryDatabaseName = 'attribute_category';
@DatabaseEntity({ collection: AttributeCategoryDatabaseName })
export class AttributeCategoryEntity extends DatabaseMongoUUIDEntityAbstract {
  @Prop({
    type: String,
    required: true,
  })
  category_id: string;

  @Prop({
    type: String,
    required: true,
  })
  attribute_id: string;
}

export const AttributeCategoryEntitySchema = SchemaFactory.createForClass(AttributeCategoryEntity);

AttributeCategoryEntitySchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
