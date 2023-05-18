import { Teacher } from './../../domain/entities/Teacher';
import { Request, Response } from 'express';
import { ITeacherRepository } from "./../../domain/interfaces/ITeacherRepository";
/**
 * el encragado de todo lo que tiene que ver con request y responses es el controlador
 */

/*
@swagger
 * /api/teachers:
 *   post:
 *     summary: Create a new teacher.
 *     tags:
 *       - Teachers
 *     requestBody:
 *       description: Teacher information.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TeacherInput'
 *     responses:
 *       201:
 *         description: Created teacher object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

export class TeacherController{
    
    constructor(private _teacherRepository: ITeacherRepository){

    }

    public async create (request: Request, response: Response): Promise<Response>{

        try{

        const {name, description, email, date} = request.body; // Destructurar
        const teacher: Teacher = new Teacher (name, description, email, new Date(date))
        const createdTeacher = await this._teacherRepository.create(teacher)
        return response.status(201).json(createdTeacher)

        }catch(error) {

            console.log(error);
            return response.status(500).json({
                errorMessage: 'Houston tenemos un problema',
                code: 9999
            })
        }
    }
}



