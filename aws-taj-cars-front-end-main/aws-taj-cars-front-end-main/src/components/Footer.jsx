import { Link } from "react-router-dom";
import tajCarsLogo from "../assets/tajcarslogo.jpg";
import youtubeicon from "../assets/icons8-youtube.svg";
import whatsappicon from "../assets/icons8-whatsapp.svg";
import facebookicon from "../assets/icons8-facebook.svg";
import linkedinicon from "../assets/icons8-linkedin.svg";

function Footer() {
  return (
    <footer className='shadow-lg bg-gray-700 px-6 py-10 '>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 sm:px-6 md:px-8 '>
        {/* Logo & Social */}
        <div>
          <Link to='/' className='flex items-center space-x-3 mb-3'>
            <img
              src={tajCarsLogo}
              className='h-10 rounded-full'
              alt='Taj Cars Logo'
            />
            <span className='text-2xl font-semibold dark:text-white'>
              Taj Cars
            </span>
          </Link>
          <p className='text-gray-400 text-sm'>
            Drive into the future with Taj Cars. We provide the best cars at the
            best prices.
          </p>
          <div className='flex flex-wrap gap-3 mt-4'>
            <a
              href='https://www.linkedin.com/company/tajcars/posts/?feedView=all'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-800 p-2 rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center'
            >
              <img src={linkedinicon} alt='LinkedIn' className='w-5 h-5' />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100064179876734'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-800 p-2 rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center'
            >
              <img src={facebookicon} alt='Facebook' className='w-5 h-5' />
            </a>
            <a
              href='https://www.youtube.com/@rizwan9794'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-800 p-2 rounded-full hover:bg-gray-700 w-10 h-10 flex items-center justify-center'
            >
              <img src={youtubeicon} alt='YouTube' className='w-5 h-5' />
            </a>
            <a
              href='https://wa.me/+971527463341'
              target='_blank'
              rel='noreferrer'
              className='bg-green-800 p-2 rounded-full hover:bg-green-700 w-10 h-10 flex items-center justify-center'
            >
              <img src={whatsappicon} alt='WhatsApp' className='w-5 h-5' />
            </a>
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className='font-semibold text-white mb-3'>Features</h3>
          <ul className='text-gray-400 text-sm space-y-2'>
            <li>
              <a href='#' className='hover:underline'>
                Vehicle History Reports
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Certified Cars
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Financing Options
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className='font-semibold text-white mb-3'>Support</h3>
          <ul className='text-gray-400 text-sm space-y-2'>
            <li>
              <a href='#' className='hover:underline'>
                Help Center
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

      {/* Newsletter */}

<div>
  <h3 className="font-semibold text-white mb-3">Stay Updated</h3>
  <p className="text-gray-400 text-sm mb-4">
    Subscribe to our newsletter for the latest updates.
  </p>

  <form className="flex flex-col sm:flex-row items-center gap-3 w-full">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full sm:flex-1 min-w-0 px-5 py-3 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
    />
    <button
      type="submit"
      className="bg-green-500 text-white font-semibold py-3 px-6 rounded hover:bg-green-600 w-full sm:w-auto text-sm"
    >
      Subscribe
    </button>
  </form>
</div>

</div>

      {/* Bottom Note */}
      <hr className='my-8 border-gray-700' />
      <div className='text-center text-gray-400 text-sm'>
        © {new Date().getFullYear()} Taj Cars™. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
