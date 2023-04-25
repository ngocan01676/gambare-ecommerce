import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';

const ProductDatabaseName = 'products';
@DatabaseEntity({ collection: ProductDatabaseName })
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
        nullable: true,
    })
    categoryId?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    brandsId?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    photos?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    thumbnailImg?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    videoProvider?: string;
    @Prop({
        type: String,
        nullable: true,
        required: false,
    })
    videoLink?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    tags?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    description?: string;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    unitPrice?: number;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    purchasePrice?: number;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    variantProduct?: number;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    attributes?: string;
    @Prop({
        type: String,
        required: false,
    })
    choiceOptions?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    colors?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    variations?: string;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    todayDeals?: number;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    published?: number;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    approved?: number;
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
        nullable: true,
    })
    unit?: string;
    @Prop({
        type: Number,
        required: true,
        default: 1,
    })
    minQty?: number;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    lowStockQuantity?: number;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    discount?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    discountType?: string;
    @Prop({
        type: Date,
        required: false,
        nullable: true,
    })
    discountStartDate?: Date;
    @Prop({
        type: Date,
        required: false,
    })
    discountEndDate?: Date;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    tax?: number;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    taxType?: string;
    @Prop({
        type: String,
        required: false,
        default: 'flat_rate',
        nullable: true,
    })
    shippingType?: string;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    shippingCost?: number;
    @Prop({
        type: Number,
        required: false,
        default: 0,
    })
    isQuantityMultiplied?: number;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    estShippingDays?: number;
    @Prop({
        type: Number,
        required: false,
        default: 0,
        nullable: true,
    })
    numOfSale?: number;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    metaTitle?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    metaDescription?: string;
    @Prop({
        type: String,
        required: false,
    })
    metaImg?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    pdf?: string;
    @Prop({
        type: String,
        required: false,
    })
    slug?: string;
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
        nullable: true,
    })
    barCode?: string;
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
        nullable: true,
    })
    fileName?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    filePath?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    externalLink?: string;
    @Prop({
        type: String,
        required: false,
        default: 'Buy Now',
        nullable: true,
    })
    externalLinkBtn?: string;
    @Prop({
        type: Number,
        required: false,
        default: 0,
        nullable: true,
    })
    wholesaleProduct?: number;
    @Prop({
        type: Number,
        required: false,
        nullable: true,
    })
    quantitySold?: number;
    @Prop({
        type: String,
        required: false,
    })
    descriptionInfo?: string;
    @Prop({
        type: Number,
        required: false,
        default: 0,
        nullable: true,
    })
    jointPurchasing?: number;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    tenantShippingId?: string;
    @Prop({
        type: String,
        required: false,
        nullable: true,
    })
    attrValue?: string;
    @Prop({
        type: Number,
        required: false,
    })
    entryPrice: number;
    @Prop({
        required: true,
        default: true,
        index: true,
        type: Boolean,
    })
    isActive: boolean;

    @Prop({
        required: true,
        default: false,
        index: true,
        type: Boolean,
    })
    inactivePermanent: boolean;

    @Prop({
        required: false,
        type: Date,
        nullable: true,
    })
    inactiveDate?: Date;

    @Prop({
        required: true,
        default: false,
        index: true,
        type: Boolean,
    })
    blocked: boolean;

    @Prop({
        required: false,
        type: Date,
        nullable: true,
    })
    blockedDate?: Date;
}

export const ProductsEntitySchema =
    SchemaFactory.createForClass(ProductsEntity);

ProductsEntitySchema.pre(
    'save',
    function (next: CallbackWithoutResultAndOptionalError) {
        next();
    }
);
