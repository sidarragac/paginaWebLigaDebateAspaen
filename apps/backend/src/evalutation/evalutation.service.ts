import { Injectable } from '@nestjs/common';
import { CreateEvalutationDto } from './dto/create-evalutation.dto';
import { UpdateEvalutationDto } from './dto/update-evalutation.dto';

@Injectable()
export class EvalutationService {
  create(createEvalutationDto: CreateEvalutationDto) {
    return 'This action adds a new evalutation';
  }

  findAll() {
    return `This action returns all evalutation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evalutation`;
  }

  update(id: number, updateEvalutationDto: UpdateEvalutationDto) {
    return `This action updates a #${id} evalutation`;
  }

  remove(id: number) {
    return `This action removes a #${id} evalutation`;
  }
}
