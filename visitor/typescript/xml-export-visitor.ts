import {IBookExportVisitor} from "./book-export-visitor.interface";
import {Book} from "./book";

// Visitor arayüzünü ve burada tanımlı olan metotları uygular.
// Sonradan eklenmek istenen işlemler burada yer alır.
// UML diyagramındaki ConcreteVisitor yapısına denk gelir.
export class XmlExportVisitor implements IBookExportVisitor {
  public exportVisit(book: Book): void {
    // Parametre olarak gelen örneğin XML'e çevrilmesi işlemleri yer alacaktır.
    console.log(`${book.name} exported by XmlExportVisitor`);
  }
}
