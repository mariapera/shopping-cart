# 🛒 Shopping Cart

Aplikacja e-commerce umożliwiająca przeglądanie produktów modowych oraz zarządzanie koszykiem zakupów. Projekt stworzony za pomocą React i Vite, z stylowaniem Tailwind CSS.

## 📋 Zawartość

- [Funkcje](#funkcje)
- [Technologie](#technologie)
- [Instalacja](#instalacja)
- [Dostępne skrypty](#dostępne-skrypty)
- [Struktura projektu](#struktura-projektu)
- [Funcjonalności](#funcjonalności)

## ✨ Funkcje

- 📦 Przeglądanie katalogów produktów modowych
- 🛒 Dodawanie i usuwanie produktów z koszyka
- 💾 Persystentne przechowywanie koszyka (LocalStorage)
- 📱 Responsywny design (mobile-first)
- 🎨 Nowoczesny interfejs z Tailwind CSS
- ⚡ Szybkie ładowanie dzięki Vite

## 🛠️ Technologie

- **React** (v19.1.0) - Biblioteka do budowy interfejsów
- **Vite** (v6.3.5) - Narzędzie do bundlowania
- **Tailwind CSS** (v4.1.10) - Framework CSS utility-first
- **Lucide React** - Zestaw ikon SVG
- **Context API** - Zarządzanie stanem aplikacji
- **ESLint** - Linting kodu

## 🚀 Instalacja

1. Sklonuj repozytorium:
```bash
git clone <url-repozytorium>
cd shopping-cart
```

2. Zainstaluj zależności:
```bash
npm install
```

## 📜 Dostępne skrypty

W katalogu projektu możesz uruchomić:

### `npm run dev`
Uruchamia aplikację w trybie developerskim z Hot Module Replacement (HMR).
```bash
npm run dev
```

### `npm run build`
Buduje aplikację do produkcji w folderze `dist`.
```bash
npm run build
```

### `npm run preview`
Podgląd zbudowanej aplikacji.
```bash
npm run preview
```

### `npm run lint`
Sprawdza kod pod kątem błędów i ostrzeżeń ESLint.
```bash
npm run lint
```

## 📁 Struktura projektu

```
shopping-cart/
├── src/
│   ├── components/          # Komponenty React
│   │   ├── CartButtons.jsx  # Przyciski koszyka
│   │   ├── CartItem.jsx     # Pojedynczy przedmiot
│   │   └── ShoppingCart.jsx # Komponent koszyka
│   ├── context/             # Context API
│   │   ├── cartContext.jsx  # Kontekst koszyka
│   │   └── useCart.js       # Custom hook do zarządzania koszykiem
│   ├── utility/             # Funkcje pomocnicze
│   ├── assets/              # Grafiki i statyczne zasoby
│   ├── App.jsx              # Główny komponent aplikacji
│   ├── main.jsx             # Punkt wejścia aplikacji
│   └── index.css            # Style globalne
├── public/                  # Statyczne pliki
├── index.html               # Szablon HTML
├── vite.config.js           # Konfiguracja Vite
├── package.json             # Zależności projektu
├── eslint.config.js         # Konfiguracja ESLint
└── README.md                # Dokumentacja projektu
```

## 🎯 Funcjonalności

### Zarządzanie koszykiem
- **Dodawanie produktów** - Klikaj przyciski „Dodaj do koszyka"
- **Usuwanie produktów** - Usuń artykuły bezpośrednio z koszyka
- **Persystentność** - Koszyk jest zapisywany w LocalStorage
- **Podsumowanie** - Wyświetlanie całkowitej liczby przedmiotów i wartości

### Interfejs użytkownika
- **Responsywny design** - Działa na urządzeniach mobilnych, tabletach i komputerach
- **Nowoczesny wygląd** - Tailwind CSS do czystych i nowoczesnych stylów
- **Ikony** - Lucide React do spójnych ikon

## 💡 Jak zacząć?

1. Uruchom serwer deweloperski: `npm run dev`
2. Otwórz aplikację w przeglądarce (zwykle http://localhost:5173)
3. Przeglądaj produkty i zarządzaj koszykiem

## 📝 Uwagi

- Projekt wykorzystuje **Context API** do globalnego zarządzania stanem
- Dane o koszyku są przechowywane w **LocalStorage** przeglądarki
- Styling wykonany z użyciem **Tailwind CSS** dla szybkiego prototypowania
