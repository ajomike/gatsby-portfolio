import React from "react"
import { Helmet } from "react-helmet"

class Meta extends React.Component {
  render () {
    return (
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/litera/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
        <title>{this.props.siteTitle}</title>
        <meta name="description" content={this.props.siteDescription} />
        <link rel="canonical" href={this.props.siteUrl} />
      </Helmet>
    )
  }
}

export default Meta