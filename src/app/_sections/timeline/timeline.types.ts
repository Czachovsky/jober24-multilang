export interface TimelineTypes {
  id: string;
  year: string | number;
  header?: string;
  description?: string;
  activeState?: boolean;
  translationKey: string;
}

export const timelineObject: TimelineTypes[] = [
  {
    id: 'owl-slide-0',
    year: 2016,
    header: 'Wejście na rynek Automotive', // fallback po polsku
    description: 'Jober24 rozpoczyna działalność, zdobywając pierwszy duży kontrakt na 160 pracowników w branży motoryzacyjnej. To moment, który wyznacza kierunek dalszego rozwoju i ekspansji.',
    activeState: true,
    translationKey: '2016'
  },
  {
    id: 'owl-slide-1',
    year: 2017,
    header: 'Ekspansja na Wschód',
    description: 'Otwarcie biura w Kijowie pozwala na zwiększenie efektywności rekrutacji i dostępu do ukraińskiego rynku pracy.',
    activeState: false,
    translationKey: '2017'
  },
  {
    id: 'owl-slide-2',
    year: 2018,
    header: 'Globalizacja i wejście na rynki azjatyckie',
    description: 'Jober24 rozszerza działalność na Azję, rekrutując pracowników z Nepalu, Indii, Filipin, Wietnamu i Malezji. Przekroczenie symbolicznej granicy 1000 zatrudnionych osób potwierdza rosnącą pozycję firmy.',
    activeState: false,
    translationKey: '2018'
  },
  {
    id: 'owl-slide-3',
    year: 2019,
    header: 'Wejście na rynek Bliskiego Wschodu',
    description: 'Powstaje spółka Jober24 w Zjednoczonych Emiratach Arabskich, umożliwiająca skuteczniejszą rekrutację i współpracę z lokalnymi partnerami biznesowymi.',
    activeState: false,
    translationKey: '2019'
  },
  {
    id: 'owl-slide-4',
    year: 2020,
    header: 'Siedziba główna w Szwajcarii i wejście w e-commerce',
    description: 'Jober24 przenosi centrum dowodzenia do Szwajcarii, przygotowując strategię ekspansji w Europie Środkowej. Pomimo globalnej pandemii COVID-19 firma utrzymuje pozycję wchodząc w branżę e-commerce.',
    activeState: false,
    translationKey: '2020'
  },
  {
    id: 'owl-slide-5',
    year: 2021,
    header: 'Pierwsze kontrakty IT w bankowości szwajcarskiej',
    description: 'Jober24 zdobywa pierwsze strategiczne kontrakty na dostarczanie specjalistów IT dla banków w Szwajcarii, umacniając swoją pozycję w sektorze finansowym.',
    activeState: false,
    translationKey: '2021'
  },
  {
    id: 'owl-slide-6',
    year: 2022,
    header: 'Wejście w sektor opieki medycznej',
    description: 'Rozszerzenie działalności o branżę opieki zdrowotnej pozwala na dalszą dywersyfikację usług i dostarczanie personelu medycznego.',
    activeState: false,
    translationKey: '2022'
  },
  {
    id: 'owl-slide-7',
    year: 2023,
    header: 'Dalsza ekspansja i konsolidacja rynkowa',
    description: 'Dalsza ekspansja i konsolidacja rynkowa',
    activeState: false,
    translationKey: '2023'
  },
  {
    id: 'owl-slide-8',
    year: 2024,
    header: 'Jober24 AI: Automatyzacja i skalowanie',
    description: 'Firma wdraża zaawansowane rozwiązania AI, które pozwalają na szybsze i bardziej efektywne skalowanie działalności. Nowe produkty oparte na sztucznej inteligencji stają się fundamentem dalszego rozwoju.',
    activeState: false,
    translationKey: '2024'
  },
  {
    id: 'owl-slide-9',
    year: 2025,
    header: 'Transformacja cyfrowa i rozwój technologiczny',
    description: 'Jober24 buduje własny portal AI oraz zaawansowane narzędzia rekrutacyjne wykorzystujące najnowsze technologie informatyczne. Dział IT staje się kluczowym filarem firmy, umożliwiając dalszą automatyzację i globalną ekspansję. Równocześnie Jober24 poszukuje partnerów – producentów robotów humanoidalnych, aby wzmocnić swoją pozycję w sektorze outsourcingu.',
    activeState: false,
    translationKey: '2025'
  }
]
