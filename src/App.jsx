import IpInfoCart from './Components/IpInfoCart.jsx'
import React, { Component } from 'react'
import getIpInfo from "./Services/IpInfoService.js";

export default class App extends Component
{
  state = {
    ipInfo: null,
    isLoading: true
  };

  componentDidMount()
  {
    getIpInfo().then(data =>
    {
      this.setState({
        ipInfo: data,
        isLoading: false,
      })
    });
  }

  render()
  {
    const isLoading = this.state.isLoading;
    return (
      <>
        {isLoading ? < p > Loading</p > :
          <IpInfoCart ipInfo={this.state.ipInfo} />
        }
      </>
    )
  }
}
