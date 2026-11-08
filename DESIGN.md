# Design system — michaldelikat.com

Dokument opisuje **wdrożoną stronę** `michaldelikat.com`, a nie pierwowzór, na którym powstał układ. Stan: październik 2026. Źródła: `index.html`, `css/global.css`, `css/styles.css`, `js/script.js` oraz zrzuty ekranu z 21.10.2026 (hero + oferta, realizacje, kontakt).

Strona jest jednostronicową wizytówką usługową dla małych firm. Porządek jest ważniejszy niż efekt: chłodne, jasne tło, dwie rodziny fontów (Oxanium w nagłówkach i logo, Work Sans w treści), cienkie linie, dużo światła, granatowy akcent wypełnień i jaśniejszy niebieski do elementów interaktywnych.

## 1. Charakter i zasady nadrzędne

- Minimalizm redakcyjny: brak zdjęć w hero, brak gradientów i cieni.
- Najważniejsza jest typografia i rytm pionowy, nie dekoracja.
- Układ opiera się na jednym kontenerze i jednym breakpoincie.
- Granat (`--color-accent`) wypełnia przyciski i stopkę; linki, focus i hover korzystają z jaśniejszego `--color-link`.
- Kafle oferty są półprzezroczyste i odcinają się od granatowego tła sekcji.
- Strona ma być szybka i „lekka”: brak karuzeli, brak animowanych ujawnień przy scrollu, brak przeładowanych hoverów.
- Separatory sekcji to poziome linie `1px` w kolorze `#D9E1E3`, rozciągnięte na całą szerokość strony.

## 2. Kolory

| Token | Wartość | Zastosowanie |
|---|---|---|
| `--color-bg` | `#F4F7F8` | Tło dokumentu, nagłówka i strony; chłodna złamana biel |
| `--color-surface` | `#FFFFFF` | Obraz realizacji, tło sekcji „O mnie”, menu mobilne, przycisk secondary, pola formularza |
| `--color-surface-soft` | `#E9EFF1` | Token zdefiniowany, obecnie nieużywany |
| `--color-text` | `#1B2427` | Tekst główny, logo; kontrast 14,69:1 na tle |
| `--color-text-muted` | `#55646A` | Opisy poza ciemną sekcją, nota kontaktowa; kontrast 5,71:1 na tle |
| `--color-accent` | `#09426E` | Granat: tło przycisku primary i stopka; biały tekst 10,42:1. Zbyt ciemny jako bazowy kolor linków i focusu |
| `--color-accent-hover` | `#073A61` | Hover wypełnionego przycisku primary; biały tekst 11,75:1 |
| `--color-accent-soft` | `#E3ECF4` | Tło zaznaczenia tekstu i delikatnych podświetleń |
| `--color-on-accent` | `#FFFFFF` | Tekst i ikony na akcencie oraz na ciemnej stopce |
| `--color-link` | `#1F5F8B` | Linki, focus i hover elementów interaktywnych; kontrast 6,36:1 na tle |
| `--color-dark` | `var(--color-accent)` | Tło stopki i ciemnych powierzchni; biały tekst 10,42:1 |
| `--color-border` | `#D9E1E3` | Separatory sekcji, obramowania obrazów, linia pod nagłówkiem; kafle oferty na ciemnym tle używają jaśniejszej ramki |
| `--color-border-strong` | `#7D8B91` | Ramki pól formularza (kontrast ≥ 3:1) |
| `--color-highlight` | `#C79A3B` | Opcjonalny detal tła; obecnie nieużywany, nigdy jako kolor tekstu |
| `--color-focus` | `var(--color-link)` | Outline klawiaturowy |
| `--section-muted` | `var(--color-accent-soft)` | Tekst na ciemnych sekcjach |

Zasady:

- Utrzymuj jedną paletę: chłodna biel, biel, grafit, granat i jaśniejszy niebieski interakcji.
- `--color-accent` (granat) to kolor wypełnień: przyciski i stopka. Jest zbyt ciemny, by odróżnić go od tekstu, więc nie używaj go jako bazowego koloru linków ani focusu.
- Linki i focus bazowo używają `--color-link`; hover linków w treści przechodzi w `--color-accent`, a linków stopki w `--color-accent-soft`.
- `--color-highlight` (ochra) może być wyłącznie drobnym detalem tła, nigdy kolorem tekstu.
- Ciemne tło jest dozwolone w sekcji oferty i stopce; poza nimi nie stosuj ciemnych sekcji.
- Nie wprowadzaj cieni; głębię budują odstępy i cienkie obramowania.
- Brak czystej czerni i czystej bieli w tekście oraz w tle strony; wyjątkiem jest biały tekst i ikony na akcencie (`--color-on-accent`).
- Kontrast tekstu musi wynosić minimum 4,5:1 (WCAG AA).

