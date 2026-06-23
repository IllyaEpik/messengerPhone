# Messenger

## 🎯 Мета створення проєкту

Цей проєкт створено як навчальний зразок повноцінного мобільного месенджера на React Native (Expo).  
Для початківця він корисний тим, що **показує реальну архітектуру живого застосунку** — від навігації та глобального стану до інтеграції з WebSocket-сервером у реальному часі.

Розбираючи код, новачок зможе:
- побачити, як організувати складний UI з вкладеною навігацією через Expo Router;
- зрозуміти, як керувати даними через Redux Toolkit та локальне сховище (AsyncStorage);
- навчитися працювати з формами та валідацією (React Hook Form + Yup);
- реалізувати миттєвий обмін повідомленнями через Socket.io;
- обробляти медіа (камера, галерея, маніпуляція зображеннями).

Таким чином, проєкт дає не просто набір бібліотек, а **цілісну картину** того, як сучасний мобільний застосунок будується, тестується та масштабується.

## 🎯 Project Purpose

This project was created as an educational example of a full-featured mobile messenger built with React Native (Expo).  
For a beginner, it is valuable because it **demonstrates the real architecture of a live application** — from navigation and global state management to real-time WebSocket server integration.

By exploring the code, a newcomer will be able to:
- see how to organize a complex UI with nested navigation using Expo Router;
- understand how to manage data with Redux Toolkit and local storage (AsyncStorage);
- learn to work with forms and validation (React Hook Form + Yup);
- implement instant messaging via Socket.io;
- handle media (camera, gallery, image manipulation).

---

## Участники команди/ Team members 

