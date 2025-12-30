import { useRef } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import logo from "./assets/logo.png";

// Women's watches
import nazikGreen from "./assets/womens/nazik-green.JPG";
import nazikWhite from "./assets/womens/nazik-white.JPG";
import nazik from "./assets/womens/nazik.JPG";
import serikGrace from "./assets/womens/serik-grace.JPG";

// Men's watches
import manyzGray from "./assets/mens/Mañyz-Gray.JPG";
import manyzGreen from "./assets/mens/Mañyz-Green.JPG";
import manyzLightBrown from "./assets/mens/Mañyz-LightBrown.JPG";
import serik from "./assets/mens/serik.JPG";
import tungysh from "./assets/mens/Tūñğyş.JPG";

// Box images
import boxOutside1 from "./assets/box/box-outside-1.JPG";
import boxOutside2 from "./assets/box/box-outside-2.JPG";
import boxInside from "./assets/box/box-inside.jpeg";

const womensWatches = [
  {
    name: "Nazik Green",
    oldPrice: "45 000 ₸",
    price: "31 500 ₸",
    image: nazikGreen,
  },
  {
    name: "Nazik White",
    oldPrice: "42 000 ₸",
    price: "29 400 ₸",
    image: nazikWhite,
  },
  {
    name: "Nazik",
    oldPrice: "48 000 ₸",
    price: "33 600 ₸",
    image: nazik,
  },
  {
    name: "Serik Grace",
    oldPrice: "52 000 ₸",
    price: "36 400 ₸",
    image: serikGrace,
  },
];

const mensWatches = [
  {
    name: "Mañyz Gray",
    oldPrice: "55 000 ₸",
    price: "38 500 ₸",
    image: manyzGray,
  },
  {
    name: "Mañyz Green",
    oldPrice: "65 000 ₸",
    price: "45 500 ₸",
    image: manyzGreen,
  },
  {
    name: "Mañyz Light Brown",
    oldPrice: "58 000 ₸",
    price: "40 600 ₸",
    image: manyzLightBrown,
  },
  {
    name: "Serik",
    oldPrice: "62 000 ₸",
    price: "43 400 ₸",
    image: serik,
  },
  {
    name: "Tūñğyş",
    oldPrice: "75 000 ₸",
    price: "52 500 ₸",
    image: tungysh,
  },
];

const whatsappLink = "https://wa.link/j9g5y7";
const instagramLink = "https://www.instagram.com/qaragaiwatch/";

function App() {
  const womensScrollRef = useRef(null);
  const mensScrollRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 350;
      const newScrollLeft =
        ref.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      ref.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="snowflakes-global" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>

      {/* New Year discount banner at the top */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-3 px-4 text-center relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 opacity-10">
          <div className="snowflakes" aria-hidden="true">
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
          </div>
        </div>
        <p className="text-base md:text-lg font-semibold relative z-10">
          🎄 Новогодняя распродажа! Скидка{" "}
          <span className="text-yellow-300 text-xl md:text-2xl font-bold">
            -30%
          </span>{" "}
          на все часы до 31 декабря 🎁
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23000000" fillOpacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="container relative z-10 mx-auto max-w-7xl md:pt-0">
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
            <img
              src={logo}
              alt="QARAĞAI Logo"
              className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80"
            />

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-balance">
              Время в гармонии с природой
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Деревянные часы ручной работы, созданные из натуральных
              материалов. Каждая модель уникальна, как отпечаток дерева.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#collections"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-base"
              >
                Посмотреть коллекцию
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-11 px-8 text-base"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Collection */}
      <section id="collections" className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-balance">
              Женская коллекция
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Изящество и натуральная красота
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll(womensScrollRef, "left")}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm hover:bg-background border border-border rounded-full p-2 md:p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Предыдущие часы"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => scroll(womensScrollRef, "right")}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm hover:bg-background border border-border rounded-full p-2 md:p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Следующие часы"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div
              ref={womensScrollRef}
              className="flex gap-4 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-12"
            >
              {womensWatches.map((watch) => (
                <div
                  key={watch.name}
                  className="group flex-shrink-0 w-[85vw] md:w-[320px] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 snap-center relative bg-card rounded-lg"
                >
                  <div className="absolute top-3 right-3 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    -30%
                  </div>

                  <div className="p-0">
                    <div className="aspect-square relative overflow-hidden bg-muted">
                      <img
                        src={watch.image}
                        alt={watch.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif">{watch.name}</h3>
                        <div className="flex items-center gap-3">
                          <p className="text-lg text-muted-foreground line-through">
                            {watch.oldPrice}
                          </p>
                          <p className="text-2xl font-semibold text-red-600">
                            {watch.price}
                          </p>
                        </div>
                      </div>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-full"
                      >
                        Заказать
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Men's Collection */}
      <section className="py-16 md:py-24 px-4 bg-muted/30 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-balance">
              Мужская коллекция
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Сила и характер натурального дерева
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll(mensScrollRef, "left")}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm hover:bg-background border border-border rounded-full p-2 md:p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Предыдущие часы"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => scroll(mensScrollRef, "right")}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm hover:bg-background border border-border rounded-full p-2 md:p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Следующие часы"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div
              ref={mensScrollRef}
              className="flex gap-4 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-12"
            >
              {mensWatches.map((watch) => (
                <div
                  key={watch.name}
                  className="group flex-shrink-0 w-[85vw] md:w-[320px] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 snap-center relative bg-card rounded-lg"
                >
                  <div className="absolute top-3 right-3 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    -30%
                  </div>

                  <div className="p-0">
                    <div className="aspect-square relative overflow-hidden bg-muted">
                      <img
                        src={watch.image}
                        alt={watch.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif">{watch.name}</h3>
                        <div className="flex items-center gap-3">
                          <p className="text-lg text-muted-foreground line-through">
                            {watch.oldPrice}
                          </p>
                          <p className="text-2xl font-semibold text-red-600">
                            {watch.price}
                          </p>
                        </div>
                      </div>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-full"
                      >
                        Заказать
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-balance">
              Премиальная упаковка
            </h2>
            <p className="text-muted-foreground text-lg text-pretty max-w-2xl mx-auto">
              Каждые часы поставляются в уникальной деревянной шкатулке ручной
              работы с фирменной гравировкой
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="overflow-hidden border border-border/50 rounded-lg bg-card">
                <div className="aspect-[4/3] relative bg-muted">
                  <img
                    src={boxInside}
                    alt="Внутреннее содержимое упаковки"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden border border-border/50 rounded-lg bg-card">
                  <div className="aspect-square relative bg-muted">
                    <img
                      src={boxOutside2}
                      alt="Внешний вид шкатулки"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="overflow-hidden border border-border/50 rounded-lg bg-card">
                  <div className="aspect-square relative bg-muted">
                    <img
                      src={boxOutside1}
                      alt="Деревянная шкатулка QARAĞAI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-balance">
                  Что входит в комплект
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✦</span>
                    <span>Деревянная шкатулка с гравировкой</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✦</span>
                    <span>Мягкая подушка из натуральной мешковины</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✦</span>
                    <span>Инструмент для регулировки браслета</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif text-balance">
              О бренде QARAĞAI
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              QARAĞAI — это воплощение гармонии между современными технологиями
              и вечной красотой природы. Мы создаём уникальные деревянные часы,
              где каждая текстура дерева рассказывает свою историю.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center text-center gap-4">
              <div>
                <p className="font-serif text-lg">QARAĞAI</p>
                <p className="text-sm opacity-80">Деревянные часы</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
