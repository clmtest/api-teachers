import { Teacher } from './../entities/Teacher'; // La importacion debe ser la ruta relativa

export interface ITeacherRepository{
    
    create(teacher:Teacher): Promise<Teacher>; // Responde una promesa: L apromesa responde el profesor que se va crear.
}