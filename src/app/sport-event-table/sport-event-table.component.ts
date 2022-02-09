import { Component, OnInit } from '@angular/core';
import {EventDataService} from "../service/event-data.service";
import {IEvent} from "../interfaces/IEvent";

type ICol = keyof IEvent;

@Component({
  selector: 'app-sport-event-table',
  templateUrl: './sport-event-table.component.html',
  styleUrls: ['./sport-event-table.component.scss']
})
export class SportEventTableComponent implements OnInit {

  eventTableList: IEvent[] = [];

  tableHeaders: ICol[] = ["sportName","location", "league", "teamsPlaying", "startingTime"];
  isEdit = false;
  currentRow: any = null;

  constructor(private eventData: EventDataService) { }

  ngOnInit(): void {
    this.eventTableList = this.eventData.getAllEvents();
  }

  getAdditionalDetails(event: IEvent) {

  }

  editEvent(event: IEvent) {
    this.isEdit = true
    this.currentRow = event;
  }

  saveEvent(event: IEvent) {
    this.isEdit = false;
    this.currentRow = null;
  }

  addNewEvent() {

  }
}
