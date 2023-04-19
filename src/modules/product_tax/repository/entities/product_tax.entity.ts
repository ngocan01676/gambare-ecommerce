import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const ProductTaxDatabaseName = 'product_taxes';
@DatabaseEntity({ collection: ProductTaxDatabaseName })
export class ProductTaxEntity extends DatabaseMongoUUIDEntityAbstract {
  
  @Prop({
    required: true,
    type: String,
  })
  productId: string;

  @Prop({
    type: String,
    required: false
  })
  variant: string;
  @Prop({
    type: String,
    required: false
  })
  sku: string;
  @Prop({
    type: Number,
    required: true,
    default: 0
  })
  price: number;
    @Prop({
    type: Number,
    required: true,
    default: 0
  })
  qty: number;
  @Prop({
    type: Number,
    required: false
  })
  image: number;
}

export const ProductTaxSchema = SchemaFactory.createForClass(ProductTaxEntity);

ProductTaxSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
