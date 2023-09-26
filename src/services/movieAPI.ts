import { HttpStatusCode } from 'axios'
import fetcher from './fetcher'

export interface IBanner {
    maBanner: number
    maPhim: number
    hinhAnh: string
}

interface ResponseSuccessApi<T> {
    content: T
    message: string
    dateTime: string
    messageConstants: string | null
    statusCode: number
}

export const getBanners = async () => {
    const {
        data: { content },
    } = await fetcher.get<ResponseSuccessApi<IBanner[]>>(
        '/QuanLyPhim/LayDanhSachBanner',
    )

    return content
}
