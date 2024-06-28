import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CostCenterOccModule, ExternalRoutesModule, ProductModule, ProductOccModule, provideFeatureToggles, UserModule, UserOccModule } from "@spartacus/core";
import { AnonymousConsentManagementBannerModule, AnonymousConsentsDialogModule, BannerCarouselModule, BannerModule, BreadcrumbModule, CategoryNavigationModule, CmsParagraphModule, ConsentManagementModule, FooterNavigationModule, HamburgerMenuModule, HomePageEventModule, LinkModule, LoginRouteModule, LogoutModule, MyAccountV2Module, MyCouponsModule, MyInterestsModule, NavigationEventModule, NavigationModule, NotificationPreferenceModule, PageTitleModule, PaymentMethodsModule, PDFModule, ProductCarouselModule, ProductDetailsPageModule, ProductFacetNavigationModule, ProductImagesModule, ProductIntroModule, ProductListingPageModule, ProductListModule, ProductPageEventModule, ProductReferencesModule, ProductSummaryModule, ProductTabsModule, ScrollToTopModule, SearchBoxModule, SiteContextSelectorModule, TabParagraphContainerModule, VideoModule } from "@spartacus/storefront";
import { AsmCustomer360FeatureModule } from './features/asm/asm-customer360-feature.module';
import { AsmFeatureModule } from './features/asm/asm-feature.module';
import { CartBaseFeatureModule } from './features/cart/cart-base-feature.module';
import { CartImportExportFeatureModule } from './features/cart/cart-import-export-feature.module';
import { CartQuickOrderFeatureModule } from './features/cart/cart-quick-order-feature.module';
import { CartSavedCartFeatureModule } from './features/cart/cart-saved-cart-feature.module';
import { WishListFeatureModule } from './features/cart/wish-list-feature.module';
import { CheckoutFeatureModule } from './features/checkout/checkout-feature.module';
import { OrderFeatureModule } from './features/order/order-feature.module';
import { ProductImageZoomFeatureModule } from './features/product/product-image-zoom-feature.module';
import { ProductVariantsFeatureModule } from './features/product/product-variants-feature.module';
import { SmartEditFeatureModule } from './features/smartedit/smart-edit-feature.module';
import { StoreFinderFeatureModule } from './features/storefinder/store-finder-feature.module';
import { PersonalizationFeatureModule } from './features/tracking/personalization-feature.module';
import { TagManagementFeatureModule } from './features/tracking/tag-management-feature.module';
import { UserFeatureModule } from './features/user/user-feature.module';

@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot(),
    LogoutModule,
    LoginRouteModule,
    HamburgerMenuModule,
    SiteContextSelectorModule,
    LinkModule,
    BannerModule,
    CmsParagraphModule,
    TabParagraphContainerModule,
    BannerCarouselModule,
    CategoryNavigationModule,
    NavigationModule,
    FooterNavigationModule,
    BreadcrumbModule,
    ScrollToTopModule,
    PageTitleModule,
    VideoModule,
    PDFModule,
    UserModule,
    UserOccModule,
    PaymentMethodsModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    MyAccountV2Module,
    ConsentManagementModule,
    MyCouponsModule,
    AnonymousConsentsModule.forRoot(),
    AnonymousConsentsDialogModule,
    AnonymousConsentManagementBannerModule,
    ProductModule.forRoot(),
    ProductOccModule,
    ProductDetailsPageModule,
    ProductListingPageModule,
    ProductListModule,
    SearchBoxModule,
    ProductFacetNavigationModule,
    ProductTabsModule,
    ProductCarouselModule,
    ProductReferencesModule,
    ProductImagesModule,
    ProductSummaryModule,
    ProductIntroModule,
    CostCenterOccModule,
    NavigationEventModule,
    HomePageEventModule,
    ProductPageEventModule,
    ExternalRoutesModule.forRoot(),
    UserFeatureModule,
    CartBaseFeatureModule,
    CartSavedCartFeatureModule,
    WishListFeatureModule,
    CartQuickOrderFeatureModule,
    CartImportExportFeatureModule,
    OrderFeatureModule,
    CheckoutFeatureModule,
    PersonalizationFeatureModule,
    TagManagementFeatureModule,
    StoreFinderFeatureModule,
    AsmFeatureModule,
    AsmCustomer360FeatureModule,
    SmartEditFeatureModule,
    ProductVariantsFeatureModule,
    ProductImageZoomFeatureModule,

  ],
  providers: [provideFeatureToggles({
    "showPromotionsInPDP": true,
    "recentSearches": true,
    "pdfInvoicesSortByInvoiceDate": true,
    "storeFrontLibCardParagraphTruncated": true,
    "productConfiguratorAttributeTypesV2": true,
    "a11yRequiredAsterisks": true,
    "a11yQuantityOrderTabbing": true,
    "a11yNavigationUiKeyboardControls": true,
    "a11yOrderConfirmationHeadingOrder": true,
    "a11yStarRating": true,
    "a11yViewChangeAssistiveMessage": true,
    "a11yReorderDialog": true,
    "a11yPopoverFocus": true,
    "a11yScheduleReplenishment": true,
    "a11yScrollToTop": true,
    "a11ySavedCartsZoom": true,
    "a11ySortingOptionsTruncation": true,
    "a11yExpandedFocusIndicator": true,
    "a11yCheckoutDeliveryFocus": true,
    "a11yMobileVisibleFocus": true,
    "a11yOrganizationsBanner": true,
    "a11yOrganizationListHeadingOrder": true,
    "a11yReplenishmentOrderFieldset": true,
    "a11yListOversizedFocus": true,
    "a11yStoreFinderOverflow": true,
    "a11yCartSummaryHeadingOrder": true,
    "a11yUnitsListKeyboardControls": true,
    "a11yCartItemsLinksStyles": true,
    "a11yFocusableCarouselControls": true,
    "cartQuickOrderRemoveListeningToFailEvent": true
  })]
})
export class SpartacusFeaturesModule { }
