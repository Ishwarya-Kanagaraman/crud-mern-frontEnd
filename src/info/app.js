import React from "react";
import InfoForm from "./form";
import InfoTable from "./table";
import axios from "axios";
import "../App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state={
        data:[],
        editData:[]
    }
  }
  create=data=>{
      if(!data.isEdit){
      axios.post("/info",data).then(res=>{
        this.getAll()
      })
    }
    else{
        axios.put("/info/update",data).then(res=>{
            this.getAll();
          })
    }
  }
  componentDidMount(){
   this.getAll();
  }
  getAll(){
      axios.get("/info").then(res=>{
    
          this.setState({
              data:res.data
          })
      })
  }
  update=data=>{
       console.log(data)
       this.setState({
           editData:data
       })
  }
  del=data=>{
      const option=window.confirm(`Are you sure want to delete? ${data.Name}`)
         if(option){
            axios.delete(`/info/del/${data._id}`).then(res=>{
                this.getAll();
              })
         }
  }
  render() {
    return (
      <div className="appContainer">
        <div className="app__body">
          <h1>Welcome to my Crud App.!</h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
              <InfoForm myData={this.create} setForm={this.state.editData}/>
              </div>
          <div className="col-md-6 col-sm-12 ">
              <InfoTable getData={this.state.data} setData={this.update} del={this.del}/>
              </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
export default App;
