import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const CategoryTranslationsDatabaseName = 'category_translations';
@DatabaseEntity({ collection: CategoryTranslationsDatabaseName })
export class CategoryTranslationsEntity extends DatabaseMongoUUIDEntityAbstract {
  
  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: true,
    type: String,
  })
  categoryId: string;

  @Prop({
    required: true,
    type: String,
  })
  lang: string;

}

export const CategoryTranslationsSchema = SchemaFactory.createForClass(CategoryTranslationsEntity);

CategoryTranslationsSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
