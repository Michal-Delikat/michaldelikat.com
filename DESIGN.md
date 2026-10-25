# Design system — michaldelikat.com

Dokument opisuje **wdrożoną stronę** `michaldelikat.com`, a nie pierwowzór, na którym powstał układ. Stan: październik 2026. Źródła: `index.html`, `global.css`, `styles.css`, `script.js` oraz zrzuty ekranu z 21.10.2026 (hero + oferta, realizacje, kontakt).

Strona jest jednostronicową wizytówką usługową dla małych firm. Porządek jest ważniejszy niż efekt: chłodne, jasne tło, jedna rodzina fontu, cienkie linie, dużo światła, granatowy akcent wypełnień i jaśniejszy niebieski do elementów interaktywnych.

## 1. Charakter i zasady nadrzędne

- Minimalizm redakcyjny: brak zdjęć w hero, brak gradientów; cień występuje tylko pod kaflami oferty.
- Najważniejsza jest typografia i rytm pionowy, nie dekoracja.
- Układ opiera się na jednym kontenerze i jednym breakpoincie.
- Granat (`--color-accent`) wypełnia przyciski, pasek i stopkę; linki, focus i hover korzystają z jaśniejszego `--color-link`.
- Kafle oferty są białe i odcinają się od chłodnego tła strony.
- Strona ma być szybka i „lekka”: brak karuzeli, brak animowanych ujawnień przy scrollu, brak przeładowanych hoverów.
- Separatory sekcji to poziome linie `1px` w kolorze `#D9E1E3`, rozciągnięte na całą szerokość strony.

## 2. Kolory

| Token | Wartość | Zastosowanie |
|---|---|---|
| `--color-bg` | `#F4F7F8` | Tło dokumentu, nagłówka i strony; chłodna złamana biel |
| `--color-surface` | `#FFFFFF` | Kafle oferty, obraz realizacji, menu mobilne, przycisk secondary |
| `--color-surface-soft` | `#E9EFF1` | Tło kafli i delikatnych podświetleń w stanie hover |
| `--color-text` | `#1B2427` | Tekst główny, logo; kontrast 14,69:1 na tle |
| `--color-text-muted` | `#55646A` | Opisy kart, etykiety meta, nota kontaktowa; kontrast 5,71:1 na tle |
| `--color-accent` | `#09426E` | Granat: tło przycisku primary, pasek, stopka; biały tekst 10,42:1. Zbyt ciemny do linków i focusu |
| `--color-accent-hover` | `#073A61` | Hover wypełnionego przycisku primary; biały tekst 11,75:1 |
| `--color-accent-soft` | `#E3ECF4` | Tło zaznaczenia tekstu i delikatnych podświetleń |
| `--color-on-accent` | `#FFFFFF` | Tekst i ikony na akcencie oraz na ciemnej stopce |
| `--color-link` | `#1F5F8B` | Linki, focus i hover elementów interaktywnych; kontrast 6,36:1 na tle |
| `--color-dark` | `var(--color-accent)` | Tło stopki i ciemnych powierzchni; biały tekst 10,42:1 |
| `--color-border` | `#D9E1E3` | Separatory sekcji, obramowania kafli, linia pod nagłówkiem, linia nad meta |
| `--color-border-strong` | `#B4C2C6` | Mocniejsze ramki; rezerwa systemowa |
| `--color-highlight` | `#C79A3B` | Opcjonalny detal tła; obecnie nieużywany, nigdy jako kolor tekstu |
| `--color-focus` | `var(--color-link)` | Outline klawiaturowy |

Zasady:

- Utrzymuj jedną paletę: chłodna biel, biel, grafit, granat i jaśniejszy niebieski interakcji.
- `--color-accent` (granat) to kolor wypełnień: przyciski, pasek i stopka. Jest zbyt ciemny, by odróżnić go od tekstu, więc nie używaj go do linków ani focusu.
- Linki, focus i hover używają `--color-link`.
- `--color-highlight` (ochra) może być wyłącznie drobnym detalem tła, nigdy kolorem tekstu.
- Nie stosuj ciemnego tła sekcji; wyjątkiem jest stopka i ewentualny cienki pasek.
- Nie wprowadzaj cieni poza subtelnym cieniem kafli oferty. Głębię budują odstępy i cienkie obramowania.
- Brak czystej czerni i czystej bieli w tekście oraz w tle strony.
- Kontrast tekstu musi wynosić minimum 4,5:1 (WCAG AA).

## 3. Typografia

### Font

Nagłówki: **Montserrat**, treść: **Work Sans** — oba z Google Fonts.

