import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService }from '../../user/auth.service'
import { VoterService } from './voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit, OnChanges {
  
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  /*this will be used in the html template to render the sessions, 
  leaving the inputted sessions in tack
  */
  visableSessions: ISession[];

  constructor(private auth: AuthService, private voterService: VoterService) { }

  ngOnInit() {
  }

  //this gets called everytime one of the input properties changes
  ngOnChanges(): void {
    //if the seesions have bee populated then filter them
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy == 'name' ? 
        this.visableSessions.sort(sortByNameAsc): this.visableSessions.sort(sortByVotesDesc);
    }
  }

  toggleVote(session: ISession){
    if(this.userHasVoted(session)){
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    }else{
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }
    if(this.sortBy === 'voters'){
      this.visableSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession){
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
  }

  //stateless function
  filterSessions(filter) {
    if(filter === 'all'){
      //this creates a complete duplicate of the array from the frist element
      this.visableSessions = this.sessions.slice(0);
    }
    else{
      //take in the sessions
      this.visableSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }  
}

function sortByVotesDesc(s1: ISession, s2: ISession){
  ///this should return 0 a minus or positive 
  return s2.voters.length - s1.voters.length;
}

function sortByNameAsc(s1: ISession, s2: ISession){
  if(s1.name > s2.name) return 1;
  else if(s1.name === s2.name) return 0;
  else return -1;
}
