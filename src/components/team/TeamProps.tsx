class TeamProps{
  constructor(key: number, points: number, name: string, active: boolean){
    this.key = key;
    this.points = points;
    this.name = name;
    this.active = active;
  }
  key: number;
  points: number;
  name: string;
  active: boolean;
}


export default TeamProps;