## 3. Typografia

### Font

Nagłówki h1–h2 i napis przy logo: **Oxanium** hostowany lokalnie (zmienny 400–600: 400 dla h2, 600 dla h1 i logo). Pozostały tekst, w tym h3: **Work Sans** hostowany lokalnie (wagi 500 i 700).

| Plik | Waga | Zakres |
|---|---|---|
| `fonts/oxanium-latin.woff2` | 400–600 (zmienny) | latin |
| `fonts/oxanium-latin-ext.woff2` | 400–600 (zmienny) | latin-ext, polskie znaki |
| `fonts/worksans-latin.woff2` | 500 / 700 | latin |
| `fonts/worksans-latin-ext.woff2` | 500 / 700 | latin-ext, polskie znaki |

- `--font-body`: Work Sans + fallbacki systemowe.
- `--font-display`: Oxanium + fallbacki systemowe (tylko h1–h2 i logo).
- `--font-sans`: alias `--font-body`.
- Niedozwolone są inne kroje, w tym Cormorant, Minion i fonty systemowe w roli display.

### Skala

| Token | Rozmiar | Zastosowanie |
|---|---|---|
| `--text-base` | 16px | Tekst podstawowy, opis realizacji, przyciski, drugi wiersz logo, nawigacja, stopka, nota kontaktowa |
| `--text-md` | 18px | Nazwy usług na mobile, logo na mobile |
| `--text-lg` | 20px | Nazwy usług na desktopie, logo na desktopie |
| `--text-xl` | 24px | Nagłówki sekcji, minimalny rozmiar tytułu realizacji, maksymalny e-mail w kontakcie |
| `--text-2xl` | 32px | Minimalny rozmiar h1 |
| `--text-3xl` | 40px | Maksymalny rozmiar h1 i tytułu realizacji |

### Role typograficzne

| Element | Styl |
|---|---|
| Body | 16px / 500 / `line-height: 1.5` |
| H1 hero | Oxanium `clamp(32px, 8vw, 40px)` / 600 / `1.15` / tracking `-0.01em` |
| Nagłówek sekcji (`.section-title`) | Oxanium 24px / 400 / wyśrodkowany / `margin-bottom: 48px` |
| Nazwa usługi | Work Sans 18px mobile, 20px desktop / 500 / `1.3` |
| Opis usługi | 16px / 500 / `1.5` / `--color-text-muted` |
| Tytuł realizacji | Work Sans `clamp(24px, 3.2vw, 40px)` / 500 / `1.05` / tracking `0.02em` |
| E-mail w kontakcie | `clamp(20px, 3vw, 24px)` / 500 / tracking `0.02em` |
| Nawigacja | 16px / 500 / tracking `0.04em`, bez wersalików |
| Logo — góra | Oxanium 20px / 600 / `1` / tracking `0` |
| Logo — dół | 16px / tracking `0.01em` |
| Nota kontaktowa | 16px / tracking `0.2em` / wersaliki / `#55646A` |
| Stopka | 16px / tracking `0.04em` |
| Przyciski | 16px / 500 / `line-height: 1.2` / tracking `0.01em` |

Wagi: **400** i **600** dla Oxanium (600 tylko h1 i logo) oraz **500** i **700** dla Work Sans. Waga 500 jest domyślna dla treści i h3, a 700 dla `strong` i `h4`–`h6`.

Zasady:

- Wersaliki stosuj wyłącznie w nocie kontaktowej, zawsze z szerokim trackingiem.
- Nie pogrubiaj nazw usług do 700 — h3 używa Work Sans 500.
- Nie zwiększaj h1 powyżej 40px.
- Nie dodawaj nowych stopni pisma poza skalą.

## 4. Układ i odstępy

### Tokeny

