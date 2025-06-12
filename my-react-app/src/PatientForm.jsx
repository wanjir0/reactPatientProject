import React, {useState} from 'react';
import axios from 'axios';



const PatientForm = () => {
     const [formData,setFormData]=
      useState({
        firstName:'',
        lastName:'',
        dateOfBirth:'',
        ssn:'',
        sex:'',
        cellPhone:'',
        address:'',
        dateOfAdmission:'',
        doctorHandlingThisCase:'',
     });

 const handleChange = (e)=> {
      const {name, value, type, checked}
      = e.target;
          setFormData(prevState => ({
             ...prevState,
             [name]:type =='radio' ?
             (checked ? value : prevState[name]) : value
          }));
 };
 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!formData.firstName|| !formData.lastName || !formData.dateOfBirth || !formData.sex|| !formData.cellPhone){
      alert('Name,Date of Birth,Sex,and Cellphone are required!');
      return;
    }
    try{
      const Response= await axios.post('https://localhost:5000/patients',formData);
      alert('patient added successfully!');
      //for clearing the form fields after submission
      setFormData({firstName:'',lastName:'',dateOfBirth:'',ssn:'',sex:'',cellPhone:'',address:'',dateOfAdmission:'',doctorHandlingThisCase:''});
     } catch(err){
        console.error('Error submitting form:',err);
        alert('Failed to add patient.Please try again.');
      }
      };   

     return (
     <div className="patient-information container">
     <h1>Patient Information</h1> 
          <div className ="steps-indicator">
      <div className ="steps-active">1 Patient Information</div>
      <div className="step">2 outpatient history</div>
      <div className="step">3 medication list</div>
      <div className="step">4 designated individual</div>
      <div className="step">5 no show fee</div>
      <div className="step">6 confirm</div>
             </div>

      <form onSubmit={handleSubmit}className='patient-form'>
        <h2>Provide details
        <span className='required-fields-note'>* indicates required fields</span></h2>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name:*</label>
            <input type='text'id='firstName'name='firstName'value={formData.firstName}onChange={handleChange}required/>
          </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name:*</label>
          <input type='text'id='lastName'name='lastName'value={formData.lastName}onChange={handleChange}required/>
          </div> 
            </div>
       <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='dateOfBirth'>Date of Birth:*</label>
          <input type='date'id='dateOfBirth'name='dateOfBirth'value={formData.dateOfBirth}onChange={handleChange}required/>
          </div>
      <div className='form-group'>        
        <label htmlFor='ssn'>SSN#:</label>
        <input type='text'id='ssn'name='ssn'value={formData.ssn}onChange={handleChange}required/>
        </div>    
          </div> 
      <div className='form-row'>
        <div className='form-group radio-group'>
          <label>sex:*</label>
          <input type='radio'id='male'name='sex'value='Male'
                       onChange={handleChange}required/>
             <label htmlFor='male'>Male</label> 
             <input type='radio'id='female'name='sex'value='Female'
                       onChange={handleChange}required/>
             <label htmlFor='female'>Female</label>          
                </div>
                </div>        
      <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='cellPhone'>cell phone:*</label>
          <input type='tell'id='cellPhone'name='cellPhone'value={formData.cellPhone}
                 onChange={handleChange}required/>
                </div>  </div> 
       <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='address'>Address:</label>
          <input type='address'id='address'name='address'value={formData.address}
               onChange={handleChange}required/>
               </div>
                  </div> 
      <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='dateOfAdmission'>Date of Admission:</label>
          <input type='date'id='dateOfAdmission'name='dateOfAdmission'value={formData.dateOfAdmission}
               onChange={handleChange}required/>
               </div>
                  </div> 
        <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='doctorInCharge'>Doctor In Charge:</label>
          <input type='doctorInCharge'id='doctorInCharge'name='doctorInCharge'value={formData.doctorInCharge}
               onChange={handleChange}required/>
               </div>
                  </div>   
           <button type='submit'>Submit Information</button>       

      </form>       
   </div>
    );
}
export default PatientForm;