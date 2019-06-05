import React from "react"
import TvPresenter from "./TvPresenter"
import { tv } from "../../api"

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null,
    error: null
  }
  async componentDidMount() {
    let topRated, popular, airingToday, error
    try {
      console.log(topRated, popular, airingToday, "           in TvContainer try")(
        ({
          data: { results: topRated }
        } = await tv.getTopRated())
      )(
        ({
          data: { results: popular }
        } = await tv.getPopular())
      )(
        ({
          data: { results: airingToday }
        } = await tv.getAiring())
      )

      console.log(topRated, popular, airingToday, "         int TvContainer try")
    } catch (error) {
      console.log(error + "               <- in TvContainer catch")
      error = "Can't get Tvs."
    } finally {
      this.setState({ loading: false, error, topRated, popular, airingToday })
    }
  }
  render() {
    const { loading, topRated, popular, airingToday } = this.state
    console.log(this.state)
    return (
      <TvPresenter
        loading={loading}
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
      />
    )
  }
}
