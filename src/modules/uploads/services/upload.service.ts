import {
    IDatabaseFindAllOptions,
    IDatabaseFindOneOptions,
    IDatabaseOptions,
    IDatabaseCreateOptions,
} from 'src/common/database/interfaces/database.interface';
import { Injectable } from '@nestjs/common';
import { IUploadService } from '../interfaces/upload.service.interface';
import { UploadRepository } from '../repository/repositories/upload.repository';
import { UploadCreateDto } from '../dtos/upload.create.dto';
import { UploadEntity } from '../repository/entities/upload.entity';

@Injectable()
export class UploadService implements IUploadService {
    constructor(private readonly uploadRepository: UploadRepository) {}

    findAll<T>(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions<any>
    ): Promise<T[]> {
        return this.uploadRepository.findAll(find, options);
    }

    findOneById<T>(
        _id: string,
        options?: IDatabaseFindOneOptions<any>
    ): Promise<T> {
        return this.uploadRepository.findOneById(_id, options);
    }

    findOne<T>(
        find: Record<string, any>,
        options?: IDatabaseFindOneOptions<any>
    ): Promise<T> {
        return this.uploadRepository.findOne(find, options);
    }

    findOneByUsername<T>(
        username: string,
        options?: IDatabaseFindOneOptions<any>
    ): Promise<T> {
        return this.uploadRepository.findOne<T>({ username }, options);
    }

    getTotal(
        find?: Record<string, any>,
        options?: IDatabaseOptions
    ): Promise<number> {
        return this.uploadRepository.getTotal(find, options);
    }

    create(
        data: UploadCreateDto,
        options?: IDatabaseCreateOptions<any>
    ): Promise<UploadEntity> {
        const create = new UploadEntity();
        create.fileName = data.fileName;
        create.userId = data.userId;
        create.fileOriginalName = data.fileOriginalName;
        create.fileSize = data.fileSize;
        create.extension = data.extension;
        create.externalLink = data.externalLink;
        create.fileType = data.fileType;
        return this.uploadRepository.create(create, options);
    }
}
