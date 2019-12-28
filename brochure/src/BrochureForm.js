import React from 'react';
import Brochure from './Brochure';


class BrochureForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            overview: '',
            prerequisite: [],
            tentativeTopic: [],
            notify: false
        }
    }

    handleBrochure = (event, field) => {
        this.setState({
            [field]: event.target.value,
            notify: false
        });
    }

    showAll = () => {
        // const prerequisite = this.state.prerequisite.split(/\n/);
        // console.log(lines);
        this.setState({
            prerequisite: this.state.prerequisite.split(/\n/),
            tentativeTopic: this.state.tentativeTopic.split(/\n/),
            notify: true
        })
    }

    render() {
        return(
            <div>
                Title<br/>
                <input type="text" onChange={(event) => {this.handleBrochure(event, 'title')}} value={this.state.title}/>
                <br/>
                Overview<br/>
                <textarea rows='10' cols='30' onChange={(event) => {this.handleBrochure(event, 'overview')}} value={this.state.overview}></textarea>
                <br/>
                Prerequisite<br/>
                <textarea rows='10' cols='30' onChange={(event) => {this.handleBrochure(event, 'prerequisite')}} value={this.state.prerequisite}></textarea>
                <br/>
                Tentative Topics<br/>
                <textarea rows='10' cols='30' onChange={(event) => {this.handleBrochure(event, 'tentativeTopic')}} value={this.state.tentativeTopic}></textarea>
                <br/><br/>
                <button onClick={this.showAll}>Okay</button>
                {this.state.notify && 
                    <Brochure title={this.state.title} overview={this.state.overview} prerequisite={this.state.prerequisite} tentativeTopic={this.state.tentativeTopic}/>
                }
            </div>
        );
    }
}

export default BrochureForm;