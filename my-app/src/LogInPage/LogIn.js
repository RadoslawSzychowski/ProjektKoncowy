import React from 'react';
import './Login.scss';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import gifBackground from '../images/loginVid.gif';



const supabase = createClient('https://dkctxkxpgxbkrmjsewsh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrY3R4a3hwZ3hia3JtanNld3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NzI0NTMsImV4cCI6MjAyMzI0ODQ1M30.CcXELopL5At8GmP_LKtpXKNVS29z8FH3mqPamEsBlFI');

const LogIn = () => {
  


  return (
  <div className="container">
    <div className="login-container">
      <Auth supabaseClient={supabase} />
    </div>
  <div className="background-container">
      <img src={gifBackground} alt="Background"className="background-gif" />
      
    </div>
      <div className="overlay"></div>
  </div>)
};

export default LogIn;
