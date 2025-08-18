# 🚀 Руководство по деплою и финальной оптимизации "Формула Бігу"

## 📊 **Текущее состояние оптимизации:**

### ✅ **Что уже оптимизировано:**

- Изображения переведены в WebP формат
- Vite настроен для продакшена с code splitting
- Добавлена мемоизация в App.jsx (useCallback, useMemo)
- Добавлены SEO мета-теги и Open Graph
- Предзагрузка критических ресурсов
- Оптимизированы анимации и переходы

### 🎯 **Результаты оптимизации:**

- **Code Splitting:** React, React-DOM, Lucide React, Axios разделены на отдельные чанки
- **SEO:** Полные мета-теги для поисковых систем и социальных сетей
- **Performance:** Мемоизация обработчиков и пропсов
- **Images:** WebP формат с fallback, lazy loading, оптимизированные размеры

## 🔧 **Финальные шаги перед деплоем:**

### **1. Проверка сборки:**

```bash
npm run build
```

### **2. Анализ размера бандла:**

```bash
# Установка bundle analyzer
npm install -g vite-bundle-analyzer

# Анализ
vite-bundle-analyzer dist
```

### **3. Тестирование производительности:**

- Lighthouse в Chrome DevTools
- PageSpeed Insights
- WebPageTest

## 🚀 **Варианты деплоя:**

### **1. Vercel (Рекомендуется):**

```bash
# Установка Vercel CLI
npm i -g vercel

# Деплой
vercel --prod
```

### **2. Netlify:**

```bash
# Установка Netlify CLI
npm install -g netlify-cli

# Деплой
netlify deploy --prod --dir=dist
```

### **3. GitHub Pages:**

```bash
# Добавить в package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Установить gh-pages
npm install --save-dev gh-pages

# Деплой
npm run deploy
```

## 🌐 **Настройка домена:**

### **1. DNS записи:**

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   your-domain.com
```

### **2. SSL сертификат:**

- Автоматически на Vercel/Netlify
- Let's Encrypt для VPS

## 📱 **PWA настройка (опционально):**

### **1. Создать manifest.json:**

```json
{
  "name": "Формула Бігу",
  "short_name": "Формула Бігу",
  "description": "Онлайн-тренування з бігу",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#dc2626",
  "icons": [
    {
      "src": "/images/logo-192.webp",
      "sizes": "192x192",
      "type": "image/webp"
    },
    {
      "src": "/images/logo-512.webp",
      "sizes": "512x512",
      "type": "image/webp"
    }
  ]
}
```

### **2. Service Worker для кэширования:**

```javascript
// public/sw.js
const CACHE_NAME = "formula-bigu-v1";
const urlsToCache = ["/", "/static/js/bundle.js", "/static/css/main.css"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});
```

## 🔍 **SEO оптимизация:**

### **1. Sitemap.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://formula-bigu.com/</loc>
    <lastmod>2025-01-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### **2. Robots.txt:**

```txt
User-agent: *
Allow: /

Sitemap: https://formula-bigu.com/sitemap.xml
```

## 📊 **Мониторинг производительности:**

### **1. Google Analytics 4:**

```html
<!-- Добавить в index.html -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### **2. Core Web Vitals:**

```javascript
// Уже добавлено в index.html
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🚀 **Финальная проверка:**

### **1. Производительность:**

- [ ] Lighthouse Score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### **2. SEO:**

- [ ] Все мета-теги заполнены
- [ ] Open Graph настроен
- [ ] Sitemap создан
- [ ] Robots.txt настроен

### **3. Функциональность:**

- [ ] Форма отправляется в Telegram
- [ ] Все модальные окна работают
- [ ] Навигация по секциям работает
- [ ] Адаптивность на всех устройствах

## 🎯 **Целевые показатели:**

- **Lighthouse Performance:** 90+
- **Lighthouse SEO:** 100
- **Lighthouse Accessibility:** 95+
- **Lighthouse Best Practices:** 95+
- **PageSpeed Insights:** 90+
- **WebPageTest:** A Grade

---

**Проект готов к деплою! 🚀**

Все основные оптимизации выполнены, код готов к продакшену.
