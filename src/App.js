import React,{Component} from 'react';

import './App.css';
import details from './data/details..json';


class app extends Component{
  state={
    value:true,
    rohit:false,
    kohli:false,
    rahane:false,
    jadeja:false,
    raina:false,
    dhoni:false,
    pandya:false,
    rahul:false,
    bumra:false,
    prasad:false
  }
  changeState=()=>{
    this.setState({value:false});
  }
  
  rohitState=()=>{
    this.setState({rohit:true});
  }
  kohliState=()=>{
    this.setState({kohli:true});
  }
  rahaneState=()=>{
    this.setState({rahane:true});
  }
  jadejaState=()=>{
    this.setState({jadeja:true});
  }
  rainaState=()=>{
    this.setState({raina:true});
  }
  dhoniState=()=>{
    this.setState({dhoni:true});
  }
  pandyaState=()=>{
    this.setState({pandya:true});
  }
  rahulState=()=>{
    this.setState({rahul:true});
  }
  bumraState=()=>{
    this.setState({bumra:true});
  }
  prasadState=()=>{
    this.setState({prasad:true});
  }
  
  render(){
  return (
    <div className="container">
      
      <table className="table">
          <tr className="headings">
            <th>firstname</th>
            <th>lastname</th>
            <th>mobileno</th>
            <th>  gpa</th>
          </tr>
          <hr/>
        { this.state.value && 
        <div className="data">
          <tr>
            <td>rohit</td>
            <td>sharma</td>
            <td>9876543210</td>
            <td> 8.9</td>
            <button className="select" onClick={this.rohitState}>select</button>
          </tr>
          <tr>
            <td>kohli</td>
            <td>virat</td>
            <td>9876543211</td>
            <td> 8.9</td>
            <button className="select" onClick={this.kohliState}>select</button>
          </tr>
          <tr>
            <td>rahane</td>
            <td>ajinkya</td>
            <td>9876543212</td>
            <td> 6.3</td>
            <button className="select" onClick={this.rahaneState}>select</button>
          </tr>
          <tr>
            <td>jadeja</td>
            <td>ravindra</td>
            <td>9876543213</td>
            <td> 7.8</td>
            <button className="select" onClick={this.jadejaState}>select</button>
          </tr>
          <tr>
            <td>raina</td>
            <td>suresh</td>
            <td>9876543214</td>
            <td> 6.9</td>
            <button className="select" onClick={this.rainaState}>select</button>
          </tr>
          <tr>
            <td>dhoni</td>
            <td>mahendrasingh</td>
            <td>9876543215</td>
            <td> 9.0</td>
            <button className="select" onClick={this.dhoniState}>select</button>
          </tr>
          <tr>
            <td>pandya</td>
            <td>hardik</td>
            <td>9876543216</td>
            <td> 4.2</td>
            <button className="select" onClick={this.pandyaState}>select</button>
          </tr>
          <tr>
            <td>rahul</td>
            <td>lokesh</td>
            <td>9876543217</td>
            <td> 1.9</td>
            <button className="select" onClick={this.rahulState}>select</button>
          </tr>
          <tr>
            <td>bumra</td>
            <td>jasprit</td>
            <td>9876543218</td>
            <td> 3.4</td>
            <button className="select" onClick={this.bumraState}>select</button>
          </tr>
          <tr>
            <td>prasad</td>
            <td>podili</td>
            <td>9876543219</td>
            <td> 3.7</td>
            <button className="select" onClick={this.prasadState}>select</button>
          </tr>
        </div>
        }

      </table>
      <div className="delete">
         <button  onClick={this.changeState}>Delete</button>
      </div>
      {this.state.rohit &&
      <div className="alldetails">
            firstname : rohith,<br/>
            lastname : sharma,<br/>
            address : 14-1,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543210" ,<br/>
            GPA : 8.9
      </div>}
      {this.state.kohli &&
      <div className="alldetails">
            firstname : kohli,<br/>
            lastname : virat,<br/>
            address : 14-2,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543211" ,<br/>
            GPA : 8.9
      </div>}
      {this.state.rahane &&
      <div className="alldetails">
            firstname : rahane,<br/>
            lastname : ajinkya,<br/>
            address : 14-3,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543212" ,<br/>
            GPA : 7.8
      </div>}
      {this.state.jadeja &&
      <div className="alldetails">
            firstname : jadeja,<br/>
            lastname : ravindra,<br/>
            address : 14-4,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543213" ,<br/>
            GPA : 8.9
      </div>}
      {this.state.raina &&
      <div className="alldetails">
            firstname : raina,<br/>
            lastname : suresh,<br/>
            address : 14-5,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543214" ,<br/>
            GPA : 6.9<br/>
      </div>}
      {this.state.dhoni &&
      <div className="alldetails">
            firstname : dhoni,<br/>
            lastname : mahendrasingh,<br/>
            address : 14-6,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543215" ,<br/>
            GPA : 9.0
      </div>}
      {this.state.pandya &&
      <div className="alldetails">
            firstname : pandya,<br/>
            lastname : hardik,<br/>
            address : 14-7,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543216" ,<br/>
            GPA : 4.2
      </div>}
      {this.state.rahul &&
      <div className="alldetails">
            firstname : rahul,<br/>
            lastname : lokesh,<br/>
            address : 14-8,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543217" ,<br/>
            GPA : 1.9
      </div>}
      {this.state.bumra &&
      <div className="alldetails">
            firstname : bumrah,<br/>
            lastname : jasprit,<br/>
            address : 14-9,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543218" ,<br/>
            GPA : 3.4
      </div>}
      {this.state.prasad &&
      <div className="alldetails">
            firstname : prasad,<br/>
            lastname : podili,<br/>
            address : 14-10,shop street,Puttur,Andhra Pradesh,517583,<br/>
            mobileno : "9876543219" ,<br/>
            GPA : 3.7
      </div>}
    </div>
  );
 
  }
}

export default app;
