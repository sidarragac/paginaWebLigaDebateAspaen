import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvalutationService } from './evalutation.service';
import { CreateEvalutationDto } from './dto/create-evalutation.dto';
import { UpdateEvalutationDto } from './dto/update-evalutation.dto';

@Controller('evalutation')
export class EvalutationController {
  constructor(private readonly evalutationService: EvalutationService) {}

  @Post()
  create(@Body() createEvalutationDto: CreateEvalutationDto) {
    return this.evalutationService.create(createEvalutationDto);
  }

  @Get()
  findAll() {
    return this.evalutationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evalutationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvalutationDto: UpdateEvalutationDto) {
    return this.evalutationService.update(+id, updateEvalutationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evalutationService.remove(+id);
  }
}
