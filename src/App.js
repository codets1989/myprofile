import React from 'react';
import MyProfile from './MyProfile';

function App() {
  const profileData = {
    photo: 'https://media.licdn.com/dms/image/v2/D5603AQGNAu6ttNfF4Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713842155927?e=1736380800&v=beta&t=t43GufuYsJ7dcutxOsu2DiGBH0860fkxOkqvLJPMhTk',
    name: 'Ankit Mahto',
    bioBrief: 'Software developer with a passion for building web applications.',
    bioFull: 'Software developer seeking full time in building web applications. Skilled in React, Node.js, and GraphQL, with a strong background in design and user experience.',
    projects: [
      {
        title: 'Project Tool',
        description: 'A project management tool that helps teams collaborate and track progress effectively.',
        image: 'https://media.licdn.com/dms/image/D4D12AQHAzpZZDBIkfA/article-cover_image-shrink_720_1280/0/1710486640359?e=2147483647&v=beta&t=_kP7RyfolRjZCXpwZO3GJqC4Trnozc_G8gP1uCmzilc',
      },
      {
        title: 'E-commerce website',
        description: 'An e-commerce platform with a user-friendly interface and secure payment integration.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT401s8LB-tOGoMXO4p5zkR6AJQzOoJ9_NWpw&s',
      },
      {
        title: 'Data Analytics',
        description: 'A data visualization dashboard for business analytics and insights.',
        image: 'https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/Data%20Visualization.jpg&w=1200&h=630',
      },
    ],
    connectLinks: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ankit-mahto-a6b104174/', logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
      { name: 'GitHub', url: 'https://github.com/codets1989', logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
      { name: 'Twitter', url: 'https://twitter.com', logo: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' },
    ],
  };

  return (
    <div>
      <MyProfile
        photo={profileData.photo}
        name={profileData.name}
        bioBrief={profileData.bioBrief}
        bioFull={profileData.bioFull}
        projects={profileData.projects}
        connectLinks={profileData.connectLinks}
      />
    </div>
  );
}

export default App;
