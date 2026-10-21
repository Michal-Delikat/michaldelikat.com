# Design system — michaldelikat.com

Dokument opisuje **wdrożoną stronę** `michaldelikat.com`, a nie pierwowzór, na którym powstał układ. Stan: październik 2026. Źródła: `index.html`, `global.css`, `styles.css`, `script.js` oraz zrzuty ekranu z 21.10.2026 (hero + oferta, realizacje, kontakt).

Strona jest jednostronicową wizytówką usługową dla małych firm. Porządek jest ważniejszy niż efekt: biel, czerń, jedna rodzina fontu, cienkie linie i dużo światła.

## 1. Charakter i zasady nadrzędne

- Minimalizm redakcyjny: brak zdjęć w hero, brak kolorów akcentowych, brak cieni i gradientów.
- Najważniejsza jest typografia i rytm pionowy, nie dekoracja.
- Układ opiera się na jednym kontenerze i jednym breakpoincie.
- Ciemne elementy pojawiają się tylko jako wypełnienie przycisków oraz dawniej jako wariant kafli — obecnie kafle oferty są białe.
- Strona ma być szybka i „lekka”: brak karuzeli, brak animowanych ujawnień przy scrollu, brak przeładowanych hoverów.
- Separatory sekcji to poziome linie `1px` w kolorze `#e5e5e5`, rozciągnięte na całą szerokość strony.

## 2. Kolory

| Token | Wartość | Zastosowanie |
|---|---|---|
| `--color-black` | `#000000` | Tekst, logo, nawigacja, obramowania kafli, tło przycisku primary |
| `--color-white` | `#ffffff` | Tło strony, tło nagłówka, tło kafli oferty, tekst na czarnym przycisku |
| `--color-ink-soft` | `#1f1f1f` | Hover czarnego przycisku |
| `--color-gray-500` | `#808080` | Tekst drugorzędny, hover linków, etykiety meta |
| `--color-gray-300` | `#e5e5e5` | Linie między sekcjami, obramowanie meta, tło przycisku secondary |
| `--color-bg` | `#ffffff` | Tło dokumentu |
| `--color-surface` | `#ffffff` | Powierzchnie: nagłówek, menu mobilne, kafle |
| `--color-text` | `#000000` | Domyślny kolor tekstu |
| `--color-text-muted` | `#808080` | Tekst pomocniczy i hover |
| `--color-border` | `#e5e5e5` | Separatory sekcji, linia pod nagłówkiem po scrollu, linia nad meta |
| `--color-focus` | `#005fcc` | Outline klawiaturowy |

Zasady:

- Nie dodawaj koloru akcentowego ani drugiej palety.
- Nie stosuj ciemnego tła sekcji; jedyne duże czarne powierzchnie to przyciski.
- Nie wprowadzaj cieni. Głębię budują wyłącznie odstępy i cienkie obramowania.

## 3. Typografia

### Font

Jedyny krój: **Montserrat**, hostowany lokalnie.

| Plik | Waga | Zakres |
|---|---|---|
| `fonts/montserrat-v31-latin-500.woff2` | 500 | latin |
| `fonts/montserrat-v31-latin-700.woff2` | 700 | latin |
| `fonts/montserrat-latin-ext.woff2` | 500 | latin-ext, polskie znaki |
| `fonts/montserrat-latin-ext.woff2` | 700 | latin-ext, polskie znaki |

Plik latin-ext jest zadeklarowany osobno dla 500 i 700. Nie scalać tych deklaracji w jeden zakres `500 700`, ponieważ psuje to wybór pliku dla polskich znaków.

- `--font-body`: Montserrat + fallbacki systemowe.
- `--font-display` i `--font-sans`: aliasy `--font-body`.
- Niedozwolone są inne kroje, w tym Cormorant, Minion i fonty systemowe w roli display.

### Skala

| Token | Rozmiar | Zastosowanie |
|---|---|---|
| `--text-xs` | 12px | Nawigacja, meta, stopka, nota kontaktowa |
| `--text-sm` | 15px | Przyciski, drugi wiersz logo |
| `--text-base` | 16px | Tekst podstawowy, opis realizacji, `dd` |
| `--text-md` | 18px | Nazwy usług na mobile, logo na mobile |
| `--text-lg` | 20px | Lead hero, nazwy usług na desktopie, logo na desktopie |
| `--text-xl` | 24px | Nagłówki sekcji, minimalny rozmiar tytułu realizacji, maksymalny e-mail w kontakcie |
| `--text-2xl` | 32px | Minimalny rozmiar h1 |
| `--text-3xl` | 40px | Maksymalny rozmiar h1 i tytułu realizacji |

