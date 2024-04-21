import { Room } from '../../entities/room.entity';
import { MessageDto } from '../message/message.dto';

export class RoomDetailDto extends Room {
  lastMessage: MessageDto;
}
