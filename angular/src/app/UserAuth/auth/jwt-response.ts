export interface JwtResponse
{
    user: {
        _id:number,
        email:string,
        token:string,
        expiresIn:string,
        adminRole:boolean
    }
}