import React from 'react';
import { Typography, Paper } from '@mui/material';

const Skills = () => {
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
      <Typography variant="h4" gutterBottom style={{ textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: 'Roboto, sans-serif' }}>
  Programming Languages
</Typography>
<Typography variant="body1" paragraph>
  My toolkit includes Java, Python, C#, C/C++, and JavaScript/TypeScript.
</Typography>

<Typography variant="h4" gutterBottom  style={{ textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
  Web Development
</Typography>
<Typography variant="body1" paragraph>
  Passionate about building web experiences with technologies like HTML/CSS and React.js.
  Experience with backend frameworks like .NET and Express.js.
</Typography>

<Typography variant="h4" gutterBottom style={{ textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
  Databases
</Typography>
<Typography variant="body1" paragraph>
  Experience working with SQL/NoSQL databases like SQLite, Amazon RDS, DynamoDB & MongoDB.
</Typography>

<Typography variant="h4" gutterBottom style={{ textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
  Cloud Technologies
</Typography>
<Typography variant="body1" paragraph >
  As an AWS Cloud Practitioner, I create cloud solutions. This very website uses Firebase and AWS Lambda.
</Typography>

<Typography variant="h4" gutterBottom style={{ textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
  Teamwork and Agile
</Typography>
<Typography variant="body1" paragraph>
  I collaborate in Agile teams, using Jira and GitHub for efficient teamwork.
</Typography>

<Typography variant="h4" gutterBottom style={{ textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
  Problem-Solving and Creativity
</Typography>
<Typography variant="body1" paragraph>
  I possess strong problem-solving and critical thinking skills. These abilities shine when I engage in content creation for NextWork, perform business analysis, and assist customers effectively, managing their requirements.
</Typography>

<Typography variant="h4" gutterBottom style={{ textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
  Lifelong Learning
</Typography>
<Typography variant="body1">
  My journey of learning continues. I'm currently exploring Flutter + Dart for mobile app development.
</Typography>



    </Paper>
  );
};

export default Skills;
