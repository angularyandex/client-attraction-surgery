import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все статьи' },
    { id: 'rhinoplasty', name: 'Ринопластика' },
    { id: 'mammoplasty', name: 'Маммопластика' },
    { id: 'liposuction', name: 'Липосакция' },
    { id: 'facelift', name: 'Фейслифтинг' },
    { id: 'recovery', name: 'Восстановление' },
    { id: 'preparation', name: 'Подготовка' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Как подготовиться к ринопластике: полное руководство',
      excerpt: 'Подробная инструкция по подготовке к операции на носу, включая анализы, ограничения и рекомендации.',
      category: 'rhinoplasty',
      author: 'Доктор Иванов',
      date: '15 декабря 2024',
      readTime: '8 мин',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: true,
      tags: ['подготовка', 'ринопластика', 'анализы']
    },
    {
      id: 2,
      title: 'Восстановление после маммопластики: что ожидать',
      excerpt: 'Подробный план реабилитации после увеличения груди, включая уход, ограничения и возможные осложнения.',
      category: 'mammoplasty',
      author: 'Доктор Иванов',
      date: '12 декабря 2024',
      readTime: '10 мин',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      featured: true,
      tags: ['восстановление', 'маммопластика', 'реабилитация']
    },
    {
      id: 3,
      title: 'Липосакция: мифы и реальность',
      excerpt: 'Развенчиваем популярные мифы о липосакции и рассказываем о реальных возможностях процедуры.',
      category: 'liposuction',
      author: 'Доктор Иванов',
      date: '10 декабря 2024',
      readTime: '6 мин',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: false,
      tags: ['липосакция', 'мифы', 'факты']
    },
    {
      id: 4,
      title: 'Возрастные показания для фейслифтинга',
      excerpt: 'В каком возрасте стоит делать подтяжку лица и какие методики подходят для разных возрастных групп.',
      category: 'facelift',
      author: 'Доктор Иванов',
      date: '8 декабря 2024',
      readTime: '7 мин',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      featured: false,
      tags: ['фейслифтинг', 'возраст', 'показания']
    },
    {
      id: 5,
      title: 'Питание после пластической операции',
      excerpt: 'Как правильно питаться в период восстановления для ускорения заживления и лучшего результата.',
      category: 'recovery',
      author: 'Доктор Иванов',
      date: '5 декабря 2024',
      readTime: '5 мин',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: false,
      tags: ['питание', 'восстановление', 'заживление']
    },
    {
      id: 6,
      title: 'Психологическая подготовка к пластической операции',
      excerpt: 'Важность психологической готовности к операции и как правильно настроиться на изменения.',
      category: 'preparation',
      author: 'Доктор Иванов',
      date: '3 декабря 2024',
      readTime: '9 мин',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      featured: false,
      tags: ['психология', 'подготовка', 'мотивация']
    },
    {
      id: 7,
      title: 'Современные импланты для маммопластики',
      excerpt: 'Обзор современных типов имплантов, их преимущества и особенности выбора.',
      category: 'mammoplasty',
      author: 'Доктор Иванов',
      date: '1 декабря 2024',
      readTime: '12 мин',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      featured: true,
      tags: ['импланты', 'маммопластика', 'технологии']
    },
    {
      id: 8,
      title: 'Осложнения в пластической хирургии: как их избежать',
      excerpt: 'Профилактика осложнений, выбор хирурга и клиники, соблюдение рекомендаций.',
      category: 'preparation',
      author: 'Доктор Иванов',
      date: '28 ноября 2024',
      readTime: '11 мин',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      featured: false,
      tags: ['осложнения', 'безопасность', 'профилактика']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cross" className="text-primary" size={24} />
              <span className="text-xl font-bold text-foreground">ПластикКлиник</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="/blog" className="text-primary font-semibold">Блог</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Блог о пластической хирургии
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Экспертные статьи о пластической хирургии, подготовке к операциям, 
            восстановлении и современных методиках от ведущего хирурга.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input
                placeholder="Поиск по статьям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Рекомендуемые статьи</h2>
            <p className="text-lg text-muted-foreground">
              Самые важные и актуальные материалы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Рекомендуем
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm">
                      Читать
                      <Icon name="ArrowRight" className="ml-1" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Все статьи</h2>
            <p className="text-lg text-muted-foreground">
              {filteredPosts.length} статей найдено
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4"
                  >
                    {categories.find(cat => cat.id === post.category)?.name}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Автор: {post.author}
                      </span>
                      <Button variant="ghost" size="sm">
                        Читать
                        <Icon name="ArrowRight" className="ml-1" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="mx-auto mb-4 text-muted-foreground" size={48} />
              <h3 className="text-xl font-semibold mb-2">Статьи не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить поисковый запрос или выбрать другую категорию
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <Icon name="Mail" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Подпишитесь на новости
              </h3>
              <p className="text-muted-foreground mb-6">
                Получайте новые статьи и полезные советы о пластической хирургии на email
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  placeholder="Ваш email"
                  type="email"
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Подписаться
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Мы не передаем ваши данные третьим лицам и не рассылаем спам
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Остались вопросы?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и получите персональные рекомендации
          </p>
          <Button size="lg" variant="secondary">
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;