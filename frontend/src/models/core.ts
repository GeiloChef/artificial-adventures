export interface LanguageItem {
  key: string,
  name: string,
  momentLocale: string,
  strapiLocale: string,
  i18nLocale: string,
  flagCode: string
}

export interface LanguagesObject {
  german: LanguageItem,
  english: LanguageItem
  spanish: LanguageItem
}

export const Languages: LanguagesObject = {
  german: {
    key: 'de',
    name: 'Deutsch',
    momentLocale: 'de',
    strapiLocale: 'de',
    i18nLocale: 'de',
    flagCode: 'de'
  },
  english: {
    key: 'gb',
    name: 'English',
    momentLocale: 'en-gb',
    strapiLocale: 'en',
    i18nLocale: 'en',
    flagCode: 'gb'
  },
  spanish: {
    key: 'es',
    name: 'Spanish',
    momentLocale: 'es',
    strapiLocale: 'es',
    i18nLocale: 'es',
    flagCode: 'es'
  }
};