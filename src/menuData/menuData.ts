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
  CellAspectRatio: number
  CellLayoutType: number
  DisplayOrder: number | null
  ImageName: string | null
  ImageUrl: string | null
  IsDeleted: boolean
  IsMasterOptionSet: boolean
  MaxSelectCount?: number
  MenuItemId: number
  MenuItemOptionSetId: number
  MenuItemOptionSetItems: MenuItemOptionSetItem[]
  MenuItemOptionSetMetadata: []
  MinPrice: number
  MinSelectCount: number
  Name: string | null
  PublicId: string
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
  MenuItemOptionSets: MenuItemOptionSet[] | []
  TaxRate: number | null
  TaxRateId: number | null
  TaxValue: number | null
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
  MenuItems: MenuItem[] | []
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

export const menuData: MenuData = {
  MenuId: 16798,
  MenuVersionNumber: 354,
  VersionGuid: 'e6220da2-c34a-4ea2-bb51-a3e190fc5f08',
  MenuSections: [
    {
      MenuSectionId: 194488,
      Name: 'Demo',
      Description: null,
      DisplayOrder: 1,
      MenuItems: [
        {
          MenuItemId: 1299632,
          Name: 'Salad',
          Description: 'Packed with super foods',
          SpicinessRating: 0,
          Price: 5.0,
          DisplayOrder: 1,
          IsDeleted: false,
          Alcohol: false,
          Tags: [],
          PublicId: '62d6a3b8-7975-4f49-b2c3-a1384068b90f',
          IsAvailable: true,
          MenuItemOptionSets: [
            {
              Name: null,
              MenuItemOptionSetId: 1494260,
              IsMasterOptionSet: false,
              DisplayOrder: 0,
              MinSelectCount: 1,
              MaxSelectCount: 1,
              IsDeleted: false,
              PublicId: '127db94e-fd8e-4d16-ad9f-3b9c232735e4',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 13502386,
                  Name: 'Small',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: 'fb2050e5-fb9e-40d5-ac99-b8b7071bb264',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502387,
                  Name: 'Large',
                  Price: 2.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '8b6ff4e4-2f30-4df3-b308-2c3444edf7a5',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 0.0,
              MenuItemId: 1299632,
              MenuItemOptionSetMetadata: []
            }
          ],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194488,
          ImageName: '2T7TarPTQehVDxIYmoO84wDrOg.jpg',
          ImageUrl: 'https://flipdish.imgix.net/2T7TarPTQehVDxIYmoO84wDrOg.jpg',
          CellAspectRatio: 4.0,
          CellLayoutType: 0,
          ActualPrice: 5.0,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        },
        {
          MenuItemId: 1446427,
          Name: 'Chips',
          Description: 'Fresh cut potato chips.',
          SpicinessRating: null,
          Price: 0.0,
          DisplayOrder: 2,
          IsDeleted: false,
          Alcohol: false,
          Tags: [],
          PublicId: '0ca3c25c-7e1d-4660-b668-3cd2b8cb1fbd',
          IsAvailable: true,
          MenuItemOptionSets: [
            {
              Name: null,
              MenuItemOptionSetId: 1725424,
              IsMasterOptionSet: true,
              DisplayOrder: -1,
              MinSelectCount: 1,
              MaxSelectCount: 1,
              IsDeleted: false,
              PublicId: '823a5b52-9eaa-415a-ab35-17dfc6d2031c',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 15749311,
                  Name: 'Small',
                  Price: 3.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '40629834-8530-48b8-8f39-7a8ef990655e',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15749312,
                  Name: 'Large',
                  Price: 5.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: 1725426,
                  PublicId: '4287deb8-ec59-483a-a6b5-f7f6e28cd5c7',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 3.0,
              MenuItemId: 1446427,
              MenuItemOptionSetMetadata: []
            },
            {
              Name: null,
              MenuItemOptionSetId: 1725425,
              IsMasterOptionSet: false,
              DisplayOrder: 0,
              MinSelectCount: 0,
              MaxSelectCount: 3,
              IsDeleted: false,
              PublicId: 'd44ded87-003c-45c1-967d-d8f754a5624c',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 15749314,
                  Name: 'Cheese',
                  Price: 0.2,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: 1725427,
                  PublicId: 'b8a2e15d-d569-4a1f-a4f6-70008e52c856',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15749315,
                  Name: 'Onions',
                  Price: 0.2,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: -1,
                  PublicId: '49e0f252-259b-4998-8d5e-97f3e5ea9d82',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15749316,
                  Name: 'Sausage',
                  Price: 0.5,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 2,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: -1,
                  PublicId: '87317876-f7b0-4bfe-bf92-4565a4f8af93',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 0.2,
              MenuItemId: 1446427,
              MenuItemOptionSetMetadata: []
            },
            {
              Name: null,
              MenuItemOptionSetId: 1725426,
              IsMasterOptionSet: false,
              DisplayOrder: 1,
              MinSelectCount: 0,
              MaxSelectCount: 3,
              IsDeleted: false,
              PublicId: 'ca68e391-dee2-4664-b5e7-f1ac58f8e1ef',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 15749318,
                  Name: 'Cheese',
                  Price: 0.4,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '0ee71850-c923-479e-a90a-fe53990739f3',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15749319,
                  Name: 'Onions',
                  Price: 0.4,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '35133226-f2b9-41bb-a368-3f4d68f00e77',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15749320,
                  Name: 'Sausage',
                  Price: 0.7,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 2,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: 'df68f484-d2b4-4423-9839-0bd425f69cc0',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 0.4,
              MenuItemId: 1446427,
              MenuItemOptionSetMetadata: []
            },
            {
              Name: null,
              MenuItemOptionSetId: 1725427,
              IsMasterOptionSet: false,
              DisplayOrder: 2,
              MinSelectCount: 0,
              MaxSelectCount: 3,
              IsDeleted: false,
              PublicId: 'f3aa99d1-5ed6-4467-8f1e-7e7c1e69f65f',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 15749322,
                  Name: 'Coke',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '2a6edc52-fbc3-476f-ad4b-1b640dc7550e',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15749323,
                  Name: 'Fanta',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '27b1142a-7c06-4e6f-a6e0-5544670318de',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15749324,
                  Name: 'Sprite',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 2,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '9298c27d-f895-4c74-80a5-5ae8992941f5',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 0.0,
              MenuItemId: 1446427,
              MenuItemOptionSetMetadata: []
            },
            {
              Name: null,
              MenuItemOptionSetId: 1725688,
              IsMasterOptionSet: false,
              DisplayOrder: 3,
              MinSelectCount: 0,
              MaxSelectCount: 3,
              IsDeleted: false,
              PublicId: '3af39c13-7d28-4ff4-b665-0508b6ffe873',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 15751025,
                  Name: 'Dip 1',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '5a0f1d64-1c14-4125-9860-f2f66db30e21',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15751026,
                  Name: 'Dip 2',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '3a94bc7c-32e5-4750-80b5-62960f1b7e0f',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15751027,
                  Name: 'Dip 3',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 2,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '91fb760a-bb6f-4f3f-83f3-261686ccf56b',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 0.0,
              MenuItemId: 1446427,
              MenuItemOptionSetMetadata: []
            }
          ],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194488,
          ImageName: 'zFmVJnGkEz491eEByXVyM6eI8.jpg',
          ImageUrl: 'https://flipdish.imgix.net/zFmVJnGkEz491eEByXVyM6eI8.jpg',
          CellAspectRatio: 2.0,
          CellLayoutType: 1,
          ActualPrice: 3.0,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        }
      ],
      PublicId: '3a4baa42-e13c-4de1-9aad-d81c8c97e2ef',
      IsDeleted: false,
      IsAvailable: true,
      IsHiddenFromUsers: false,
      ImageName: '8m08qBE8ucUxU1a6d2gE4IWMQg.jpg',
      ImageUrl: 'https://flipdish.imgix.net/8m08qBE8ucUxU1a6d2gE4IWMQg.jpg',
      CellAspectRatio: 4.0,
      CellLayoutType: 0,
      MenuSectionAvailability: {
        MenuSectionId: 194488,
        AvailableTimes: null,
        AvailabilityMode: 0
      },
      ConcessionStoreId: null,
      MenuSectionMetadata: []
    },
    {
      MenuSectionId: 194490,
      Name: 'Mains',
      Description: null,
      DisplayOrder: 0,
      MenuItems: [
        {
          MenuItemId: 1299634,
          Name: 'Curry',
          Description: '',
          SpicinessRating: 0,
          Price: 10.0,
          DisplayOrder: 1,
          IsDeleted: false,
          Alcohol: false,
          Tags: [],
          PublicId: '0f19f344-2adc-4eb5-8b1e-3807ccf4d9ce',
          IsAvailable: true,
          MenuItemOptionSets: [],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194490,
          ImageName: 'TTyzcRMqPdxtgGCrjjC3kX72tU.jpg',
          ImageUrl: 'https://flipdish.imgix.net/TTyzcRMqPdxtgGCrjjC3kX72tU.jpg',
          CellAspectRatio: 1.3,
          CellLayoutType: 2,
          ActualPrice: 10.0,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        },
        {
          MenuItemId: 1299635,
          Name: 'Pizza',
          Description: '',
          SpicinessRating: 0,
          Price: 10.0,
          DisplayOrder: 2,
          IsDeleted: false,
          Alcohol: false,
          Tags: [],
          PublicId: '8cf6d444-932c-429c-b898-b732f1b3dcaf',
          IsAvailable: true,
          MenuItemOptionSets: [],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194490,
          ImageName: 'z7KOvSzCTNqntCjtrSuBwHNkTEo.jpg',
          ImageUrl:
            'https://flipdish.imgix.net/z7KOvSzCTNqntCjtrSuBwHNkTEo.jpg',
          CellAspectRatio: 1.3,
          CellLayoutType: 2,
          ActualPrice: 10.0,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        },
        {
          MenuItemId: 1299636,
          Name: 'Burger',
          Description: '',
          SpicinessRating: 0,
          Price: 10.0,
          DisplayOrder: 3,
          IsDeleted: false,
          Alcohol: false,
          Tags: [],
          PublicId: '4315edcb-df23-415f-a763-438ac9b7e2fd',
          IsAvailable: true,
          MenuItemOptionSets: [
            {
              Name: null,
              MenuItemOptionSetId: 1494263,
              IsMasterOptionSet: false,
              DisplayOrder: 0,
              MinSelectCount: 0,
              MaxSelectCount: 4,
              IsDeleted: false,
              PublicId: '796c3858-3580-4c66-9bf3-e2f877d6605b',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 13502402,
                  Name: 'Cheese',
                  Price: 0.5,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '7a9f0344-ce7e-491e-824c-4ba319114b2f',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502403,
                  Name: 'Bacon',
                  Price: 1.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '800760a4-1dc0-4db2-a552-2a7e80ec7b05',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502404,
                  Name: 'Ketchup',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 2,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '1944a354-7d46-4b21-b909-67f43d0cee4a',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502405,
                  Name: 'Mayonnaise',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 3,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '42bdea98-ed6b-4cf5-8ece-ed046b8e12c6',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 0.0,
              MenuItemId: 1299636,
              MenuItemOptionSetMetadata: []
            }
          ],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194490,
          ImageName: 'FPY9VoQWKX8cItuATEYfxIu0WQ.jpg',
          ImageUrl: 'https://flipdish.imgix.net/FPY9VoQWKX8cItuATEYfxIu0WQ.jpg',
          CellAspectRatio: 1.3,
          CellLayoutType: 2,
          ActualPrice: 10.0,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        }
      ],
      PublicId: '0dfc594c-5fd5-4a94-b7c0-b7c9dbc2d71e',
      IsDeleted: false,
      IsAvailable: true,
      IsHiddenFromUsers: false,
      ImageName: '5csY9WytLuMFRJQt29QkV94iAps.jpg',
      ImageUrl: 'https://flipdish.imgix.net/5csY9WytLuMFRJQt29QkV94iAps.jpg',
      CellAspectRatio: 4.0,
      CellLayoutType: 0,
      MenuSectionAvailability: {
        AvailableTimes: [
          {
            BusinessHoursPeriodId: 474055,
            DayOfWeek: 1,
            StartTime: '01:00:00',
            Period: '23:00:00',
            StartTimeEarly: '00:00:00',
            PeriodEarly: '00:00:00'
          },
          {
            BusinessHoursPeriodId: 474056,
            DayOfWeek: 2,
            StartTime: '01:00:00',
            Period: '23:00:00',
            StartTimeEarly: '00:00:00',
            PeriodEarly: '00:00:00'
          },
          {
            BusinessHoursPeriodId: 474057,
            DayOfWeek: 3,
            StartTime: '11:30:00',
            Period: '02:10:00',
            StartTimeEarly: '11:30:00',
            PeriodEarly: '00:00:00'
          },
          {
            BusinessHoursPeriodId: 474058,
            DayOfWeek: 4,
            StartTime: '01:00:00',
            Period: '23:00:00',
            StartTimeEarly: '00:00:00',
            PeriodEarly: '00:00:00'
          },
          {
            BusinessHoursPeriodId: 474059,
            DayOfWeek: 5,
            StartTime: '01:00:00',
            Period: '23:00:00',
            StartTimeEarly: '00:00:00',
            PeriodEarly: '00:00:00'
          },
          {
            BusinessHoursPeriodId: 474060,
            DayOfWeek: 6,
            StartTime: '01:00:00',
            Period: '23:00:00',
            StartTimeEarly: '00:00:00',
            PeriodEarly: '00:00:00'
          },
          {
            BusinessHoursPeriodId: 474061,
            DayOfWeek: 0,
            StartTime: '01:00:00',
            Period: '23:00:00',
            StartTimeEarly: '00:00:00',
            PeriodEarly: '00:00:00'
          }
        ],
        MenuSectionId: 194490,
        AvailabilityMode: 1
      },
      ConcessionStoreId: null,
      MenuSectionMetadata: []
    },
    {
      MenuSectionId: 194491,
      Name: 'Desserts',
      Description: null,
      DisplayOrder: 4,
      MenuItems: [
        {
          MenuItemId: 1299637,
          Name: 'Icecream',
          Description: 'Deliciously creamy ice cream with your choice of sauce',
          SpicinessRating: 0,
          Price: 3.5,
          DisplayOrder: 0,
          IsDeleted: false,
          Alcohol: false,
          Tags: [],
          PublicId: '372914a3-8b7a-414e-9d11-97b988a3b364',
          IsAvailable: true,
          MenuItemOptionSets: [
            {
              Name: 'Sauces',
              MenuItemOptionSetId: 1494264,
              IsMasterOptionSet: false,
              DisplayOrder: 0,
              MinSelectCount: 1,
              MaxSelectCount: 1,
              IsDeleted: false,
              PublicId: 'b709d0d5-b42f-4a22-828a-035b06da42aa',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 13502392,
                  Name: 'Chocolate',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: 'ddacb802-4e92-44aa-8e46-fa7640116afc',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502393,
                  Name: 'Strawberry',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '275982a9-7067-4d1a-bccd-5945ac2fc6f3',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 0.0,
              MenuItemId: 1299637,
              MenuItemOptionSetMetadata: []
            }
          ],
          TaxRate: null,
          TaxRateId: 380,
          TaxValue: 0.32,
          MenuSectionId: 194491,
          ImageName: 'cRJ9ubL6lr7cDTxeDxsOQZzQ.jpg',
          ImageUrl: 'https://flipdish.imgix.net/cRJ9ubL6lr7cDTxeDxsOQZzQ.jpg',
          CellAspectRatio: 2.0,
          CellLayoutType: 1,
          ActualPrice: 3.5,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        },
        {
          MenuItemId: 1299638,
          Name: 'Fruit Salad',
          Description:
            'The healthy option, a tasty dish of ripe fruit, all hand picked from selected crops',
          SpicinessRating: null,
          Price: 3.5,
          DisplayOrder: 1,
          IsDeleted: false,
          Alcohol: false,
          Tags: [],
          PublicId: 'd65460c5-6424-4031-89ec-fa751349e77d',
          IsAvailable: true,
          MenuItemOptionSets: [],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194491,
          ImageName: 'RYiyJJtRIdc2rBJxCkTlrXvfsE.jpg',
          ImageUrl: 'https://flipdish.imgix.net/RYiyJJtRIdc2rBJxCkTlrXvfsE.jpg',
          CellAspectRatio: 2.0,
          CellLayoutType: 1,
          ActualPrice: 3.5,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        }
      ],
      PublicId: '78205d6c-9a9f-4b1e-902b-644a43cfe4f1',
      IsDeleted: false,
      IsAvailable: true,
      IsHiddenFromUsers: false,
      ImageName: 'nZQQORDsRKLdm7TqApQFTCr0M.jpg',
      ImageUrl: 'https://flipdish.imgix.net/nZQQORDsRKLdm7TqApQFTCr0M.jpg',
      CellAspectRatio: 4.0,
      CellLayoutType: 0,
      MenuSectionAvailability: {
        MenuSectionId: 194491,
        AvailableTimes: null,
        AvailabilityMode: 0
      },
      ConcessionStoreId: null,
      MenuSectionMetadata: []
    },
    {
      MenuSectionId: 194492,
      Name: 'Drinks',
      Description: null,
      DisplayOrder: 5,
      MenuItems: [
        {
          MenuItemId: 1299639,
          Name: 'Wine',
          Description:
            'Accompany your meal with the finest wines, imported by Wine Co.',
          SpicinessRating: null,
          Price: 0.0,
          DisplayOrder: 0,
          IsDeleted: false,
          Alcohol: true,
          Tags: [],
          PublicId: 'f17ced6f-eda0-4955-9b03-3e89818f016a',
          IsAvailable: true,
          MenuItemOptionSets: [
            {
              Name: null,
              MenuItemOptionSetId: 1494265,
              IsMasterOptionSet: false,
              DisplayOrder: 0,
              MinSelectCount: 1,
              MaxSelectCount: 1,
              IsDeleted: false,
              PublicId: '561d7f64-b172-4df9-a895-3875b2503da5',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 13502394,
                  Name: 'House White, 350ml',
                  Price: 6.5,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '6c1cebe1-0d66-46f4-8d72-ea9c5170b6ce',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502395,
                  Name: 'House Red, 350ml',
                  Price: 6.99,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '17b50a13-f727-4787-a4ae-d306b54e61b7',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502396,
                  Name: 'House White, 700ml',
                  Price: 12.5,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 2,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '2b736905-998e-43ee-97db-c4c695b5b62c',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502397,
                  Name: 'House Red, 700ml',
                  Price: 12.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 3,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '9e088477-04d3-4f1e-b3ac-d87480bd05c0',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502398,
                  Name: 'Moet, 350ml',
                  Price: 14.5,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 4,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '2191dfd7-07cb-4f0b-bd30-2d45967c2b39',
                  ImageName: 'KF6W9tlrtFJRaoeBmW8hn6QyL2g.jpg',
                  ImageUrl:
                    'https://flipdish.imgix.net/KF6W9tlrtFJRaoeBmW8hn6QyL2g.jpg',
                  CellAspectRatio: 2.0,
                  CellLayoutType: 1,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 6.5,
              MenuItemId: 1299639,
              MenuItemOptionSetMetadata: []
            }
          ],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194492,
          ImageName: 'aEes3Ishnof6jbMX0HqADDVhM.jpg',
          ImageUrl: 'https://flipdish.imgix.net/aEes3Ishnof6jbMX0HqADDVhM.jpg',
          CellAspectRatio: 4.0,
          CellLayoutType: 0,
          ActualPrice: 0.0,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        },
        {
          MenuItemId: 1299640,
          Name: 'Soft Drinks',
          Description: null,
          SpicinessRating: null,
          Price: 2.0,
          DisplayOrder: 1,
          IsDeleted: false,
          Alcohol: false,
          Tags: [],
          PublicId: 'e6c38e2d-7ee2-4f16-96de-b023195a0862',
          IsAvailable: true,
          MenuItemOptionSets: [
            {
              Name: null,
              MenuItemOptionSetId: 1494267,
              IsMasterOptionSet: false,
              DisplayOrder: 0,
              MinSelectCount: 1,
              MaxSelectCount: 1,
              IsDeleted: false,
              PublicId: 'f03d98dd-a8d2-46e9-b26d-6e3445409556',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 13502406,
                  Name: 'Coca-Cola',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '730d6095-21fa-469f-959b-320acd52f50c',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502407,
                  Name: 'Fanta',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '9917a180-e55b-4345-9ddb-8e88d3abe461',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502408,
                  Name: 'Sprite',
                  Price: 0.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 2,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: 'a1b6d5d0-ca9a-474c-8449-c3bc3d918b00',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 0.0,
              MenuItemId: 1299640,
              MenuItemOptionSetMetadata: []
            }
          ],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194492,
          ImageName: 'JuPghl3jcuniJBDfuHbeDayswps.png',
          ImageUrl:
            'https://flipdish.imgix.net/JuPghl3jcuniJBDfuHbeDayswps.png',
          CellAspectRatio: 0.0,
          CellLayoutType: 0,
          ActualPrice: 2.0,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        },
        {
          MenuItemId: 1299641,
          Name: 'Beer',
          Description:
            'Enjoy a cold bottle of beer or Guinness. Only available between 10am and 10pm 🕒',
          SpicinessRating: null,
          Price: 0.0,
          DisplayOrder: 2,
          IsDeleted: false,
          Alcohol: true,
          Tags: [],
          PublicId: '0e04571f-a24b-46f8-90a7-51f920c40886',
          IsAvailable: true,
          MenuItemOptionSets: [
            {
              Name: '',
              MenuItemOptionSetId: 1494266,
              IsMasterOptionSet: true,
              DisplayOrder: -1,
              MinSelectCount: 1,
              MaxSelectCount: 3,
              IsDeleted: false,
              PublicId: 'fc71601c-4d34-4d1c-a52a-5a11b471b361',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 13502399,
                  Name: 'Heineken 330ml',
                  Price: 4.5,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: 'f8dbd5e9-ad2d-4177-9091-d3fa9e293b9a',
                  ImageName: 'R4ug1NE7sff5lDBWX29QGxWRb4.jpg',
                  ImageUrl:
                    'https://flipdish.imgix.net/R4ug1NE7sff5lDBWX29QGxWRb4.jpg',
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502400,
                  Name: 'Corona 330ml',
                  Price: 4.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '485e15f0-9e14-4640-989e-255e95f4bbb6',
                  ImageName: 'vtbUrL8h0yOYTqAT0nl67bV0k.jpg',
                  ImageUrl:
                    'https://flipdish.imgix.net/vtbUrL8h0yOYTqAT0nl67bV0k.jpg',
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 13502401,
                  Name: 'Guinness, 352ml',
                  Price: 5.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 2,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '845f418e-1123-4ed2-aee5-f9a5d06c1ab2',
                  ImageName: 'x1VjP8czgrk3vvkWNfWZIYDWtVo.jpg',
                  ImageUrl:
                    'https://flipdish.imgix.net/x1VjP8czgrk3vvkWNfWZIYDWtVo.jpg',
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 4.0,
              MenuItemId: 1299641,
              MenuItemOptionSetMetadata: []
            }
          ],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194492,
          ImageName: 'kCgLvhON0o5TkszURUDLQ6dZws.jpg',
          ImageUrl: 'https://flipdish.imgix.net/kCgLvhON0o5TkszURUDLQ6dZws.jpg',
          CellAspectRatio: 0.0,
          CellLayoutType: 0,
          ActualPrice: 4.0,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        },
        {
          MenuItemId: 1418642,
          Name: "Chris's test item",
          Description: '\n',
          SpicinessRating: 0,
          Price: 0.0,
          DisplayOrder: 3,
          IsDeleted: false,
          Alcohol: false,
          Tags: [],
          PublicId: '8d9c30ca-03e4-4dea-a52d-d6123a20c82d',
          IsAvailable: true,
          MenuItemOptionSets: [
            {
              Name: 'sauces',
              MenuItemOptionSetId: 1668206,
              IsMasterOptionSet: true,
              DisplayOrder: -1,
              MinSelectCount: 1,
              MaxSelectCount: 1,
              IsDeleted: false,
              PublicId: '00000000-0000-0000-0000-000000000000',
              MenuItemOptionSetItems: [
                {
                  MenuItemOptionSetItemId: 15088665,
                  Name: 'bbq',
                  Price: 1.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 0,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '903e8b31-b5df-4156-a67b-81b725fd5f06',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                },
                {
                  MenuItemOptionSetItemId: 15088666,
                  Name: 'blue cheese',
                  Price: 2.0,
                  TaxRateId: null,
                  TaxRate: null,
                  TaxValue: 0.0,
                  IsAvailable: true,
                  DisplayOrder: 1,
                  IsDeleted: false,
                  Tags: [],
                  NextMenuItemOptionSetId: null,
                  PublicId: '2ddd327f-b5f2-460d-be76-4d1a8b5ba9c5',
                  ImageName: null,
                  ImageUrl: null,
                  CellAspectRatio: 0.0,
                  CellLayoutType: 0,
                  OptionSetItemMetadata: []
                }
              ],
              ImageName: null,
              ImageUrl: null,
              CellAspectRatio: 0.0,
              CellLayoutType: 0,
              MinPrice: 1.0,
              MenuItemId: 1418642,
              MenuItemOptionSetMetadata: []
            }
          ],
          TaxRate: null,
          TaxRateId: null,
          TaxValue: 0.0,
          MenuSectionId: 194492,
          ImageName: null,
          ImageUrl: null,
          CellAspectRatio: 0.0,
          CellLayoutType: 0,
          ActualPrice: 1.0,
          DisableVouchers: false,
          ExcludeFromVoucherDiscounting: false,
          DailySpecialHours: [],
          PriceCanIncrease: false,
          MenuItemMetadata: []
        }
      ],
      PublicId: 'ebb95bab-2396-4897-87fe-73f909b9a04e',
      IsDeleted: false,
      IsAvailable: true,
      IsHiddenFromUsers: false,
      ImageName: 'WjujET5SAiSIY1ETr0GdNJ20HCM.jpg',
      ImageUrl: 'https://flipdish.imgix.net/WjujET5SAiSIY1ETr0GdNJ20HCM.jpg',
      CellAspectRatio: 4.0,
      CellLayoutType: 0,
      MenuSectionAvailability: {
        MenuSectionId: 194492,
        AvailableTimes: null,
        AvailabilityMode: 0
      },
      ConcessionStoreId: null,
      MenuSectionMetadata: []
    },
    {
      MenuSectionId: 296734,
      Name: 'Test new section',
      Description: '',
      DisplayOrder: 7,
      MenuItems: [],
      PublicId: '00000000-0000-0000-0000-000000000000',
      IsDeleted: false,
      IsAvailable: true,
      IsHiddenFromUsers: false,
      ImageName: null,
      ImageUrl: null,
      CellAspectRatio: 0.0,
      CellLayoutType: 0,
      MenuSectionAvailability: {
        MenuSectionId: 296734,
        AvailableTimes: null,
        AvailabilityMode: 0
      },
      ConcessionStoreId: null,
      MenuSectionMetadata: []
    }
  ],
  MenuSectionBehaviour: 1,
  DisplaySectionLinks: true,
  ConcessionStores: []
}
