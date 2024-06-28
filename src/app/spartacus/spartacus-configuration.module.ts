import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { CheckoutConfig } from '@spartacus/checkout/base/root';
import { AuthConfig, FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig, PWAModuleConfig } from "@spartacus/storefront";
import { environment } from '../../environments/environment';
import { CartConfig } from '@spartacus/cart/base/root';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig), ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          prefix: environment.backend.occ.prefix,
          baseUrl: environment.backend.occ.baseUrl,
        }
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {},
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '2211.19'
      }
    }),
    provideConfig(<PWAModuleConfig>{
      pwa: {
        enabled: true,
        addToHomeScreen: true,
      }
    }),
    provideConfig(<CheckoutConfig>{
      checkout: {
        guest: true
      }
    }),
    provideConfig(<AuthConfig>{
      authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret',
      },
    }), provideConfig(<OccConfig>{
      backend: environment.backend,
    }),
    provideConfig(<CartConfig>{
      cart: {
        validation: {
          enabled: true,
        },
      },
    })]
})
export class SpartacusConfigurationModule { }
