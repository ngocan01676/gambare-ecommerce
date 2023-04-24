import { DatabaseMongoUUIDRepositoryAbstract } from "src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract";
import { ProductsEntity } from "../entities/products.entity";
import { DatabaseModel } from "src/common/database/decorators/database.decorator";
import { Model } from "mongoose";

export class ProductRepository extends DatabaseMongoUUIDRepositoryAbstract<ProductsEntity>  {
      constructor(
        @DatabaseModel(ProductsEntity.name)
        private readonly productModel: Model<ProductsEntity>
    ) {
        // super(productModel, {
        //     path: 'role',
        //     localField: 'role',
        //     foreignField: '_id',
        //     model: RoleEntity.name,
        // });
        super(productModel);
    }
}