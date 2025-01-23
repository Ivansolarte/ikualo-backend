import { PartialType } from '@nestjs/mapped-types';
import { MovementDto } from './movement.dto';

export class UpdateMovementDto extends PartialType(MovementDto) {}
