import { Injectable } from '@nestjs/common';
import { CreateProposalInput } from './dto/create-proposal.input';
import { UpdateProposalInput } from './dto/update-proposal.input';

@Injectable()
export class ProposalService {
  create(createProposalInput: CreateProposalInput) {
    return 'This action adds a new proposal';
  }

  findAll() {
    return `This action returns all proposal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proposal`;
  }

  update(id: number, updateProposalInput: UpdateProposalInput) {
    return `This action updates a #${id} proposal`;
  }

  remove(id: number) {
    return `This action removes a #${id} proposal`;
  }
}
