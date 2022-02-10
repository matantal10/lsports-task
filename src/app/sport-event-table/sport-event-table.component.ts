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
  currentTime: number;
  private isToDeleteEvent: boolean;

  constructor(private eventData: EventDataService) {
    this.setTimeOperations();
  }

  ngOnInit(): void {
    this.eventTableList = this.eventData.getAllEvents();
    this.sortTableByDate();
    this.maxId();
  }


  sortTableByDate(): void {
    this.eventTableList.sort((a: IEvent, b) => {
     return a.startingTime.getTime() - b.startingTime.getTime();
    })
  }

  /** 1. measure current time for every minute, determine if the game begins in
   *  less then an hour.
   *
   *  2. if the event date has passed the event will be erased from table.
   */
  setTimeOperations(): void {
    setInterval(() => {
      this.currentTime = new Date(Date.now()).getTime();
      this.eventTableList.forEach((event: IEvent) => {
        event.isAboutToStart = event.startingTime.getTime() - this.currentTime < 600000;
        this.isToDeleteEvent = this.currentTime > event.startingTime.getTime();

        if(this.isToDeleteEvent) {
          const index = this.eventTableList.findIndex(entity => Number(entity.id) ===  Number(event.id));
          this.eventTableList.splice(index, 1);
          this.isEdit = false;
        }
      });
    }, 60000)
  }

  getAdditionalDetails(event: IEvent) {
    this.selectedRow = event;
    this.isExpand = !this.isExpand;
  }

  editEvent(event: IEvent) {
    this.isEdit = true;
    this.currentRow = event;
    this.sortTableByDate();
  }

  saveEvent(event: IEvent) {
    this.isEdit = false;
    this.currentRow = null;
    this.sortTableByDate();
  }

  addNewEvent() {
    if(!this.isEdit) {
      this.isEdit = true;
      this.currentRow = this.eventData.createNewEvent();
      this.currentRow.id = this.nextId.toString();
      this.eventTableList.push(this.currentRow);
      this.maxId();
      this.sortTableByDate();
    }

  }

  deleteEvent(event: IEvent) {
    const index = this.eventTableList.findIndex(entity => Number(entity.id) ===  Number(event.id));
    this.eventTableList.splice(index, 1);
    this.isEdit = false;
    this.sortTableByDate();
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
