import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestLogSchema } from './modules/request-log/request-log.shema';
import { RequestLogService } from './modules/request-log/request-log.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    // Aquí especificamos el nombre de la base de datos directamente en la URL de conexión
    MongooseModule.forRoot('mongodb://root:example@localhost:27017'), 
    MongooseModule.forFeature([
      { name: 'RequestLog', schema: RequestLogSchema },
    ]),
    PostsModule,
  ],
  providers: [RequestLogService],
})
export class AppModule {}
