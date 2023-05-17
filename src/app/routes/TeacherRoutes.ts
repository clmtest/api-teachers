import { TeacherController } from 'app/controllers/TeacherController';
import { TeacherRepository } from './../../infra/repositories/TeacherRepository';
import { Router } from "express";

export class TeacherRoutes {

    private _router:Router;
    private _teacherRepository: TeacherRepository;
    private _teacherController: TeacherController;

    constructor(){
        this._router = Router();
        this._teacherRepository = new TeacherRepository();
        this._teacherController = new TeacherController(this._teacherRepository)
        this.initRoutes(); // Cada que se haga una instancea de CONTROLLER, creamos una ruta
    }

    private initRoutes(): void {

        this._router.post('/create', this._teacherController.create.bind(this._teacherController)); // Bind: permite acceder a las propiedades que tenga una clase 
    }

    public getRoutes(): Router {
        return this._router;
    }
}


