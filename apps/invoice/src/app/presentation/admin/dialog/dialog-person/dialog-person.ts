import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PersonEntity } from "../../../../core/entities/person.entity";

@Component({
    selector: 'siste-dialog-person',
    templateUrl: 'dialog-person.html',
    styleUrls: ['./dialog-person.scss']
})
export class DialogPersonComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public person: PersonEntity ) {}
}