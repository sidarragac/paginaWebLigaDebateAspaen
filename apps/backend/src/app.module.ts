import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/dataSource';
import { join } from 'path'
import { EvalutationModule } from './evalutation/evalutation.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend/dist'),
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    EvalutationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
