import { useEffect, useState } from "react"
import Slider from "../components/Slider"
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";

const Home = () => {

  //offers
  const [offerListings, setOfferListings] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingRef = collection(db, "listings");
        const q = query(listingRef, where("offer", "==", true), orderBy("timestamp", "desc"), limit(4));
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setOfferListings(listings);
      } catch (error) {
        console.log(error)
      }
    }
    fetchListings();
  }, [])

  //Places for rent
  const [rentListing, setRentListing] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingRef = collection(db, "listings");
        const q = query(listingRef, where("type", "==", "rent"), orderBy("timestamp", "desc"), limit(4));
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setRentListing(listings);
      } catch (error) {
        console.log(error)
      }
    }
    fetchListings();
  }, [])

  //Places for sale
  const [saleLisitng, setSaleListing] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingRef = collection(db, "listings");
        const q = query(listingRef, where("type", "==", "sale"), orderBy("timestamp", "desc"), limit(4));
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setSaleListing(listings);
      } catch (error) {
        console.log(error)
      }
    }
    fetchListings();
  }, [])

  return (
    <div>
      <Slider />
      <div className="m-w-6xl mx-auto pt-4 space-y6">
        {offerListings && offerListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold ">Recent Offers</h2>
            <Link to="/offers">
              <p className="px-3 text-sm text-blue-600
              hover:text-blue-800 transition duration-150 ease-in-out">Show more offers</p>
              <ul className="sm:gird sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {offerListings.map((listing) => (
                  <ListingItem
                    key={listing.id}
                    listing={listing.data} />
                ))}
              </ul>
            </Link>
          </div>
        )}
        {rentListing && rentListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold ">Places for Rent</h2>
            <Link to="/category/rent">
              <p className="px-3 text-sm text-blue-600
              hover:text-blue-800 transition duration-150 ease-in-out">Show more places for rent</p>
              <ul className="sm:gird sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {rentListing.map((listing) => (
                  <ListingItem
                    key={listing.id}
                    listing={listing.data} />
                ))}
              </ul>
            </Link>
          </div>
        )}
        {saleLisitng && saleLisitng.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold ">Places for Sale</h2>
            <Link to="/category/sale">
              <p className="px-3 text-sm text-blue-600
              hover:text-blue-800 transition duration-150 ease-in-out">Show more places for sale</p>
              <ul className="sm:gird sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {saleLisitng.map((listing) => (
                  <ListingItem
                    key={listing.id}
                    listing={listing.data} />
                ))}
              </ul>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home