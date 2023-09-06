import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Injectable({
  providedIn: 'root'
})
export class PdfConverterService {
  constructor() {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
  }
  public async readPdf(pdfUrl: string): Promise<string> {
    const countPromises: any[] = []; // collecting all page promises
    let pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      for (let i = 1; i <= pdf._pdfInfo.numPages; i++) {
       let page = await pdf.getPage(i);
       const textContent = await page.getTextContent();
       let t = textContent.items.map((s:any) => s.str).join('');
       countPromises.push(t);// Concatenate the text items into a single string
      } 
      
     const pageContents = await Promise.all(countPromises);
     return pageContents.join('');
    }
}
