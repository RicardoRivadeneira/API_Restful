import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<any>) {}

  async getAllPosts(): Promise<any[]> {
    return await this.postModel.find().exec();
  }

  async getPostByIdPost(idPost: string): Promise<any | null> {
    // Aquí cambiamos la consulta para buscar por id_post en lugar de _id
    return await this.postModel.findOne({ id_post: idPost }).exec();
  }

  async createPost(postData: any): Promise<any> {
    const createdPost = new this.postModel(postData);
    return await createdPost.save();
  }

  async updatePostByIdPost(idPost: string, postData: any): Promise<any> {
    // Aquí actualizamos para usar id_post. Nota: { new: true } para devolver el documento actualizado
    return await this.postModel.findOneAndUpdate({ id_post: idPost }, postData, { new: true }).exec();
  }

  async deletePostByIdPost(idPost: string): Promise<any> {
    // Aquí eliminamos por id_post
    return await this.postModel.findOneAndDelete({ id_post: idPost }).exec();
  }
}
