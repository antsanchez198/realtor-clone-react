import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../firebase';
import Spinner from '../components/Spinner';
// import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
// import {Navigation, Pagination, Autoplay, EffectFade} from "swiper/modules"
// import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';



const Listing = () => {

    const params = useParams();
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db, "listings", params.listingId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setListing(docSnap.data())
                setLoading(false)
                console.log(listing);
            }
        }
        fetchListing();
    }, [params.listingId])

    if (loading) {
        return <Spinner />
    }

    return (
        <main>
            <Swiper slidesPerView={1} navigation={true} modules={[Navigation, EffectFade, Autoplay]} pagination={{ type: "progressbar" }}
                effect='fade' autoplay={{ delay: 3000 }}>
                {listing.imgUrls.map((url, index) =>
                    <SwiperSlide>
                        <div
                            className='relative w-full overflow-hidden h-[300px] block'
                            style={{
                                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                                backgroundSize: "cover"
                            }}>

                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </main>
    )
}

export default Listing