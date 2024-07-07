import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Box, Button, Container, Typography, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,300,700');

  html {
    display: flex;
  }

  body {
    @include background-image(linear-gradient(left bottom, #557b8e 0%,#c7e5ce 100%));
    width: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: 'Lato', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  h2 {
    color: #fff;
  }

  input {
    -webkit-appearance: none;
  }

  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  html, body {
    min-height: 100%;
  }

  .card {
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    
    &__header {
      flex-basis: 100%;
      margin: 80px 20px 40px;
      .description {
        color: #777;
        font-size: .8rem;
        text-align: center;
      }
    }

    &__content {
      flex-basis: 100%;
      padding: 50px;
      position: relative;
    }
  }

  h1, h2, h3 {
    font-weight: normal;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    text-align: center;
  }

  .req {
    border: 0 none;
    font-size: 1rem;
    line-height: 2.5rem;
    outline: none;
    transition: all .1s linear;
    width: 100%;
    position: relative;
    &:focus {
      outline: 0;
      background: rgba(255,255,255,1);
    }
  }

  .field {
    &.line {
      border-bottom: 1px solid #eee;
    }
    margin-bottom: 40px;
    position: relative;
  }

  .placeholder {
    cursor: text;
    position: absolute;
    top: 10px;
    color: #909090;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-in-out;
  }

  input {
    display: block;
    width: 100%;
    border: 0;
    border-radius: 0;
    font-size: 16px;
    font-weight: 400;
    background: rgba(255,255,255,0.97);
    color: #212121;
    outline: 0;
    appearance: none;
    transition: all 0.2s ease-in-out;
    &.ui-full + label,
    &:focus + label {
      color: #3FB8AF;
      font-size: 12px;
      transform: translate3d(0, -25px, 0);
    }
  }

  label {
    position: absolute;
    color: #909090;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-in-out;
  }

  #choice option {
    color: black; 
  }

  .empty { 
    color: gray; 
  }

  #choice {
    font-family: 'Lato';
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    padding-right: 50px;
    margin-top: 5px;
    font-size: .9rem;
  }

  .dropdown-wrapper {
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 10px 5px;
    position: relative;
    &:after {
      font-family: 'FontAwesome';
      content: "\f107";
      color: #3FB8AF;
      position: absolute;
      right: 10px;
      top: 12px;
    }
    &.outline {
      border: 1px solid rgba(#3FB8AF, .5);
      box-shadow: 0 0 10px rgba(#3FB8AF, .2);
    }
  }

  select {
    appearance: none;
    background: none;
    border: 0 none;
    font-size: .8em;
    outline: 0;
  }

  .right {
    float: right;
  }

  .inline {
    display: inline-block;
  }

  #btn {
    background-color: #fff;
    border: 1px solid #3FB8AF;
    color: #3FB8AF;
    font-weight: bold;
    border-radius: 5px;
    font-size: 1rem;
    margin-top: 20px;
    padding: 20px;
    width: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #3FB8AF;
      color: #fff;
    }
    &:active {
      background-color: darken(#3FB8AF, 5%);
    }
    &[disabled] {
      background-color: #fff !important;
      color: #3FB8AF !important;
      opacity: .3;
      cursor: not-allowed;
    }
  }

  a {
    color: #3FB8AF;
    &:hover {
      color: darken(#3FB8AF, 5%);
    }
  }

  .ui-full:invalid + label{
    color: red;
  }

  .modal {
    background-color: #fff;
    border-radius: 5px;
    display: none;
    padding: 30px 50px 30px 90px;
    margin-bottom: 30px;
    position: relative;
    &.show {
      animation: grow 1s 1;
      animation-fill-mode: forwards;
    }
    &.shrink {
      animation: shrink 1.5s 1;
      animation-fill-mode: forwards;
    }
    &:before {
      color: #3FB8AF;
      content:  "\f00c";
      font-family: 'FontAwesome';
      font-size: 40px;
      position: absolute;
      left: 25px;
      top: 50%;
      margin-top: -25px;
    }
    h2 {
      color: #3FB8AF;
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
    p {
      font-size: .9rem;
      line-height: 1.5rem;
    }
  }

  @keyframes grow {
    0% {
      opacity:0;
      transform:  rotate(0deg) scaleX(0) scaleY(0) ;
    }
    70% {
      opacity:1;
      transform:  rotate(0deg) scaleX(1.1) scaleY(1.1) ;
    }
    100% {
      opacity:1;
      transform:  rotate(0deg) scaleX(1) scaleY(1) ;
    }
  }

  @keyframes shrink {
    0% {
      opacity:1;
      transform:  rotate(0deg) scaleX(1) scaleY(1) ;
    }
    100% {
      opacity:0;
      transform:  rotate(0deg) scaleX(0) scaleY(0) ;
    }
  }

  @keyframes fade {
    0% {
      opacity:0;
      transform: translateY(10px);
    }
    100%{
      opacity:1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    0%{
      opacity:1;
      transform: translateY(0);
    }
    100% {
      opacity:0;
      transform: translateY(10px);
    }
  }

  .focus {
    font-weight: bold;
  }

  #refer_pos {
    display: inline-block;
  }

  .close-modal {
    cursor: pointer;
    float: right;
    position: relative;
    &:before {
      color: #aaa;
      content: "\f00d";
      position: absolute;
      right: -40px;
      top: -20px;
      padding: 10px;
      font-family: 'FontAwesome';
      transition: all 0.2s ease-in-out;
    }
    &:hover:before {
      color: darken(#aaa, 10%);
    }
  }

  .reset {
    color: #777;
    cursor: pointer;
    font-size: .8rem;
    margin: 0 auto;
    margin-top: 30px;
    padding: 5px;
    text-align: center;
    width: 100%;
    &:hover {
      color: darken(#777, 10%);
    }
  }

  .positions {
    animation: fade 1.5s 1;
    animation-fill-mode: forwards;
    padding: 20px;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 50px;
      text-align: center;
      text-transform: uppercase;
    }
    .pos-card {
      background-color: #fff;
      border-radius: 5px;
      margin: 20px;
      padding: 30px;
      &:hover {
        border: 1px solid #3FB8AF;
      }
      .content {
        text-align: center;
      }
      .title {
        color: #3FB8AF;
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .dept, .date, .refer {
        color: #777;
        font-size: .8rem;
        margin-bottom: 10px;
      }
      .desc {
        list-style-type: none;
        margin-top: 20px;
        li {
          color: #333;
          font-size: .9rem;
          line-height: 1.5rem;
        }
      }
    }
  }

  .return {
    text-align: center;
    margin: 50px;
    a {
      font-size: 1rem;
      font-weight: bold;
      color: #3FB8AF;
    }
  }

  .refer-card {
    background-color: #fff;
    border-radius: 5px;
    margin: 20px;
    padding: 30px;
    &:hover {
      border: 1px solid #3FB8AF;
    }
  }
`;

const JobOpenings = () => {
  const jobList = [
    {
      id: 'pos_1',
      title: 'UI/UX Designer',
      dept: 'Design',
      date: 'June 4',
      refer: 'Refer',
      desc: [
        "6+ years’ experience designing desktop and mobile apps.",
        "Deep appreciation for simple solutions to complex problems.",
        "An amazing portfolio demonstrating successful delivery of innovative design solutions."
      ]
    },
    {
      id: 'pos_2',
      title: 'Sales Manager',
      dept: 'Sales',
      date: 'April 21',
      refer: 'Refer',
      desc: [
        "Determines annual unit and gross-profit plans by implementing marketing strategies; analyzing trends and results.",
        "Implements national sales programs by developing field sales action plans.",
        "Establishes and adjusts selling prices by monitoring costs, competition, and supply and demand."
      ]
    },
    {
      id: 'pos_3',
      title: 'Business Analyst',
      dept: 'Research',
      date: 'March 15',
      refer: 'Refer',
      desc: [
        "Technical tasks (include coding, web pages, stored procedures, all database related work, technical design & specifications, loading data).",
        "Developing and documenting reports or data extracts starting from an end user request.",
        "Developing and documenting specifications for software, websites and e-commerce development or modifications."
      ]
    }
  ];

  return (
    <Container className="positions">
      <GlobalStyle />
      <Typography variant="h2">Job Openings</Typography>
      <ul>
        {jobList.map(job => (
          <li key={job.id} className="pos-card" id={job.id}>
            <Box className="content">
              <Typography className="title">{job.title}</Typography>
              <Typography className="dept">{job.dept}</Typography>
              <Typography className="date">{job.date}</Typography>
              <Typography className="refer">{job.refer}</Typography>
            </Box>
            <ul className="desc">
              {job.desc.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Box className="return">
        <Typography>Return to listings</Typography>
      </Box>
      <ReferralForm />
    </Container>
  );
};

const ReferralForm = () => {
  return (
    <Container className="refer-card">
      <Box className="modal confirmed">
        <span className="close-modal"></span>
        <Typography variant="h2">Thank you!</Typography>
        <Typography>
          <span id="refer_name" className="focus"></span> has been submitted for the{' '}
          <span id="refer_pos" className="focus"></span> position.
        </Typography>
      </Box>
      <Box className="sign-up card">
        <Box className="card__header">
          <Typography variant="h1">Employee Referral</Typography>
          <Typography className="description">
            For more information, please consult the <a href="#">employee handbook</a>.
          </Typography>
        </Box>
        <Box className="card__content">
          <form method="post" className="referral">
            <Box className="field line">
              <TextField
                maxLength="240"
                type="text"
                name="name"
                required
                id="name"
                label="Full Name"
                fullWidth
              />
            </Box>
            <Box className="field line">
              <TextField
                maxLength="240"
                type="email"
                name="email"
                required
                id="email"
                label="Email"
                fullWidth
              />
            </Box>
            <Box className="field line inline">
              <TextField
                maxLength="240"
                type="text"
                name="position"
                required
                id="position"
                label="Position"
                fullWidth
              />
            </Box>
            <Box className="field inline right">
              <FormControl fullWidth>
                <InputLabel id="department-label">Department</InputLabel>
                <Select
                  labelId="department-label"
                  id="choice"
                  name="department"
                  label="Department"
                >
                  <MenuItem value="">Department</MenuItem>
                  <MenuItem value="1">Development</MenuItem>
                  <MenuItem value="2">Sales</MenuItem>
                  <MenuItem value="3">QA</MenuItem>
                  <MenuItem value="4">Design</MenuItem>
                  <MenuItem value="5">HR</MenuItem>
                  <MenuItem value="6">Research</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Button type="submit" variant="contained" color="primary" id="btn" disabled>
                Submit
              </Button>
              <Button href="#" variant="outlined" color="secondary" className="reset">
                Reset
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default JobOpenings;
