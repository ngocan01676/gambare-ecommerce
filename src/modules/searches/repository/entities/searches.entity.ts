import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const SearchesDatabaseName = 'searches';
@DatabaseEntity({ collection: SearchesDatabaseName })
export class SearchesEntity extends DatabaseMongoUUIDEntityAbstract {
  @Prop({
    type: String,
    require: true
  })
  query: string;

  @Prop({
    type: Number,
    require: true
  })
  count: number;
}

export const SearchesEntitySchema = SchemaFactory.createForClass(SearchesEntity);

SearchesEntitySchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
