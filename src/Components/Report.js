import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          subject: '',
          email: '',
          phone: '',
          right: '',
          victimName: '',
          reportDetails: ''
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      
  sendEmail=(e)=> {
    e.preventDefault();

    emailjs.send('default_service', 'template_ZIkhS6qQ', e.target, 'user_xWaJSd5Hb3HtH6Vq0RPBL')
      .then((result) => {
          console.log(result.text);
          alert("Your message was sent successfully");
          window.Location("/");
      }, (error) => {
          console.log(error.text);
          alert("Report not send, please try again")
      });
  }


    render() { 
        return ( 
        <React.Fragment>
            <form className="container" onSubmit={this.sendEmail}>
                <h2 className="text-center">Report form</h2>
                <small > <span className="text-danger">*</span> All fields are required</small>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Full Name</label>
                <input required type="text" name="Full name" onChange={this.myChangeHandler} className="form-control" id="formGroupExampleInput" placeholder="John Doe" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Subject of Report</label>
                <input required type="text" name="subject" onChange={this.myChangeHandler} className="form-control" id="formGroupExampleInput2" placeholder="What is your report subject" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Email </label>
                <input required type="email" name="email" onChange={this.myChangeHandler} className="form-control" id="formGroupExampleInput2" placeholder="johndoe@gmail.com" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput6">Phone Number</label>
                <input required type="tel" name="phone number" onChange={this.myChangeHandler} className="form-control" id="formGroupExampleInput6" placeholder="09091693607" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput3">Right Violated</label>
                <input required type="text" name="right violated" onChange={this.myChangeHandler} className="form-control" id="formGroupExampleInput3" placeholder="What Right was violated?" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput4">Victim's Name</label>
                <input required type="text" name="victim's name" onChange={this.myChangeHandler} className="form-control" id="formGroupExampleInput4" placeholder="Name of the Victim" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput5">Details of Report</label><br />
                <small>Kindly provide in details every information pertaining to this report to the best of your knowledge.</small>
                <textarea required cols="38" name="report details" onChange={this.myChangeHandler} rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-secondary btn-lg btn-block">Submit</button>

            </form>
            </React.Fragment> 
        );
    }
}
 
export default Report;