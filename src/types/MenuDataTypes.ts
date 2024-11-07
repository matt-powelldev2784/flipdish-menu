export interface MenuItemOptionSetItem {
  MenuItemOptionSetItemId: number
  Name: string
  Price: number
  TaxRateId: number | null
  TaxRate: number | null
  TaxValue: number
  IsAvailable: boolean
  DisplayOrder: number
  IsDeleted: boolean
  Tags: string[]
  NextMenuItemOptionSetId: number | null
  PublicId: string
  ImageName: string | null
  ImageUrl: string | null
  CellAspectRatio: number
  CellLayoutType: number
  OptionSetItemMetadata: []
  MaxSelectCount?: number
}

export interface MenuItemOptionSet {
  MenuItemOptionSetId: number
  Name: string | null
  IsMasterOptionSet: boolean
  DisplayOrder: number
  MenuItemOptionSetItems: MenuItemOptionSetItem[]
  MinSelectCount: number
  MaxSelectCount?: number
  IsDeleted: boolean
  PublicId: string
  ImageName: string | null
  ImageUrl: string | null
  CellAspectRatio: number
  CellLayoutType: number
  MinPrice: number
  MenuItemId: number
  MenuItemOptionSetMetadata: []
}

export interface MenuItem {
  MenuItemId: number
  Name: string
  Description: string | null
  SpicinessRating: number | null
  Price: number
  DisplayOrder: number
  IsDeleted: boolean
  Alcohol: boolean
  Tags: string[]
  PublicId: string
  IsAvailable: boolean
  MenuItemOptionSets: MenuItemOptionSet[]
  TaxRate?: number | null
  TaxRateId?: number | null
  TaxValue?: number | null
  MenuSectionId: number
  ImageName: string | null
  ImageUrl: string | null
  CellAspectRatio: number
  CellLayoutType: number
  ActualPrice: number
  DisableVouchers: boolean
  ExcludeFromVoucherDiscounting: boolean
  DailySpecialHours: []
  DailySpecialPrice?: number
  PriceCanIncrease: boolean
  MenuItemMetadata: []
}

export interface AvailableTimes {
  BusinessHoursPeriodId: number
  DayOfWeek: number
  StartTime: string
  Period: string
  StartTimeEarly: string
  PeriodEarly: string
}

export interface MenuSectionAvailability {
  MenuSectionId: number
  AvailableTimes: null | AvailableTimes[]
  AvailabilityMode: number
}

export interface MenuSection {
  MenuSectionId: number
  Name: string
  Description: string | null
  DisplayOrder: number
  MenuItems: MenuItem[]
  PublicId?: string
  IsDeleted: boolean
  IsAvailable: boolean
  IsHiddenFromUsers: boolean
  ImageName: string | null
  ImageUrl: string | null
  CellAspectRatio: number
  CellLayoutType: number
  MenuSectionAvailability: MenuSectionAvailability
  ConcessionStoreId?: number | null
  MenuSectionMetadata: []
}

export interface MenuData {
  MenuId: number
  MenuVersionNumber: number
  VersionGuid: string
  MenuSections: MenuSection[]
  MenuSectionBehaviour: number
  DisplaySectionLinks: boolean
  ConcessionStores: []
}
