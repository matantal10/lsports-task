import { Injectable } from '@angular/core';
import {IEvent} from "../interfaces/IEvent";

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  constructor() { }

  getAllEvents(): IEvent[] {
    return [ {
      sportName: 'Knicks VS Lakers',
      location: 'New-York',
      league: 'NBA',
      teamsPlaying: 'Knicks VS Lakers',
      startingTime: new Date(''),
      additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
    },
      {
        sportName: 'Knicks VS Lakers',
        location: 'New-York',
        league: 'NBA',
        teamsPlaying: 'Knicks VS Lakers',
        startingTime: new Date(''),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
      },
      {
        sportName: 'Knicks VS Lakers',
        location: 'New-York',
        league: 'NBA',
        teamsPlaying: 'Knicks VS Lakers',
        startingTime: new Date(''),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
      },
      {
        sportName: 'Knicks VS Lakers',
        location: 'New-York',
        league: 'NBA',
        teamsPlaying: 'Knicks VS Lakers',
        startingTime: new Date(''),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
      },
      {
        sportName: 'Knicks VS Lakers',
        location: 'New-York',
        league: 'NBA',
        teamsPlaying: 'Knicks VS Lakers',
        startingTime: new Date(''),
        additionalData: ' LeBron James returned from a five-game absence due to injury and had a triple-double of 29 points, 13 rebounds, 10 assists, and the Los Angeles Lakers rallied from a 21-point, second-quarter deficit, beating the New York Knicks 122-115 in overtime Saturday night.',
      },

    ];
  }


}