| Token | Wartość | Znaczenie |
|---|---|---|
| `--container-max` | `1300px` | Maksymalna szerokość kontenera |
| `--container-padding` | `32px` | Poziomy padding, również mobilnie |
| `--header-height` | `5.5rem` (88px) | Wysokość pastylki headera; `scroll-padding-top` = wartość + 16px |
| `--mobile-menu-height` | — | Nieużywany; menu mobilne animuje `max-height` |
| `--section-space` | `32px` | Bazowy token; sekcje główne używają `--space-24` |
| `--space-24` | `96px` | Pionowy padding sekcji `--lg` i kontaktu |
| `--radius-button` | `8px` | Token zdefiniowany, obecnie nieużywany; przyciski używają `--radius-full` |
| `--radius-field` | `8px` | Zaokrąglenie pól formularza |
| `--radius-card` | `16px` | Zaokrąglenie kafli oferty |
| `--shadow-card` | `0 8px 20px -8px color-mix(in srgb, var(--color-text) 10%, transparent)` | Token zdefiniowany, obecnie nieużywany |
| `--shadow-card-hover` | `0 12px 24px -8px color-mix(in srgb, var(--color-text) 18%, transparent)` | Token zdefiniowany, obecnie nieużywany |
| `--radius-full` | `9999px` | Pełne zaokrąglenie przycisków |
| `--border-width-thin` | `1px` | Linie sekcji, obramowania kafli i obrazu |
| Breakpoint | `768px` / `820px` | Główny layout / nawigacja desktopowa w headerze |

Skala odstępów: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96px` (`--space-1` … `--space-24`).

### Rytm strony

- **Header**: stały, 88px łącznie z wewnętrznym paddingiem 12px w pionie, półprzezroczysta biała powierzchnia (`rgba(255, 255, 255, 0.82)`) z rozmyciem tła i delikatnym obramowaniem; bez zaokrągleń i cienia.
- **Hero**: `100vh`/`var(--viewport-height, 100svh)` — wysokość blokowana raz w JS, stabilna także w Brave Mobile. Treść wyśrodkowana; tło to siatka 48px w `rgba(9, 66, 110, 0.06)`, maskowana radialnie. Mobile: góra `88px + 48px`, dół `64px`. Desktop: góra `88px + 64px`, dół `80px`. Treść maks. `44rem`.
- **Sekcje**: 96px paddingu pionowego. Oferta, realizacje, o mnie i kontakt mają górną linię `1px`.
- **Oferta**: granatowe tło `--color-dark` i klasa `.section--dark`, biały nagłówek. Siatka na pełną szerokość kontenera, 1 kolumna mobile, 2 kolumny od 768px, gap 20px. Kafle `.card`: półprzezroczyste białe tło `rgba(255,255,255,0.06)`, ramka `rgba(255,255,255,0.16)`, biały tytuł i ikony, opis `--section-muted`; bez stałej wysokości, padding 24px 28px.
- **Realizacje**: nagłówek sekcji, poniżej siatka kart: 1 kolumna mobile, 2 kolumny od 768px, odstępy 96px w pionie i 64px w poziomie; każda karta ma obraz 4:5, pod nim tytuł, opis, linię i przycisk.
- **O mnie**: białe tło `--color-surface`, nagłówek sekcji, tekst w jednej kolumnie `max-width: 66ch`. Opcjonalny wariant `.about--with-photo` daje dwie kolumny od 768px (tekst + portret 4:5).
- **Kontakt**: wyśrodkowany, 96px paddingu, górna linia, nagłówek, formularz Netlify, pod nim e-mail oraz linki LinkedIn i GitHub.
- **Stopka**: ciemne tło `--color-dark`, jasny tekst, dwa wiersze. Pierwszy: logo `logo/md-znak-bialy.svg` po lewej, ikony GitHub i LinkedIn wyrównane do prawej. Drugi: link „Polityka prywatności” po lewej, copyright po prawej. Linki mają 44×44px, ikony 20px, `aria-label` i `title`; hover zmienia kolor na `--color-accent-soft`.

## 5. Komponenty

### Nagłówek

- Pasek pełnej szerokości: półprzezroczysta biała powierzchnia z `backdrop-filter: blur(12px)` i obramowaniem `rgba(9, 66, 110, 0.08)`; bez zaokrąglenia.
- `position: fixed`, wysokość `--header-height`, `z-index: 999`. Wnętrze: `padding: var(--space-3) var(--space-6)` (poniżej 360px w poziomie `--space-3`).
- Logo: znak „MD” (`logo/md-znak.svg`) po lewej stronie napisu „Michał Delikat”.
- Desktop: nawigacja „Oferta”, „Realizacje” i „O mnie” oraz CTA „Napisz do mnie”. Linki nie mają podkreślenia; hover zmienia kolor.
- Mobile: hamburger rozwijający menu w headerze; CTA „Napisz do mnie” na dole menu.
- Cień jest wyłączony (`box-shadow: none`), także na samej górze strony.

### Hero

- H1: „Szybkie i przejrzyste strony internetowe”, pod nim lead „Od prostej wizytówki po rozbudowany katalog produktów i usług.”.
- Główny CTA: granatowy przycisk **„Napisz do mnie”** jako kotwica do `#kontakt`; biały tekst na tle `--color-accent`.
- Brak zdjęcia, brak pełnoekranowej karuzeli.

