export interface MenuTypes {
  href: string;
  translationKey: string;
}

export const MenuElements: MenuTypes[] = [
  {
    href: 'services',
    translationKey: 'nav.about'
  },
  {
    href: 'history',
    translationKey: 'nav.history'
  },
  {
    href: 'why-us',
    translationKey: 'nav.services'
  },
  {
    href: 'form',
    translationKey: 'nav.contact'
  }
]
