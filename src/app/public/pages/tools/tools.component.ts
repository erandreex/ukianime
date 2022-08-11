import { Component, OnInit } from '@angular/core';
import { Tool } from '../../../shared/interfaces/tool.interface';

@Component({
    selector: 'app-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
    public tools: Tool[] = [
        {
            name: 'Angular',
            version: 'v14.0.3',
            desc: 'Framework utilizado para levantar la interfaz gráfica de Ukianime',
            pathImage: '../../../../assets/tools/angular.png',
        },
        {
            name: 'NodeJS',
            version: 'v16.13.1',
            desc: 'Lenguaje utilizado en el backend',
            pathImage: '../../../../assets/tools/node.png',
        },
        {
            name: 'MongoDB',
            version: 'v14.0.3',
            desc: 'Base de datos NoSQL para almacenar la información de los usuarios.',
            pathImage: '../../../../assets/tools/mongo.webp',
        },
        {
            name: 'JSONWebToken',
            version: 'v8.5.1',
            desc: 'Creación de tokens de acceso para la autenticación',
            pathImage: '../../../../assets/tools/jwt.png',
        },
        {
            name: 'Font-Awesome',
            version: 'icons',
            desc: 'Libreria para mostrar los iconos',
            pathImage: '../../../../assets/tools/fontawesome.png',
        },
        {
            name: 'Express',
            version: 'v4.18.1',
            desc: 'Infraestructura para el manejo de APIs y peticiciones HTTP',
            pathImage: '../../../../assets/tools/express.png',
        },
        {
            name: 'TypeScript',
            version: 'v4.7.2',
            desc: 'Lenguaje utilizado junto con Angular para el tipado de las respuestas',
            pathImage: '../../../../assets/tools/typescript.png',
        },
        {
            name: 'JavaScript',
            version: '',
            desc: 'Utilizado tanto en el backend como en el frontend',
            pathImage: '../../../../assets/tools/javascript.png',
        },
        {
            name: 'Mongoose',
            version: 'v6.4.4',
            desc: 'Biblioteca utilizada para manejo de mongoDB',
            pathImage: '../../../../assets/tools/mongoose.png',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
