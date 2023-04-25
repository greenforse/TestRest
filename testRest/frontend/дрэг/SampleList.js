/*import  React, { Component } from  'react';
import  SampleService  from  './SampleService';

const  sampleService  =  new  SampleService();

class  SampleList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        samples: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    self.setState([]);
    sampleService.getSamples().then(function (result) {
        console.log(result);
        self.setState({ samples:  result.data, nextPageURL:  result.nextlink})
    });
}
handleDelete(e,pk){
    var  self  =  this;
    sampleService.deleteSample({pk :  pk}).then(()=>{
        var  newArr  =  self.state.samples.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({samples:  newArr})
    });
}

nextPage(){
    var  self  =  this;
    console.log(this.state.nextPageURL);
    sampleService.getSamplesByURL(this.state.nextPageURL).then((result) => {
        self.setState({ samples:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {

    return (
        <div  className="Samples--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Iron_content</th>
                <th>sera_content</th>
                <th>other_content</th>
                <th>month</th>
                <th>user</th>

            </tr>
            </thead>
            <tbody>
            {this.state.samples.map( s  =>
                <tr  key={s.id}>
                <td>{s.id}  </td>
                <td>{s.name}</td>
                <td>{s.iron_content}</td>
                <td>{s.sera_content}</td>
                <td>{s.other_content}</td>
                <td>{s.month}</td>
                <td>{s.user}</td>
                <td>
                <button  onClick={(e)=>  this.handleDelete(e,s.id) }> Delete</button>
                <a  href={"/sample/" + s.id}> Update</a>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
  }
}
export  default  SampleList;