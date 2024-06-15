import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const FeaturesData = [
    { 
      id: 1,
      title: 'Exceptional Fleet Selection',
      subtitle: 'Wide Range of Vehicles to Suit Every Need',
      content: `At Truck, we pride ourselves on offering a diverse fleet of vehicles to meet 
      every customer’s requirements. Whether you need a compact car for city driving, an SUV for a family trip, or a 
      luxury vehicle for a special occasion, we have the perfect car for you. All our vehicles are regularly serviced 
      and maintained to ensure you have a safe and comfortable driving experience.`,
      image: <IoCarSportOutline className='icon' />
    },
    {
      id: 2,
      title: 'Competitive Pricing',
      subtitle: 'Affordable Rates with No Hidden Fees',
      content: `We believe in transparency and affordability. Our rental prices are competitive and include all necessary charges, 
      with no hidden fees or surprise costs. We also offer various discounts and special offers throughout the year, 
      ensuring that you get the best value for your money. With Truck, you can enjoy top-quality service 
      without breaking the bank.`,
      image: <MdOutlineAttachMoney className='icon' />
    },
    {
      id: 3,
      title: 'Superior Customer Service',
      subtitle: '24/7 Support and Hassle-Free Booking',
      content: `Customer satisfaction is our top priority. Our dedicated support team is available 24/7 to assist you with any 
      inquiries or issues you may have. We also offer a hassle-free booking process through our user-friendly website and 
      mobile app, allowing you to reserve your vehicle in just a few clicks. Experience seamless and personalized service 
      every time you choose Truck.`,
      image: <IoCallOutline className='icon' />
    },
    {
      id: 4,
      title: 'Convenient Pickup and Drop-off Locations',
      subtitle: 'Flexible Options to Suit Your Schedule',
      content: `We understand that convenience is key when it comes to car rentals. 
      That’s why we offer multiple pickup and drop-off locations throughout the city and at major airports. 
      Whether you need a car for a short trip or a long-term rental, you can count on us for flexible options 
      that fit your schedule. With Truck, renting a car has never been easier or more convenient.`,
      image: <MdOutlineLocationOn className='icon' />
    }
]

export default FeaturesData;