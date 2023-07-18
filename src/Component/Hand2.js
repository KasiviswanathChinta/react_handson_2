import React, { Component } from 'react'

export class Hand2 extends Component {
    state={
        name:"",
        department:"",
        rating:"",
        Empdata:[]
       }
  
       ChangeHandle=(event)=>{
        this.setState({[event.target.name]:event.target.value})
       }

       ClickHandle=(e)=>{
        e.preventDefault();
        let newObj={
          name:this.state.name,
          department:this.state.department,
          rating:this.state.rating,
        }
        this.state.Empdata.push(newObj);
        this.setState({Empdata:this.state.Empdata, name:"", department:"", rating:""})
        console.log(this.state.Empdata)
       }
     
       render(){
           return (
        < div className="main">
             <label className="label">Name:</label>
             <input className="input" type="text" name="name" onChange={this.ChangeHandle} placeholder="Enter Your Name" value={this.state.name}/>
             <br/><br/>
             <label className="label">Department:</label>
             <input className="input"  type="text" name="department" onChange={this.ChangeHandle}  placeholder="Enter Your Department"  value={this.state.department}/>
             <br/><br/>
             <label className="label">Rating:</label>
             <input className="input"  type="number" name="rating" onChange={this.ChangeHandle}  placeholder="Enter Your Rating"  value={this.state.rating}/>   
             <br/><br/>
             <button  type="btn" className="submit" onClick={this.ClickHandle}>Submit</button>
             <div className='arr'>
                {this.state.Empdata.map((item, index)=>{
                       return(
                        <div  key={index}>
                         <h2 className="span">Name={item.name} || Department={item.department} || rating={item.rating}</h2>
                         </div>
                       )
                })}
        </div>
        </div>
       );
    }
  }
  
export default Hand2;