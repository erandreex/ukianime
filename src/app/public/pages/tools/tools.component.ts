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
            desc: 'kndiqjwd qwd qwd qwd qwdqdqwdqwd qwd q wd qwd',
            pathImage: '../../../../assets/tools/angular.png',
        },
        {
            name: 'NodeJS',
            version: 'v14.0.3',
            desc: 'kndiqjwd qwd qwd qwd qwdqdqwdqwd qwd q wd qwd',
            pathImage: '../../../../assets/tools/node.png',
        },
        {
            name: 'MongoDB',
            version: 'v14.0.3',
            desc: 'kndiqjwd qwd qwd qwd qwdqdqwdqwd qwd q wd qwd',
            pathImage: '../../../../assets/tools/mongo.webp',
        },
        {
            name: 'JSONWebToken',
            version: 'v14.0.3',
            desc: 'kndiqjwd qwd qwd qwd qwdqdqwdqwd qwd q wd qwd',
            pathImage: '../../../../assets/tools/jwt.png',
        },
        {
            name: 'Bootstrap',
            version: 'v14.0.3',
            desc: 'kndiqjwd qwd qwd qwd qwdqdqwdqwd qwd q wd qwd',
            pathImage: '../../../../assets/tools/boostrap.png',
        },
        {
            name: 'Express',
            version: 'v14.0.3',
            desc: 'kndiqjwd qwd qwd qwd qwdqdqwdqwd qwd q wd qwd',
            pathImage: '../../../../assets/tools/express.png',
        },
        {
            name: 'TypeScript',
            version: 'v14.0.3',
            desc: 'kndiqjwd qwd qwd qwd qwdqdqwdqwd qwd q wd qwd',
            pathImage: '../../../../assets/tools/typescript.png',
        },
        {
            name: 'JavaScript',
            version: 'v14.0.3',
            desc: 'kndiqjwd qwd qwd qwd qwdqdqwdqwd qwd q wd qwd',
            pathImage: '../../../../assets/tools/javascript.png',
        },
        {
            name: 'Mongoose',
            version: 'v14.0.3',
            desc: 'kndiqjwd qwd qwd qwd qwdqdqwdqwd qwd q wd qwd',
            pathImage: '../../../../assets/tools/mongoose.png',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
