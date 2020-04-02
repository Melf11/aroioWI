import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  $activeTab: BehaviorSubject<string> = new BehaviorSubject<string>('system');
}
