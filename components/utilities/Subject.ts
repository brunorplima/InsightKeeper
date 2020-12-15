

export default class Subject {
   title: string;
   content: Object;
   type: string = 'subject';

   constructor(title: string, content: Object) {
      this.title = title
      this.content = content
   }
}