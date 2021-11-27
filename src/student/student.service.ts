import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@mikro-orm/nestjs';
import {Student} from './student.entity';
import {EntityRepository} from '@mikro-orm/core';

@Injectable()
export class StudentService {
	constructor(
		@InjectRepository(Student) private studentRepository: EntityRepository<Student>,
	) {}
	
	async createStudent(name, email, age): Promise<Student> {
		const student = this.studentRepository.create({
			id: 'gdsgsgsdgs',
			name,
			email,
			age,
		});
		
		this.studentRepository.persistAndFlush(student);
		
		return student;
	}
}
