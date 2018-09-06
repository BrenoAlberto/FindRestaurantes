import scrapy

class RestaurantSpider(scrapy.Spider):
    name = 'restaurant_spider'
    start_urls = ['https://www.duogourmet.com.br/restaurantes/belo-horizonte']

    def parse(self, response):
        for restaurant in response.css("section.restaurants-list div.row div.restaurant-card"):
            names_rest = restaurant.xpath("@data-name").extract_first()
            kitchens = restaurant.xpath("@data-culinary").extract_first()
            photos = restaurant.css('div.card a').xpath("@href").extract_first()
            photos = photos.split("/")[-1]
            yield {
                'name': names_rest,
                'kitchen': kitchens,
                'photo': ("https://painelduo.com.br/api/restaurant-images/?category=cover&rid=" + photos),
        }