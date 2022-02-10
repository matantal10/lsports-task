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
      sportName: 'Basket Ball',
      location: 'Orlando',
      league: 'NBA',
      teamsPlaying: 'Magic VS Hawks',
      startingTime: new Date("2022-02-11T19:00:00.000Z"),
      additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
      isAboutToStart: false
    },
      {
        id: '2',
        sportName: 'Basket Ball',
        location: 'San-Antonio',
        league: 'NBA',
        teamsPlaying: 'Spurs VS Nuggets',
        startingTime: new Date("2022-02-11T21:00:00.000Z"),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
        isAboutToStart: false

      },
      {
        id: '3',
        sportName: 'Basket Ball',
        location: 'Los-Angeles',
        league: 'NBA',
        teamsPlaying: 'Clippers VS Wolves',
        startingTime: new Date("2022-02-11T20:00:00.000Z"),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
        isAboutToStart: false
      },
      {
        id: '4',
        sportName: 'Basket Ball',
        location: 'Chicago',
        league: 'NBA',
        teamsPlaying: 'Balls VS Sixers',
        startingTime: new Date("2022-02-11T14:00:00.000Z"),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
        isAboutToStart: false
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
      teamsPlaying: "",
      isAboutToStart: false
    };

    return event;
  }

}
