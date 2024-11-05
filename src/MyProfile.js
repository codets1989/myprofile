import React, { Component } from 'react';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullBio: false,
    };
  }

  
  readmore = () => {
    this.setState((prevState) => ({
      showFullBio: !prevState.showFullBio,
    }));
  };

  render() {
    const { photo, name, bioBrief, bioFull, projects, connectLinks } = this.props;
    const { showFullBio } = this.state;

    return (
      <div style={styles.container}>
        {/* Profile Section */}
        <img src={photo} alt="Profile" style={styles.profilePhoto} />
        <h1>{name}</h1>

        {/* Bio Section */}
        <section style={styles.bioSection}>
          <p>{showFullBio ? bioFull : bioBrief}</p>
          <button onClick={this.readmore} style={styles.readMoreButton}>
            {showFullBio ? 'Show Less' : 'Read More'}
          </button>
        </section>

        {/* Highlighted Projects Section */}
        <section style={styles.projectsSection}>
          <h2>Highlighted Projects</h2>
          <div style={styles.projectList}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectItem}>
                <img src={project.image} alt={project.title} style={styles.projectImage} />
                <div style={styles.projectDetails}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connect With Me Section */}
        <section style={styles.connectSection}>
          <h2>Connect with Me</h2>
          <ul style={styles.iconList}>
            {connectLinks.map((link, index) => (
              <li key={index} style={styles.iconItem}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                  <img src={link.logo} alt={`${link.name} logo`} style={styles.iconImage} />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}


const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  profilePhoto: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    margin: '10px 0',
  },
  bioSection: {
    marginTop: '15px',
  },
  readMoreButton: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
  },
  projectsSection: {
    marginTop: '30px',
    textAlign: 'center',
  },
  projectList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  projectItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '200px',
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'left',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  projectDetails: {
    marginTop: '10px',
  },
  connectSection: {
    marginTop: '30px',
    textAlign: 'center',
  },
  iconList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  iconItem: {
    display: 'inline-block',
    textAlign: 'center',
  },
  iconLink: {
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconImage: {
    width: '40px',
    height: '40px',
    marginBottom: '5px',
  },
};

export default MyProfile;