### Role typograficzne

| Element | Styl |
|---|---|
| Body | 16px / 500 / `line-height: 1.5` |
| H1 hero | `clamp(32px, 8vw, 40px)` / 500 / `1.05` / tracking `0.02em` |
| Nagłówek sekcji (`.section-title`) | 24px / 700 / wyśrodkowany / `margin-bottom: 48px` |
| Nazwa usługi | 18px mobile, 20px desktop / 500 / `1.3` |
| Tytuł realizacji | `clamp(24px, 3.2vw, 40px)` / 500 / `1.05` / tracking `0.02em` |
| E-mail w kontakcie | `clamp(20px, 3vw, 24px)` / 500 / tracking `0.02em` |
| Nawigacja | 12px / 500 / tracking `0.04em`, bez wersalików |
| Logo — góra | 18px mobile, 20px desktop / tracking `0.07em` |
| Logo — dół | 15px / tracking `0.01em` |
| Etykiety `dt` | 12px / tracking `0.2em` / wersaliki / `#808080` |
| Nota kontaktowa | 12px / tracking `0.2em` / wersaliki / `#808080` |
| Stopka | 12px / tracking `0.04em` |
| Przyciski | 15px / 500 / `line-height: 1.2` / tracking `0.01em` |

Wagi: tylko **500** i **700**. Waga 500 jest domyślna dla całej strony i większości tytułów. Waga 700 jest zarezerwowana dla nagłówków sekcji oraz `strong`.

Zasady:

- Wersaliki stosuj wyłącznie w małych etykietach meta i nocie kontaktowej, zawsze z szerokim trackingiem.
- Nie pogrubiaj nazw usług do 700 — obecny styl to 500.
- Nie zwiększaj h1 powyżej 40px.
- Nie dodawaj nowych stopni pisma poza skalą.

## 4. Układ i odstępy

### Tokeny

| Token | Wartość | Znaczenie |
|---|---|---|
| `--container-max` | `1300px` | Maksymalna szerokość kontenera |
| `--container-padding` | `32px` | Poziomy padding, również mobilnie |
| `--header-height` | `120px` | Stała wysokość nagłówka i `scroll-padding-top` |
| `--mobile-menu-height` | `320px` | Nadpisane w `styles.css` dla trzech pozycji menu |
| `--section-space` | `32px` | Bazowy token; sekcje główne używają `--space-24` |
| `--space-24` | `96px` | Pionowy padding sekcji `--lg` i kontaktu |
| `--radius-card` | `12px` | Zaokrąglenie kafli oferty |
| `--radius-full` | `9999px` | Przyciski pill |
| `--border-width-thin` | `1px` | Linie sekcji, obramowania kafli i obrazu |
| Breakpoint | `768px` | Jedyny breakpoint strony |

Skala odstępów: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96px` (`--space-1` … `--space-24`).

### Rytm strony

- **Header**: stały, 120px, białe tło, bez obramowania na starcie. Po 50px scrolla pojawia się dolna linia `#e5e5e5`.
- **Hero**: bez `100vh`. Wysokość wynika z treści i paddingu. Mobile: góra `120px + 48px`, dół `64px`. Desktop: góra `120px + 64px`, dół `80px`. Treść maks. `44rem`.
- **Sekcje**: 96px paddingu pionowego. Oferta i realizacje mają górną linię `1px`; kontakt również.
- **Oferta**: siatka maks. `70rem`, 1 kolumna mobile, 2 kolumny od 768px, gap 16px. Kafle: min. 8rem mobile / 14rem desktop, padding 24px / 32px.
- **Realizacje**: nagłówek sekcji, poniżej dwukolumnowa karta od 768px, gap 64px, obraz 4:5.
- **Kontakt**: wyśrodkowany, 96px paddingu, górna linia, nagłówek jak w pozostałych sekcjach.
- **Stopka**: tylko copyright, bez dodatkowej nawigacji i ikon.

## 5. Komponenty

### Nagłówek i nawigacja

