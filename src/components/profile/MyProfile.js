import React from "react";
import "./MyProfile.scss";
import Card from '../Blog/Card'
import logo from "../utils/profile.jpg";
const MyProfile = () => {
  return (
    <div className="user-profile">
      <div
        className="tab-pane fade show value"
        id="navs-justified-home"
        role="tabpanel"
      >
        <div className="profilemenu">
          <div className="card shadow-lg mb-4">
            <div className="card-img-top"></div>
            <form
              action="#"
              enctype="multipart/form-data"
              method="POST"
              className="changeimg"
            >
              {/* <!-- <input type="file" className="btn btn-primary" id="myFile" name="myFile" value="Change Image"
                                placeholder="Changes" /> --> */}
              <label for="inputTag" className="imglabel">
                <i className="fa fa-2x fa-camera"></i>
                <input
                  className="btn btn-primary"
                  id="inputTag"
                  accept="image/*"
                  name="myFile"
                  type="file"
                  required
                />
                <span id="imageName"></span>
              </label>
              <input className="admin__submit btn btn-primary" type="submit" />
            </form>
            <div
              className="card-body"
              style={{ padding: 0, "padding-top": "10px" }}
            >
              <h5 className="card-title" style={{ "line-height": "2rem" }}>
                Sourav Goyal
              </h5>
              <hr />
            </div>
            <div
              className=" card-header alert alert-primary p-0 p-2"
              style={{ "font-size": "20px" }}
            >
              Profile Section
            </div>
            <div
              className="card-body "
              style={{ "border-bottom": "1px solid #fbc02a" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title" style={{ "font-size": "18px" }}>
                  Username
                </h5>
              </div>
              <p className="card-text ">@Sourav</p>
            </div>
            <div
              className="card-body "
              style={{ "border-bottom": "1px solid #fbc02a" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title" style={{ "font-size": "18px" }}>
                  Email Id
                </h5>
              </div>
              <p className="card-text "></p>
            </div>
            <div
              className="card-body "
              style={{ "border-bottom": "1px solid #fbc02a" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title" style={{ "font-size": "18px" }}>
                  User Id
                </h5>
              </div>
              <p className="card-text ">2020UME1058</p>
            </div>
            <div
              className="card-body "
              style={{ "border-bottom": "1px solid #fbc02a" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title" style={{ "font-size": "18px" }}>
                  Total Friends
                </h5>
              </div>
              <p className="card-text ">90</p>
            </div>
            <div
              className="card-body "
              style={{ "border-bottom": "1px solid #fbc02a" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title" style={{ "font-size": "18px" }}>
                  Ratings
                </h5>
              </div>
              <p className="card-text ">1920</p>
            </div>
            <div
              className="card-body "
              style={{ "border-bottom": "1px solid #fbc02a" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title" style={{ "font-size": "18px" }}>
                  Contest Attempted
                </h5>
              </div>
              <p className="card-text ">5</p>
            </div>
            <div
              className="card-body "
              style={{
                "border-bottom": "1px solid #fbc02a",
                "margin-bottom": "20px",
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title" style={{ "font-size": "18px" }}>
                  About
                </h5>
              </div>
              <p className="card-text ">My profile is best!!!</p>
            </div>
            <div className="buttons">
              <form action="#" method="get">
                <button className="btn btn-primary button">Edit</button>
              </form>

              <form action="#" method="POST">
                <button className="btn btn-primary button">Logout</button>
              </form>
            </div>
          </div>
          <div className="user-blog">
            <h2>My Blogs</h2>
            <div className="my-blog-container">
              <Card
                name="Sorting"
                description="This is my first blog."
                link="#"
              />
              <Card
                name="Dynamic Programming"
                description="This is my second blog."
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
