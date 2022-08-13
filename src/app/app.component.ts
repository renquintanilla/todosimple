import { Component } from '@angular/core';
import { Tarea } from './model/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrTareas: Tarea[];

  constructor() {
    this.arrTareas = [];
  }

  onTareaCreada($event: any) {
    
   this.arrTareas.push($event)
   console.log(this.arrTareas);
   
    
  }

}
