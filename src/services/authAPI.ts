import fetcher from './fetcher'

export interface ISignin {
    taiKhoan: string
    matKhau: string
}

export interface ISignup {
    taiKhoan: string
    matKhau: string
    email: string
    soDt: string
    maNhom: string
    hoTen: string
}

export const signin = async (values: ISignin) => {
    const data = await fetcher.post('/QuanLyNguoiDung/DangNhap', values)
    return data
}

export const signup = async (values: Omit<ISignup, 'maNhom'>) => {
    await fetcher.post('/QuanLyNguoiDung/DangKy', {
        ...values,
        maNhom: 'GP15',
    })
}
