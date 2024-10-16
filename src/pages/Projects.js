import React from "react";
import Card from "../components/cards/Card";

function Projects() {
  return (
    <div className='max-w-4xl mx-auto py-12 px-6'>
      <h1 className='text-4xl font-bold text-gray-900 mb-8'>Projects</h1>

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
      </div>
    </div>
  );
}

export default Projects;
