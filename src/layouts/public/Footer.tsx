const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="main-container text-center tracking-wider capitalize text-sm py-4">
        © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
