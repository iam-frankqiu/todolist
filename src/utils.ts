import { BadRequestException, NotFoundException } from '@nestjs/common';
import { validate } from 'class-validator';

// validate entity in updating and creating
export async function validateEntity(Class, data) {
  const entity = new Class(data);
  const errors = await validate(entity);
  if (errors.length > 0) {
    throw new BadRequestException('Input data validation failed');
  }
  return entity;
}

// failHandler for findOneOrFail function
export function failHandler(entityName: string) {
  return new NotFoundException(`id doesn't exist in ${entityName} `);
}
