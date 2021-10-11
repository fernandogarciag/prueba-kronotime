import Dropdown from "./Dropdown";

const Container = ({ data }) => (
  <section>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand ms-4" href="/">
        <img
          src="https://cdn.shopify.com/s/files/1/0275/8420/0792/files/logo-invicta_180x.png?v=1575474967"
          alt=""
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0275/8420/0792/files/logo-invicta-col.png?v=1605634902"
          alt=""
          width="50"
          style={{ transform: "rotate(25deg)" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center pe-5 me-5"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <Dropdown content={data.first} />
          <li className="nav-item">
            <a className="nav-link text-uppercase" href="/">
              {data.second.title}
            </a>
          </li>
          <Dropdown content={data.third} />
          <Dropdown content={data.fourth} />
          <li className="nav-item">
            <a className="nav-link text-uppercase" href="/">
              {data.fifth.title}
            </a>
          </li>
          <li className="nav-item ms-2">
            <a className="btn btn-danger text-uppercase" href="/" role="button">
              {data.sixth.title}
            </a>
          </li>
        </ul>
      </div>
      <div className="div-inline ms-5">
        <i className="fa fa-search text-light ms-5 me-3"></i>
        <i className="fa fa-heart text-light me-3"></i>
        <i className="fa fa-shopping-bag text-light me-5"></i>
      </div>
    </nav>
  </section>
);

export default Container;
