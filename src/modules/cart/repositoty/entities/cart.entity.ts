import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const CartDatabaseName = 'carts';
@DatabaseEntity({ collection: CartDatabaseName })
export class CartEntity extends DatabaseMongoUUIDEntityAbstract {
  
  @Prop({
    required: false,
    type: String,
  })
  ownerId: string;

  @Prop({
    required: false,
    type: String,
  })
  userId: string;

  @Prop({
    required: false,
    type: String,
  })
  tempUserId: string;

  @Prop({
    required: true,
    type: String,
    default: 0
  })
  addressId: string;

}

export const CartSchema = SchemaFactory.createForClass(CartEntity);

CartSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
