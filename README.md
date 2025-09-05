🚀 AI Marketing Content Crawler (Frontend)

📄 Описание
Веб-интерфейс для PoC проекта AI Marketing Content Crawler, позволяющий вводить URL-адреса страниц, запускать их автоматический краулинг с рендерингом JavaScript, просматривать результаты анализа и рекомендации по улучшению конверсии (CRO).

⚙️ Технологии
Язык: TypeScript
Фреймворк: Vue 3 + Vite
UI-библиотека: Vuetify
Сборка: Vite
Линтер: ESLint
Форматтер: Prettier
Тестирование: Vitest / Vue Testing Library
Управление состоянием: Pinia
Маршрутизация: Vue Router

📝 Установка и запуск
🔧 Предварительные требования
Node.js >= 18.x
Git

💻 Локальный запуск
1. Клонирование репозитория
bash
Копировать
Редактировать
git clone https://gitlab.com/ai-marketing-content-crawler/marketing-frontend.git
cd marketing-frontend

2. Установка зависимостей
npm install

3. Если планируется запуск в связке с бэкэнд, то:
   3.1. Добавьте .env и внутри пропишите VITE_API_BASE_URL="http://localhost:8000"
   3.2. Также на свой пк склонируйте репозиторий  https://github.com/PDA080442/ai-marketing_back и запустите сервер на ветке main
   3.3 Фронт запускать на ветке AMCC-138-install-on-server

5. Запуск в режиме разработки
npm run dev