| Plik | Waga | Zakres |
|---|---|---|
| `fonts/montserrat-v31-latin-500.woff2` | 500 | latin |
| `fonts/montserrat-v31-latin-700.woff2` | 700 | latin |
| `fonts/montserrat-latin-ext.woff2` | 500 | latin-ext, polskie znaki |
| `fonts/montserrat-latin-ext.woff2` | 700 | latin-ext, polskie znaki |

Plik latin-ext jest zadeklarowany osobno dla 500 i 700. Nie scalać tych deklaracji w jeden zakres `500 700`, ponieważ psuje to wybór pliku dla polskich znaków.

- `--font-body`: Work Sans + fallbacki systemowe.
- `--font-display`: Montserrat + fallbacki systemowe.
- `--font-display` i `--font-sans`: aliasy `--font-body`.
- Niedozwolone są inne kroje, w tym Cormorant, Minion i fonty systemowe w roli display.

### Skala

| Token | Rozmiar | Zastosowanie |
|---|---|---|
| `--text-xs` | 12px | Nawigacja, meta, stopka, nota kontaktowa |
| `--text-sm` | 15px | Przyciski, drugi wiersz logo |
| `--text-base` | 16px | Tekst podstawowy, opis realizacji, `dd` |
| `--text-md` | 18px | Nazwy usług na mobile, logo na mobile |
| `--text-lg` | 20px | Nazwy usług na desktopie, logo na desktopie |
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
| Opis usługi | 15px / 500 / `1.5` / `--color-text-muted` |
| Tytuł realizacji | `clamp(24px, 3.2vw, 40px)` / 500 / `1.05` / tracking `0.02em` |
| E-mail w kontakcie | `clamp(20px, 3vw, 24px)` / 500 / tracking `0.02em` |
| Nawigacja | 12px / 500 / tracking `0.04em`, bez wersalików |
| Logo — góra | 18px mobile, 20px desktop / tracking `0.07em` |
| Logo — dół | 15px / tracking `0.01em` |
| Etykiety `dt` | 12px / tracking `0.2em` / wersaliki / `#55646A` |
| Nota kontaktowa | 12px / tracking `0.2em` / wersaliki / `#55646A` |
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
| `--mobile-menu-height` | usunięty | Nagłówek nie ma menu mobilnego |
| `--section-space` | `32px` | Bazowy token; sekcje główne używają `--space-24` |
| `--space-24` | `96px` | Pionowy padding sekcji `--lg` i kontaktu |
| `--radius-card` | `16px` | Zaokrąglenie kafli oferty |
| `--shadow-card` | `0 8px 20px -8px color-mix(in srgb, var(--color-text) 10%, transparent)` | Subtelny, wąski cień kafli oferty |
| `--shadow-card-hover` | `0 12px 24px -8px color-mix(in srgb, var(--color-text) 18%, transparent)` | Wzmocniony, wąski cień kafla w stanie hover |
| `--radius-full` | `9999px` | Przyciski pill |
| `--border-width-thin` | `1px` | Linie sekcji, obramowania kafli i obrazu |
| Breakpoint | `768px` | Jedyny breakpoint strony |

Skala odstępów: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96px` (`--space-1` … `--space-24`).

### Rytm strony

- **Header**: stały, 120px, chłodne jasne tło (`--color-bg`), bez obramowania na starcie. Po 50px scrolla pojawia się dolna linia `#D9E1E3`.
- **Hero**: bez `100vh`. Wysokość wynika z treści i paddingu. Mobile: góra `120px + 48px`, dół `64px`. Desktop: góra `120px + 64px`, dół `80px`. Treść maks. `44rem`.
- **Sekcje**: 96px paddingu pionowego. Oferta i realizacje mają górną linię `1px`; kontakt również.
- **Oferta**: siatka na pełną szerokość kontenera, 1 kolumna mobile, 2 kolumny od 768px, gap 24px mobile / 32px desktop. Kafle: min. 8rem mobile / 14rem desktop, padding 24px / 32px.
- **Realizacje**: nagłówek sekcji, poniżej dwukolumnowa karta od 768px, gap 64px, obraz 4:5.
- **Kontakt**: wyśrodkowany, 96px paddingu, górna linia, nagłówek jak w pozostałych sekcjach.
- **Stopka**: ciemne tło `--color-dark`, jasny tekst, copyright oraz ikony LinkedIn i GitHub. Linki mają 40×40px, ikony 20px, `aria-label` i `title`; hover zmienia kolor na `--color-accent-soft`.

## 5. Komponenty

### Nagłówek

- Pływający prostokąt: biała powierzchnia, zaokrąglenie `--radius-card`, cień `--shadow-card`.
- `position: fixed`, wysokość 120px, przezroczysty obszar wokół karty, `z-index: 999`.
- Logo: „Michał Delikat”.
- Brak nawigacji, hamburgera i menu mobilnego.
- Po scrollu dodawana jest klasa `.is-scrolled` i mocniejszy cień.

