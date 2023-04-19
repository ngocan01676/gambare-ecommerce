import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const CategoryDatabaseName = 'categories';
@DatabaseEntity({ collection: CategoryDatabaseName })
export class CategoryEntity extends DatabaseMongoUUIDEntityAbstract {
  
  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: false,
    type: Number,
    default: 0
  })
  parentId: number;

  @Prop({
    required: true,
    type: Number,
    default: 0
  })
  level: number;

  @Prop({
    required: false,
    type: Number,
    default: 0
  })
  orderLevel: number;

  @Prop({
    required: false,
    type: Number,
    default: 0
  })
  commisionRate: number;

  @Prop({
    required: false,
    type: String
  })
  banner: number;

  @Prop({
    required: false,
    type: String
  })
  icon: number;

  @Prop({
    required: false,
    type: Number,
    default: 0
  })
  featured: number;

  @Prop({
    required: false,
    type: Number,
    default: 0
  })
  top: number;

  @Prop({
    required: false,
    type: Number,
    default: 0
  })
  digital: number;

  @Prop({
    required: true,
    type: String,
    unique: true
  })
  slug: number;

  @Prop({
    required: false,
    type: String,
  })
  metaTitle: number;

  @Prop({
    required: false,
    type: String,
  })
  metaDescription: number;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryEntity);

CategorySchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
