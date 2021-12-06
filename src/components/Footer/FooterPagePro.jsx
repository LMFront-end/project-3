import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
      <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
        <div className="text-center py-3">
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item">
              <h5 className="mb-1">Register for free Giphy</h5>
            </li>
            <li className="list-inline-item">
              <a href="https://giphy.com/" className="btn btn-danger btn-rounded">
                Sign up!
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-gplus mx-1">
                <i className="fab fa-google-plus"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-li mx-1">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-dribbble mx-1">
                <i className="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/LMFront-end"> LMFront-end </a>
          </MDBContainer>
        </div>
      </MDBFooter>
  )
}

export{ FooterPagePro};