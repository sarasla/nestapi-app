import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IPost } from '../types/IPost';
@Injectable()
export class PostsService {
  private readonly postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  async getPostsByUser(userId: Number) {
    console.log('!!jggjhkl', userId);
    try {
      const postsByUser = await axios.get(`${this.postsUrl}?userId=${userId}`);
      return postsByUser.data;
    } catch (error) {
      console.error('Error fetching posts:', error.message);
      throw new Error('Unable to fetch posts');
    }
  }

  async addPost(userId: Number, post: IPost) {
    const { title, body } = post;
    try {
      const response = await axios.post(this.postsUrl, {
        userId,
        title,
        body,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error.message);
      throw new Error('Unable to fetch posts');
    }
  }
}
