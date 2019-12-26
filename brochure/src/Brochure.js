import React from 'react';
import Title from './Title';
import Overview from './Overview';
import Prerequisite from './Prerequisite';
import TentativeTopic from './TentativeTopic';

import './Brochure.css';


class Brochure extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='Brochure'>
				<Title title={this.props.title} />
				<Overview overview={this.props.overview} />
				<Prerequisite prerequisite={this.props.prerequisite} />
				<TentativeTopic tentativeTopic={this.props.tentativeTopic} />
			</div>
		)
	};
}

export default Brochure;
