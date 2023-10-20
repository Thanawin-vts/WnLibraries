export interface DashboardDataModel {
  dataHeader: string,
  totalCount: Number,
  subtitle?: DashboardSubDataModel[]
}

export interface DashboardSubDataModel {
  subHeader: string,
  count: Number
}