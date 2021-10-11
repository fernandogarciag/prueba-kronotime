import Dropdown from "./Dropdown";

const Container = ({ data }) => (
  <section>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
      <a className="navbar-brand mx-1 ms-xl-4" href="/">
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
      <div
        className="collapse navbar-collapse justify-content-lg-center ps-2 pe-0 pe-xl-5 me-0 me-xl-5"
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
          <li className="nav-item ms-lg-2">
            <a className="btn btn-danger text-uppercase" href="/" role="button">
              {data.sixth.title}
            </a>
          </li>
        </ul>
      </div>
      <div className="div-inline position-absolute end-0 top-0 pt-4">
        <i className="fa fa-search text-light me-2 me-xl-3"></i>
        <i className="fa fa-heart text-light me-2 me-xl-3"></i>
        <i className="fa fa-shopping-bag text-light me-2 me-xl-3"></i>
        <button
          class="navbar-toggler me-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </section>
);

export default Container;
