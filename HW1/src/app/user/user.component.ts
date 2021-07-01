import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() users: string[] = [];
  @Output() btnRemoveClickEvent = new EventEmitter();

  index : number = -1;

  onSelectUserClick(idx: number)
  {
    //this.btnRemoveClickEvent.emit(idx);
    this.index = idx;

  }

  onBtnRemoveUserClick(){
    if (this.index != -1){
      this.btnRemoveClickEvent.emit(this.index);
    }
  }

}

