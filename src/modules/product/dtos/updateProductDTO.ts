

export class UpdateProductDTO {
    name?: string;
    value?: number;
    imgPath?: string;

    constructor(productData: updateProduct) {
        this.name = productData.name;
        this.value = productData.value;
        this.imgPath = productData.imgPath;
    }
}

type updateProduct = {
    name?: string;
    value?: number;
    imgPath?: string;
};
