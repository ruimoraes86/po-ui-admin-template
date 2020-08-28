import { Observable } from 'rxjs';
import { PoToolbarProfile } from '@po-ui/ng-components';

export interface User {
    title: string;
    subtitle: string;
    avatar: string;
}

export abstract class UserData {
    abstract getUsers(): Observable<User[]>;
}