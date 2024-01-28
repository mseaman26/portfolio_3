import React from 'react';

const Resume = () => {
  return (
    <div className="doc-content" style={{ backgroundColor: '#ffffff', maxWidth: '468pt', padding: '72pt' }}>
      <h1 className="title" style={{ color: '#000000', fontSize: '26pt', fontFamily: 'Arial', lineHeight: '1.15', paddingBottom: '3pt' }}>Michael Seaman</h1>
      <p className="c1" style={{ textAlign: 'center', color: '#000000', fontSize: '11pt', fontFamily: 'Arial' }}>
        Phone:(831)-247-9385 | Email: mseaman26@gmail.com | San Francisco,CA
      </p>
      <p className="c1" style={{ textAlign: 'center' }}>
        <span>LinkedIn: </span>
        <a className="c13" href="https://www.linkedin.com/in/michael-seaman-120a59250/" style={{ color: '#1155cc', textDecoration: 'none' }}>https://www.linkedin.com/in/michael-seaman-120a59250/</a>
      </p>
      <p className="c1" style={{ textAlign: 'center' }}>
        <span>GitHub: </span>
        <a className="c13" href="https://github.com/mseaman26" style={{ color: '#1155cc', textDecoration: 'none' }}>https://github.com/mseaman26</a>
      </p>
      <p className="c3" style={{ lineHeight: '1.15', textAlign: 'center' }}>
        <span>Portfolio: </span>
        <a className="c13" href="https://michaelbseaman.com/" style={{ color: '#1155cc', textDecoration: 'none' }}>https://michaelbseaman.com/</a>
      </p>

      {/* ... Rest of the content ... */}

    </div>
  );
}

export default Resume;
