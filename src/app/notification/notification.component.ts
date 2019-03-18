import { Component, OnInit } from '@angular/core';
import { notificationService } from '../shared/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
type:string = null;
message:string = null;


  constructor(notifier:notificationService) {
    notifier.emitter.subscribe(data =>{
      this.type = data.type;
      this.message = data.message
    })
   }

  ngOnInit() {
  }

}
