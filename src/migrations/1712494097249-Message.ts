import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Message1712494097249 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'message',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'roomId',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'text',
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
      'message',
      new TableForeignKey({
        columnNames: ['roomId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'room',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'message',
      new TableForeignKey({
        columnNames: ['createdBy'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'message',
      new TableForeignKey({
        columnNames: ['updatedBy'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('message');

    const roomForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('roomId') !== -1,
    );
    if (roomForeignKey) {
      await queryRunner.dropForeignKey('message', roomForeignKey);
    }

    const createdByForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('createdBy') !== -1,
    );
    if (createdByForeignKey) {
      await queryRunner.dropForeignKey('message', createdByForeignKey);
    }

    const updatedByForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('updatedBy') !== -1,
    );
    if (updatedByForeignKey) {
      await queryRunner.dropForeignKey('message', updatedByForeignKey);
    }

    await queryRunner.dropTable('message', true);
  }
}
