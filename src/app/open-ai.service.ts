import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  constructor(private http: HttpClient) {}

  getData(input: string): Observable<any> {
    const prompt = { "prompt" : input};
    return this.http.post(
      'http://6993-188-43-14-13.ngrok.io/ask/', prompt,
      { responseType: 'json' }
    );
  }
}