- `position: fixed`, wysokość 120px, tło białe, `z-index: 999`.
- Logo dwuwierszowe: „Michał Delikat” / „Strony internetowe”.
- Linki desktop: Oferta, Realizacje, Kontakt; 12px, bez wersalików, hover `#808080`.
- Mobile: hamburger 32×24px, trzy belki 2px; menu rozwija się do 320px, linki wyśrodkowane.
- Menu zamyka się po kliknięciu linku, klawiszem Escape lub kliknięciem poza nagłówkiem.
- Po scrollu dodawana jest klasa `.is-scrolled` i dolna linia.
- Brak przezroczystego wariantu nad hero i brak ikony Instagrama.

### Hero

- H1: „Szybkie i nowoczesne strony internetowe”.
- Lead: „Krosno i okolice / Projekty zdalne”.
- Główny CTA: czarny pill **„Napisz do mnie”** z `mailto:michal.delikat0@gmail.com`.
- Drugi link: tekstowy „Zobacz realizacje →” prowadzący do `#realizacje`.
- Brak eybrowa, brak zdjęcia, brak pełnoekranowej karuzeli.

### Nagłówki sekcji

- „Oferta”, „Realizacje”, „Kontakt” mają identyczny styl: 24px, waga 700, wyśrodkowanie, `margin-bottom: 48px`.
- Nie różnicuj wielkości ani wagi nagłówka kontaktu względem pozostałych sekcji.

### Kafle oferty

- Cztery usługi w siatce 2×2 na desktopie i 1 kolumnie na mobile.
- Białe tło, czarny tekst, obramowanie `1px solid #000`, promień `12px`.
- Tytuł wyrównany do lewego górnego rogu, 18px mobile / 20px desktop, waga 500.
- Brak hovera, cienia i wypełnienia kolorem.
- Maksymalna szerokość całej siatki: `70rem`; siatka nie zajmuje pełnej szerokości ekranu.

### Realizacje

- Jedna karta: `maciekginalski.com`.
- Obraz 4:5 po lewej, opis po prawej od 768px; mobilnie kolumna.
- Obraz ma `1px` czarne obramowanie, bez zaokrągleń.
- Tytuł duży, 24–40px, waga 500.
- Opis: 16px, `line-height: 1.5`.
- Meta: dwie kolumny, etykiety 12px uppercase `#808080`, wartości 16px, linia `1px #e5e5e5` nad blokiem.
- CTA: szary pill **„Odwiedź stronę”** z ikoną strzałki; hover wypełnia się czernią.
- Cała karta nie jest linkiem — klikalny jest tylko przycisk.

### Kontakt

- Nagłówek „Kontakt” — ten sam styl co „Oferta” i „Realizacje”.
- E-mail `michal.delikat0@gmail.com` jako zwykły, zaznaczalny tekst (bez linku), 20–24px, waga 500.
- Poniżej czarny pill **„Napisz do mnie”** z `mailto:`.
- Nota: „Krosno i okolice / projekty zdalne”, 12px uppercase, `#808080`.
- Sekcja wyśrodkowana; po niej tylko stopka z copyrightem.

### Przyciski

| Wariant | Wygląd | Hover |
|---|---|---|
| `--primary` | czarne tło, biały tekst, pill, min. 44px | tło `#1f1f1f` |
| `--secondary` | tło `#e5e5e5`, czarny tekst, pill | czarne tło, biały tekst |
| `--ghost` | bez tła, czarny tekst | tekst `#808080` |

Wspólne: Montserrat 15px, waga 500, padding 12×24px, brak wersalików, przejścia 200ms. `--ghost` nie jest obecnie używany na stronie.

### Linki i stany

- Linki dziedziczą kolor i nie mają podkreślenia; hover `#808080`.
- Focus klawiaturowy: `2px solid #005fcc`, offset 3px.
- Zaznaczenie tekstu: czarne tło, biały tekst.
- Skip link prowadzi do `#main` i pojawia się przy focusie.

## 6. Ruch

| Element | Czas | Co się zmienia |
|---|---|---|
| Kolor linków i przycisków | 200–400ms | `color`, `background-color`, `border-color` |
| Menu mobilne | 200ms | wysokość, widoczność |
| Hamburger | 400ms | obrót i pozycja belek |
| Skip link | 200ms | `transform` |
| Scroll do sekcji | smooth | `scroll-behavior: smooth` |

