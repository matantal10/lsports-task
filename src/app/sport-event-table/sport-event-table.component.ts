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
  nextId: number;
  isExpand = false;
  selectedRow: IEvent = null;

  constructor(private eventData: EventDataService) { }

  ngOnInit(): void {
    this.eventTableList = this.eventData.getAllEvents();
    this.maxId();

  }

  getAdditionalDetails(event: IEvent) {
    this.selectedRow = event;
    this.isExpand = !this.isExpand;
  }

  editEvent(event: IEvent) {
    this.isEdit = true;
    this.currentRow = event;
  }

  saveEvent(event: IEvent) {
    this.isEdit = false;
    this.currentRow = null;
  }

  addNewEvent() {
    if(!this.isEdit) {
      this.isEdit = true;
      this.currentRow = this.eventData.createNewEvent();
      this.currentRow.id = this.nextId;
      this.eventTableList.push(this.currentRow);
      this.maxId();
    }

  }

  deleteEvent(event: IEvent) {
    const index = this.eventTableList.findIndex(entity => entity.id === event.id);
    this.eventTableList.splice(index, 1);
    this.isEdit = false;
  }

  private maxId(): void {
    if(this.eventTableList.length === 0) {
      this.nextId = 0;
    } else {
      let maxId = Number(this.eventTableList[this.eventTableList.length - 1].id);
      this.nextId = maxId + 1;
    }
  }
}
