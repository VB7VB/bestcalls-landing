import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

// Статические файлы
app.use('/static/*', serveStatic({ root: './' }))

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
    <link rel="stylesheet" href="/static/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📞</text></svg>">
</head>
<body>
    <!-- Hero секция -->
    <header class="hero">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">
                    <div class="logo-icon"></div>
                    <span class="logo-text">BestCalls</span>
                </div>
                <div class="nav-menu">
                    <a href="#about">О нас</a>
                    <a href="#services">Услуги</a>
                    <a href="#tech">Технологии</a>
                    <a href="#partners">Партнеры</a>
                    <a href="#contact">Контакты</a>
                </div>
                <button class="cta-btn primary">Оставить заявку</button>
            </div>
        </nav>
        
        <div class="hero-content">
            <div class="hero-text">
                <h1>ЦЕНТР ОБРАБОТКИ ВЫЗОВОВ <span class="brand">BestCalls</span></h1>
                <p class="hero-subtitle">Call-центр и не только...</p>
                <div class="hero-description">
                    <p>Профессиональные решения для обработки входящих и исходящих вызовов, проведения опросов и телемаркетинговых кампаний на базе современного оборудования AVAYA</p>
                </div>
                <div class="hero-buttons">
                    <button class="cta-btn primary large">Связаться с нами</button>
                    <button class="cta-btn secondary large">Узнать больше</button>
                </div>
            </div>
            <div class="hero-visual">
                <div class="hero-illustration">
                    <div class="call-center-graphic">
                        <div class="operator-workspace">
                            <div class="operator-avatar"></div>
                            <div class="headset-icon"></div>
                            <div class="computer-screen"></div>
                        </div>
                        <div class="data-flow">
                            <div class="data-point"></div>
                            <div class="data-point"></div>
                            <div class="data-point"></div>
                        </div>
                        <div class="stats-display">
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                            <div class="chart-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- О нас -->
    <section id="about" class="about-section">
        <div class="container">
            <div class="section-header">
                <h2>О компании BestCalls</h2>
                <p class="section-subtitle">Организован на базе самого современного оборудования</p>
            </div>
            <div class="about-grid">
                <div class="about-text">
                    <div class="about-item">
                        <h3>Наша команда:</h3>
                        <p><strong>40 вежливых, эффективных, клиентоориентированных операторов</strong></p>
                        <p>Коллектив высоко одаренных и профессиональных программистов</p>
                    </div>
                    <div class="about-item">
                        <h3>Наша философия:</h3>
                        <p><strong>Цели и задачи партнеров – наши цели и задачи</strong></p>
                        <p>Мы работаем как единая команда с нашими клиентами для достижения максимальных результатов</p>
                    </div>
                    <div class="about-item">
                        <h3>Преимущества работы с нами:</h3>
                        <ul class="benefits-list">
                            <li>Круглосуточная поддержка 24/7</li>
                            <li>Высокий уровень сервиса</li>
                            <li>Современные технологии</li>
                            <li>Гибкие тарифы</li>
                        </ul>
                    </div>
                </div>
                <div class="about-visual">
                    <div class="office-illustration">
                        <div class="office-building">
                            <div class="office-floor">
                                <div class="workstation active"></div>
                                <div class="workstation active"></div>
                                <div class="workstation"></div>
                                <div class="workstation active"></div>
                            </div>
                            <div class="office-floor">
                                <div class="workstation active"></div>
                                <div class="workstation"></div>
                                <div class="workstation active"></div>
                                <div class="workstation active"></div>
                            </div>
                            <div class="communication-lines">
                                <div class="signal-wave"></div>
                                <div class="signal-wave"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Технологии -->
    <section id="tech" class="tech-section">
        <div class="container">
            <div class="section-header">
                <h2>Технические характеристики</h2>
            </div>
            <div class="tech-content">
                <div class="tech-description">
                    <p><strong>BestCalls построен на базе решений программно-аппаратного комплекса AVAYA</strong> с решением для компьютерной телефонии ASTERISK.</p>
                    
                    <h3>Контакт-центр Express AVAYA позволяет:</h3>
                    <ul class="tech-list">
                        <li>Распределять вызовы интеллектуально</li>
                        <li>Учитывать приоритеты и временные параметры клиента</li>
                        <li>Ориентироваться на способности операторов</li>
                        <li>Обеспечивать высокое качество обслуживания</li>
                    </ul>
                    
                    <p>Все элементы BestCalls <strong>резервированы и легко масштабируются</strong> при росте нагрузки</p>
                    
                    <div class="reporting-block">
                        <h3>СИСТЕМА ОТЧЕТНОСТИ «BESTCALLS»</h3>
                        <p>До <strong>70 стандартных и 200 пользовательских отчетов</strong>, в т.ч.:</p>
                        <ul class="reports-list">
                            <li>Отчеты реального времени</li>
                            <li>Хронологические отчеты</li>
                            <li>Интегрированные отчеты</li>
                            <li>Отчеты о недопустимых событиях</li>
                        </ul>
                    </div>
                </div>
                <div class="tech-diagram">
                    <div class="system-architecture">
                        <div class="server-rack">
                            <div class="rack-header">Инфраструктура BestCalls</div>
                            <div class="server-item">
                                <span class="server-icon">🖥️</span>
                                Система отчетности и управления ЦОВ
                            </div>
                            <div class="server-item">
                                <span class="server-icon">💾</span>
                                Система тарификации HP DL320
                            </div>
                            <div class="server-item">
                                <span class="server-icon">🎙️</span>
                                Система записи переговоров
                            </div>
                            <div class="server-item">
                                <span class="server-icon">📡</span>
                                УЗТС Avaya S8300
                            </div>
                            <div class="server-item">
                                <span class="server-icon">🌐</span>
                                СТЦ сервер Avaya
                            </div>
                            <div class="server-item">
                                <span class="server-icon">🎯</span>
                                Мультимедийный центр обработки вызовов
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Услуги -->
    <section id="services" class="services-section">
        <div class="container">
            <div class="section-header">
                <h2>Наши услуги</h2>
                <p class="section-subtitle">Полный спектр решений для вашего бизнеса</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon incoming">📞</div>
                    <h3>Прием и обработка входящих вызовов</h3>
                    <p>Профессиональная обработка звонков клиентов с высоким качеством сервиса</p>
                </div>
                <div class="service-card">
                    <div class="service-icon outgoing">📤</div>
                    <h3>Исходящие вызовы</h3>
                    <p>Активные продажи, информирование клиентов и подтверждение заказов</p>
                </div>
                <div class="service-card">
                    <div class="service-icon surveys">📊</div>
                    <h3>Количественные и качественные опросы</h3>
                    <p>Проведение исследований, фокус-групп и социологических опросов</p>
                </div>
                <div class="service-card">
                    <div class="service-icon online">💻</div>
                    <h3>Он-лайн опросы</h3>
                    <p>Современные цифровые решения для сбора данных и анализа</p>
                </div>
                <div class="service-card">
                    <div class="service-icon direct-mail">📬</div>
                    <h3>Директ-мейлинг</h3>
                    <p>Почтовые рассылки через Почту России для максимального охвата</p>
                </div>
            </div>
            
            <!-- Детализация услуг -->
            <div class="services-details">
                <div class="service-detail">
                    <h3>ПРИЕМ И ОБРАБОТКА ВХОДЯЩИХ ВЫЗОВОВ</h3>
                    <ul>
                        <li>Программирование скриптов любого уровня сложности</li>
                        <li>Интеграция с системами заказчика</li>
                        <li>Строгое соблюдение регламентов обслуживания</li>
                        <li>Минимальный процент пропущенных вызовов</li>
                        <li>Многоуровневая маршрутизация звонков</li>
                    </ul>
                </div>
                
                <div class="service-detail">
                    <h3>ИСХОДЯЩИЕ ВЫЗОВЫ</h3>
                    <ul>
                        <li>Телемаркетинг и активные продажи</li>
                        <li>Информирование клиентов о новинках</li>
                        <li>Приглашательные кампании</li>
                        <li>Обработка и подтверждение заказов</li>
                        <li>Актуализация баз данных клиентов</li>
                    </ul>
                </div>
                
                <div class="service-detail">
                    <h3>ИССЛЕДОВАНИЯ И ОПРОСЫ</h3>
                    <ul>
                        <li>Опытные интервьюеры с профильным образованием</li>
                        <li>Разработка анкет по техническим заданиям</li>
                        <li>100% предоставление аудиозаписей интервью</li>
                        <li>Статистическая обработка результатов</li>
                        <li>Подготовка аналитических отчетов</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Партнеры -->
    <section id="partners" class="partners-section">
        <div class="container">
            <div class="section-header">
                <h2>Наши партнеры</h2>
                <p class="section-subtitle">Более 200 успешно выполненных проектов</p>
            </div>
            <div class="partners-content">
                <div class="partners-text">
                    <div class="partner-group">
                        <h3>Крупные ритейлеры:</h3>
                        <p><strong>«INVENTLUT RTTEIL GROUP»</strong> - сети фирменных магазинов ReStore, Samsung, Sony Centre, Nike, STREET BEET, ROOKE, LEAP, LEGO, UNOde50</p>
                    </div>
                    
                    <div class="partner-group">
                        <h3>Сервисные компании:</h3>
                        <p>Сеть магазинов «LeCadeau», UTG aviation service, автомобильные охранные системы Pandora и Pandora Sputnik, группа компаний RB partners и др.</p>
                    </div>
                    
                    <div class="partner-group">
                        <h3>Мероприятия:</h3>
                        <p>Ежегодная справочно-информационная поддержка проведения мероприятий: «Красноярский Экономический Форум», «ТехноПром», «ИнноПром».</p>
                    </div>
                    
                    <div class="achievement">
                        <h3>📊 За последние 5 лет проведено более 200 опросов в областях:</h3>
                        <p>Фармацевтика, Ритейл, поддержка МСП на государственном и негосударственном уровнях, качество сервиса в различных сферах деятельности, финансовая деятельность, туризм и многих других</p>
                    </div>
                    
                    <div class="research-partners">
                        <h3>🎯 Качественные интервью под эгидой:</h3>
                        <p>АНО НИСИПП (более 100 опросов), агентства политтехнологий «Политех», исследовательской компании «SMR - Russia» для компании «Нестле» и других крупных компаний.</p>
                    </div>
                </div>
                
                <div class="partners-logos">
                    <div class="partner-logo">
                        <div class="logo-placeholder">ReStore</div>
                    </div>
                    <div class="partner-logo">
                        <div class="logo-placeholder">Samsung</div>
                    </div>
                    <div class="partner-logo">
                        <div class="logo-placeholder">LEGO</div>
                    </div>
                    <div class="partner-logo">
                        <div class="logo-placeholder">Pandora</div>
                    </div>
                    <div class="partner-logo">
                        <div class="logo-placeholder">Sony</div>
                    </div>
                    <div class="partner-logo">
                        <div class="logo-placeholder">Nike</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Форма контактов -->
    <section id="contact" class="contact-section">
        <div class="container">
            <div class="section-header">
                <h2>Свяжитесь с нами</h2>
                <p class="section-subtitle">Получите персональное предложение для вашего бизнеса</p>
            </div>
            <div class="contact-content">
                <div class="contact-form-container">
                    <h3>Оставить заявку</h3>
                    <p>Заполните форму, и наш менеджер свяжется с вами в течение 15 минут</p>
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Ваше имя *" required>
                        </div>
                        <div class="form-group">
                            <input type="text" id="company" name="company" placeholder="Название компании *" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" id="phone" name="phone" placeholder="Телефон *" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Email *" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Расскажите о ваших задачах" rows="4"></textarea>
                        </div>
                        <button type="submit" class="cta-btn primary large">Отправить заявку</button>
                        <p class="form-note">* Обязательные поля</p>
                    </form>
                </div>
                
                <div class="contact-info">
                    <h3>Контактная информация</h3>
                    <div class="contact-items">
                        <div class="contact-item">
                            <div class="contact-icon">📞</div>
                            <div class="contact-details">
                                <strong>Телефон:</strong>
                                <a href="tel:+73912345678">+7 (391) 234-56-78</a>
                                <span>Звонки принимаются 24/7</span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">📧</div>
                            <div class="contact-details">
                                <strong>Email:</strong>
                                <a href="mailto:info@bestcalls.ru">info@bestcalls.ru</a>
                                <span>Ответим в течение часа</span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">📍</div>
                            <div class="contact-details">
                                <strong>Адрес:</strong>
                                <p>г. Красноярск, ул. Примерная, д. 123</p>
                                <span>Офис работает с 9:00 до 18:00</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-stats">
                        <div class="stat-item">
                            <div class="stat-number">40+</div>
                            <div class="stat-label">Операторов</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">200+</div>
                            <div class="stat-label">Проектов</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">24/7</div>
                            <div class="stat-label">Поддержка</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Футер -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <div class="logo">
                        <div class="logo-icon"></div>
                        <span class="logo-text">BestCalls</span>
                    </div>
                    <p>Центр обработки вызовов</p>
                    <p>Ваш надежный партнер в области телефонного сервиса</p>
                </div>
                <div class="footer-cta">
                    <button class="cta-btn primary">Связаться с нами</button>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 BestCalls. Все права защищены. | Политика конфиденциальности</p>
            </div>
        </div>
    </footer>

    <script src="/static/script.js"></script>
</body>
</html>
  `)
})

export default {
  port: 3000,
  fetch: app.fetch,
} as any

console.log('🚀 Сервер запущен на http://localhost:3000') 