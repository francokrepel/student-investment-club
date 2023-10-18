import Header from '../components/Header';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram, FaSlack } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image'

const meeting_images = [
  '/meeting_pic_6.jpg',
  '/meeting_pic_7.jpg',
  '/meeting_pic_8.jpg',
  '/meeting_pic_1.jpeg',
  '/meeting_pic_2.jpeg',
  '/meeting_pic_3.jpeg',
  '/meeting_pic_5.jpeg',
]
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white ">
      <Header />
      <section className="container mx-auto mt-12 mb-20 px-4 md:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-teal-400">Welcome to the Student Investment Club</h1>
          <p className="text-lg mb-8">
            Learn all about managing your money, making investing simple, and mastering applicable skills for novices and
            experts alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {/* Highlight Cards */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Learn and Grow</h3>
            <p>
              Join the Student Investment Club and gain valuable knowledge about the world of investing. Our members are introduced to various investment topics, such as stocks, bonds, ETFs, cryptocurrencies, and more. Take the first step towards a successful financial future by mastering key investment strategies and concepts.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Real-World Experience</h3>
            <p>
              Participate in interactive workshops, how-to-trade sessions, and our signature MarketWatch investment challenge. These hands-on activities provide a unique opportunity to apply your newfound knowledge and develop essential skills for investing in the real world.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg ">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Networking and Mentorship</h3>
            <p>
              Connect with like-minded students, industry professionals, and experienced investors who share your passion for finance. Our club fosters a supportive and inclusive environment, where members can exchange ideas, collaborate on projects, and receive personalized guidance from mentors.
            </p>
          </div>
        </div>

        {/* Image Gallery
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-12">
          {meeting_images.map((url, index) => (
            <div key={index}>
              <Image
                width={300}
                height={300}
                src={url}
                alt={`Semester meeting ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </div> */}

        {/* Image Slideshow */}
        <div className="my-12 mx-auto max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={3000}
            transitionTime={600}
            swipeable
          >
            {meeting_images.map((url, index) => (
              <div key={index}>
                <Image
                  width={500}
                  height={500}
                  priority
                  src={url}
                  alt={`Semester meeting ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Join the Club */}
        <div className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-teal-400">Interested in joining?</h2>
          <p className="text-lg mb-6">
            Join our meetings every Tuesday at 6:30 PM in Stuzin 101.
          </p>

          {/* Social Media Buttons */}
          <div className="flex justify-center items-center space-x-4 gap-10 ">
            <a
              href="https://www.instagram.com/uf_sic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-7xl hover:text-red-400" />
            </a>
            <a
              href="https://join.slack.com/t/ufstudentinve-6zm9629/shared_invite/zt-1ujguv99w-U3snOApVz7rFoKSWK1cFQA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSlack className="text-7xl hover:text-green-400" />
            </a>
            <a
              href="https://www.linkedin.com/company/uf-student-investment-club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="text-7xl hover:text-blue-400" />
            </a>
          </div>
        </div>


      {/* Calendar */}
      <div className="my-6 ">
        <h2 className="text-3xl font-bold mb-6 text-center">Event Calendar</h2>
        <div className="relative w-full mx-auto invert saturate-50 hue-rotate-30 h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <iframe
            src='https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dWZsb3JpZGFzaWNAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%2322AA99&amp;color=%23329262&amp;color=%231F753C&amp;showTz=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTitle=0'
            title='Meeting Calendar'
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          />
        </div>
      </div>

      </section>
    </div>
  );
}
