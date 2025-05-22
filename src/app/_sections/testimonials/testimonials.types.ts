export interface TestimonialsTypes {
  score: number;
  header: string;
  opinion: string;
  name: string;
  company: string;
}

export const testimonials: TestimonialsTypes[] = [
  {
    score: 5,
    header: "110 osób w 10 dni – ratunek dla firmy na start sezonu letniego",
    opinion: 'Zbliżał się sezon letni, a firma usługowa mierzyła się z problemem braków kadrowych – urlopy stałych pracowników i nieskuteczność innych agencji sprawiły, że nie było możliwości obsługi wszystkich klientów. Potrzebna była natychmiastowa reakcja, ale konkurencyjne agencje dostarczały tylko pojedynczych kandydatów. Dzięki Jober24 w 10 dni udało się zbudować pełny 110-osobowy zespół.',
    name: "Anna N.",
    company: "Zakłady drobiarskie"
  },
  {
    score: 5,
    header: "18 inżynierów lotnictwa w 14 dni – ekspresowa rekrutacja dla lidera branży",
    opinion: "Globalny producent komponentów lotniczych stanął przed nagłym wyzwaniem – pilnie potrzebował 18 wysoko wykwalifikowanych inżynierów, aby nadążyć za rosnącym zapotrzebowaniem i dotrzymać terminów kluczowych kontraktów. Dzięki Jober24 i naszej 24/7 globalnej sieci rekrutacyjnej, w zaledwie 14 dni dostarczyliśmy kompletny zespół inżynierów ze specjalizacją w aerodynamice, awionice i kompozytach.",
    name: "Marek K.",
    company: "AIRBUS"
  },
  {
    score: 5,
    header: "50 osób w 7 dni – ekspresowa rekrutacja dla e-commerce w szczycie sprzedaży",
    opinion: "Dynamicznie rozwijający się sklep e-commerce stanął przed wyzwaniem nagłego wzrostu zamówień w sezonie sprzedażowym. Brak dodatkowych rąk do pracy groził opóźnieniami w realizacji zamówień i spadkiem zadowolenia klientów. Dzięki Jober24 i naszej błyskawicznej rekrutacji 24/7, w 7 dni dostarczyliśmy 50 wykwalifikowanych pracowników magazynowych i logistycznych, gotowych do natychmiastowego działania.",
    name: "Jan W.",
    company: "Logistic"
  }
];
