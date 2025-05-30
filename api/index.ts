import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

// Статические файлы
app.get('/static/*', async (c) => {
  const path = c.req.path.replace('/api', '')
  return c.text('Static file handling', 404)
})

// Главная страница
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BestCalls - Центр обработки вызовов</title>
    <meta name="description" content="Профессиональный центр обработки вызовов BestCalls. 40 операторов, современное оборудование AVAYA, качественные услуги.">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📞</text></svg>">
    <style>
/* Основные переменные - ОБНОВЛЕННАЯ СХЕМА */
:root {
    --primary-color: #f97316; /* Основной оранжевый */
    --secondary-color: #fb923c; /* Светлый оранжевый */
    --accent-color: #ea580c; /* Темный оранжевый */
    --light-orange: #fed7aa; /* Очень светлый оранжевый */
    
    /* Добавляем синий как дополнительный цвет */
    --blue-primary: #1e3a8a; /* Синий как в логотипе */
    --blue-secondary: #3b82f6; /* Светлый синий */
    --blue-accent: #1d4ed8; /* Темный синий */
    
    --dark-bg: #1f2937; /* Темный фон (только для контраста) */
    --darker-bg: #111827; /* Очень темный (минимальное использование) */
    --light-bg: #ffffff; /* Основной белый фон */
    --lighter-bg: #fefefe; /* Очень светлый серый */
    --cream-bg: #fef7f0; /* Кремовый фон */
    
    /* Унифицированные цвета текста */
    --text-primary: #1f2937; /* Основной темный текст */
    --text-secondary: #6b7280; /* Вторичный серый текст */
    --text-light: #ffffff; /* Белый текст */
    --text-muted: #9ca3af; /* Приглушенный текст */
    
    --border-light: #e5e7eb; /* Светлые границы */
    --border-orange: rgba(249, 115, 22, 0.2); /* Оранжевые границы */
    
    /* Унифицированные градиенты */
    --orange-gradient: linear-gradient(135deg, #f97316, #ea580c);
    --blue-gradient: linear-gradient(135deg, #1e3a8a, #3b82f6);
    --light-gradient: linear-gradient(135deg, #ffffff, #fef7f0);
    --background-gradient: linear-gradient(135deg, #fefefe 0%, #fef7f0 50%, #fed7aa 100%);
}

/* Глобальные стили с унифицированным шрифтом */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: var(--text-primary);
    overflow-x: hidden;
    background: var(--background-gradient);
    background-attachment: fixed;
    font-size: 16px;
    letter-spacing: -0.01em;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Унифицированные заголовки */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 1.2;
}

h1 {
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -0.03em;
}

h2 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    font-weight: 600;
}

/* Кнопки */
.cta-btn {
    padding: 14px 28px;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    font-family: inherit;
    letter-spacing: -0.01em;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-btn.primary {
    background: var(--orange-gradient);
    color: white;
    box-shadow: 0 4px 20px rgba(249, 115, 22, 0.3);
}

.cta-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(249, 115, 22, 0.4);
}

/* Hero секция */
.hero {
    background: transparent;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 140px 20px 60px;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-text h1 {
    margin-bottom: 1.5rem;
    line-height: 1.1;
    color: var(--text-primary);
}

.brand {
    color: var(--primary-color);
}

.hero-subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    font-style: italic;
    font-weight: 400;
}

.hero-description {
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    line-height: 1.7;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-btn.large {
    padding: 18px 36px;
    font-size: 18px;
    border-radius: 14px;
}

/* Адаптивность */
@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }
    
    .hero {
        padding: 120px 20px 40px;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
}
    </style>
</head>
<body>
    <!-- Hero секция -->
    <header class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>ЦЕНТР ОБРАБОТКИ ВЫЗОВОВ <span class="brand">BestCalls</span></h1>
                <p class="hero-subtitle">Call-центр и не только...</p>
                <div class="hero-description">
                    <p>Профессиональные решения для обработки входящих и исходящих вызовов, проведения опросов и телемаркетинговых кампаний на базе современного оборудования AVAYA</p>
                </div>
                <div class="hero-buttons">
                    <a href="tel:+73912345678" class="cta-btn primary large">Связаться с нами</a>
                    <a href="mailto:info@bestcalls.ru" class="cta-btn primary large">Оставить заявку</a>
                </div>
            </div>
        </div>
    </header>

    <script>
        // Простая анимация появления
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.hero-content');
            elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    el.style.transition = 'all 0.8s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 200);
            });
        });
    </script>
</body>
</html>
  `)
})

export default handle(app) 