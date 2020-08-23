import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"

import HeroSlider from "../components/index/HeroSlider"
import Citat from "../components/index/Citat"
import About from "../components/index/About"
import LatestTrend from "../components/index/LatestTrend"
import CTAImages from "../components/index/CTAImages"

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={["tango", "brand"]} />

    <HeroSlider />
    <CTAImages />
    <LatestTrend />
    <Citat />
    <About />
  </Layout>
)

export default IndexPage
