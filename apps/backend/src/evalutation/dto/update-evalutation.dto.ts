import { PartialType } from '@nestjs/mapped-types';
import { CreateEvalutationDto } from './create-evalutation.dto';

export class UpdateEvalutationDto extends PartialType(CreateEvalutationDto) {}
