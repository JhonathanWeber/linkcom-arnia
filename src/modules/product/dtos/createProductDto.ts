export class CreateProductDto {
  name?: string;
  value?: number;
  imgPath?: string;

  constructor(productData: createProduct) {
    this.name = productData.name;
    this.value = productData.value;
    this.imgPath = productData.imgPath;
  }
}
type createProduct = {
  name?: string;
  value?: number;
  imgPath?: string;
};