### Hero

- H1: „Szybkie i nowoczesne strony internetowe”.
- Eyebrow: „Krosno i okolice / Projekty zdalne”, 12px uppercase.
- Główny CTA: granatowy pill **„Napisz do mnie”** z `mailto:michal.delikat0@gmail.com`; biały tekst na tle `--color-accent`.
- Brak eybrowa, brak zdjęcia, brak pełnoekranowej karuzeli.

### Nagłówki sekcji

- „Oferta”, „Realizacje”, „Kontakt” mają identyczny styl: 24px, waga 700, wyśrodkowanie, `margin-bottom: 48px`.
- Nie różnicuj wielkości ani wagi nagłówka kontaktu względem pozostałych sekcji.

### Kafle oferty

- Cztery usługi w siatce 2×2 na desktopie i 1 kolumnie na mobile.
- Białe tło (`--color-surface`), tekst `--color-text`, promień 16px (`--radius-card`), ramka `--color-border` i subtelny cień `--shadow-card`.
- Domyślna ramka to `--color-border`; na hover zmienia kolor na `--color-link`.
- Ikona liniowa na dole po lewej: 40px mobile / 48px desktop, stroke 1.5, kolor tekstu.
- Tytuł 18px mobile / 20px desktop, waga 500; pod nim opis 15px w `--color-text-muted`.
- Kafle mają min. 8rem mobile / 14rem desktop i padding 24px / 32px.
- Kafle są tylko do odczytu — brak zmian na hover.
- Siatka zajmuje pełną szerokość kontenera, tak samo jak karta realizacji; nie ma dodatkowego `max-width`.

### Realizacje

- Jedna karta: `maciekginalski.com`.
- Obraz 4:5 po lewej, opis po prawej od 768px; mobilnie kolumna.
- Obraz ma `1px` obramowanie `#D9E1E3`, bez zaokrągleń.
- Tytuł duży, 24–40px, waga 500.
- Opis: 16px, `line-height: 1.5`.
- Meta: dwie kolumny, etykiety 12px uppercase `#55646A`, wartości 16px, linia `1px #D9E1E3` nad blokiem.
- CTA: biały pill **„Odwiedź stronę”** z ikoną strzałki; hover wypełnia się `--color-accent`, tekst staje się biały.
- Cała karta nie jest linkiem — klikalny jest tylko przycisk.

### Kontakt

- Nagłówek „Kontakt” — ten sam styl co „Oferta” i „Realizacje”.
- E-mail `michal.delikat0@gmail.com` jako zwykły, zaznaczalny tekst (bez linku), 20–24px, waga 500.
- Poniżej granatowy pill **„Napisz do mnie”** z `mailto:` i białym tekstem.
- Nota: „Krosno i okolice / projekty zdalne”, 12px uppercase, `#55646A`.
- Sekcja wyśrodkowana; po niej tylko stopka z copyrightem.

### Przyciski

| Wariant | Wygląd | Hover |
|---|---|---|
| `--primary` | tło `--color-accent` (`#09426E`), biały tekst, pill, min. 44px | tło `--color-accent-hover` (`#073A61`) |
| `--secondary` | białe tło, obramowanie `--color-border`, tekst `--color-text`, pill | tło `--color-accent`, biały tekst |
| `--ghost` | bez tła, tekst `--color-link` | tekst `--color-accent` |

Wspólne: Work Sans 15px, waga 500, padding 12×24px, brak wersalików, przejścia 200ms. `--ghost` nie jest obecnie używany na stronie.

### Linki i stany

- Linki w treści i stopce dziedziczą kolor i nie mają podkreślenia; hover `--color-link`.
- Linki w treści są w kolorze `--color-link`, z zawsze widocznym podkreśleniem; hover `--color-accent`.
- Focus klawiaturowy: `2px solid var(--color-link)`, offset 2px.
- Zaznaczenie tekstu: tło `--color-accent-soft`, tekst `--color-text`.
- Skip link prowadzi do `#main` i pojawia się przy focusie.

## 6. Ruch

| Element | Czas | Co się zmienia |
|---|---|---|
| Kolor linków i przycisków | 200–400ms | `color`, `background-color`, `border-color` |
| Cień nagłówka | 400ms | cień karty po scrollu |
| Skip link | 200ms | `transform` |
| Scroll do sekcji | smooth | `scroll-behavior: smooth` |

Brak animacji wejścia sekcji, brak karuzeli, brak overlayów na zdjęciach. Przy `prefers-reduced-motion: reduce` wyłączane są animacje i smooth scroll.

## 7. Responsywność

Jedyny breakpoint: **768px**.

### Poniżej 768px

