import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Room1712493007731 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'room',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'type',
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
      'room',
      new TableForeignKey({
        columnNames: ['createdBy'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'room',
      new TableForeignKey({
        columnNames: ['updatedBy'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('room');
    const createdByForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('createdBy') !== -1,
    );
    const updatedByForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('updatedBy') !== -1,
    );
    if (createdByForeignKey) {
      await queryRunner.dropForeignKey('room', createdByForeignKey);
    }
    if (updatedByForeignKey) {
      await queryRunner.dropForeignKey('room', updatedByForeignKey);
    }

    await queryRunner.dropTable('room', true);
  }
}
