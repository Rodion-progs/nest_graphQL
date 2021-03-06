import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import {StudentService} from './student.service';
import {StudentType} from './student.type';

@Resolver()
export class StudentResolver {
	constructor(private studentService: StudentService) {}
	
	@Query(() => String)
	getStuff() {
		return 'strinng'
	}
	
	@Mutation(() => StudentType)
	createStudent(
		@Args('name') name: string,
		@Args('email') email: string,
		@Args('age') age: number,
	) {
		return this.studentService.createStudent(name, email, age);
	}
}
