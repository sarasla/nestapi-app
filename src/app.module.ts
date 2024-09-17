import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PostsService],
})
export class AppModule {}
