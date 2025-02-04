import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Request } from 'express';

import { ValidJwtGuard } from '@app/auth/guard/valid-jwt.guard';
import { RoleEnum, Roles, RolesGuard, allAdminRoles } from '@app/roles';
import { ApprovedGuard } from '@app/statuses';
import { ApiOkResponsePaginated, NullableType, PageDto } from '@app/utils';

import { User } from './domain/user';
import { UserStatistics } from './domain/user-statistics';
import { ActivateUserDto } from './dto/activate-user.dto';
import { CreateIndividualUserDto, CreateUserDto } from './dto/create-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './service/users.service';

@ApiBearerAuth()
@UseGuards(ValidJwtGuard, RolesGuard, ApprovedGuard)
@ApiTags('Users')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(RoleEnum.superAdmin)
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid data provided',
  })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Roles(RoleEnum.superAdmin)
  @Post('/individual')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid data provided',
  })
  createIndividual(
    @Body() createUserDto: CreateIndividualUserDto,
  ): Promise<User> {
    return this.usersService.createIndividual(createUserDto);
  }

  @Patch('/:id')
  @Roles(RoleEnum.superAdmin)
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: User,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid data provided',
  })
  update(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    return this.usersService.update(request.user!, id, updateUserDto);
  }

  @Patch('/:id/activate')
  @Roles(...allAdminRoles)
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: User,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid data provided',
  })
  activate(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() activateUserDto: ActivateUserDto,
  ): Promise<User | null> {
    return this.usersService.activate(request.user!, id, activateUserDto);
  }

  @Get('/statistics')
  @Roles(...allAdminRoles)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserStatistics })
  statistics(): Promise<UserStatistics> {
    return this.usersService.statistics();
  }

  @Post('/all')
  @Roles(...allAdminRoles)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponsePaginated(User)
  findAll(@Body() query: QueryUserDto): Promise<PageDto<User>> {
    return this.usersService.findManyWithPagination(query);
  }

  @Get(':id')
  @Roles(...allAdminRoles)
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    description: 'Returns the user if exists',
    type: User,
  })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<NullableType<User>> {
    return this.usersService.findById(id);
  }
}