### Nagłówki sekcji

- „Oferta”, „Realizacje”, „O mnie”, „Kontakt” mają identyczny styl: 24px, waga 400, wyśrodkowanie, `margin-bottom: 48px`.
- Nie różnicuj wielkości ani wagi nagłówka kontaktu względem pozostałych sekcji.

### Kafle oferty

- Cztery usługi w siatce 2×2 na desktopie i 1 kolumnie na mobile.
- Półprzezroczyste białe tło (`rgba(255, 255, 255, 0.06)`), ramka `rgba(255, 255, 255, 0.16)`, promień 16px (`--radius-card`); bez cienia.
- Ramka pozostaje bez zmian w stanie hover.
- Ikona liniowa na dole po lewej: 20px mobile / 24px desktop, stroke 1.5, kolor biały (`--color-on-accent`).
- Tytuł 18px mobile / 20px desktop, waga 500, kolor biały; pod nim opis 16px w `--section-muted`.
- Kafle mają padding 24px 28px.
- Kafle są tylko do odczytu — brak zmian na hover.
- Siatka zajmuje pełną szerokość kontenera, tak samo jak karta realizacji; nie ma dodatkowego `max-width`.

### Realizacje

- Trzy karty w siatce: 1 kolumna mobile, 2 kolumny od 768px; odstępy 96px w pionie i 64px w poziomie.
- Każda karta ma układ jednokolumnowy na wszystkich szerokościach: obraz 4:5, pod nim tytuł, opis i przycisk.
- Obraz ma `1px` obramowanie `#D9E1E3`, bez zaokrągleń.
- Tytuł duży, 24–40px, waga 500.
- Opis: 16px, `line-height: 1.5`.
- CTA: biały przycisk **„Odwiedź stronę”** z ikoną strzałki; hover wypełnia się `--color-accent`, tekst staje się biały.
- Cała karta nie jest linkiem — klikalny jest tylko przycisk.

### O mnie

- Nagłówek „O mnie” — ten sam styl co pozostałe sekcje, odstęp 48px pod nim.
- Tekst bez karty: `max-width: 66ch`, wyśrodkowany blok, tekst wyrównany do lewej.
- Body: cały tekst bio, 16px, `line-height: 1.7`, `--color-text-muted`, `text-wrap: pretty`.
- Link „Maquis” do Board Game Arena z `target="_blank"` i `rel="noopener noreferrer"`, z podkreśleniem i kolorem `--color-link`; nazwy „Board Game Arena” i „Side Room Games” z twardymi spacjami.
- Wariant `.about--with-photo` (nieaktywny domyślnie): zdjęcie obok tekstu, mobile nad tekstem (maks. 20rem) / od 768px dwie kolumny, obraz 4:5 z `--radius-card` i ramką `--color-border`.
- Bez placeholdera, drugiego CTA i dodatkowych treści.

### Kontakt

- Nagłówek „Kontakt” — ten sam styl co „Oferta” i „Realizacje”.
- Formularz bez karty: brak tła, ramki i paddingu, maks. 42rem, wyśrodkowany.
- Pola: `label` nad polem, wysokość min. 48px, font 16px, `--radius-field`, ramka `--color-border-strong` (kontrast ≥ 3:1), placeholder `--color-placeholder`, focus `--color-link`.
- Siatka imię/e-mail: 1 kolumna mobile, 2 kolumny od 768px; wiadomość pełną szerokością.
- Formularz Netlify Forms (`name="kontakt"`), honeypot `bot-field` poza ekranem, wysyłka fetch. Status wysyłki w `aria-live` znajduje się po prawej stronie przycisku (na wąskich ekranach pod nim).
- Pod formularzem e-mail `kontakt@michaldelikat.com` jako link `mailto:` oraz telefon `+48 730 443 499` jako link `tel:`; każdy z osobnym przyciskiem „Kopiuj” (`navigator.clipboard`, `title`, `aria-label`, status `aria-live`). Przycisk znajduje się pod wartością na każdej szerokości ekranu. Kliknięcie przycisku nie otwiera klienta poczty ani nie inicjuje połączenia.

