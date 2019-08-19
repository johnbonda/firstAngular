import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  Messages:any[] = [
    {title:"First", msgBody:"Hi, this is the first message"},
    {title:"Second", msgBody: "Hi, this is the second message"},
    {title: "Third", msgBody:"Hi, this is the third message"}
  ];

  public SendMail(pMail:any) {
    return "Mail sent successfully"
  }
  constructor() { }
}
