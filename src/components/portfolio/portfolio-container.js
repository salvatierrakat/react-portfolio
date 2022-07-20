import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
        { title: "Quip", category: "eCommerce", slug: "Quip" },
        { title: "Eventbrite", category: "Scheduling", slug: "eventbright" },
        {
          title: "Ministry Safe",
          category: "Enterprise",
          slug: "ministry-safe",
        },
      ],
    };
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return (
        <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />
      );
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        {this.portfolioItems()}
      </div>
    );
  }
}
