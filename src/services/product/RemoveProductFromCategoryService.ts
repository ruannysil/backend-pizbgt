import prismaClient from "../../prisma";

interface ProductDeleteRequest {
  product: string
}

class RemoveProductFromCategoryService {
  async execute({product}: ProductDeleteRequest) {
    try {
      // Exclua o produto pelo ID
      const deletedProduct = await prismaClient.product.delete({
        where: {
          id: product,
        },
      });

      return deletedProduct;
    } catch (error) {
      throw new Error(`Erro ao excluir o produto: ${error.message}`);
    } finally {
      await prismaClient.$disconnect();
    }
  }
}

export {RemoveProductFromCategoryService}