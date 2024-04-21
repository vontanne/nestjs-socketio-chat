import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Room } from './room.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Entity({ name: 'message' })
export class Message extends BaseEntity {
  @Column()
  roomId: string;

  @Column()
  text: string;

  @ManyToOne(() => Room, (roomEntity) => roomEntity.messages)
  room: Room;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @ManyToOne(() => User, (user) => user.messages)
  @JoinColumn([{ name: 'createdBy', referencedColumnName: 'id' }])
  creator: User;
}
