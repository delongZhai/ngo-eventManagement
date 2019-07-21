export interface IAdminUser {
    _id?: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    contactNum?: string,
    address?: string,
    adminRole: boolean
}
