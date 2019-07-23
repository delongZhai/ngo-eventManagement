export interface IAdminEvent {
    _id?: string,
    name: string,
    category: string,
    startdate: string,
    starttime: string,
    enddate: string,
    endtime: string,
    location: string,
    allowRegister: boolean,
    imageUrl: string,
    adultPrice: number,
    childPrice: number
}
