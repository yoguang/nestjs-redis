import { Module } from '@nestjs/common';
import { SetService } from './set.service';

@Module({
  providers: [SetService]
})
export class SetModule {}
