import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
	@Field(() => ID)
	id: string;
	
	@Field()
	createdAt: Date;
	
	@Field()
	updatedAt: Date;
	
	@Field()
	name: string;
	
	@Field()
	email: string;
	
	@Field(() => Int, { nullable: true })
	age?: string;
}
