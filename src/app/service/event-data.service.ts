import { Injectable } from '@angular/core';
import {IEvent} from "../interfaces/IEvent";

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  constructor() { }

  getAllEvents(): IEvent[] {
    return [ {
      id: '1',
      sportName: 'Knicks VS Lakers',
      location: 'New-York',
      league: 'NBA',
      teamsPlaying: 'Knicks VS Lakers',
      startingTime: new Date(Date.now()),
      additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
    },
      {
        id: '2',
        sportName: 'Knicks VS Lakers',
        location: 'New-York',
        league: 'NBA',
        teamsPlaying: 'Knicks VS Lakers',
        startingTime: new Date(Date.now()),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
      },
      {
        id: '3',
        sportName: 'Knicks VS Lakers',
        location: 'New-York',
        league: 'NBA',
        teamsPlaying: 'Knicks VS Lakers',
        startingTime: new Date(Date.now()),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
      },
      {
        id: '5',
        sportName: 'Knicks VS Lakers',
        location: 'New-York',
        league: 'NBA',
        teamsPlaying: 'Knicks VS Lakers',
        startingTime: new Date(Date.now()),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
      },
      {
        id: '6',
        sportName: 'Knicks VS Lakers',
        location: 'New-York',
        league: 'NBA',
        teamsPlaying: 'Knicks VS Lakers',
        startingTime: new Date(Date.now()),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
      },

    ];
  }

  createNewEvent(): IEvent {
    let event: IEvent = {
      id: '',
      additionalData: "",
      league: "",
      location: "",
      sportName: "",
      startingTime: new Date(Date.now()),
      teamsPlaying: ""
    };

    return event;
  }

}
