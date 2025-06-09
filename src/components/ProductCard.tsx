import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.minOrder);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Stock Badge */}
          <div className="absolute top-3 left-3">
            {product.inStock ? (
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                В наличии
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                Под заказ
              </Badge>
            )}
          </div>

          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-red-500 text-white">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}
                %
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Brand & Type */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="font-medium">{product.brand}</span>
            <span className="capitalize">{product.type}</span>
          </div>

          {/* Name */}
          <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Gender & Season */}
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Badge variant="outline" className="text-xs">
              {product.gender}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {product.season}
            </Badge>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {product.price.toLocaleString("ru-RU")} ₽
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>

          {/* Min Order */}
          <p className="text-xs text-gray-500">
            Мин. заказ: {product.minOrder} шт.
          </p>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            disabled={!product.inStock}
          >
            <Icon name="ShoppingCart" size={16} />
            <span className="ml-2">В корзину</span>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
