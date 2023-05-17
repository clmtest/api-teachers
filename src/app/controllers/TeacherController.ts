import { Teacher } from './../../domain/entities/Teacher';
import { Request, Response } from 'express';
import { ITeacherRepository } from "domain/interfaces/ITeacherRepository";
/**
 * el encragado de todo lo que tiene que ver con request y responses es el controlador
 */

export class TeacherController{
    
    constructor(private _teacherRepository: ITeacherRepository){

    }

    public async create (request: Request, response: Response): Promise<Response>{

        const {name, description, email, date} = request.body; // Destructurar
        const teacher: Teacher = new Teacher (name, description, email, new Date(date))
        const createdTeacher = await this._teacherRepository.create(teacher)
        return response.status(201).json(createdTeacher)

    }
}



