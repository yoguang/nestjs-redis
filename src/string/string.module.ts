import { Module } from '@nestjs/common';
import { StringController } from './string.controller';

@Module({
  controllers: [StringController]
})
export class StringModule {}
