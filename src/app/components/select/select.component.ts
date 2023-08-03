import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  optionSelect: string = '';
  slectLevel: string = '';
  @Output() newEventSelectCity = new EventEmitter();
  @Output() newEventSelectLevel = new EventEmitter();

  sendCityValue(value: string) {
    this.newEventSelectCity.emit(value)
  }
  sendLevelValue(value: string){
    this.newEventSelectLevel.emit(value)
  }
}
