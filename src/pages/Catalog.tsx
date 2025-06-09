import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { Filters as FiltersType } from "@/types/product";
import Header from "@/components/Header";
import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filters, setFilters] = useState<FiltersType>({
    brand: "",
    priceRange: [0, 50000],
    gender: "",
    season: "",
    type: "",
    inStock: false,
  });

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = !filters.brand || product.brand === filters.brand;
      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];
      const matchesGender =
        !filters.gender || product.gender === filters.gender;
      const matchesSeason =
        !filters.season || product.season === filters.season;
      const matchesType = !filters.type || product.type === filters.type;
      const matchesStock = !filters.inStock || product.inStock;

      return (
        matchesSearch &&
        matchesBrand &&
        matchesPrice &&
        matchesGender &&
        matchesSeason &&
        matchesType &&
        matchesStock
      );
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "brand":
          return a.brand.localeCompare(b.brand);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, searchQuery, filters, sortBy]);

  const clearFilters = () => {
    setFilters({
      brand: "",
      priceRange: [0, 50000],
      gender: "",
      season: "",
      type: "",
      inStock: false,
    });
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Каталог очков OptkaLine
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Широкий выбор качественных очков для оптовых покупателей. Найдите
            идеальную модель с помощью удобных фильтров.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Filters
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Sort Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  placeholder="Поиск по названию или бренду..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="sm:w-48">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">По названию</SelectItem>
                    <SelectItem value="brand">По бренду</SelectItem>
                    <SelectItem value="price-asc">
                      Цена: по возрастанию
                    </SelectItem>
                    <SelectItem value="price-desc">
                      Цена: по убыванию
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Найдено товаров:{" "}
                <span className="font-semibold">
                  {filteredAndSortedProducts.length}
                </span>
              </p>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon
                  name="Search"
                  size={48}
                  className="mx-auto text-gray-400 mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Товары не найдены
                </h3>
                <p className="text-gray-600 mb-4">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <button
                  onClick={clearFilters}
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Сбросить все фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
