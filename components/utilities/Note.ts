

export default class Note {
   title: string;
   text: Object;
   type: string = 'note';

   constructor(title: string, text: string) {
      this.title = title
      this.text = text
   }
}