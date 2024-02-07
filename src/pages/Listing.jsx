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
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';
import {FaShare} from 'react-icons/fa'



const Listing = () => {

    const params = useParams();
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [shareLinkedCopied, setShareLinkedCopied] = useState(false)

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
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {listing.imgUrls.map((url, index) =>
                    <SwiperSlide>
                        <div
                            className='relative w-full overflow-hidden h-[300px] block'
                            style={{
                                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                                backgroundSize: "cover"
                            }}>

                        </div>
                        {/* <div className='relative w-full overflow-hidden h-[300px]'>
                            <img src={`${listing.imgUrls[index]}`} className='w-full bg-cover bg-no-repeat bg-center' />
                        </div> */}
                    </SwiperSlide>
                )}
            </Swiper>
            <div className="fixed top-[13%] right-[3%] z-10 bg-white cursor-pointer border-2 border-gray-200 rounded-full w-12 h-12 flex justify-center items-center"
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    setShareLinkedCopied(true)
                    setTimeout(() => {
                        setShareLinkedCopied(false)
                    }, 2000)
                }}>
                <FaShare className='text-lg text-slate-500' />
            </div>
            {shareLinkedCopied && (
                <p className='fixed top-[23%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-white z-10 p-2'>Link Copied</p>
            )}
        </main>
    )
}

export default Listing