import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const ProductStocksDatabaseName = 'product_stocks';
@DatabaseEntity({ collection: ProductStocksDatabaseName })
export class ProductStocksEntity extends DatabaseMongoUUIDEntityAbstract {
  
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

export const ProductStocksSchema = SchemaFactory.createForClass(ProductStocksEntity);

ProductStocksSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
