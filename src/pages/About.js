import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to ShoppingCart, your number one source for all things your niche, e.g., fashion, electronics, home goods. We're dedicated to giving you the very best of online shopping, with a focus on dependability, customer service, and uniqueness.

Founded in 2019 by Ratnath Reddy, ShoppingCart has come a long way from its beginnings in visakhapatnam. When Founder's Name first started out, their passion for what your company is passionate about, e.g., providing the best eco-friendly fashion products drove them to action: quit the day job, do tons of research, etc., so that YourWebsiteName can offer you competitive differentiator, e.g., the world's most advanced products. We now serve customers all over place, e.g., the US, the world, and are thrilled that we're able to turn our passion into our own website.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
