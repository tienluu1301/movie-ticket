export interface IUser {
    taiKhoan: string
    hoTen: string
    email: string
    soDT: string
    maNhom: string
    matKhau: string
}

export interface IUserInfo extends Omit<IUser, 'matKhau'> {
    maLoaiNguoiDung: string
    accessToken: string
}
