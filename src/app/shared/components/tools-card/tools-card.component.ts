import { Component, Input, OnInit } from '@angular/core';
import { Tool } from '../../interfaces/tool.interface';

@Component({
    selector: 'app-tools-card',
    templateUrl: './tools-card.component.html',
    styleUrls: ['./tools-card.component.css'],
})
export class ToolsCardComponent implements OnInit {
    @Input('tool') public tool!: Tool | null;

    constructor() {}

    ngOnInit(): void {}
}
