import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class RoomParticipantsUser1712495499986 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'roomParticipantsUser',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'userId',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'roomId',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createdBy',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'updatedBy',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'DATETIME',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'DATETIME',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'roomParticipantsUser',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'roomParticipantsUser',
      new TableForeignKey({
        columnNames: ['roomId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'room',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'roomParticipantsUser',
      new TableForeignKey({
        columnNames: ['createdBy'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'roomParticipantsUser',
      new TableForeignKey({
        columnNames: ['updatedBy'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('roomParticipantsUser');
    const foreignKeys = table.foreignKeys.filter((fk) =>
      ['userId', 'roomId', 'createdBy', 'updatedBy'].includes(
        fk.columnNames[0],
      ),
    );

    for (const fk of foreignKeys) {
      await queryRunner.dropForeignKey('roomParticipantsUser', fk);
    }

    await queryRunner.dropTable('roomParticipantsUser', true);
  }
}