### Przyciski

| Wariant | Wygląd | Hover |
|---|---|---|
| `--primary` | tło `--color-accent` (`#09426E`), biały tekst, pełne zaokrąglenie, min. 55px | tło `--color-accent-hover` (`#073A61`) |
| `--secondary` | białe tło, obramowanie `--color-border`, tekst `--color-text`, pełne zaokrąglenie | tło `--color-accent`, biały tekst |
| `--ghost` | bez tła, tekst `--color-link` | tekst `--color-accent` |

Wspólne: Work Sans 16px, waga 500, padding 12×24px, min. wysokość 55px, brak wersalików, przejścia 200ms. `--ghost` nie jest obecnie używany na stronie.

### Linki i stany

- Linki w nawigacji i stopce nie mają podkreślenia; nawigacja na hover zmienia kolor na `--color-link`, a linki stopki na `--color-accent-soft`.
- Linki w treści są w kolorze `--color-link`, z zawsze widocznym podkreśleniem; hover `--color-accent`.
- Focus klawiaturowy: `2px solid var(--color-link)`, offset 2px.
- Zaznaczenie tekstu: tło `--color-accent-soft`, tekst `--color-text`.
- Skip link prowadzi do `#main` i pojawia się przy focusie.

## 6. Ruch

| Element | Czas | Co się zmienia |
|---|---|---|
| Kolor linków i przycisków | 200–400ms | `color`, `background-color`, `border-color` |
| Cień nagłówka | — | brak cienia, także przy scrollu |
| Skip link | 200ms | `transform` |
| Scroll do sekcji | smooth | `scroll-behavior: smooth` |

Brak animacji wejścia sekcji, brak karuzeli, brak overlayów na zdjęciach. Przy `prefers-reduced-motion: reduce` wyłączane są animacje i smooth scroll.

## 7. Responsywność

Główny breakpoint: **768px**. Nawigacja desktopowa w headerze włącza się od **820px**, żeby pomieścić większe logo.

### Poniżej 768px

- Nawigacja mobilna (do 819px): hamburger w karcie headera, menu rozwijane z linkami i CTA „Napisz do mnie”.
- Hero: h1 maks. 32–40px zależnie od szerokości, padding góra `136px` (88px + 48px), dół `64px`.
- Oferta: jedna kolumna, tytuły 18px.
- Realizacje: jedna kolumna; obraz nad opisem.
- Kontakt: formularz 1 kolumna, przycisk pełnej szerokości, e-mail i telefon 20px, przycisk „Kopiuj” pod każdym z nich.
- Stopka: dwa wiersze — u góry logo po lewej i ikony GitHub oraz LinkedIn do prawej, u dołu link „Polityka prywatności” i copyright w jednej kolumnie (wyrównane do lewej).
- Kontener: 32px paddingu po bokach (na 390px daje 326px treści).

### Od 768px

- Logo 20px, znak „MD” 38px.
- Hero: padding góra `152px` (88px + 64px), dół `80px`.
- Oferta: dwie kolumny, tytuły 20px.
- Realizacje: siatka dwóch kolumn; wnętrze karty pozostaje jednokolumnowe (obraz, tytuł, opis, przycisk).
- Nawigacja desktopowa i CTA w headerze od 820px; poniżej działa hamburger.

## 8. Dostępność

- Jeden `h1`, nagłówki sekcji jako `h2`, nazwy usług i tytuł realizacji jako `h3`.
- Sekcje mają `aria-labelledby` wskazujące istniejące nagłówki.
- Menu mobilne: `aria-expanded`, `aria-controls`, zamykanie Escape, powrót focusu do przycisku.
- Obraz realizacji ma opisowy `alt`.
- Link zewnętrzny ma `target="_blank"` i `rel="noopener"`.
- E-mail i telefon są zaznaczalne i są linkami `mailto:`/`tel:`; osobny przycisk „Kopiuj” kopiuje wartość do schowka.
- Nie usuwać skip linku, focus-visible ani obsługi reduced motion.

## 9. Zasady „rób / nie rób”

### Rób

