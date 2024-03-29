import React from "react";
import Modal from "react-modal";
function Popup({ isOpen, closeModal }) {
  return (
    <>
      <Modal
        className="w-[95%] max-w-[900px] absolute bottom-10 bg-[#121212] backdrop-blur-2xl rounded-2xl outline-none left-1/2 -translate-x-1/2 "
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="flex justify-center flex-col px-3 sm:px-10 py-5 text-white">
          <h2 className="mb-5">
            This website stores cookies on your computer. These cookies are used
            to collect information about how you interact with our website and
            allow us to remember you. We use this information in order to
            improve and customize your browsing experience and for analytics and
            metrics about our visitors both on this website and other media. To
            find out more about the cookies we use, see our Privacy Policy. If
            you decline, your information won’t be tracked when you visit this
            website. A single cookie will be used in your browser to remember
            your preference not to be tracked.
          </h2>
          <div className="flex justify-end gap-5">
            <button
              className="bg-[#03C2AB] w-[100px] px-6 py-3 rounded-3xl text-white font-bold cursor-pointer outline-none"
              onClick={closeModal}
            >
              Accept
            </button>
            <button
              className="bg-[#03C2AB] w-[100px] px-6 py-3 rounded-3xl text-white font-bold cursor-pointer outline-none"
              onClick={closeModal}
            >
              Decline
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Popup;
