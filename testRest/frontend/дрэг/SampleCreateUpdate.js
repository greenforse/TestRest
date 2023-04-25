/*import React, { Component } from 'react';
import SampleService from './SampleService';

const sampleService = new SampleService();

class SampleCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          sampleService.getSample(params.pk).then((s)=>{
            this.refs.name.value = s.name;
            this.refs.iron_content.value = s.iron_content;
            this.refs.sera_content.value = s.sera_content;
            this.refs.other_content.value = s.other_content;
            this.refs.month.value = s.month;
            this.refs.user.value = s.user;
          })
        }
      }

      handleCreate(){
        sampleService.createSample(
          {
            "name": this.refs.name.value,
            "iron_content": this.refs.iron_content.value,
            "sera_content": this.refs.sera_content.value,
            "other_content": this.refs.other_content.value,
            "month": this.refs.month.value,
            "user": this.refs.user.value
        }
        ).then((result)=>{
          alert("Sample created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        sampleService.updateCustomer(
          {
            "pk": pk,
            "name": this.refs.name.value,
            "iron_content": this.refs.iron_content.value,
            "sera_content": this.refs.sera_content.value,
            "other_content": this.refs.other_content.value,
            "month": this.refs.month.value,
            "user": this.refs.user.value
        }
        ).then((result)=>{
          console.log(result);
          alert("Sample updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Name:</label>
              <input className="form-control" type="text" ref='name' />

            <label>
              Iron_content:</label>
              <input className="form-control" type="text" ref='iron_content'/>

            <label>
              sera_content:</label>
              <input className="form-control" type="text" ref='sera_content' />

            <label>
              other_content:</label>
              <input className="form-control" type="text" ref='other_content' />

            <label>
              month:</label>
              <input className="form-control" type="text" ref='month' />

            <label>
              user :</label>
              <textarea className="form-control" ref='user' ></textarea>


            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
      }
}

export default SampleCreateUpdate;