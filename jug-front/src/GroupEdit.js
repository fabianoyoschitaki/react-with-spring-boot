import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class GroupEdit extends Component {
	emptyItem = {
		name: '',
		address: '',
		city: '',
		stateOrProvince: '',
		country: '',
		postalCode: ''
	};
	
	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	async componentDidMount() {
		if (this.props.match.params.id !== 'new') {
			const group = await (await fetch(`/api/group/${this.props.match.params.id}`)).json();
			this.setState({item: group});
		}
	}
}