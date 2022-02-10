
//all fields are strings able due to ngModel binds to *ngFor
export interface IEvent {
  id: string
  sportName: string;
  location: string;
  league: string;
  teamsPlaying: string;
  startingTime: Date;
  additionalData: string;
  isAboutToStart?: boolean | string;
}
