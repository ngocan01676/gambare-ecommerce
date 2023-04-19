import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const ProductTranslationsDatabaseName = 'product_translations';
@DatabaseEntity({ collection: ProductTranslationsDatabaseName })
export class ProductTranslationsEntity extends DatabaseMongoUUIDEntityAbstract {
  
  @Prop({
    required: true,
    type: String,
  })
  productId: string;
  @Prop({
    required: false,
    type: String,
  })
  name: string;
  @Prop({
    required: false,
    type: String,
  })
  unit: string;
  @Prop({
    required: false,
    type: String,
  })
  description: string;
    @Prop({
    required: true,
    type: String,
  })
  lang: string;

}

export const ProductTranslationsSchema = SchemaFactory.createForClass(ProductTranslationsEntity);

ProductTranslationsSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
