import Input from './input-field';

const ContactForm = ({ setModal }) => {
  return (
    <div className="bg-gray-700 relative flex justify-center h-[90vh] 2xl:h-[80vh] w-[40vw]">
      <div className="bg-white absolute top-[25%] px-10 py-10 h-[60vh] 2xl:h-[50vh] w-[45vw]">
        <i className="fa-solid fa-xmark" onClick={() => setModal(false)} />
        <form>
          <div className="flex  w-full">
            <div className="flex-1">
              <div className="mb-10">
                <h1 className="text-gray-400 font-bold text-4xl">CONTACT US</h1>
              </div>
              <div>
                <label htmlFor="name" className="font-semibold text-gray-400">
                  NAME
                </label>
                <Input />
                <label htmlFor="email" className="font-semibold text-gray-400">
                  E-MAIL
                </label>
                <Input />
              </div>
            </div>
            <div className="h-full -mr-[20%]">
              <img
                className="flex-1 h-48"
                src="/images/contact-us-images/location.png"
                alt=""
              />
            </div>
          </div>
          <label htmlFor="message" className="font-semibold text-gray-400">
            MESSAGE
          </label>
          <Input />
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
