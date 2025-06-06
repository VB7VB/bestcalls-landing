# 📞 BestCalls - Центр Обработки Вызовов

Современный landing page для центра обработки вызовов BestCalls, построенный на современных технологиях с красивым дизайном и изометрическими иллюстрациями.

## ✨ Особенности

- 🎨 **Современный дизайн** с градиентным фоном и оранжевой цветовой схемой
- 📱 **Полностью адаптивный** дизайн для всех устройств
- 🖼️ **Изометрические иллюстрации** для визуализации офиса и технологий
- 🚀 **Высокая производительность** благодаря Bun runtime
- 💫 **Плавные анимации** и интерактивные элементы
- 📧 **Контактная форма** для заявок клиентов
- 🔧 **TypeScript** для типобезопасности

## 🛠️ Технологии

- **[Bun](https://bun.sh/)** - Современный JavaScript runtime
- **[Hono](https://hono.dev/)** - Легкий и быстрый веб-фреймворк
- **TypeScript** - Типизированный JavaScript
- **CSS3** - Современные стили с CSS Grid, Flexbox, анимациями
- **HTML5** - Семантическая разметка

## 🚀 Быстрый старт

### Требования

- [Bun](https://bun.sh/) >= 1.0.0

### Установка

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bestcalls-landing.git
   cd bestcalls-landing
   ```

2. **Установите зависимости:**
   ```bash
   bun install
   ```

3. **Запустите сервер разработки:**
   ```bash
   bun run dev
   ```

4. **Откройте в браузере:**
   ```
   http://localhost:3000
   ```

## 📋 Скрипты

```bash
# Запуск в режиме разработки
bun run dev

# Сборка для продакшена
bun run build

# Запуск продакшен версии
bun start
```

## 📁 Структура проекта

```
bestcalls-landing/
├── src/
│   └── index.ts          # Основной сервер Hono
├── static/
│   ├── styles.css        # Основные стили
│   └── script.js         # Клиентский JavaScript
├── package.json          # Зависимости проекта
├── tsconfig.json         # Конфигурация TypeScript
├── bun.lock             # Lockfile зависимостей
└── README.md            # Документация
```

## 🎨 Дизайн

### Цветовая схема
- **Основной:** `#f97316` (Оранжевый)
- **Дополнительный:** `#fb923c` (Светлый оранжевый)
- **Акцент:** `#ea580c` (Темный оранжевый)
- **Фон:** Градиент от белого к кремовому и светло-оранжевому

### Шрифты
- **Inter** - Современный, читаемый шрифт для всех элементов

## 📱 Секции сайта

1. **Hero** - Главный экран с призывом к действию
2. **О компании** - Информация о BestCalls и команде
3. **Технологии** - Техническая инфраструктура на базе AVAYA
4. **Услуги** - Весь спектр предоставляемых услуг
5. **Партнеры** - Клиенты и достижения компании
6. **Контакты** - Форма обратной связи и контактная информация

## 🚀 Деплой

### Продакшен

1. **Сборка проекта:**
   ```bash
   bun run build
   ```

2. **Запуск на сервере:**
   ```bash
   bun start
   ```

### Docker (опционально)

```dockerfile
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# Копировать зависимости
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Копировать исходный код
COPY . .

# Запуск
EXPOSE 3000
CMD ["bun", "run", "src/index.ts"]
```

## 🤝 Контакты

- **Компания:** BestCalls
- **Email:** info@bestcalls.ru
- **Телефон:** +7 (391) 234-56-78
- **Адрес:** г. Красноярск, ул. Примерная, д. 123

## 📝 Лицензия

© 2024 BestCalls. Все права защищены.

---

Сделано с ❤️ для BestCalls 