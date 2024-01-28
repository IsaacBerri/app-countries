import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="containerFooter">
      <section className="iconsFooter">
        <Icon
          icon="ic:baseline-facebook"
          color="white"
          width="25"
          height="25"
        />
        <a href="https://github.com/IsaacBerri/app-countries.git" target="_blank">
          <Icon icon="mdi:github" color="white" width="25" height="25" />
        </a>
        <Icon icon="mdi:instagram" color="white" width="25" height="25" />
      </section>
      <section className="infoFooter">
        <h5>&copy; 2024 by WorldMaker Inc. All rights reserved.</h5>
        <p>Generated on Monday, January 22, 2024</p>
      </section>
    </footer>
  );
};

export default Footer;
