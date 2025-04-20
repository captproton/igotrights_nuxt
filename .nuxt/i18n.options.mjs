
// @ts-nocheck


export const localeCodes =  [
  "en",
  "es",
  "ht"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.json", load: () => import("../locales/en.json" /* webpackChunkName: "locale__Users_carltanner_dev_igotrights_nuxt_locales_en_json" */), cache: true }],
  "es": [{ key: "../locales/es.json", load: () => import("../locales/es.json" /* webpackChunkName: "locale__Users_carltanner_dev_igotrights_nuxt_locales_es_json" */), cache: true }],
  "ht": [{ key: "../locales/ht.json", load: () => import("../locales/ht.json" /* webpackChunkName: "locale__Users_carltanner_dev_igotrights_nuxt_locales_ht_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "name": "English",
      "files": [
        "/Users/carltanner/dev/igotrights_nuxt/locales/en.json"
      ]
    },
    {
      "code": "es",
      "name": "Español",
      "files": [
        "/Users/carltanner/dev/igotrights_nuxt/locales/es.json"
      ]
    },
    {
      "code": "ht",
      "name": "Kreyòl Ayisyen",
      "files": [
        "/Users/carltanner/dev/igotrights_nuxt/locales/ht.json"
      ]
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "name": "English",
    "files": [
      {
        "path": "/Users/carltanner/dev/igotrights_nuxt/locales/en.json"
      }
    ]
  },
  {
    "code": "es",
    "name": "Español",
    "files": [
      {
        "path": "/Users/carltanner/dev/igotrights_nuxt/locales/es.json"
      }
    ]
  },
  {
    "code": "ht",
    "name": "Kreyòl Ayisyen",
    "files": [
      {
        "path": "/Users/carltanner/dev/igotrights_nuxt/locales/ht.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
