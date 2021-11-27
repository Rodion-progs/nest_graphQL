import { Migration } from '@mikro-orm/migrations';

export class Migration20211127144818 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "student" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null);');
    this.addSql('alter table "student" add constraint "student_pkey" primary key ("id");');
  }

}
