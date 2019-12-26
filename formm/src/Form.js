import React from 'react';


class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: new Date(),
      notify: false
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleDesc = this.handleDesc.bind(this);
    // this.handleDate = this.handleDate.bind(this);
  }

  handleChange = (event, field) => {
   // console.log(field)
    this.setState({
      [field]: event.target.value,
      notify: false
    })
  }

  handleForm = () => {
    this.setState({
      notify: true
    })
  }

  render() {
    console.log(this.state.title)
    return(
      <div>
        <p>Title</p>
        <input type="text" value={this.state.title} onChange={ (event)=>{this.handleChange(event, 'title') }} placeholder="Title goes here"/>
        <p>Description</p>
        <textarea rows="10" cols="30" value={this.state.description} onChange={ (event)=>{this.handleChange(event, 'description') }} placeholder="Short description here"></textarea>
        <p>Date</p>
        <input type="date" value={this.state.date} onChange={ (event)=>{this.handleChange(event, 'date') }}/>
        <div><button onClick={this.handleForm}>Submit</button></div>

        {this.state.notify && <ShowInfo title={this.state.title} description={this.state.description} date={this.state.date}/>}
      </div>
    );
  }
}

function formatDate(date) {
  const MM = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const arrDate = date.split('-');
  console.log(arrDate);
  return arrDate[2] + '/' + MM[parseInt(arrDate[1]) - 1] + '/' + arrDate[0];
}

function ShowInfo(props) {
  return(
    <div>
      <div>Title: <p>{props.title}</p></div>
      <div>Description: <p>{props.description}</p></div>
      <div>Date: <p>{formatDate(props.date)}</p></div>
    </div>
  );
}

export default Form;
