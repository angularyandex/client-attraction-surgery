import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [filterService, setFilterService] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Анна К.',
      service: 'Ринопластика',
      rating: 5,
      date: '15 августа 2024',
      text: 'Прекрасный результат ринопластики. Доктор очень профессионален, все объяснил подробно. Операция прошла без осложнений, восстановление было комфортным. Результат превзошел все ожидания!',
      verified: true,
      helpful: 12,
      avatar: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    },
    {
      id: 2,
      name: 'Мария С.',
      service: 'Увеличение груди',
      rating: 5,
      date: '10 августа 2024',
      text: 'Отличная работа, результат превзошел ожидания. Очень внимательный персонал, все этапы были четко спланированы. Рекомендую всем, кто думает об этой операции!',
      verified: true,
      helpful: 8,
      avatar: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg'
    },
    {
      id: 3,
      name: 'Елена В.',
      service: 'Блефаропластика',
      rating: 5,
      date: '5 августа 2024',
      text: 'Очень внимательный подход, качественная работа. Веки выглядят естественно, никто не догадывается об операции. Спасибо за профессионализм!',
      verified: true,
      helpful: 15,
      avatar: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    },
    {
      id: 4,
      name: 'Ольга М.',
      service: 'Липосакция',
      rating: 4,
      date: '28 июля 2024',
      text: 'Хороший результат, но восстановление было немного дольше, чем ожидала. В целом довольна, фигура стала намного лучше.',
      verified: true,
      helpful: 6,
      avatar: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg'
    },
    {
      id: 5,
      name: 'Татьяна Л.',
      service: 'Фейслифтинг',
      rating: 5,
      date: '20 июля 2024',
      text: 'Невероятный результат! Выглядю на 10 лет моложе. Операция была серьезной, но доктор все время был на связи, контролировал процесс восстановления.',
      verified: true,
      helpful: 20,
      avatar: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    },
    {
      id: 6,
      name: 'Светлана Р.',
      service: 'Отопластика',
      rating: 5,
      date: '12 июля 2024',
      text: 'Наконец-то избавилась от комплекса! Уши теперь выглядят абсолютно естественно. Операция прошла быстро, восстановление легкое.',
      verified: true,
      helpful: 9,
      avatar: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg'
    }
  ]);

  const ratingStats = {
    average: 4.8,
    total: reviews.length,
    distribution: {
      5: 83,
      4: 12,
      3: 3,
      2: 1,
      1: 1
    }
  };

  const services = ['Ринопластика', 'Увеличение груди', 'Блефаропластика', 'Липосакция', 'Фейслифтинг', 'Отопластика'];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newReview = {
      id: reviews.length + 1,
      name: formData.get('name') as string,
      service: formData.get('service') as string,
      rating: reviewRating,
      date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
      text: formData.get('text') as string,
      verified: false,
      helpful: 0,
      avatar: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg'
    };
    setReviews([newReview, ...reviews]);
    setIsReviewOpen(false);
    setReviewRating(0);
    (e.target as HTMLFormElement).reset();
  };

  const filteredReviews = reviews.filter(review => 
    filterService === 'all' || review.service === filterService
  );

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
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/reviews" className="text-primary font-semibold">Отзывы</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Отзывы пациентов
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Реальные отзывы наших пациентов о проведенных операциях и качестве обслуживания
          </p>
          <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="Plus" className="mr-2" size={20} />
                Оставить отзыв
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Overall Rating */}
            <Card>
              <CardHeader>
                <CardTitle>Общая оценка</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {ratingStats.average}
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        className={`${i < Math.floor(ratingStats.average) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        size={24} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    На основе {ratingStats.total} отзывов
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Rating Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Распределение оценок</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(ratingStats.distribution).reverse().map(([stars, percentage]) => (
                    <div key={stars} className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 w-16">
                        <span className="text-sm">{stars}</span>
                        <Icon name="Star" className="text-yellow-400 fill-current" size={16} />
                      </div>
                      <Progress value={percentage} className="flex-1" />
                      <span className="text-sm text-muted-foreground w-12">{percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Select value={filterService} onValueChange={setFilterService}>
              <SelectTrigger className="md:w-64">
                <SelectValue placeholder="Фильтр по услуге" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все услуги</SelectItem>
                {services.map(service => (
                  <SelectItem key={service} value={service}>{service}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="md:w-64">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Сначала новые</SelectItem>
                <SelectItem value="oldest">Сначала старые</SelectItem>
                <SelectItem value="rating-high">Высокая оценка</SelectItem>
                <SelectItem value="rating-low">Низкая оценка</SelectItem>
                <SelectItem value="helpful">По полезности</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold">{review.name}</h3>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              <Icon name="CheckCircle" className="mr-1" size={12} />
                              Проверено
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {review.service}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                        ))}
                        {[...Array(5 - review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-gray-300" size={16} />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4">{review.text}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <Icon name="ThumbsUp" className="mr-1" size={16} />
                          Полезно ({review.helpful})
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <Icon name="MessageCircle" className="mr-1" size={16} />
                          Ответить
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form Dialog */}
      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Оставить отзыв</DialogTitle>
            <DialogDescription>
              Поделитесь своим опытом с другими пациентами
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ваша оценка</label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setReviewRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none"
                  >
                    <Icon 
                      name="Star" 
                      className={`transition-colors ${
                        star <= (hoverRating || reviewRating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                      size={24}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Input name="name" placeholder="Ваше имя" required />
              <Select name="service" required>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {services.map(service => (
                    <SelectItem key={service} value={service}>{service}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea 
                name="text" 
                placeholder="Расскажите о своем опыте..." 
                required 
                className="min-h-[100px]"
              />
            </div>
            <div className="flex space-x-2">
              <Button 
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setIsReviewOpen(false)}
              >
                Отмена
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={reviewRating === 0}
              >
                Отправить
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Станьте нашим следующим довольным пациентом
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Запишитесь на консультацию и узнайте, как мы можем помочь вам
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

export default Reviews;