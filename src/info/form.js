import React from "react";

class InfoForm extends React.Component {
  constructor() {
    super();
    this.state={
        _id:"",
        Name:"",
        Age:"",
        City:"",
        isEdit:false
    }
  }

  infoChange=event=>{
      const {name,value}=event.target;
      this.setState({
          [name]:value
      })
  }
  infoSubmit=event=>{
    //   event.preventDefault();
    if(!this.state.isEdit){

    
      let data={
          isEdit:this.state.isEdit,
          Name:this.state.Name,
          Age:this.state.Age,
          City:this.state.City
      }
      this.props.myData(data);
    }
    else{
      
        let data={   
              isEdit:this.state.isEdit,
            _id:this.state._id,
            Name:this.state.Name,
            Age:this.state.Age,
            City:this.state.City
        }
        this.props.myData(data)
    }
  }
  componentWillReceiveProps(props){
      if(props.setForm._id!=null){
          this.setState({
              isEdit:true,
              _id:props.setForm._id,
              Name:props.setForm.Name,
              City:props.setForm.City,
              Age:props.setForm.Age
          })
      }
  }
  render() {
    return (
        <form onSubmit={this.infoSubmit}>
        <div className="form-group">
          <label >Name</label>
          <input type="text"
          onChange={this.infoChange}
          name="Name"
          value={this.state.Name}
           className="form-control" placeholder="Enter name"/>
        </div>
        <div className="form-group">
          <label >City:</label>
          <input type="text"
          onChange={this.infoChange}
          name="City"
          value={this.state.City} className="form-control" placeholder="Enter City" />
        </div>
        <div className="form-group">
          <label >Age:</label>
          <input type="number"
          onChange={this.infoChange}
          name="Age"
          value={this.state.Age} className="form-control" placeholder="Enter Age" />
        </div>
        <button type="submit"
         className="btn btn-primary mt-4">
             {this.state.isEdit ? "Update" :"Create"}
             </button>
      </form>
    );
  }
}
export default InfoForm;
