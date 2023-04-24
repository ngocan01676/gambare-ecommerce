import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsEmail,
    MaxLength,
    MinLength,
    IsUUID,
    IsOptional,
    ValidateIf,
    IsDate,
} from 'class-validator';

export class ProductCreateDto {
    @ApiProperty({
      required: true,
      nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly name: string;

    @ApiProperty({
      required: true,
      nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly addedBy: string;

    @ApiProperty({
      required: true,
      nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly userId: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly categoryId?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly brandsId?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly photos?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly thumbnailImg?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    videoProvider?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly videoLink?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly tags?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly description?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly unitPrice?: number;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly purchasePrice?: number;

    @ApiProperty({
      required: true,
      nullable: false,
      default: 0
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly variantProduct?: number;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly attributes?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly choiceOptions?: string;


    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly colors?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly variations?: string;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly todayDeals?: number;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly published?: number;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 1
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly approved?: number;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 'quantity'
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly stockVisibilityState?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly cashOnDelivery?: number;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly featured?: number;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly sellerFeatured?: number;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly currentStock?: number;

    
    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => String)
    @IsOptional()
    readonly unit?: string;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly minQty?: number;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly lowStockQuantity?: number;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly discount?: number;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => String)
    @IsOptional()
    readonly discountType?: string;
    
    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsDate()
    @Type(() => Date)
    @IsOptional()
    readonly discountStartDate?: Date;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsDate()
    @Type(() => Date)
    @IsOptional()
    readonly discountEndDate?: Date;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly tax?: number;

    @ApiProperty({
      required: false,
      nullable: true,
    })
    @IsNumber()
    @Type(() => String)
    @IsOptional()
    readonly taxType?: string;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 'flat_rate'
    })
    @IsNumber()
    @Type(() => String)
    @IsOptional()
    readonly shippingType?: string;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 'flat_rate'
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly shippingCost?: number;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly isQuantityMultiplied?: number;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly estShippingDays?: number;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly numOfSale?: number;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly metaTitle?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly metaDescription?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly metaImg?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly pdf?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly slug?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly earnPoint?: number;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly refundAble?: number;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly rating?: number;

    
    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly barCode?: string;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly digital?: number;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsString()
    @Type(() => Number)
    @IsOptional()
    readonly auctionProduct?: number;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly fileName?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly filePath?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly externalLink?: string;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 'Buy Now'
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly externalLinkBtn?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => Number)
    @IsOptional()
    readonly wholesaleProduct?: number;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly quantitySold: number;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly descriptionInfo?: string;

    @ApiProperty({
      required: false,
      nullable: true,
      default: 0
    })
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    readonly jointPurchasing?: number;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly tenantShippingId?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => String)
    @IsOptional()
    readonly attrValue?: string;

    @ApiProperty({
      required: false,
      nullable: true
    })
    @IsString()
    @Type(() => Number)
    @IsOptional()
    readonly entryPrice?: number;
}