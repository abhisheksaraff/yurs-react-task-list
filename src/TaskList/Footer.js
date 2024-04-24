function Footer({ tasks }) {
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(tasks)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <div className="footer fixed-bottom">
      <button
        className="footer-button badge rounded-pill border-light border border-1 fs-5"
        onClick={() =>
          window.open("https://www.linkedin.com/in/abhisheksaraff/", "_blank")
        }
      >
        <img
          src="https://i.pinimg.com/736x/6b/ab/30/6bab3017350ca04c6fa05569672bd31e.jpg"
          alt="linkedin logo"
        />
      </button>
      <button
        className="footer-button badge rounded-pill border-light border border-1 fs-5"
        onClick={() =>
          window.open("https://github.com/abhisheksaraff", "_blank")
        }
      >
        <img
          src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"
          alt="github logo"
        ></img>
      </button>
      <button
        className="footer-button badge rounded-pill border-light border border-1 fs-5"
        onClick={() => exportData()}
      >
        <img
          className="download-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWueb-a8GAy19icjxeIT1CqisMNWtKyOgDz166UI6xlw&s"
          alt="download logo"
        ></img>
      </button>
    </div>
  );
}

export default Footer;
