import { Link } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { useQuery } from '@tanstack/react-query'
import { getBanners } from '../../../services/movieAPI'
import styles from './BannerStyle.module.scss'

export interface IBanner {
    maBanner: number
    maPhim: number
    hinhAnh: string
}

export const Banner = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['banners'],
        queryFn: getBanners,
        refetchOnWindowFocus: false,
    })

    // const data = [
    //     {
    //         maBanner: 1,
    //         maPhim: 1282,
    //         hinhAnh:
    //             'https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png',
    //     },
    //     {
    //         maBanner: 2,
    //         maPhim: 1283,
    //         hinhAnh:
    //             'https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png',
    //     },
    //     {
    //         maBanner: 3,
    //         maPhim: 1284,
    //         hinhAnh:
    //             'https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png',
    //     },
    // ]

    console.log(data)

    return (
        <section className={styles.carousel}>
            {!data ? (
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="60vh"
                ></Skeleton>
            ) : (
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    speed={1000}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="carousel-slide"
                >
                    {data?.map((item) => (
                        <SwiperSlide key={item.maBanner}>
                            <Link to={`/movie/${item.maPhim}`}>
                                <img
                                    src={item.hinhAnh}
                                    alt={item.maPhim + ''}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    )
}
