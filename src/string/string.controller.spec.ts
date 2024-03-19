import { Test, TestingModule } from '@nestjs/testing';
import { StringController } from './string.controller';

describe('StringController', () => {
  let controller: StringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StringController],
    }).compile();

    controller = module.get<StringController>(StringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
