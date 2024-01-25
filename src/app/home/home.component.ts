import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title!: string
  listProduct!: Product[]
  color!:string
  minPrice!:number;
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.title = "welcome 2Cinfo1"
    this.color='blue'
    this.listProduct = [
      {
        id: 1,
        title: "Iphone 12",
        price: 100,
        quantity: 3,
        like: 0
      },
      {
        id: 2,
        title: "Iphone 14",
        price: 200,
        quantity: 555,
        like: 0
      },
      {
        id: 3,
        title: "Iphone 15",
        price: 300,
        quantity: 656,
        like: 0
      },
      {
        id: 4,
        title: "A14",
        price: 50,
        quantity: 6,
        like: 0
      },
      {
        id: 5,
        title: "Infinix",
        price: 250,
        quantity: 555,
        like: 0
      }
    ]
    this.filteredProducts = this.listProduct;
  }
  alert() {
    alert("hello world")
  }
  incri(productId: number) {
    const product = this.listProduct.find(p => p.id === productId);
    if (product) {
      product.like++;
    }
  }
  dislikes(i: number) {
    if (this.listProduct[i].quantity > 0) {
      this.listProduct[i].quantity--;

    }else{
      alert ("le produit n'est pas disponible")
    }
  }

  reduc(i: number) {
    if (this.listProduct[i].price > 100) {
      this.listProduct[i].price= this.listProduct[i].price-(this.listProduct[i].price*0.2);

    }else{
      alert ("le produit n'est pas disponible")
    }
  }

  filterProducts() {
    this.filteredProducts = this.listProduct.filter(product => product.price > this.minPrice!);
  }


}
