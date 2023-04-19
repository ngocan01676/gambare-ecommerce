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

  @Prop({
    required: false,
    type: String
  })
  productId: string;

  @Prop({
    required: false,
    type: String
  })
  variation: string;

  @Prop({
    required: false,
    type: Number,
    default: 0
  })
  price: number;

  @Prop({
    required: false,
    type: Number,
    default: 0
  })
  tax: number;

  @Prop({
    required: true,
    type: Number,
    default: 0
  })
  shippingCode: number;
    
  @Prop({
    required: true,
    type: String,
    default: ''
  })
  shippingType: string;

  @Prop({
    required: false,
    type: Number,
  })
  pickupPoint: number;

  @Prop({
    required: true,
    type: Number,
    default: 0
  })
  discount: number;

  @Prop({
    required: false,
    type: String,
    default: 0
  })
  productReferralCode: string;

  @Prop({
    required: false,
    type: String
  })
  couponCode: string;

  @Prop({
    required: true,
    type: Number,
    default: 0
  })
  couponApplied: number;

  @Prop({
    required: true,
    type: Number,
    default: 0
  })
  quantity: number;

  @Prop({
    required: true,
    type: Number,
    default: 0
  })
  selectedItem: number;

}

export const CartSchema = SchemaFactory.createForClass(CartEntity);

CartSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
