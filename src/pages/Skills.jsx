import React from 'react';
import { Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Skills = () => {

  const skillSets = [
    {
      title: "Programming Languages",
      text: "I'm proficient in a wide range of programming languages, including Java, Python, R, SAS, C#, C/C++, and JavaScript/TypeScript. This versatile skill set empowers me to excel in a variety of tasks spanning software development, data analysis, and beyond."
    },
    {
      title: "Web Development",
      text: "I have a strong passion for crafting web experiences using technologies like HTML, CSS, and React.js. Additionally, I possess valuable experience with backend frameworks such as .NET and Express.js, and I'm well-versed in leveraging cloud-based backend solutions for optimal performance and scalability."
    },
    {
      title: "Databases",
      text: "Experience working with SQL/NoSQL databases like SQLite, Amazon RDS, DynamoDB & MongoDB."
    },
    {
      title: "Cloud Technologies",
      text: "I have hands-on experience with various cloud technologies and have successfully integrated them into the projects I've undertaken. I hold certification as an AWS Cloud Practitioner and am proficient in utilizing Firebase. In fact, the very website you're currently using is hosted on Firebase and utilizes AWS Lambda, API Gateway, and SNS."
    },
    {
      title: "Teamwork and Agile", 
      text: "Having collaborated within dynamic teams on a diverse array of software projects, including hackathons, pair programming initiatives, and business analysis projects that required active stakeholder engagement and the conceptualization of enhanced systems for prominent organizations such as Mercury and Auckland Council, I have cultivated a keen familiarity with the agile methodology. My experience has afforded me a comprehensive understanding of the essential elements required for a team to operate seamlessly."
    },
    {
      title: "Problem-Solving and Creativity",
      text: "I have strong problem-solving and critical thinking skills, which are especially valuable in my work on software projects, content creation at NextWork, and assisting customers with their needs. I excel in managing requirements and providing creative solutions that meet their business goals."
    },
    {
      title: "Lifelong Learning",
      text: "I consider adaptability as one of my strongest qualities. I'm always eager to seek out new opportunities for learning and personal growth. Currently, I'm actively exploring Flutter and Dart for mobile app development as part of my continuous journey of self-improvement."
    }
  ];

  return (
    <Paper
      elevation={14}
      sx={{
        padding: (theme) => theme.spacing(3),
        maxWidth: 800,
        margin: '0 auto',
        marginTop: (theme) => theme.spacing(5),
        backgroundColor: '#E7473C',
        borderRadius: '8px',
        fontFamily: 'Roboto, sans-serif'
      }}
    >
      {skillSets.map((section, index) => (
        <Accordion key={index} gutterBottom style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: 'Roboto, sans-serif', display: 'flex',
          alignItems: 'center', margin:20, borderRadius:10,
          justifyContent: 'center', flexDirection: 'column', backgroundColor: "#F5F5DC" }}>
          <AccordionSummary    expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h4">
              {section.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="body1" paragraph >
              {section.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      ))}
    </Paper>
  );
};

export default Skills;
