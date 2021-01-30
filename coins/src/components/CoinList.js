import React, { Component } from 'react';
import axios from 'axios';

class CoinList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			coin1: [],
			coin1_price: [],
			coin2: [],
			coin2_price: [],
			coin3: [],
			coin3_price: [],
			coin4: [],
			coin4_price: []
		};
	}

	componentDidMount() {
		axios
			.get('https://api.coingecko.com/api/v3/coins/bitcoin')
			.then((respose) => {
				this.setState({
					coin1: respose.data,
					coin1_price: respose.data.market_data.ath
				});
				console.log(respose.data.market_data.ath);
			})
			.catch((error) => {
				console.log('error');
			});
		axios
			.get('https://api.coingecko.com/api/v3/coins/dogecoin')
			.then((respose) => {
				this.setState({
					coin2: respose.data,
					coin2_price: respose.data.market_data.ath
				});
				console.log(respose.data);
			})
			.catch((error) => {
				console.log('error');
			});
		axios
			.get('https://api.coingecko.com/api/v3/coins/ethereum')
			.then((respose) => {
				this.setState({
					coin3: respose.data,
					coin3_price: respose.data.market_data.ath
				});
				console.log(respose.data.market_data.ath);
			})
			.catch((error) => {
				console.log('error');
			});
		axios
			.get('https://api.coingecko.com/api/v3/coins/litecoin ')
			.then((respose) => {
				this.setState({
					coin4: respose.data,
					coin4_price: respose.data.market_data.ath
				});
				console.log(respose.data.market_data.ath);
			})
			.catch((error) => {
				console.log('error');
			});
	}

	render() {
		const { coin1, coin1_price, coin2, coin2_price, coin3, coin3_price, coin4, coin4_price } = this.state;
		return (
			<div>
				<div className="container">
					{/* <div className="">List of Coins</div> */}
					<div className="row">
						<div className="col-sm-12 col-md-3 col-lg-3 align-self-center">
							<div className="box">
                            <div className="title">{coin1.name}</div> 
								<div className="body">{coin1_price.usd} USD</div> 
								
							</div>
						</div>
						<div className="col-sm-12 col-md-3 col-lg-3 align-self-center">
							<div className="box">
                            <div className="title">{coin2.name}</div> 
								<div className="body">{coin2_price.usd} USD</div> 
							</div>
						</div>
						<div className="col-sm-12 col-md-3 col-lg-3 align-self-center">
							<div className="box">
                            <div className="title">{coin3.name}</div> 
								<div className="body">{coin3_price.usd} USD</div> 
							</div>
						</div>
						<div className="col-sm-12 col-md-3 col-lg-3 align-self-center">
							<div className="box">
								<div className="title">{coin4.name}</div> 
								<div className="body">{coin4_price.usd} USD</div>  
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CoinList;
