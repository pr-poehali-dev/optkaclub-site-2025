import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  OptkaLine
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Оптовые поставки очков
                  </span>
                </h1>
                <p className="text-xl text-indigo-100 leading-relaxed">
                  Премиальные очки от ведущих мировых брендов для вашего
                  бизнеса. Выгодные условия, быстрая доставка, гарантия
                  качества.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/catalog">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-900 hover:bg-gray-100 w-full sm:w-auto"
                  >
                    <Icon name="Grid3X3" size={20} />
                    <span className="ml-2">Открыть каталог</span>
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-indigo-900 w-full sm:w-auto"
                  >
                    <Icon name="Phone" size={20} />
                    <span className="ml-2">Связаться с нами</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop"
                  alt="Очки OptkaLine"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl blur-xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают OptkaLine?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем лучшие условия для оптовых покупателей и
              профессиональный сервис
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Award",
                title: "Премиум качество",
                description:
                  "Только оригинальные очки от проверенных производителей",
              },
              {
                icon: "Truck",
                title: "Быстрая доставка",
                description: "Доставка по всей России в течение 1-3 дней",
              },
              {
                icon: "Percent",
                title: "Выгодные цены",
                description: "Специальные цены для оптовых покупателей",
              },
              {
                icon: "Headphones",
                title: "24/7 поддержка",
                description:
                  "Профессиональная поддержка клиентов круглосуточно",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-indigo-600"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Популярные модели
            </h2>
            <p className="text-xl text-gray-600">
              Самые востребованные очки в нашем каталоге
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Icon name="ArrowRight" size={20} />
                <span className="ml-2">Смотреть весь каталог</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Свяжитесь с нами для получения персонального предложения и
            специальных условий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                <Icon name="MessageCircle" size={20} />
                <span className="ml-2">Написать нам</span>
              </Button>
            </Link>
            <Link to="/catalog">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600"
              >
                <Icon name="ShoppingCart" size={20} />
                <span className="ml-2">Начать покупки</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