- Utrzymuj chłodną biel `#F4F7F8`, biel `#FFFFFF`, grafit `#1B2427`, muted `#55646A`, granat `#09426E` i niebieski interakcji `#1F5F8B` jako jedyne kolory interfejsu.
- Nagłówki h1 i napis przy logo składaj Oxanium 600, h2 Oxanium 400; h3 i pozostały tekst Work Sans 500/700 — wszystko z lokalnych plików.
- Stosuj 96px paddingu w sekcjach i 48px pod nagłówkiem sekcji.
- Oddzielaj sekcje poziomą linią `1px #D9E1E3` na pełną szerokość.
- Utrzymuj kafle oferty półprzezroczyste, z jasnym obramowaniem, promieniem 16px, tytułem i krótkim opisem.
- Utrzymuj główne CTA jako kotwicę do `#kontakt` z tekstem „Napisz do mnie”.
- Zostawiaj dużo pustej przestrzeni; używaj jednej ikony liniowej na kafel. Opisy usług są częścią treści.
- Pisz teksty zwięźle, po polsku, bez wersalików w nawigacji i przyciskach.

### Nie rób

- Nie dodawaj drugiego koloru akcentowego, gradientów ani cieni; efekty szkła są dozwolone wyłącznie w headerze.
- Nie używaj `--color-highlight` jako koloru tekstu.
- Nie używaj czystej czerni ani czystej bieli w tekście i tle strony; wyjątki to `surface` i `on-accent`.
- Nie dopuszczaj tekstu o kontraście niższym niż 4,5:1.
- Nie dodawaj ikony Instagrama, przycisku „do góry” ani karuzeli.
- Kafle oferty są statyczne; nie dodawaj efektów hover.
- Nie pogrubiaj nazw usług do 700 i nie zwiększaj ich powyżej 20px.
- Nie dodawaj nowych krojów; Work Sans ogranicz do wag 500 i 700, a Oxanium do 400 i 600.
- Nie zwiększaj liczby kolumn oferty powyżej dwóch.
- Nie zmieniaj breakpointów 768px i 820px (header) bez świadomej decyzji.
- Nie dodawaj animacji slide-in/scale ani ujawniania treści przy scrollu.

## 10. Uwagi wdrożeniowe

- `css/global.css` zawiera tokeny, reset, typografię bazową, przyciski i nagłówek. Nieużywane elementy pierwowzoru (karty projektów, formularze, hero-karuzela) zostały usunięte. Aktualny wygląd sekcji definiuje `css/styles.css`.
- `index.html` i `polityka-prywatnosci/index.html` ładują `css/global.css` i `css/styles.css` przez `<link rel="stylesheet">`. Oba arkusze są jedynym źródłem stylów — nie duplikuj ich inline w HTML.
- `--section-space` ma wartość 32px, ale główne sekcje używają `padding-block: var(--space-24)` = 96px.
- Wysokość menu mobilnego jest nadpisana lokalnie do 256px.
- Kafle oferty używają `--radius-card` (16px); przyciski używają `--radius-full` (pełne zaokrąglenie). Tokeny cieni są zdefiniowane, ale nieużywane.
- Nazwy usług są wagą 500, nie 700.
- Sekcja kontaktu używa dokładnie tej samej klasy `.section-title` co oferta i realizacje.
- E-mail i telefon w kontakcie mają `user-select: text`, są linkami `mailto:`/`tel:`, a osobny przycisk „Kopiuj” kopiuje wartość do schowka.
- Nagłówek ma półprzezroczyste tło, rozmycie i widoczne obramowanie; nie ma zaokrągleń ani cienia.
- W obecnym kodzie nie ma osobnego paska nad nagłówkiem; `--color-dark` obsługuje stopkę.
- Stopka ma ciemne tło `--color-dark` i jasny tekst `--color-on-accent`.
- `--color-highlight` jest zdefiniowany, ale obecnie nieużywany.
- Favicon: biały znak „MD” na granatowym tle (`#09426E`); źródło `logo/md-favicon.svg` oraz warianty `logo/favicon.ico`, `logo/favicon-32.png` i `logo/apple-touch-icon.png`. W headerze używany jest granatowy `logo/md-znak.svg`, a `logo/md-znak-bialy.svg` jest wariantem na ciemne tło. Strona nie ma trybu ciemnego.
- Kolory należy definiować wyłącznie przez tokeny semantyczne: `--color-bg`, `--color-surface`, `--color-surface-soft`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-hover`, `--color-accent-soft`, `--color-on-accent`, `--color-link`, `--color-dark`, `--color-border`, `--color-border-strong`, `--color-placeholder`, `--color-highlight`, `--color-focus` i `--section-muted`.
- Primary CTA używa granatu `--color-accent` z białym tekstem; secondary jest biały z chłodnym obramowaniem i ciemnym tekstem.
