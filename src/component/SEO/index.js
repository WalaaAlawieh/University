import React from "react";
import { HeadProvider, Title, Link, Meta } from "react-head";

const SEO = ({ title, description, image = "img url" }) => (
  <HeadProvider>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={image} />
    <meta property="og:url" content="https://google.com/" />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content="App" />

    {/* favicons */}
  </HeadProvider>
);

export default SEO;
