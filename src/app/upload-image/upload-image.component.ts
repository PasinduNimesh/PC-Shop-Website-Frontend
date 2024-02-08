import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../services/upload-image.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private serviceImage: UploadImageService,
    private serviceCategory: CategoryService,
    private serviceProduct: ProductService
  ) { }

  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string = "";
  imageName: any;
  image: any;
  images: any
  imageId: any

  categories: any;
  productId: any;

  product = {
    name: '',
    description: '',
    category: {
      id: ''
    },
    imageModel: {
      id: ''
    }
  }


  ngOnInit(): void {
    this.serviceCategory.getCategoris().subscribe((data) => {
      this.categories = data;
    })
  }



  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile.name)
    // this.serviceImage.getImage(this.selectedFile.name).subscribe((data)=>{
    //   this.image = data;
    //   console.log(this.image)
    // })
    this.onUpload();

  }


  onUpload() {
    //console.log(this.selectedFile);

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name,);

    this.serviceImage.uploadImage(uploadImageData).subscribe((data) => {
     

    })
  }

  onImageUpload(){
    this.serviceImage.getImage(this.selectedFile.name).subscribe((data) => {
      console.log('Inside onImageUplaod')
      this.image = data
      console.log(this.image.id)
      this.product.imageModel.id = this.image.id
      this.base64Data = this.image.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;

    })
  }

  getImage() {
    this.serviceImage.getImage(this.imageName).subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    );
  }

  formSubmit() {
    
    this.serviceProduct.addProduct(this.product).subscribe((data) => {
      console.log(data)
    })

  }
}