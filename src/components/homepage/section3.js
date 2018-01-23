import React from 'react';
import './section3.css';


class Section3 extends React.Component{
  render(){
    return(
        <div className="section3" id="section3">
            {/*accordian*/}
            <h2 className="center ruleheader">Rules and Regulations</h2><br />
            <div className="rulessection container">
              <ul className="collapsible" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header active"><i className="fa fa-check-circle" aria-hidden="true"></i>Selection Criteria</div>
                  <div className="collapsible-body"><span>Top 20 ranks will qualify for the second round. Individuals will not be picked from teams and
selected. A team with a single member will still be considered as a team and selected
accordingly.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-sign-in" aria-hidden="true"></i>Login</div>
                  <div className="collapsible-body"><span>The selected teams are supposed to login on our portal, the credentials for which will be
provided through text message and email.
</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-question" aria-hidden="true"></i>Questions</div>
                  <div className="collapsible-body"><span>Upon logging in, a list of 10 questions will be provided, after every 3 hours one more
question will be added to the same list.
</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-file" aria-hidden="true"></i>Format of Questions</div>
                  <div className="collapsible-body"><span>No question statements will be provided, only executable files, which will be In two formats.
.exe for Windows and .o (object files) for Mac and linux users.
</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-paper-plane" aria-hidden="true"></i>Answer Submission</div>
                  <div className="collapsible-body"><span>The teams have to submit their code, in the appropriate format. (Appropriate
format being .py for python and so on). No .doc/.txt files are to be uploaded(only .py, .cpp, .c and .java). Answers can be
uploaded multiple times.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-thumbs-up" aria-hidden="true"></i>Marking</div>
                  <div className="collapsible-body"><span>The files uploaded by the teams will be downloaded by the admin, reviewed and marked
accordingly. For each successful submission 10 marks will be awarded else it will depend on number of test cases.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">whatshot</i>Leaderboard</div>
                  <div className="collapsible-body"><span>The score will reflect on the Leaderboard, which will be updated manually from the admin
panel. You can access leaderboard at <b><a target="_blank" href="http://rc.acmvit.in/leaderboard">Leaderboard</a></b></span></div>
                </li>
                  <li>
                      <div className="collapsible-header"><i className="fa fa-linux" aria-hidden="true"></i>Linux and Mac Users</div>
                      <div className="collapsible-body"><span>After downloading the file, go to the directory where the file has been downloaded and run this in terminal
                          &nbsp; &nbsp;
                      <b>chmod 777 filename</b> and then <b>./filename</b></span></div>
                  </li>
                  <li>
                      <div className="collapsible-header"><i className="fa fa-phone" aria-hidden="true"></i>Support</div>
                      <div className="collapsible-body">
                          <span>
                            <b>Akshit</b> : 8190822286 <br />
                              <b>Saurav</b> : 8789330638
                          </span>
                      </div>
                  </li>
              </ul>
            </div>
        </div>
    );
  }
}

export default Section3;
