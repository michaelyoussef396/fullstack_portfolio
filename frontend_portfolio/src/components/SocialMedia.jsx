import React from 'react';
// Importing LinkedIn and GitHub icons from FontAwesome
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <FaLinkedinIn />
      </div>

      <div>
        <FaGithub />
      </div>

      <div>
        <MdEmail />
      </div>
    </div>
  );
}

export default SocialMedia;
