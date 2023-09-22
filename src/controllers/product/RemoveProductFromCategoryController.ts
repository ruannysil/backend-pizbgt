import { Request, Response } from "express";
import { RemoveProductFromCategoryService } from "../../services/product/RemoveProductFromCategoryService";

class RemoveProductFromCategoryController {
  async handle(req: Request, res: Response) {
    const product = req.query.id as string;

    const removeProduct = new RemoveProductFromCategoryService();
     const category_id = await removeProduct.execute({
       product
     });

     return res.json(category_id);
  }
}

export { RemoveProductFromCategoryController };