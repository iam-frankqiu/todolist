import { Module } from '@nestjs/common';
import { PollService } from './poll.service';
import { PollResolver } from './poll.resolver';

@Module({
  providers: [PollResolver, PollService]
})
export class PollModule {}
