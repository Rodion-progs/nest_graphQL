import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { StudentModule } from './student/student.module';
import {GraphQLModule} from '@nestjs/graphql';
@Module({
  imports: [
      GraphQLModule.forRoot({
          debug: true,
          playground: true,
          autoSchemaFile: true,
      }),
      MikroOrmModule.forRoot(),
      StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
