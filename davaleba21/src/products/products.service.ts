import { Injectable, NotFoundException } from '@nestjs/common';
import { IProduct } from './product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { ExpenseCategory } from 'src/expenses/dto/create-expense.dto';

@Injectable()
export class ProductsService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'iPhone 15',
      price: 2500,
      description: 'Latest Apple Smartphone',
      quantity: 10,
      category: ExpenseCategory.TECHNIC,
    },
    {
      id: 2,
      name: 'Nike Air Max',
      price: 300,
      description: 'Comfortable Running Shoes',
      quantity: 15,
      category: ExpenseCategory.SPORT,
    },
  ];

  getAllProducts(isSubscribed: boolean) {
    if (isSubscribed) {
      return this.products.map((product) => ({
        ...product,
        originalPrice: product.price,
        price: product.price * 0.8,
        isDiscounted: true,
      }));
    }

    return this.products;
  }

  createProduct(dto: CreateProductDto): IProduct {
    const lastId = this.products[this.products.length - 1]?.id || 0;

    const newProduct: IProduct = {
      id: lastId + 1,
      ...dto,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  getProductById(id: number): IProduct {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
