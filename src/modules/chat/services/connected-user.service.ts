import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ConnectedUser } from '../entities';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class ConnectedUserService {
  private readonly logger = new Logger(ConnectedUserService.name);

  constructor(
    @InjectRepository(ConnectedUser)
    private readonly connectedUserRepository: Repository<ConnectedUser>,
  ) {}

  async create(userId: string, socketId: string): Promise<ConnectedUser> {
    try {
      const newUserConnection = this.connectedUserRepository.create({
        userId,
        socketId,
      });
      return await this.connectedUserRepository.save(newUserConnection);
    } catch (ex) {
      this.logger.error(
        `Failed to create a connected user for userId: ${userId}`,
        ex.stack,
      );
      throw new WsException('Error creating new user connection.');
    }
  }

  async delete(socketId: string): Promise<DeleteResult> {
    try {
      return await this.connectedUserRepository.delete({ socketId });
    } catch (ex) {
      this.logger.error(
        `Failed to delete the connected user with socketId: ${socketId}`,
        ex.stack,
      );
      throw new WsException('Error removing user connection.');
    }
  }

  async deleteAll(): Promise<void> {
    try {
      await this.connectedUserRepository
        .createQueryBuilder('connectedUser')
        .delete()
        .execute();
    } catch (ex) {
      this.logger.error('Failed to clear the connected user table', ex.stack);
      throw new WsException('Error clearing all user connections.');
    }
  }
}