- Brak nawigacji mobilnej; nagłówek pokazuje wyłącznie logo.
- Hero: h1 maks. 32–40px zależnie od szerokości, padding góra `168px`, dół `64px`.
- Oferta: jedna kolumna, kafle min. 128px, tytuły 18px.
- Realizacje: obraz nad opisem.
- Kontakt: e-mail 20px, przycisk wyśrodkowany w rytmie sekcji.
- Kontener: 32px paddingu po bokach (na 390px daje 326px treści).

### Od 768px

- Logo 20px.
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

- Utrzymuj chłodną biel `#F4F7F8`, biel `#FFFFFF`, grafit `#1B2427`, muted `#55646A`, granat `#09426E` i niebieski interakcji `#1F5F8B` jako jedyne kolory interfejsu.
- Nagłówki składaj Montserratem 500/700, treść Work Sansem 400/500/700 — z Google Fonts.
- Stosuj 96px paddingu w sekcjach i 48px pod nagłówkiem sekcji.
- Oddzielaj sekcje poziomą linią `1px #D9E1E3` na pełną szerokość.
- Utrzymuj kafle oferty białe, z obramowaniem `#D9E1E3`, promieniem 12px, tytułem i krótkim opisem.
- Utrzymuj główne CTA jako `mailto:` z tekstem „Napisz do mnie”.
- Zostawiaj dużo pustej przestrzeni; używaj jednej ikony liniowej na kafel. Opisy usług są częścią treści.
- Pisz teksty zwięźle, po polsku, bez wersalików w nawigacji i przyciskach.

### Nie rób

- Nie dodawaj drugiego koloru akcentowego, gradientów, cieni poza `--shadow-card` ani efektów szkła.
- Nie używaj `--color-highlight` jako koloru tekstu.
- Nie używaj czystej czerni ani czystej bieli w tekście i tle strony; wyjątki to `surface` i `on-accent`.
- Nie dopuszczaj tekstu o kontraście niższym niż 4,5:1.
- Nie przywracaj pełnoekranowego hero (`100vh` / `100svh`).
- Nie przywracaj sekcji „O mnie”, ikony Instagrama, przycisku „do góry” ani karuzeli.
- Kafle oferty są statyczne; nie dodawaj efektów hover.
- Nie pogrubiaj nazw usług do 700 i nie zwiększaj ich powyżej 20px.
- Nie dodawaj kolejnych krojów ani wag poza 500 i 700.
- Nie zwiększaj liczby kolumn oferty powyżej dwóch.
- Nie zmieniaj breakpointu 768px bez świadomej decyzji.
- Nie dodawaj animacji slide-in/scale ani ujawniania treści przy scrollu.

## 10. Uwagi wdrożeniowe

- `global.css` zawiera tokeny, reset, typografię bazową, przyciski i nagłówek. Nieużywane elementy pierwowzoru (karty projektów, formularze, hero-karuzela) zostały usunięte. Aktualny wygląd sekcji definiuje `styles.css`.
- `--section-space` ma wartość 32px, ale główne sekcje używają `padding-block: var(--space-24)` = 96px.
- Wysokość menu mobilnego jest nadpisana lokalnie do 320px.
- Kafle oferty używają `--radius-card` (16px) i `--shadow-card`; `--radius-full` jest zarezerwowany dla przycisków pill.
- Nazwy usług są wagą 500, nie 700.
- Sekcja kontaktu używa dokładnie tej samej klasy `.section-title` co oferta i realizacje.
- E-mail w kontakcie ma `user-select: text` i nie jest opakowany w `mailto:`.
- Nagłówek nie ma już przezroczystego wariantu; dolna linia pojawia się dopiero po scrollu.
- W obecnym kodzie nie ma osobnego paska nad nagłówkiem; `--color-dark` obsługuje stopkę.
- Stopka ma ciemne tło `--color-dark` i jasny tekst `--color-on-accent`.
- `--color-highlight` jest zdefiniowany, ale obecnie nieużywany.
- Favicon: biała litera „M” (`--color-on-accent`) w kroju Outfit 700 na granatowym tle (`--color-accent`); warianty `favicon.svg`, `favicon-32.png`, `favicon.ico` i `apple-touch-icon.png`. Strona nie ma trybu ciemnego.
- Kolory należy definiować wyłącznie przez tokeny semantyczne: `--color-bg`, `--color-surface`, `--color-surface-soft`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-hover`, `--color-accent-soft`, `--color-on-accent`, `--color-link`, `--color-dark`, `--color-border`, `--color-border-strong`, `--color-highlight` i `--color-focus`.
- Primary CTA używa granatu `--color-accent` z białym tekstem; secondary jest biały z chłodnym obramowaniem i ciemnym tekstem.
