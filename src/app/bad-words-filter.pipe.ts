import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badWordsFilter'
})
export class BadWordsFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var badWords: string[] = ["idiot", "stupid", "jaffa"]
    // if(badWords.includes(value)) 
    //   return "@%&$"
    // else
    //   return value
    return badWords.includes(value);
  }

}