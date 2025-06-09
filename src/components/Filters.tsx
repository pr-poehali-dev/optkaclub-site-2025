import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Filters as FiltersType } from "@/types/product";
import { brands, genders, seasons, types } from "@/data/products";

interface FiltersProps {
  filters: FiltersType;
  onFiltersChange: (filters: FiltersType) => void;
  onClearFilters: () => void;
}

const Filters = ({
  filters,
  onFiltersChange,
  onClearFilters,
}: FiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = (key: keyof FiltersType, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const hasActiveFilters = () => {
    return (
      filters.brand !== "" ||
      filters.gender !== "" ||
      filters.season !== "" ||
      filters.type !== "" ||
      filters.priceRange[0] > 0 ||
      filters.priceRange[1] < 50000 ||
      filters.inStock
    );
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          <span className="flex items-center">
            <Icon name="Filter" size={16} />
            <span className="ml-2">Фильтры</span>
            {hasActiveFilters() && (
              <span className="ml-2 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                !
              </span>
            )}
          </span>
          <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={16} />
        </Button>
      </div>

      {/* Filters Panel */}
      <Card className={`p-4 space-y-6 ${isOpen ? "block" : "hidden lg:block"}`}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 flex items-center">
            <Icon name="Filter" size={18} />
            <span className="ml-2">Фильтры</span>
          </h3>
          {hasActiveFilters() && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-indigo-600 hover:text-indigo-700"
            >
              Сбросить
            </Button>
          )}
        </div>

        <Separator />

        {/* Price Range */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-700">Цена</h4>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => updateFilter("priceRange", value)}
              max={50000}
              step={500}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>{filters.priceRange[0].toLocaleString("ru-RU")} ₽</span>
              <span>{filters.priceRange[1].toLocaleString("ru-RU")} ₽</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Brand */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-700">Бренд</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={filters.brand === brand}
                  onCheckedChange={(checked) =>
                    updateFilter("brand", checked ? brand : "")
                  }
                />
                <label
                  htmlFor={`brand-${brand}`}
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Gender */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-700">Пол</h4>
          <div className="space-y-2">
            {genders.map((gender) => (
              <div key={gender} className="flex items-center space-x-2">
                <Checkbox
                  id={`gender-${gender}`}
                  checked={filters.gender === gender}
                  onCheckedChange={(checked) =>
                    updateFilter("gender", checked ? gender : "")
                  }
                />
                <label
                  htmlFor={`gender-${gender}`}
                  className="text-sm text-gray-600 cursor-pointer capitalize"
                >
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Season */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-700">Сезон</h4>
          <div className="space-y-2">
            {seasons.map((season) => (
              <div key={season} className="flex items-center space-x-2">
                <Checkbox
                  id={`season-${season}`}
                  checked={filters.season === season}
                  onCheckedChange={(checked) =>
                    updateFilter("season", checked ? season : "")
                  }
                />
                <label
                  htmlFor={`season-${season}`}
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  {season}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Type */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-700">Тип</h4>
          <div className="space-y-2">
            {types.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`type-${type}`}
                  checked={filters.type === type}
                  onCheckedChange={(checked) =>
                    updateFilter("type", checked ? type : "")
                  }
                />
                <label
                  htmlFor={`type-${type}`}
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* In Stock */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="inStock"
            checked={filters.inStock}
            onCheckedChange={(checked) => updateFilter("inStock", !!checked)}
          />
          <label
            htmlFor="inStock"
            className="text-sm text-gray-600 cursor-pointer"
          >
            Только в наличии
          </label>
        </div>
      </Card>
    </>
  );
};

export default Filters;
