import { Module } from '@nestjs/common';
import { EvalutationService } from './evalutation.service';
import { EvalutationController } from './evalutation.controller';

@Module({
  controllers: [EvalutationController],
  providers: [EvalutationService],
})
export class EvalutationModule {}
