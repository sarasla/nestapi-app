import { PostsService } from '../posts/posts.service';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService ,
     private readonly postsService: PostsService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id/posts')
  async getPostsByUser(@Param('id') id: number) {
    return this.postsService.getPostsByUser(id);
  }

  @Post(':id/posts')
  async createPost(
    @Param('id') userId: number,
    @Body('title') title: string,
    @Body('body') body: string,
  ) {
    return this.postsService.addPost(userId,{ title, body});
  }
}
