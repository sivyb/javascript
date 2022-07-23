import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, map, catchError } from 'rxjs/operators';

//models
import { Match } from '@app/models/Match';

//services
import { PropertiesService } from '../core/properties.service';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private servicePrefix = "/match"
  private apiUrl: string = this.propertiesService.apiUrl + this.servicePrefix;
  private requestTimeout: number = this.propertiesService.requestTimeout;

  constructor(
    private http: HttpClient,
    private propertiesService: PropertiesService
  ) {}

  ngOnInit() {}
}
