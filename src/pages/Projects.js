// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  padding: 4rem;
  text-align: center;
`;

const Projects = () => (
  <ProjectsContainer>
    <h1>My Projects</h1>
    <div>
      <ProjectCard title="Fake Social Media PRofile Detection" description="The Fake Social Media Profile Detection project addresses the critical issue of fake accounts on social media platforms, which can lead to misinformation, scams, and privacy breaches. Our system uses machine learning algorithms and data analysis techniques to identify and flag suspicious profiles. By analyzing key indicators such as user behavior, activity patterns, and profile information, the system effectively distinguishes between genuine and fake profiles. This real-time detection capability ensures that social media platforms can maintain a safer and more authentic environment for their users.

The project features a user-friendly interface where administrators or users can input profile data and receive an authenticity score, indicating the likelihood of the profile being fake. The system leverages technologies such as Python for data analysis, Scikit-learn for building machine learning models, Flask for the backend, and React for the frontend. By implementing this solution, social media platforms can enhance user trust and foster a more genuine online community, reducing the risks associated with interacting with fake accounts." />
      <ProjectCard title="Pharmacare" description="The Pharmacare project is a comprehensive pharmacy management system designed to streamline the tracking and management of medicines in stock. This web-based application provides an efficient solution for pharmacies to monitor inventory levels, manage reorders, and ensure that essential medicines are always available for patients. By automating the stock management process, Pharmacare reduces the chances of human error, minimizes stockouts, and optimizes inventory management, making it easier for pharmacies to operate smoothly.

The system features a user-friendly interface that allows pharmacy staff to easily input and track medicine details, including expiration dates, batch numbers, and quantities. The project is built using modern web technologies, with a backend powered by Flask and a frontend developed with React. Pharmacare not only enhances operational efficiency but also ensures that pharmacies can maintain accurate and up-to-date records, ultimately improving patient care by ensuring timely access to necessary medications." />
      <ProjectCard title="Find ur Destination" description="The Find Ur Destination project is a visually engaging travel brochure website designed to help users explore and discover exciting travel destinations. Built entirely with HTML and CSS, this website offers a seamless and intuitive user experience, allowing travelers to browse through various destinations, view stunning images, and learn about key attractions and accommodations. The site is structured to provide clear, easy-to-navigate information, making it a useful tool for anyone planning their next adventure.

With a focus on aesthetic appeal and user-friendly design, Find Ur Destination features responsive layouts that adapt beautifully to different screen sizes, ensuring an optimal viewing experience on both desktop and mobile devices. The website’s clean and modern design, coupled with its vibrant imagery and well-organized content, captures the essence of each destination, inspiring users to explore new places. This project showcases the power of HTML and CSS in creating a functional, attractive, and effective web presence for travel enthusiasts." />
    <ProjectCard title="Automatic Irrigation System using Soil moisture sensor" description="The Automatic Irrigation System project is an IoT-based solution designed to optimize water usage in agriculture by automating the irrigation process. Utilizing soil moisture sensors, this system monitors the moisture levels in the soil in real-time and automatically activates the irrigation system when the soil becomes too dry. This ensures that crops receive the right amount of water at the right time, enhancing growth while conserving water resources.

Built with a focus on efficiency and sustainability, the system integrates sensors, microcontrollers, and wireless communication to provide a reliable and scalable solution for modern farming. The Automatic Irrigation System not only reduces manual labor but also minimizes water waste, making it ideal for both small-scale farms and larger agricultural operations. By leveraging IoT technology, this project demonstrates the potential of smart agriculture to improve crop yields and contribute to sustainable farming practices." />
    </div>
  </ProjectsContainer>
);

export default Projects;
