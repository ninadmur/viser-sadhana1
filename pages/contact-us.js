import { Fragment, useState } from 'react';
import NewsLetter from '../components/multiusable/news-letter';
import { AnimatePresence } from 'framer-motion';
import SocialContact from '../components/contact-us/middle-section';
import ContactModal from '../components/layout/contact-modal';

const ContactUs = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    // document.body.style.overflow = 'hidden';
  };

  return (
    <Fragment>
      <div className={` flex items-center bg-purple-900 h-[calc(100vh-80px)]`}>
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          <div className="z-10 flex-1 flex justify-center">
            {modal ? (
              <ContactModal setModal={setModal} />
            ) : (
              <button onClick={openModal}>Open modal</button>
            )}
          </div>
        </AnimatePresence>
        <img
          className="flex-1"
          height="50px"
          width="30px"
          src="/images/contact-us-images/Contact us.png"
          alt=""
        />
      </div>

      <SocialContact />
      <NewsLetter />
    </Fragment>
  );
};

export default ContactUs;
