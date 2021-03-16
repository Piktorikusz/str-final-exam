import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
  //  return null;
  //}
  //transform(value: any[], phrase: string, key: string = ''): any {
   // if(!Array.isArray(value) || !phrase || !key){
   //   return value;
   // }
   // if(Number(phrase)){
   //   return value.filter(item => Number(item[key]) == Number(phrase));
   // } else {
    //  phrase = phrase.toLowerCase();
    //  return value.filter(item => String(item[key]).toLowerCase().includes(phrase));
   // }
  //}
 // transform(value: any[] | null, key:string, phrase: string): any[] | null {
   // if(!Array.isArray(value) || !key || !phrase){
 //     return value;
  //  }
//
   // phrase = typeof phrase !=='number' ? ('' + phrase).toLowerCase() : phrase;
//
   // return value.filter( item => {
   //   if(typeof item[key] === 'number' && typeof phrase === 'number'){
    //    return item[key] === phrase;
   //   }
//
    //  return ('' + item[key]).toLowerCase().includes((phrase as string));
   //});
  //}
  transform(value: any[] | null , phrase: string, key: string = ''): any {
     if(!Array.isArray(value) || !phrase || !key){
       return value;
     }
     if(Number(phrase)){
       return value.filter(item => Number(item[key]) == Number(phrase));
     } else {
       phrase = phrase.toLowerCase();
       return value.filter(item => String(item[key]).toLowerCase().includes(phrase));
     }
   }

}
