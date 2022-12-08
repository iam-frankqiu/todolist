import { Injectable } from '@nestjs/common';
import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';

@Injectable()
export class PollService {
  create(createPollInput: CreatePollInput) {
    return 'This action adds a new poll';
  }

  findAll() {
    return `This action returns all poll`;
  }

  findOne(id: number) {
    return `This action returns a #${id} poll`;
  }

  update(id: number, updatePollInput: UpdatePollInput) {
    return `This action updates a #${id} poll`;
  }

  remove(id: number) {
    return `This action removes a #${id} poll`;
  }
}
