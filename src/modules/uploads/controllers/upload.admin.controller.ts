import {
    Body,
    Controller,
    Get,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthJwtAdminAccessProtected } from 'src/common/auth/decorators/auth.jwt.decorator';
import { AuthPermissionProtected } from 'src/common/auth/decorators/auth.permission.decorator';
import {
    IResponse,
    IResponsePaging,
} from 'src/common/response/interfaces/response.interface';
import {
    Response,
    ResponseExcel,
    ResponsePaging,
} from 'src/common/response/decorators/response.decorator';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import {
    PaginationQuery,
    PaginationQueryFilterInBoolean,
} from 'src/common/pagination/decorators/pagination.decorator';
import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import {
    UPLOAD_DEFAULT_AVAILABLE_SEARCH,
    UPLOAD_DEFAULT_AVAILABLE_SORT,
    UPLOAD_DEFAULT_BLOCKED,
    UPLOAD_DEFAULT_IS_ACTIVE,
    UPLOAD_DEFAULT_PER_PAGE,
    UPLOAD_DEFAULT_SORT,
} from '../constants/upload.list.constant';
import { UploadService } from '../services/upload.service';
import { UploadCreateDto } from '../dtos/upload.create.dto';
import { UploadListSerialization } from '../serializations/upload.list.serialization';
import { IUploadEntity } from '../interfaces/upload.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import * as path from 'path';
import { HelperFileService } from 'src/common/helper/services/helper.file.service';
import { editFileName } from 'src/common/helper/file-upload.utils';

@ApiTags('modules.admin.product')
@Controller({
    version: '1',
    path: '/upload',
})
export class UploadAdminController {
    constructor(
        private readonly paginationService: PaginationService,
        private readonly uploadService: UploadService
    ) {}

    @Response('upload.create', {
        serialization: ResponseIdSerialization,
    })
    // @AuthPermissionProtected(
    //     ENUM_AUTH_PERMISSIONS.USER_READ,
    //     ENUM_AUTH_PERMISSIONS.USER_CREATE
    // )
    //@AuthJwtAdminAccessProtected()
    @Post('/create')
    // @UseInterceptors(FileInterceptor('file'))
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: path.join(__dirname, '../../../public/uploads'),
                filename: editFileName,
            }),
        })
    )
    async create(@UploadedFile() file): Promise<any> {
        console.log('file file file', file);
        console.log('mimetype', file.mimetype);
        console.log('dirname', __dirname);
        const fileInfo = file?.originalname?.split('.');
        const createDto = {
            fileName: `/uploads/${file.fileName}`,
            fileOriginalName: file.originalname,
            fileType: file.mimetype,
            fileSize: file.size,
            extension: fileInfo.at(-1)?.toString(),
            userId: '',
            externalLink: '',
        };

        const create = await this.uploadService.create({ ...createDto });
        return {
            _id: create._id,
        };
    }

    //@UserListDoc()
    @ResponsePaging('upload.list', {
        serialization: UploadListSerialization,
    })
    // @AuthPermissionProtected(ENUM_AUTH_PERMISSIONS.USER_READ)
    // @AuthJwtAdminAccessProtected()
    @Get('/list')
    async list(
        @PaginationQuery(
            UPLOAD_DEFAULT_PER_PAGE,
            UPLOAD_DEFAULT_AVAILABLE_SEARCH,
            UPLOAD_DEFAULT_SORT,
            UPLOAD_DEFAULT_AVAILABLE_SORT
        )
        {
            page,
            perPage,
            _sort,
            _search,
            _offset,
            _availableSort,
            _availableSearch,
        }: PaginationListDto
    ): Promise<IResponsePaging> {
        const find: Record<string, any> = {
            ..._search,
        };

        const products: IUploadEntity[] = await this.uploadService.findAll(
            find,
            {
                paging: {
                    limit: perPage,
                    offset: _offset,
                },
                sort: _sort,
            }
        );
        const totalData: number = await this.uploadService.getTotal(find);
        const totalPage: number = this.paginationService.totalPage(
            totalData,
            perPage
        );

        return {
            totalData,
            totalPage,
            currentPage: page,
            perPage,
            _availableSearch,
            _availableSort,
            data: products,
        };
    }
}
