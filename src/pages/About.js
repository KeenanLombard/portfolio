// src/pages/About.js
import Card from "../components/cards/Card";
import React from "react";

const About = () => {
  return (
    <div className='max-w-4xl mx-auto py-12 px-6'>
      <h1 className='text-4xl font-bold text-gray-900 mb-8'>About Me</h1>
      <p className='text-lg text-gray-700 mb-6'>
        Hi. I am an aspiring software engineer with a strong foundation in
        software development and sales. I am looking for a role that allows me
        to grow my skills as an engineer and provide me with mentorship. I
        believe I am a fast learner with a good work ethic and always focus on
        producing the best work I can. I am not afraid to ask questions and
        critique my own code.
      </p>
      <p className='text-lg text-gray-700 mb-6'>
        In my experience with software jobs, I mostly worked with JavaScript (my
        first internship I worked with Vue and in my second internship I worked
        with React and a little Python). Some personal hobbies I have are going
        to the gym, fishing, gaming, and driving motorcycles. Well, that’s me.
      </p>

      <h2 className='text-2xl font-semibold text-gray-900 mt-12 mb-4'>
        Experience
      </h2>

      <div className='grid grid-cols-3 gap-4'>
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
      </div>

      <h2 className='text-2xl font-semibold text-gray-900 mt-12 mb-4'>
        Education
      </h2>
      <div className='grid grid-cols-3 gap-4'>
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
      </div>

      {/* <h2 className='text-2xl font-semibold text-gray-900 mt-12 mb-4'>
        Skills
      </h2>
      <div className='grid grid-cols-3 gap-4'>
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
        <Card
          image='https://via.placeholder.com/400'
          heading='Urban Landscape'
          text='This card has no subheading. Just the image, heading, and text.'
          className='ml-4'
        />
      </div> */}
    </div>
  );
};

export default About;
