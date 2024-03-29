import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  imgRef: string = ""

  constructor(private storage: Storage, private spinner: NgxSpinnerService) { }

  public uploadImage($event: any, name: string){
    this.spinner.show();
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/`+ name)
    uploadBytes(imgRef, file)
    .then(response => { this.imgRef = response.ref.fullPath;
      this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        if(this.imgRef == item.fullPath){
        this.url = await getDownloadURL(item);
        this.spinner.hide();
        console.log("La url es: " + this.url);
        }
      }
    })
    .catch(error => console.log(error))
  }
}
