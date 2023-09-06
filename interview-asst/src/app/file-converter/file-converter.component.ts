import { Component } from '@angular/core';
import { PdfConverterService } from '../pdf-converter.service';

@Component({
  selector: 'app-file-converter',
  templateUrl: './file-converter.component.html',
  styleUrls: ['./file-converter.component.scss'],
})
export class FileConverterComponent {
  extractedText: string | undefined;
  private selectedFile: File | undefined;
 
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  constructor(private pdfReader: PdfConverterService) { }

  async extractText(): Promise<void> {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    this.pdfReader.readPdf('./assets/sample.pdf')
      .then(text => this.extractedText=text, reason => console.error(reason));
  }
}






