export class User {
    id!: number;
    firstname!: string;
    lastname!: string;
    email!: string;
    password!: string;
    cin!: number;
    partenaire!:string;
    authorities: Authority[] = [];
    token!:string;
    desactive!:boolean ;
  }
  export interface Authority {
    authority: string;
  }