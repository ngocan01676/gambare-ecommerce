import { OmitType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
import { ProductGetSerialization } from './product.get.serialization';

export class ProductListSerialization extends OmitType(
    ProductGetSerialization,
    [
        'role',
        'photo',
        'passwordExpired',
        'passwordCreated',
        'passwordAttempt',
        'signUpDate',
        'inactiveDate',
        'blockedDate',
    ] as const
) {
    @Exclude()
    readonly role: string;

    @Exclude()
    readonly photo?: AwsS3Serialization;

    @Exclude()
    readonly passwordExpired: Date;

    @Exclude()
    readonly passwordCreated: Date;

    @Exclude()
    readonly passwordAttempt: number;

    @Exclude()
    readonly signUpDate: Date;

    @Exclude()
    readonly inactiveDate?: Date;

    @Exclude()
    readonly blockedDate?: Date;
}
