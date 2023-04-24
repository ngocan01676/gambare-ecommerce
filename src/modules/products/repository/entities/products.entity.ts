import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';

const ColorDatabaseName = 'products';
@DatabaseEntity({ collection: ColorDatabaseName })
export class ProductsEntity extends DatabaseMongoUUIDEntityAbstract {
    @Prop({
        type: String,
        required: true,
        index: true,
    })
    name: string;

    @Prop({
        type: String,
        required: true,
        index: true,
    })
    addedBy: string;

    @Prop({
        type: String,
        required: true,
        index: true,
    })
    userId: string;
    @Prop({
        type: String,
        required: false,
    })
    categoryId: string;
    @Prop({
        type: String,
        required: false,
    })
    brandsId: string;
    @Prop({
        type: String,
        required: false,
    })
    photos: string;
    @Prop({
        type: String,
        required: false,
    })
    thumbnailImg: string;
    @Prop({
        type: String,
        required: false,
    })
    videoProvider: string;
    @Prop({
        type: String,
    })
    videoLink: string;
    @Prop({
        type: String,
        required: false,
    })
    tags: string;
    @Prop({
        type: String,
    })
    description: string;
    @Prop({
        type: Number,
        required: false,
    })
    unitPrice: number;
    @Prop({
        type: Number,
        required: false,
    })
    purchasePrice: number;
    @Prop({
        type: Number,
        required: false,
    })
    variantProduct: number;
    @Prop({
        type: String,
        required: false,
    })
    attributes: string;
    @Prop({
        type: String,
        required: false,
    })
    choiceOptions: string;
    @Prop({
        type: String,
        required: false,
    })
    colors: string;
    @Prop({
        type: String,
        required: false,
    })
    variations: string;
    @Prop({
        type: Number,
        required: false,
    })
    todayDeals: number;
    @Prop({
        type: Number,
        required: false,
    })
    published: number;
    @Prop({
        type: Number,
        required: false,
    })
    approved: number;
    @Prop({
        type: String,
        required: true,
        default: 'quantity',
    })
    stockVisibilityState: string;
    @Prop({
        type: Number,
        required: true,
        default: 0,
    })
    cashOnDelivery: number;
    @Prop({
        type: Number,
        required: true,
        default: 0,
    })
    featured: number;
    @Prop({
        type: Number,
        required: true,
        default: 0,
    })
    sellerFeatured: number;
    @Prop({
        type: Number,
        required: true,
        default: 0,
    })
    currentStock: number;
    @Prop({
        type: String,
        required: false,
    })
    unit: string;
    @Prop({
        type: Number,
        required: true,
        default: 1,
    })
    minQty: number;
    @Prop({
        type: Number,
        required: false,
    })
    lowStockQuantity: number;
    @Prop({
        type: Number,
        required: false,
    })
    discount: string;
    @Prop({
        type: String,
        required: false,
        maxlength: 30,
    })
    discountType: string;
    @Prop({
        type: Date,
        required: false,
    })
    discountStartDate: Date;
    @Prop({
        type: Date,
        required: false,
    })
    discountEndDate: Date;
    @Prop({
        type: Number,
        required: false,
    })
    tax: number;
    @Prop({
        type: String,
        required: false,
    })
    taxType: string;
    @Prop({
        type: String,
        required: false,
        default: 'flat_rate',
    })
    shippingType: string;
    @Prop({
        type: Number,
        required: false,
    })
    shippingCost: number;
    @Prop({
        type: Number,
        required: false,
        default: 0,
    })
    isQuantityMultiplied: number;
    @Prop({
        type: Number,
        required: false,
    })
    estShippingDays: number;
    @Prop({
        type: Number,
        required: false,
        default: 0,
    })
    numOfSale: number;
    @Prop({
        type: String,
        required: false,
    })
    metaTitle: string;
    @Prop({
        type: String,
        required: false,
    })
    metaDescription: string;
    @Prop({
        type: String,
        required: false,
    })
    metaImg: string;
    @Prop({
        type: String,
        required: false,
    })
    pdf: string;
    @Prop({
        type: String,
        required: false,
    })
    slug: string;
    @Prop({
        type: Number,
        required: true,
        default: 0,
    })
    earnPoint: number;
    @Prop({
        type: Number,
        required: true,
        default: 0,
    })
    refundAble: number;
    @Prop({
        type: Number,
        required: true,
        default: 0,
    })
    rating: number;
    @Prop({
        type: String,
        required: false,
    })
    barCode: string;
    @Prop({
        type: Number,
        required: true,
        default: 0,
    })
    digital: number;
    @Prop({
        type: Number,
        required: true,
        default: 0,
    })
    auctionProduct: number;
    @Prop({
        type: String,
        required: false,
    })
    fileName: string;
    @Prop({
        type: String,
        required: false,
    })
    filePath: string;
    @Prop({
        type: String,
        required: false,
    })
    externalLink: string;
    @Prop({
        type: String,
        required: false,
        default: 'Buy Now',
    })
    externalLinkBtn: string;
    @Prop({
        type: Number,
        required: false,
        default: 0,
    })
    wholesaleProduct: number;
    @Prop({
        type: Number,
        required: false,
    })
    quantitySold: number;
    @Prop({
        type: String,
        required: false,
    })
    descriptionInfo: string;
    @Prop({
        type: Number,
        required: false,
        default: 0,
    })
    jointPurchasing: number;
    @Prop({
        type: String,
        required: false,
    })
    tenantShippingId: string;
    @Prop({
        type: String,
        required: false,
    })
    attrValue: string;
    @Prop({
        type: Number,
        required: false,
    })
    entryPrice: number;
}

export const ProductsEntitySchema =
    SchemaFactory.createForClass(ProductsEntity);

ProductsEntitySchema.pre(
    'save',
    function (next: CallbackWithoutResultAndOptionalError) {
        next();
    }
);
