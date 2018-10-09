import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the EditprofilePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'editprofile',
})
export class EditprofilePipe implements PipeTransform {
  type = localStorage.getItem('type');

  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