- [Iлля Епик](https://github.com/IllyaEpik)  |  [Illya Epik](https://github.com/IllyaEpik)
- [Попович Марк](https://github.com/markpopovich9)  |  [Popovych Mark](https://github.com/markpopovich9)
---

## Navigation

- [🇬🇧 Technology Stack](#technology-stack)
- [📦 Project Structure](#project-structure)
- [🚀 How to Run the Project](#how-to-run-the-project)
- [📋 Project Content & Module Overview](#project-content--module-overview)
- [📝 Conclusion](#conclusion)

---

## Навігація

- [🇺🇦 Технологічний стек](#технологічний-стек)
- [📦 Структура проєкту](#структура-проєкту)
- [🚀 Як запустити проєкт в роботу](#як-запустити-проєкт-в-роботу)
- [📋 Зміст проєкту та Огляд Модулів](#зміст-проєкту-та-огляд-модулів)
- [📝 Висновок](#висновок)

## Technology Stack

| Category | Technologies |
|----------|--------------|
| **Framework & Platform** | ![Expo](https://img.shields.io/badge/Expo-55.x-000020?logo=expo&logoColor=white) ![React Native](https://img.shields.io/badge/React%20Native-0.83.x-61DAFB?logo=react&logoColor=black) ![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.x-3178C6?logo=typescript&logoColor=white) |
| **Navigation** | ![Expo Router](https://img.shields.io/badge/Expo%20Router-55.x-000020?logo=expo&logoColor=white) |
| **State Management** | ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764ABC?logo=redux&logoColor=white) ![React Redux](https://img.shields.io/badge/React%20Redux-9.x-764ABC?logo=redux&logoColor=white) ![AsyncStorage](https://img.shields.io/badge/AsyncStorage-2.2.x-555555?logo=react&logoColor=white) |
| **Forms & Validation** | ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-7.x-EC5990?logo=reacthookform&logoColor=white) ![Yup](https://img.shields.io/badge/Yup-1.x-FF6F61?logo=yup&logoColor=white) ![Hookform Resolvers](https://img.shields.io/badge/Hookform%20Resolvers-5.x-EC5990?logo=reacthookform&logoColor=white) |
| **UI Components** | ![React Native Paper](https://img.shields.io/badge/React%20Native%20Paper-5.x-3B82F6?logo=react&logoColor=white) ![React Native SVG](https://img.shields.io/badge/React%20Native%20SVG-15.x-FFB13B?logo=svg&logoColor=black) ![RN Element Dropdown](https://img.shields.io/badge/RN%20Element%20Dropdown-2.x-8B5CF6?logo=react&logoColor=white) ![Signature Canvas](https://img.shields.io/badge/Signature%20Canvas-5.x-000000?logo=canvas&logoColor=white) ![Webview](https://img.shields.io/badge/WebView-13.x-000000?logo=webview&logoColor=white) ![Expo Checkbox](https://img.shields.io/badge/Expo%20Checkbox-55.x-000020?logo=expo&logoColor=white) |
| **Media & File System** | ![Image Picker](https://img.shields.io/badge/Image%20Picker-55.x-000020?logo=expo&logoColor=white) ![Image Manipulator](https://img.shields.io/badge/Image%20Manipulator-55.x-000020?logo=expo&logoColor=white) ![File System](https://img.shields.io/badge/File%20System-55.x-000020?logo=expo&logoColor=white) ![Font](https://img.shields.io/badge/Font-55.x-000020?logo=expo&logoColor=white) ![Splash Screen](https://img.shields.io/badge/Splash%20Screen-55.x-000020?logo=expo&logoColor=white) |
| **Real-time** | ![Socket.io Client](https://img.shields.io/badge/Socket.io%20Client-4.x-010101?logo=socketdotio&logoColor=white) |
| **Utilities** | ![Reanimated](https://img.shields.io/badge/Reanimated-4.x-FF6B6B?logo=react&logoColor=white) ![Safe Area Context](https://img.shields.io/badge/Safe%20Area%20Context-5.x-000000?logo=react&logoColor=white) ![Screens](https://img.shields.io/badge/Screens-4.x-000000?logo=react&logoColor=white) ![Keyboard Controller](https://img.shields.io/badge/Keyboard%20Controller-1.x-000000?logo=react&logoColor=white) ![Worklets](https://img.shields.io/badge/Worklets-0.7.x-000000?logo=react&logoColor=white) ![Expo Linking](https://img.shields.io/badge/Linking-55.x-000020?logo=expo&logoColor=white) ![Expo Constants](https://img.shields.io/badge/Constants-55.x-000020?logo=expo&logoColor=white) |
| **Linting/Formatting** | ![Biome](https://img.shields.io/badge/Biome-2.x-60A5FA?logo=biome&logoColor=white) |

---

## Технологічний стек

| Категорія | Технології |
|-----------|------------|
| **Фреймворк та платформа** | ![Expo](https://img.shields.io/badge/Expo-55.x-000020?logo=expo&logoColor=white) ![React Native](https://img.shields.io/badge/React%20Native-0.83.x-61DAFB?logo=react&logoColor=black) ![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.x-3178C6?logo=typescript&logoColor=white) |
| **Навігація** | ![Expo Router](https://img.shields.io/badge/Expo%20Router-55.x-000020?logo=expo&logoColor=white) |
| **Керування станом** | ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764ABC?logo=redux&logoColor=white) ![React Redux](https://img.shields.io/badge/React%20Redux-9.x-764ABC?logo=redux&logoColor=white) ![AsyncStorage](https://img.shields.io/badge/AsyncStorage-2.2.x-555555?logo=react&logoColor=white) |
| **Форми та валідація** | ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-7.x-EC5990?logo=reacthookform&logoColor=white) ![Yup](https://img.shields.io/badge/Yup-1.x-FF6F61?logo=yup&logoColor=white) ![Hookform Resolvers](https://img.shields.io/badge/Hookform%20Resolvers-5.x-EC5990?logo=reacthookform&logoColor=white) |
| **UI компоненти** | ![React Native Paper](https://img.shields.io/badge/React%20Native%20Paper-5.x-3B82F6?logo=react&logoColor=white) ![React Native SVG](https://img.shields.io/badge/React%20Native%20SVG-15.x-FFB13B?logo=svg&logoColor=black) ![RN Element Dropdown](https://img.shields.io/badge/RN%20Element%20Dropdown-2.x-8B5CF6?logo=react&logoColor=white) ![Signature Canvas](https://img.shields.io/badge/Signature%20Canvas-5.x-000000?logo=canvas&logoColor=white) ![WebView](https://img.shields.io/badge/WebView-13.x-000000?logo=webview&logoColor=white) ![Expo Checkbox](https://img.shields.io/badge/Expo%20Checkbox-55.x-000020?logo=expo&logoColor=white) |
| **Медіа та файлова система** | ![Image Picker](https://img.shields.io/badge/Image%20Picker-55.x-000020?logo=expo&logoColor=white) ![Image Manipulator](https://img.shields.io/badge/Image%20Manipulator-55.x-000020?logo=expo&logoColor=white) ![File System](https://img.shields.io/badge/File%20System-55.x-000020?logo=expo&logoColor=white) ![Font](https://img.shields.io/badge/Font-55.x-000020?logo=expo&logoColor=white) ![Splash Screen](https://img.shields.io/badge/Splash%20Screen-55.x-000020?logo=expo&logoColor=white) |
| **Real-time** | ![Socket.io Client](https://img.shields.io/badge/Socket.io%20Client-4.x-010101?logo=socketdotio&logoColor=white) |
| **Утиліти** | ![Reanimated](https://img.shields.io/badge/Reanimated-4.x-FF6B6B?logo=react&logoColor=white) ![Safe Area Context](https://img.shields.io/badge/Safe%20Area%20Context-5.x-000000?logo=react&logoColor=white) ![Screens](https://img.shields.io/badge/Screens-4.x-000000?logo=react&logoColor=white) ![Keyboard Controller](https://img.shields.io/badge/Keyboard%20Controller-1.x-000000?logo=react&logoColor=white) ![Worklets](https://img.shields.io/badge/Worklets-0.7.x-000000?logo=react&logoColor=white) ![Expo Linking](https://img.shields.io/badge/Linking-55.x-000020?logo=expo&logoColor=white) ![Expo Constants](https://img.shields.io/badge/Constants-55.x-000020?logo=expo&logoColor=white) |
| **Лінтинг/Форматування** | ![Biome](https://img.shields.io/badge/Biome-2.x-60A5FA?logo=biome&logoColor=white) |


## How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/IllyaEpik/messengerPhone
cd messengerPhone
```

2. Install the required modules:
```bash
npm install
```

3. Install Expo CLI globally (if not already installed):
```bash
npm install -g expo-cli
```

4. Install Expo dependencies:
```bash
npx expo install
```

5. Start the development server:

```bash
npm run start
```

6. Run on your device:
   - Use the Expo Go app on your smartphone
   - Scan the QR code displayed in the terminal

## Як запустити проєкт в роботу

1. Клонуйте репозиторій:

```bash
git clone https://github.com/IllyaEpik/messengerPhone
cd messengerPhone
```

2. Встановіть необхідні модулі:
```bash
npm install
```

3. Встановіть Expo CLI глобально (якщо ще не встановлено):
```bash
npm install -g expo-cli
```

4. Встановіть залежності Expo:
```bash
npx expo install
```

5. Запустіть сервер розробки:

```bash
npm run start
```

6. Запустіть на пристрої:
   - Використовуйте програму Expo Go на вашому смартфоні
   - Відсканюйте QR-код, відображений у терміналі

---

<!-- ## Project Structure / Структура проєкту -->

## Project Structure

```
src/
├── app/                      # Navigation and layout
│   ├── _layout.tsx           # Root layout
│   ├── index.tsx             # Home screen
│   ├── (auth)/               # Authentication screens
│   └── (tabs)/               # Main tabs navigation
│
├── modules/                  # Feature modules
│   ├── albums/               # Photo/video albums
│   ├── auth/                 # Authentication logic
│   ├── chat/                 # Messaging and chat
│   ├── friends/              # Friend management
│   ├── posts/                # Posts and feeds
│   └── profile/              # User profiles
│
├── shared/                   # Shared resources
│   ├── api/                  # API integration
│   ├── components/           # Reusable components
│   ├── static/               # Static assets
│   ├── styles/               # Global styles
│   └── types/                # TypeScript types
│
└── media/                    # Media assets
    └── icon/                 # App icons
```

---

## Структура проєкту

```
src/
├── app/                      # Навігація та макет
│   ├── _layout.tsx           # Кореневий макет
│   ├── index.tsx             # Головний екран
│   ├── (auth)/               # Екрани аутентифікації
│   └── (tabs)/               # Основна навігація табів
│
├── modules/                  # Модулі функцій
│   ├── albums/               # Фото/відео альбоми
│   ├── auth/                 # Логіка аутентифікації
│   ├── chat/                 # Повідомлення та чат
│   ├── friends/              # Керування друзями
│   ├── posts/                # Пости та стрічки
│   └── profile/              # Профілі користувачів
│
├── shared/                   # Спільні ресурси
│   ├── api/                  # Інтеграція API
│   ├── components/           # Повторно використовувані компоненти
│   ├── static/               # Статичні активи
│   ├── styles/               # Глобальні стилі
│   └── types/                # TypeScript типи
│
└── media/                    # Медіа активи
    └── icon/                 # Іконки додатка
```

---

## Project Content & Module Overview

#### 🔐 **Auth Module**
- Handles user authentication and account creation
- Login and registration screens
- Password reset functionality
- Session management using Redux and AsyncStorage
- Integration with backend authentication API

#### 💬 **Chat Module**
- Real-time messaging with Socket.io
- One-to-one and group conversations
- Message history and persistence
- Typing indicators and read receipts
- File and media sharing support

#### 📱 **Posts Module**
- Create, read, update, and delete posts
- Social feed with infinite scrolling
- Like, comment, and share functionality
- Post filtering and search
- Integrated with Redux for state management

#### 👥 **Friends Module**
- Add and manage friends
- Friend requests and approvals
- View friend lists and profiles
- Block/unblock functionality
- Search friends by username or email

#### 🖼️ **Albums Module**
- Create and organize photo albums
- Upload and manage images
- Album sharing with friends
- Image viewing and manipulation
- File system integration with Expo

#### 👤 **Profile Module**
- User profile management
- Edit personal information
- Profile picture management
- Signature functionality
- View other users' profiles

---

## Зміст проєкту та Огляд Модулів


#### 🔐 **Модуль Аутентифікації**
- Управління аутентифікацією та створенням облікових записів
- Екрани входу та реєстрації
- Функціональність скидання пароля
- Керування сеансом за допомогою Redux та AsyncStorage
- Інтеграція з API аутентифікації

#### 💬 **Модуль Чату**
- Обмін повідомленнями в реальному часі з Socket.io
- Один-на-один та групові розмови
- Історія та збереження повідомлень
- Індикатори введення та квитанції про прочитання
- Підтримка спільного використання файлів та медіа

#### 📱 **Модуль Постів**
- Створення, читання, оновлення та видалення постів
- Соціальна стрічка з нескінченним прокруткою
- Функціональність лайків, коментарів та спільного використання
- Фільтрування та пошук постів
- Інтегрований з Redux для керування станом

#### 👥 **Модуль Друзів**
- Додавання та керування друзями
- Запити дружби та затвердження
- Перегляд списків друзів та профілів
- Функціональність блокування/розблокування
- Пошук друзів за ім'ям користувача або електронною поштою

#### 🖼️ **Модуль Альбомів**
- Створення та організація фотоальбомів
- Завантаження та керування зображеннями
- Спільне використання альбомів з друзями
- Перегляд та маніпуляція зображеннями
- Інтеграція файлової системи з Expo

#### 👤 **Модуль Профілю**
- Керування профілем користувача
- Редагування особистої інформації
- Керування фото профілю
- Функціональність підпису
- Перегляд профілів інших користувачів

---


## Architecture Diagram

```mermaid
graph TB
    A["📱 Mobile App Frontend"] -->|Socket.io| B["🔄 Real-time Server"]
    A -->|REST API| C["🗄️ Backend API"]
    
    A -->|Store/Retrieve| D["💾 Local Storage\n(AsyncStorage)"]
    
    C -->|Query/Mutate| E["🗄️ Database\n(PostgreSQL)"]
    
    B -->|Live Updates| A
    
    F["🎨 UI Components"] --> A
    G["🔐 Redux Store"] --> A
    H["📡 API Client"] --> C
    
    style A fill:#61DAFB,color:#ffffff
    style B fill:#010101,color:#ffffff
    style C fill:#FF6B6B,color:#ffffff
    style E fill:#336791,color:#ffffff
    style F fill:#3B82F6,color:#ffffff
    style G fill:#764ABC,color:#ffffff
    style H fill:#FFB13B,color:#ffffff
    style D color: #ffffff
```

---

## Діаграма архітектури

```mermaid
graph TB
    A["📱 Мобільний додаток"] -->|Socket.io| B["🔄 Сервер реального часу"]
    A -->|REST API| C["🗄️ API сервер"]
    
    A -->|Зберігання/Отримання| D["💾 Локальне сховище\n(AsyncStorage)"]
    
    C -->|Запит/Зміна| E["🗄️ База даних\n(PostgreSQL)"]
    
    B -->|Прямі оновлення| A
    
    F["🎨 UI Компоненти"] --> A
    G["🔐 Redux Store"] --> A
    H["📡 API Клієнт"] --> C
    
    style A fill:#61DAFB,color:#ffffff
    style B fill:#010101,color:#ffffff
    style C fill:#FF6B6B,color:#ffffff
    style E fill:#336791,color:#ffffff
    style F fill:#3B82F6,color:#ffffff
    style G fill:#764ABC,color:#ffffff
    style H fill:#FFB13B,color:#ffffff
    style D color: #ffffff
```

---

## Conclusion

This project is the frontend part of a messenger application. The main goal was to create a fully functional mobile application using React Native (Expo) that interacts with the backend through REST API and real-time WebSocket connections.

**Key Learnings**
- Built a mobile interface using Expo Router for seamless screen navigation
- Mastered Redux Toolkit for managing global state in large React Native applications
- Implemented live chat with Socket.io client: learned how to listen to events, update UI in real-time, and prevent memory leaks
- Utilized React Hook Form + Yup for convenient form validation (login, registration, messaging)
- Worked with mobile media: selecting images from gallery/camera, processing with Expo Image Manipulator
- Strengthened TypeScript typing skills, making code more reliable during backend integration

**Why This Experience is Valuable**
I learned how to combine dozens of libraries into a single working interface that communicates with the server both synchronously (REST) and asynchronously (WebSocket). Collaborating with Mark helped understand how to distribute tasks between frontend and backend, align API contracts, and keep shared code clean.

**Future Development**
The project can be expanded into a full-featured messenger:
- Add push notifications through Firebase Cloud Messaging (FCM)
- Implement end-to-end encryption for messages
- Improve UX: gesture support, animations, dark theme
- Integrate video and audio calls (e.g., via WebRTC)
- Prepare for Google Play release

Thus, a learning project has transformed into a solid foundation that can be developed for both portfolio and real-world use.

## Висновок

Цей проєкт — фронтенд-частина месенджера.
Основною метою було створити повноцінний мобільний застосунок на React Native (Expo), який взаємодіє з бекендом через REST API та WebSocket-з’єднання в реальному часі.

**Що я виніс для себе**
- Навчився будувати мобільний інтерфейс на Expo Router, що дав змогу легко організувати навігацію між екранами.
- Прокачав роботу з Redux Toolkit — тепер чітко розумію, як керувати глобальним станом у великому React Native-додатку.
- Реалізував живий чат через Socket.io-клієнт: побачив, як правильно слухати події, оновлювати UI в реальному часі та уникати витоків пам’яті.
- Освоїв React Hook Form + Yup для зручної валідації форм (логін, реєстрація, надсилання повідомлень).
- Розібрався з медіа на мобільному пристрої: вибір зображень із галереї/камери, обробка через Expo Image Manipulator.
- Закріпив навички типізації TypeScript, що зробило код надійнішим під час інтеграції з бекендом.

**Чому цей досвід корисний**  
Я навчився поєднувати десятки бібліотек у єдиний працюючий інтерфейс, який спілкується з сервером синхронно (REST) та асинхронно (WebSocket).  
Спільна робота з Марком дала зрозуміти, як розподіляти задачі між фронтендом і бекендом, узгоджувати контракти API та підтримувати спільний код у чистоті.

**Подальший розвиток**
Проєкт можна розширити до повноцінного месенджера:
- Додати push-сповіщення через Firebase Cloud Messaging (FCM).
- Реалізувати end‑to‑end шифрування повідомлень.
- Покращити UX: підтримка жестів, анімації, темна тема.
- Інтегрувати відео- та аудіодзвінки (наприклад, через WebRTC).
<!-- - Підготувати складання для Google Play. -->

Таким чином, навчальна робота перетворилася на готовий фундамент, який можна розвивати як для портфоліо, так і для реального використання.