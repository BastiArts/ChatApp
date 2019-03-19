import {User} from './user';

export class Group {
    constructor(public id = '', public groupname: string = '', public members: Array<User> = []) {
    }
}
