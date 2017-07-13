import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id:  0, name: 'me_irl' },
      { id: 11, name: 'Strong person' },
      { id: 12, name: 'Really creative factory worker' },
      { id: 13, name: 'Comes up with witty comments' },
      { id: 14, name: 'Always knows where is the remote' },
      { id: 15, name: 'Recommends really good books' },
      { id: 16, name: 'Always has gum on him' },
      { id: 17, name: 'Understands phisics' },
      { id: 18, name: 'Has a PHD' },
      { id: 19, name: 'Pragmatic dude' },
      { id: 20, name: 'Trumpedo' }
    ];
    return {heroes};
  }
}
