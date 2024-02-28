import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get(':id_post')
  async getPost(@Param('id_post') idPost: string) {
    const post = await this.postsService.getPostByIdPost(idPost);
    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    return post;
  }

  @Post()
  async createPost(@Body() postData: any) {
    // Asegúrate de validar postData para incluir id_post o generar uno según tu lógica de negocio
    return this.postsService.createPost(postData);
  }

  @Put(':id_post')
  async updatePost(@Param('id_post') idPost: string, @Body() postData: any) {
    const updatedPost = await this.postsService.updatePostByIdPost(idPost, postData);
    if (!updatedPost) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    return updatedPost;
  }

  @Delete(':id_post')
  async deletePost(@Param('id_post') idPost: string) {
    const deleted = await this.postsService.deletePostByIdPost(idPost);
    if (!deleted) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Post deleted successfully' };
  }
}
