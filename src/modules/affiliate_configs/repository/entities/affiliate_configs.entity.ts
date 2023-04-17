import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

const AffiliateConfigDatabaseName = 'affiliate_configs';
@DatabaseEntity({ collection: AffiliateConfigDatabaseName })
export class AffiliateConfigEntity extends DatabaseMongoUUIDEntityAbstract {
  @Prop({
    type: String,
  })
  type: string;

  @Prop({
    type: String,
  })
  value: string;
}

export const AffiliateConfigEntitySchema = SchemaFactory.createForClass(AffiliateConfigEntity);

AffiliateConfigEntitySchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
});
