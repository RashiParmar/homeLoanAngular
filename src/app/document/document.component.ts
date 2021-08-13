import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { Router } from '@angular/router';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  doc:Document;

  constructor(private docservice:DocumentService, private router:Router) { 
    this.doc=new Document();
  }

  ngOnInit(): void {
  }

  saveData()
  {

      this.docservice.addDocument(this.doc).subscribe(
        (data)=>{
          console.log("Return Value from REST"+data); 
        }
      )
    
  }
  ApplicationDetails(){
    this.router.navigate(['application']);
  }
  
}
