
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'ActionList': typeof import("../components/ActionList.vue")['default']
    'ActionPreview': typeof import("../components/ActionPreview.vue")['default']
    'ContactForm': typeof import("../components/ContactForm.vue")['default']
    'ErrorMessage': typeof import("../components/ErrorMessage.vue")['default']
    'FilterBar': typeof import("../components/FilterBar.vue")['default']
    'ForumThreadList': typeof import("../components/ForumThreadList.vue")['default']
    'HeroSection': typeof import("../components/HeroSection.vue")['default']
    'LanguageToggle': typeof import("../components/LanguageToggle.vue")['default']
    'LegislatorContact': typeof import("../components/LegislatorContact.vue")['default']
    'MissionStatement': typeof import("../components/MissionStatement.vue")['default']
    'NewsItem': typeof import("../components/NewsItem.vue")['default']
    'NewsList': typeof import("../components/NewsList.vue")['default']
    'NewsSummary': typeof import("../components/NewsSummary.vue")['default']
    'PartnerList': typeof import("../components/PartnerList.vue")['default']
    'PetitionForm': typeof import("../components/PetitionForm.vue")['default']
    'PrivacyContent': typeof import("../components/PrivacyContent.vue")['default']
    'ShareWidget': typeof import("../components/ShareWidget.vue")['default']
    'VolunteerForm': typeof import("../components/VolunteerForm.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyActionList': LazyComponent<typeof import("../components/ActionList.vue")['default']>
    'LazyActionPreview': LazyComponent<typeof import("../components/ActionPreview.vue")['default']>
    'LazyContactForm': LazyComponent<typeof import("../components/ContactForm.vue")['default']>
    'LazyErrorMessage': LazyComponent<typeof import("../components/ErrorMessage.vue")['default']>
    'LazyFilterBar': LazyComponent<typeof import("../components/FilterBar.vue")['default']>
    'LazyForumThreadList': LazyComponent<typeof import("../components/ForumThreadList.vue")['default']>
    'LazyHeroSection': LazyComponent<typeof import("../components/HeroSection.vue")['default']>
    'LazyLanguageToggle': LazyComponent<typeof import("../components/LanguageToggle.vue")['default']>
    'LazyLegislatorContact': LazyComponent<typeof import("../components/LegislatorContact.vue")['default']>
    'LazyMissionStatement': LazyComponent<typeof import("../components/MissionStatement.vue")['default']>
    'LazyNewsItem': LazyComponent<typeof import("../components/NewsItem.vue")['default']>
    'LazyNewsList': LazyComponent<typeof import("../components/NewsList.vue")['default']>
    'LazyNewsSummary': LazyComponent<typeof import("../components/NewsSummary.vue")['default']>
    'LazyPartnerList': LazyComponent<typeof import("../components/PartnerList.vue")['default']>
    'LazyPetitionForm': LazyComponent<typeof import("../components/PetitionForm.vue")['default']>
    'LazyPrivacyContent': LazyComponent<typeof import("../components/PrivacyContent.vue")['default']>
    'LazyShareWidget': LazyComponent<typeof import("../components/ShareWidget.vue")['default']>
    'LazyVolunteerForm': LazyComponent<typeof import("../components/VolunteerForm.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const ActionList: typeof import("../components/ActionList.vue")['default']
export const ActionPreview: typeof import("../components/ActionPreview.vue")['default']
export const ContactForm: typeof import("../components/ContactForm.vue")['default']
export const ErrorMessage: typeof import("../components/ErrorMessage.vue")['default']
export const FilterBar: typeof import("../components/FilterBar.vue")['default']
export const ForumThreadList: typeof import("../components/ForumThreadList.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const LanguageToggle: typeof import("../components/LanguageToggle.vue")['default']
export const LegislatorContact: typeof import("../components/LegislatorContact.vue")['default']
export const MissionStatement: typeof import("../components/MissionStatement.vue")['default']
export const NewsItem: typeof import("../components/NewsItem.vue")['default']
export const NewsList: typeof import("../components/NewsList.vue")['default']
export const NewsSummary: typeof import("../components/NewsSummary.vue")['default']
export const PartnerList: typeof import("../components/PartnerList.vue")['default']
export const PetitionForm: typeof import("../components/PetitionForm.vue")['default']
export const PrivacyContent: typeof import("../components/PrivacyContent.vue")['default']
export const ShareWidget: typeof import("../components/ShareWidget.vue")['default']
export const VolunteerForm: typeof import("../components/VolunteerForm.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyActionList: LazyComponent<typeof import("../components/ActionList.vue")['default']>
export const LazyActionPreview: LazyComponent<typeof import("../components/ActionPreview.vue")['default']>
export const LazyContactForm: LazyComponent<typeof import("../components/ContactForm.vue")['default']>
export const LazyErrorMessage: LazyComponent<typeof import("../components/ErrorMessage.vue")['default']>
export const LazyFilterBar: LazyComponent<typeof import("../components/FilterBar.vue")['default']>
export const LazyForumThreadList: LazyComponent<typeof import("../components/ForumThreadList.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyLanguageToggle: LazyComponent<typeof import("../components/LanguageToggle.vue")['default']>
export const LazyLegislatorContact: LazyComponent<typeof import("../components/LegislatorContact.vue")['default']>
export const LazyMissionStatement: LazyComponent<typeof import("../components/MissionStatement.vue")['default']>
export const LazyNewsItem: LazyComponent<typeof import("../components/NewsItem.vue")['default']>
export const LazyNewsList: LazyComponent<typeof import("../components/NewsList.vue")['default']>
export const LazyNewsSummary: LazyComponent<typeof import("../components/NewsSummary.vue")['default']>
export const LazyPartnerList: LazyComponent<typeof import("../components/PartnerList.vue")['default']>
export const LazyPetitionForm: LazyComponent<typeof import("../components/PetitionForm.vue")['default']>
export const LazyPrivacyContent: LazyComponent<typeof import("../components/PrivacyContent.vue")['default']>
export const LazyShareWidget: LazyComponent<typeof import("../components/ShareWidget.vue")['default']>
export const LazyVolunteerForm: LazyComponent<typeof import("../components/VolunteerForm.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
