import { Injectable, Component } from '@angular/core';
import { ISession } from '../index';

@Component({
    
})

@Injectable()
export class VoterService {

    deleteVoter(session: ISession, voterName: string){
        session.voters = session.voters.filter(voter => voter !== voterName);
    }
    addVoter(session: ISession, voterName: string){
        session.voters.push(voterName);
    }
    userHasVoted(session: ISession, voterName: string){
        session.voters.some(voter => voter === voterName);
    }
}