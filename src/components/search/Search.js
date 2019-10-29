import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';


export default class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '14103049-cb5f48d085591a8e7d938e7f4',
        images: []
    }
    onTextChanage = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&
            per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err));
        });
    };

    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField 
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChanage}
                    label="Search For Images"
                    fullWidth={true}
                />

                <Select
                    name="amount"
                    label="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChnange}
                    >
                    <MenuItem value={5} >5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={35}>35</MenuItem>
                </Select>

            </div>
        )
    }
}
