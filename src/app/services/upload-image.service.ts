import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(
    private http:HttpClient
  ) { }

  uploadImage(uploadImageData:any){
   return this.http.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
  
  }

  getImage(imageName:any){
    return this.http.get('http://localhost:8080/image/get/' + imageName)
  }

  getImages(){
    return this.http.get('http://localhost:8080/image/get')
  }
}
