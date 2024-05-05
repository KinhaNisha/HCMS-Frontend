import React from 'react';
import DentalLogo from '../images/Dental.png';
import acidity from '../images/acidity.png';
import cancer_issue from '../images/cancer_issue.png';
import cardiac_issues from '../images/cardiac_issues.png';
import cold_cough_icon from '../images/cold_cough_icon.png';
import diabetes from '../images/diabetes.png';
import ear_nose_throat from '../images/ear_nose_throat.png';
import general_physician from '../images/general_physician.png';
import general_surgery from '../images/general_surgery.png';
import geriatrician from '../images/geriatrician.png';
import haematologist from '../images/haematologist.png';
import weight_counselling from '../images/weight_counselling.webp';
import hair_scalp_issues from '../images/hair_scalp_issues.png';
import labs_report from '../images/labs_report.png';
import labsReport from '../images/labs_report.png';
import nephrology from '../images/nephrology.png';
import neurology from '../images/neurology.png';
import ophthalmology from '../images/ophthalmology.png';
import orthopedics from '../images/orthopedics.png';
import painManagement from '../images/pain_management.jpeg';
import Pediatric from '../images/Pediatric.png';
import pregnancy from '../images/pregnancy.png';
import psychiatric from '../images/psychiatric.png';
import ic_psychology from '../images/ic_psychology.png';
import skin_problems from '../images/skin_problems.png';
import women_issues from '../images/women_issues.png';
import i_dont_know from '../images/i_dont_know.png';
import RoundTick from '../images/round-tick.png';



const SpecialityCard = ({ imageSrc, altText, title }) => {
  return (
    <div className="speciality-card">
      <div className="tick">
        <img src={RoundTick} alt="success consult" className="tick-image" />
      </div>
      <div className="image-container">
        <img src={imageSrc} alt={altText} className="speciality-image" />
      </div>
      <div className="speciality-title">{title}</div>
    </div>
  );
};

const Speciality = () => {
  return (
    <div className="app-container">
      <div className="top-box">
        <div className="title">
          <p>Choose Speciality</p>
        </div>
      </div>
      <div className="specialities-container">
        <div className="specialities-wrapper">
        <SpecialityCard imageSrc={general_physician} altText="internal image" title="General Physician" />
        <SpecialityCard imageSrc={Pediatric} altText="internal image" title="Pediatrics" />
        <SpecialityCard imageSrc={DentalLogo} altText="internal image" title="Dental" />
        <SpecialityCard imageSrc={cold_cough_icon} altText="internal image" title="Cold and Fever" />
        <SpecialityCard imageSrc={skin_problems} altText="internal image" title="Dermatology" />
        <SpecialityCard imageSrc={women_issues} altText="internal image" title="Gynecology" />
        <SpecialityCard imageSrc={general_surgery} altText="internal image" title="General Surgery" />
        <SpecialityCard imageSrc={labsReport} altText="internal image" title="Lab Report Analysis" />
        <SpecialityCard imageSrc={acidity} altText="internal image" title="Gastroenterology" />
        <SpecialityCard imageSrc={orthopedics} altText="internal image" title="Orthopedics" />
        <SpecialityCard imageSrc={pregnancy} altText="internal image" title="Pregnancy issues" />
        <SpecialityCard imageSrc={ear_nose_throat} altText="internal image" title="Ear Nose and Throat" />
        <SpecialityCard imageSrc={neurology} altText="internal image" title="Neurology" />
        <SpecialityCard imageSrc={psychiatric} altText="internal image" title="Psychiatry" />
        <SpecialityCard imageSrc={hair_scalp_issues} altText="internal image" title="Hair Scalp Care" />
        <SpecialityCard imageSrc={ic_psychology} altText="internal image" title="Psychology" />
        <SpecialityCard imageSrc={cardiac_issues} altText="internal image" title="Cardiology" />
        <SpecialityCard imageSrc={diabetes} altText="internal image" title="Diabetes Consult" />
        <SpecialityCard imageSrc={ophthalmology} altText="internal image" title="Ophthalmology" />
        <SpecialityCard imageSrc={nephrology} altText="internal image" title="Nephrology" />
        <SpecialityCard imageSrc={labs_report} altText="internal image" title="Lab Report Analysis" />
        <SpecialityCard imageSrc={haematologist} altText="internal image" title="Haematology" />
        <SpecialityCard imageSrc={cancer_issue} altText="internal image" title="oncology" />
        <SpecialityCard imageSrc={painManagement} altText="internal image" title="Physiotherapist" />
        <SpecialityCard imageSrc={geriatrician} altText="internal image" title="Geriatric Medicine" />
        <SpecialityCard imageSrc={weight_counselling} altText="internal image" title="Weight Management" />
        <SpecialityCard imageSrc={i_dont_know} altText="internal image" title="I do not know" />

        </div>
      </div>
      <footer className="footer">
        <button className="confirm-button">Confirm</button>
      </footer>
    </div>
  );
};

export default Speciality;
