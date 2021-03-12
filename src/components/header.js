import React from "react";
import Link from "gatsby-link";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <a href="/#AboutMe">About Me</a>
          <a className="headerProjects" href="/#Projects">Projects</a>
          <Link to="/blog">Blog</Link>
          <a href="mailto:domogami@gmail.com">Contact</a>
        </div>
      </div>
    );
  }
}

export default Header;