Brak animacji wejścia sekcji, brak karuzeli, brak overlayów na zdjęciach. Przy `prefers-reduced-motion: reduce` wyłączane są animacje i smooth scroll.

## 7. Responsywność

Jedyny breakpoint: **768px**.

### Poniżej 768px

- Nawigacja przez hamburger; menu 320px wysokości.
- Hero: h1 maks. 32–40px zależnie od szerokości, padding góra `168px`, dół `64px`.
- Oferta: jedna kolumna, kafle min. 128px, tytuły 18px.
- Realizacje: obraz nad opisem.
- Kontakt: e-mail 20px, przycisk wyśrodkowany w rytmie sekcji.
- Kontener: 32px paddingu po bokach (na 390px daje 326px treści).

### Od 768px

- Pozioma nawigacja, logo 20px.
- Hero: padding góra `184px`, dół `80px`.
- Oferta: dwie kolumny, kafle min. 224px, tytuły 20px.
- Realizacje: dwie kolumny, gap 64px, obraz 4:5.
- Brak osobnych reguł dla tabletów i bardzo dużych ekranów.

## 8. Dostępność

- Jeden `h1`, nagłówki sekcji jako `h2`, nazwy usług i tytuł realizacji jako `h3`.
- Sekcje mają `aria-labelledby` wskazujące istniejące nagłówki.
- Menu mobilne: `aria-expanded`, `aria-controls`, zamykanie Escape, powrót focusu do przycisku.
- Obraz realizacji ma opisowy `alt`.
- Link zewnętrzny ma `target="_blank"` i `rel="noopener"`.
- E-mail jest zaznaczalny, ale nie jest linkiem; akcja mailto jest na przycisku.
- Nie usuwać skip linku, focus-visible ani obsługi reduced motion.

## 9. Zasady „rób / nie rób”

### Rób

- Utrzymuj biel, czerń i `#e5e5e5` jako jedyne kolory interfejsu.
- Składaj wszystko Montserratem 500/700, z lokalnych plików.
- Stosuj 96px paddingu w sekcjach i 48px pod nagłówkiem sekcji.
- Oddzielaj sekcje poziomą linią `1px #e5e5e5` na pełną szerokość.
- Utrzymuj kafle oferty białe, z czarnym obramowaniem, promieniem 12px i tytułem w lewym górnym rogu.
- Utrzymuj główne CTA jako `mailto:` z tekstem „Napisz do mnie”.
- Zostawiaj dużo pustej przestrzeni; nie wypełniaj kafli ikonami ani opisami.
- Pisz teksty zwięźle, po polsku, bez wersalików w nawigacji i przyciskach.

### Nie rób

- Nie dodawaj kolorów akcentowych, gradientów, cieni ani efektów szkła.
- Nie przywracaj pełnoekranowego hero (`100vh` / `100svh`).
- Nie przywracaj sekcji „O mnie”, ikony Instagrama, przycisku „do góry” ani karuzeli.
- Nie zmieniaj kafli oferty na czarne ani nie dodawaj im hovera.
- Nie pogrubiaj nazw usług do 700 i nie zwiększaj ich powyżej 20px.
- Nie dodawaj kolejnych krojów ani wag poza 500 i 700.
- Nie zwiększaj liczby kolumn oferty powyżej dwóch.
- Nie zmieniaj breakpointu 768px bez świadomej decyzji.
- Nie dodawaj animacji slide-in/scale ani ujawniania treści przy scrollu.

## 10. Uwagi wdrożeniowe

- `global.css` zawiera tokeny i komponenty bazowe, a także nieużywane już elementy pierwowzoru (karty projektów, formularze, hero-karuzela). Aktualny wygląd strony definiuje przede wszystkim `styles.css`.
- `--section-space` ma wartość 32px, ale główne sekcje używają `padding-block: var(--space-24)` = 96px.
- Wysokość menu mobilnego jest nadpisana lokalnie do 320px.
- `--radius-card` wynosi 12px; nie używać dawnej wartości 24px.
- Nazwy usług są wagą 500, nie 700.
- Sekcja kontaktu używa dokładnie tej samej klasy `.section-title` co oferta i realizacje.
- E-mail w kontakcie ma `user-select: text` i nie jest opakowany w `mailto:`.
- Nagłówek nie ma już przezroczystego wariantu; dolna linia pojawia się dopiero po scrollu.
- Strona nie ma faviconów ani trybu ciemnego.
