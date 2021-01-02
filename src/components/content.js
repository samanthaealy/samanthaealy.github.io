import pantene from '../img/pg_line.jpg';
import team from '../img/aipod_team.jpeg';
import pinball from '../img/pinball_expo.jpeg';
import arcade from '../img/arcade_screen.jpeg';
import user from '../img/pinball_user_scenario.png';
import gimbal from '../img/pinball_model.png';
import playfield from '../img/pinball_gimbal.png';
import exploded from '../img/pinball_motor.png';
import hoq from '../img/pinball_hoq.png';
import final from '../img/pinball_final.PNG';
import demo from '../img/pinball_demo.gif';
import frogger from '../img/arcade_frogger.gif';

// Used for portfolio page - text revealed after clicking on tile
const content = {
  "Manufacturing Engineering Manager": `
  <div class="portfolio-details">
    <div class="details-header">
      <h2 class="details-title">Manufacturing Engineering Manager</h2>
      <h3 class="details-subtitle">Procter & Gamble &bull; July 2019 - Present</h3>
    </div>
    <div>
      <div class="details-overview">
        <div class="details-thumbnail">
          <img src=${pantene} alt="Samantha Ealy holding Pantene bottle at Tabler Station plant"></img>
        </div>
        <p>As a strategic collaborator, I perform data analysis to achieve sustainable results on the highest volume selling production line. Leading initiatives across 11 complex products, I engineer out chronic losses and perform root cause analysis to improve robot functionality.</p>
      </div>
      <div class="details-content">
        <div class="details-group">
          <h2>Current Achievements</h2>
          <ul>
            <li>Delivered 55% process reliability improvement in repeated robotic system failures enabling an annual savings of $3.1MM in unplanned downtime, with reapplication to five start-up production lines for a total of ~$15MM</li>
            <li>Improved raw material utilization to deliver $760M in annual savings through reliability engineering enabled by data analysis</li>
            <li>Led collaboration cross-functionally to reduce process failures and improve monthly throughput by 125%</li>
            <li>Managed development and deployment of qualification for daily management system of equipment specific setpoints to 80 line technicians and qualified 8 individuals allowing for 4 promotions</li>
            <li>Created dashboards to visualize data in PowerBI to simply weekly action reports on key performance indicators (KPIs) for the equipment</li>
            <li>Automated data entry using Python to improve time efficiency of querying by 75%</li>
            <li>Pioneered forum to improve work culture and career progression for 12 new hire managers</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`,
  "Electromechanical Engineer": `
  <div class="portfolio-details">
    <div class="details-header">
      <h2 class="details-title">Electromechanical Engineering Intern</h2>
      <h3 class="details-subtitle">aiPod &bull; June 2018 - August 2018</h3>
    </div>
    <div>
      <div class="details-overview">
        <div class="details-thumbnail">
          <img src=${team} alt="Fall 2018 CMU Engineering Computation Project Home Screen"></img>
        </div>
        <p>aiPod is a Pasadena-based startup whose main objective is to sell urban mobility pilots to cities. Integrating city data and computer vision, we are able to relay information using sensors external from the vehicle. With this capability, we can minimize blind spots, detect parking availability, and reduce congestion. My main contribution to the team was creating a package for offboard sensors that would communicate with the vehicle to build a more holistic image of the traffic patterns</p>
      </div>
      <div class="details-content">
        <div class="details-group">
          <h2>Design Process</h2>
          <h3>Housing</h3>
          <p>To start, I began to explore for computer processors, cameras, and sensors for the task at hand. This involved taking into account cost, efficiency, and compatibility. After my initial research, I started to look into the design of the housing. Before moving forward with the first design, I had to consider the following questions:</p>
          <ul>
            <li>How will we house all of the sensors?</li>
            <li>How will we weatherproof the housing to prevent damage to the electrical components?</li>
            <li>What materials will make up the housing?</li>
            <li>To enable a wide range of applications, will there need to be variations in the design?</li>
            <li>How will we mount the housing to different infrastructures (i.e. buildings, traffic lights, lamp posts, street signs, etc.)?</li>
          </ul>
          <p>In the next phase of the design process, I created a CAD prototype in SolidWorks. Through modeling distinct infrastructures, I performed stress analysis to ensure that the mount could withstand the weight of the housing and there would be no damage to the environment due to the force exerted by the housing.</p>
          <h3>Power Source</h3>
          <p>Another important aspect to the design was how to power the electrical components. There were several options to look into:</p>
          <ul>
            <li>Solar power</li>
            <li>Battery power</li>
            <li>Plug-in to existing city power source</li>
            <li>Power Over Ethernet</li>
          </ul>
        </div>
        <div class="details-group">
          <h2>Final Deliverable</h2>
          <p>By the end of the summer, I was able to present mechanical drawings and a CAD model of the final design.</p>
        </div>
        <div class="details-group">
          <h2>Continuous Improvement</h2>
          <p>Next steps would include testing the vehicle-to-infrastructure communication and fabricating the prototype.</p>
        </div>
      </div>
    </div>
  </div>`,
  "Auto-Leveling Pinball Machine": `
  <div class="portfolio-details">
    <div class="details-header">
      <h2 class="details-title">Auto-Leveling Pinball Machine</h2>
      <h3 class="details-subtitle">Carnegie Mellon University &bull; Fall 2018</h3>
    </div>
    <div>
      <div class="details-overview">
        <div class="details-thumbnail">
          <img src=${pinball} alt="Samantha Ealy at the Carnegie Mellon Design Expo"></img>
        </div>
        <p>Pinball machines have been around for decades and our group was interested in reviving the game with features that provide a functional advantage and entertainment. Our project was awarded for both Best Overall and Best Prototype. My main contribution to the project was writing the logic for the microcontroller and assembling the machined and purchased parts.</p>
      </div>
      <div class="details-content">
        <div class="details-group">
          <h2>Design Process</h2>
          <h3>Stakeholder Needs</h3>
          <p>The potential users and stakeholders have needs depending on the use of the product and their role. The user of the game would want the product to be fun, exciting, inexpensive, easy to store and clean, safe, and durable. The arcade owner would also have similar needs, especially the fun and exciting part, to have their arcade attract many people. In addition, the operators would want the game to be easily maintained and easy to set-up.</p>
          <h3>Market Analysis</h3>
          <p>Talking to the operators and pinball machine owners, their biggest complaint about the machine was that it was extremely difficult to level the playfield every time it was moved. Each of the legs will need to be individually leveled, and the accuracy were not always consistent.</p>
          <p>The most important advantages to our product is the drastic increase in level of fun for player and entertainment for viewer, as well as the ease of set-up for operator. The disadvantage of our product is that the price of the added feature to the already high cost pinball machine will be quite significant. To estimate the cost of our model, we need to make a number of assumptions. Our production volume will be low. When we did our research, we found that most pinball machine making companies have very low volume for each model of pinball machine. The average number is around 500 models. Because our model is more complex and expensive to make, we decided to make our volume 350 games just 30% less than the average volume.</p>
        </div>
        <div class="details-visual">
          <img src=${user} alt="Pie graph of results from User Study"></img>
        </div>
        <div class="details-group">
          <h3>House of Quality</h3>
          <p>Overall, our House of Quality table proved to be beneficial because it demonstrated the important relationships and tradeoffs needed in order to make decisions on our final design. One key difference in customer weights for pinball operators is that they emphasize the process behind the assembly of the machine before it is open to the public. Ease of maintenance, set-up, and transport is their main investment because of the responsibilities they hold. Pinball owners are more focused on the gameplay, appearance, and price of the machine.</p>
          <p>With regards to the direction of improvement, we ideally would like to minimize all of the specifications in order to minimize the manufacturing costs. However, in order to incorporate more moving features in the game and improve the user experience, there is cabinet space needed. This directly increases both the volume and weight of the machine. If this additional mass is excessive, it will impact the operator throughout the maintenance, set-up, and transport of the machine, therefore, material alternatives may need to be considered.</p>
          <p>An owner is affected less by these changes because the machine is stationary for the majority of the time it is in this customer’s care. Manufacturing costs influence the pinball owners more than the operators because if the product is expensive to manufacture, then it will be marketed as a luxury item. Since there are exposed metal components, there is a risk for pinball operators to be zapped by the power supply if not properly grounded, therefore, we want to decrease the average power drawn. This does not become a concern for players because there will be a plexiglass preventing them from touching these components.</p>
        </div>
        <div class="details-visual">
          <img src=${hoq} alt="House of Quality table"></img>
        </div>
        <div class="details-group">
          <h3>Failure Modes</h3>
          <p>Below is a summary of our final product's failure modes and the controls we can put in place to minimze those failures.</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Failure Mode</th>
              <th>Effects of Failure</th>
              <th>Causes of Failure</th>
              <th>Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Legs</td>
              <td>Buckling / Shears on Bolts</td>
              <td>Machine will fall, injury to user and/or machine</td>
              <td>Excessive weight, improper bolt tightening</td>
              <td>Set max weight, reduce weight, create safety user manual, warning stickers</td>
            </tr>
            <tr>
              <td>Electronics</td>
              <td>Disconnected or exposed wires, burned out solenoid</td>
              <td>Machine/ parts of machine will not work, can cause injury depending on issue</td>
              <td>Transportation, dropping machine, fatigue</td>
              <td>Good soldering, don’t overuse parts (flippers)</td>
            </tr>
            <tr>
              <td>Motors</td>
              <td>Don’t work, not enough torque to turn, turn too fast, accuracy off</td>
              <td>The game feature won’t be playable</td>
              <td>Weight of playfield, motors not securely attached</td>
              <td>Test motors, simulation to find best attachment methods</td>
            </tr>
            <tr>
              <td>Shafts & Hubs</td>
              <td>They can bend from heavy weight, hubs can wear off or shear and not move with motor</td>
              <td>Playfield pitch/ roll angle change will not work</td>
              <td>Weight of playfield, motor specifications in line with our requirements</td>
              <td>Simulation to test motor capability, take off unnecessary weight</td>
            </tr>
            <tr>
              <td>Power Supply</td>
              <td>Not provide enough power, electronic components not connected well</td>
              <td>The entire game will not work, high voltage can injure someone</td>
              <td>Incorrect circuit setup, old power supply</td>
              <td>Use caution when working or doing maintenance</td>
            </tr>
          </tbody>
        </table>
        <div class="details-group">
          <h3>Prototyping</h3>
          <p>The first design incorporated 4 separate rack and pinion drive systems controlling each leg. Upon further analysis, we needed to ensure that the mechanism could support the machine weight. Overall, we chose not to go with this idea due to the cost and inefficiency.</p>
          <p>Our next concept involved a gimbal so that we could control the rotation about two axes. This would limit the number of motors needed to two, thus reducing cost. To ensure that this product is safe, a separate cabinet will enclose the heavy playfield with the inner cabinet that will be used to connect shafts to rotate the pitch and roll, as well as house all the power supplies and electrical components away from the user. To make the product durable, the outer cabinet will be made of thick and durable plywood and aluminum for strength and durability for the inner cabinet. The shaft would go through each of the midpoints in x and y axis and rotate the playfield according to the IMU signals from the Arduino by changing the motor using the motor controller. The IMU was connected on the bottom of a wooden board, and we were able to level it by setting the angle to zero, and we were able to change the angle of the board by inputting the value before running the code.</p>
        </div>
        <div class="gallery">
          <img src=${gimbal} alt="CAD model of the final prototype"></img>
          <img src=${playfield} alt="CAD model of the underside of the playfield"></img>
          <img src=${exploded} alt="CAD model of the exploded view for the gimbal motor assembly"></img>
        </div>
        <div class="details-group">
          <p>One aspect we had not accounted for before prototyping was the start and stall torque of the motor. The motor purchased had not included a specifications sheet, therefore, we did not know the motor’s torque constant. The motor’s angular speed was controlled using pulse width modulation, which is mapped to a value between 0 and 255. Pulse width modulation, also known as PWM, supplies the motor with an on and off voltage that appears steady to the motor. However, the motor requires a specific torque to start the rotational movement of the load. This maximum torque is known as the start torque. Similarly, there exists a stall torque, where is the motor’s rotational movement is stopped by a maximum torque applied to the shaft. Since, torque and speed have an inverse relationship, we ran into issues while trying to implement a PID controller into our design to rotate the playfield. If the PWM duty cycle was too low then the motor could not overcome the friction to start rotating. We had to experiment with various duty cycles to determine the start torque. Finally, we discovered that the motor needed at least a duty cycle of 15%, which mapped to a signal of 40. Adding integral and derivative control would write a low PWM to the motor in order to decrease the steady state error and avoid overshooting the set angle, however, this value would be lower than the start torque.</p>
          <h3>Mass Production</h3>
          <p>The following list describes what our production model will be made of and how they will be processed.</p>
          <ul>
            <li>The outer cabinet will be made of heavy duty wood, cut to each pieces and assembled together by woodscrews.</li>
            <li>The inner cabinet will be made of ⅜ inch aluminum, cut to each pieces and assembled together by L-brackets.</li>
            <li>The field brackets (attaching the playing field to the shaft) will be produced by stamping. Each model will need two brackets</li>
            <li>The shafts will be manufactured by turning, cut to corresponding diameter and length.</li>
            <li>All screws, bearings, shaft hubs, and L-brackets can be supplied by an outside hardware company.</li>
          </ul>
        </div>
        <div class="details-group">
          <h2>Final Deliverable</h2>
          <p>Our final product automatically levels the playfield allowing for easy set-up by operators when moving the machine. Additionally, changing the pitch varies the difficulty of the game. Easy mode is set at 3 degrees giving the users more time to react as the ball rolls down while the standard machine is set at 9 degrees for professional players.</p>
          <div class="details-visual">
            <img src=${final} alt="Final pinball machine design"></img>
          </div>
        </div>
        
        <div class="demo">
          <img src=${demo} alt="Video demo of pinball machine auto-leveling and gameplay"></img>
        </div>
        <div class="details-group">
          <h2>Continuous Improvement</h2>
          <p>At the Design Exposition, most of the concerns brought up by our users were components that were missing from the game, such as the plunger, scoreboard, and kicker that automatically dispenses the ball. The absent plunger was a design decision based on time and budget. With the middle aluminum frame, it was nearly impossible to implement the same old fashioned plunger that extended beyond the outer cabinet of the old machine because there would be no space to pull back the component. We had two solutions for this issue:</p>
          <ul>
            <li>machine a shorter plunger and pair it with a spring with a higher spring constant</li>
            <li>use a solenoid mechanism similar to the flippers that is just a button to launch the ball</li>
          </ul>
          <p>The mass production model of our game would incorporate the dimension changing aspect to the playfield. It would also incorporate the auto-level feature into game rules and logic. The wiring underneath the board could be cleaned up by a simple PCB board in the final production model. We would also have a protective glass covering the playfield to protect users from the high currents running through the machine and motors.</p>
        </div>
      </div>
    </div>
  </div>`,
  "Scotty Dog's Retro Arcade":`
  <div class="portfolio-details">
    <div class="details-header">
        <h2 class="details-title">Scotty Dog's Retro Arcade</h2>
        <h3 class="details-subtitle">Carnegie Mellon University &bull; Fall 2018</h3>
    </div>
    <div>
      <div class="details-overview">
        <div class="details-thumbnail">
          <img src=${arcade} alt="Fall 2018 CMU Engineering Computation Project Home Screen"></img>
        </div>
        <p>The arcade included Frogger, Space Invaders, Tetris, Brick Breaker, and Snake. My main contribution to this project was programming Frogger. All 5 games were developed independently and then combined into one application. Primarily, the biggest challenge was debugging the code written by my team members to deliver a cohesive game.</p>
      </div>
      <div class="details-content">
        <div class="details-group">
          <h2>Design Process</h2>
          <h3>Objective of Frogger</h3>
          <p>The overarching goal is to guide the frog from the bottom of the screen to the top of the screen where the empty "frog homes" are. The player has 5 lives and can move the frog in 4 directions using the arrow keys.</p>
          <p>Sounds easy, right? Well, there are a number of obstacles the player must avoid before reaching the frog homes. Initially, the frog must evade vehicles moving at different velocities in opposing lanes of traffic. After, there is a median strip that allows the player to take a break before conquering the next hurdle, the river. The player must hitch a ride on the logs moving horizontally across the screen to prevent them from falling into the river.</p>
          <p>Once all 5 frog homes are occupied, the game will advance to the next level. The player is allotted 30 seconds to guide the frog to a home. The timer will reset each time the player loses a life of reaches the home safely.</p>
          <p>To lose a life, the player can:</p>
          <ul>
            <li>Get hit by a vehicle on the road</li>
            <li>Jump into the river</li>
            <li>Remain on a log as it exits the screen</li>
            <li>Jump into a home already occupied</li>
            <li>Run out of time before making it to a frog home</li>
          </ul>
          <p>The player gains 10 points for every step forward, 50 points for reaching a frog home, and 1000 points for moving on to the next level.</p>
          <h3>Translating to Code</h3>
          <p>If we simplify the objective, the game is comprised of rectangles that should not intersect during the road portion, but intersect at the river portion. With this in mind, I created a 15x14 grid of pixels. All objects in the game inherit attributes and methods from the Rectangle class.</p>
          <code>     
class Rectangle
{
public:
    double x, y, w, h;
    int r, g, b;
    
    Rectangle();
    ~Rectangle();
    void Delete(void);
    void SetColor(int red, int green, int blue);
    bool Intersect(Rectangle obs);
};
          </code>
          <p>With each arrow key press, the Player advances in that direction by updating the (x,y) coordinates of the object to the next grid space as long as the Player is within the bounds of the game. The grid layout allows us to retrieve the location of the Player with each move. We only care about checking whether the Player intersects an object within the lane that it is currently in. We can loop through the obstacles in that lane and make updates based on two separate conditions where the rectangle intersect. When the rectangles intersect in the road, we should decrement the number of lives and reset the game. However, if the rectangles intersect in the river, the player should adopt the velocity of the log and update the position accordingly.</p>
          <code>
for (int i = 0; i < lane[frog.GetLane()].nObs; i++)
{
  if(frog.Intersect(lane[frog.GetLane()].obs[i]) &&
    (lane[frog.GetLane()].laneType == CAR ||
    lane[frog.GetLane()].laneType == BUS ||
    lane[frog.GetLane()].laneType == HOME))
  {
    frog.Create();
    nLives--;
  }
  else if (lane[frog.GetLane()].laneType == LOG &&
          frog.Intersect(lane[frog.GetLane()].obs[i]))
  {
    frog.x += lane[frog.GetLane()].vel;
  }
}
          </code>
          <p>For the rectangles to not intersect, the Player needs to be above, below, to the right, or to the left of the object.</p>
          <code>
bool Rectangle::Intersect(Rectangle obs)
{
    double left = x;
    double right = x + w;
    double top = y;
    double bottom = y + h;
    
    double obs_left = obs.x;
    double obs_right = obs.x + obs.w;
    double obs_top = obs.y;
    double obs_bottom = obs.y + obs.h;
    
    return !(left >= obs_right || right <= obs_left ||
            top >= obs_bottom || bottom <= obs_top);
}
          </code>
          <p>To create the objects in the lanes, we map each of the pixels to a character in a string representing an obstacle or a space. We form this string by shuffling two arrays of strings and then merging them to generate the lane. That pattern will be repeated over and over creating the illusion of an infinite course.</p>
          <code> 
void Lanes::CreateLogLane(void)
{
    laneType = LOG;
    vel = double(rand() % 8) + 4.0;
    SetColor(51, 153, 255);
    string logObs[3] = {"ll", "llll", "lllll"};
    string logSpc[4] = {"....", ".....", "......", "........."};
    SetCourse(3, logObs, logSpc);
}
          </code>
          <p>Lastly, we need to implement the functionality for reaching the frog homes. We must ensure that when the Player intersects the frog home, it is unoccupied. We can express this by changing the state of the frog home each time one is reached.</p>
          <code>
for (int i = 0; i < 5; i++)
{
  if(frog.Intersect(home[i]) && home[i].state == 0)
  {
    score += 50;
    nHomes--;
    home[i].state = 1;
    frog.Create();
  }
}             
          </code>
        </div>
        <div class="details-group">
          <h2>Final Deliverable</h2>
          <p>In the end, we were able to integrate all 5 games allowing for engaging gamplay with seamless transitions between applications. Below is a short demo of Frogger.</p>
        </div>
        <div class="demo">
          <img src=${frogger} alt="Frogger Demo"></img>  
        </div>
        <div class="details-group>
          <h2>Continuous Improvement</h2>
          <p>In future iterations, I would like to incorporate sprites to make the gameplay more realistic to the original game.Additionally, there are more elements to the game in the river that allow the player to lose such as colliding with an alligator and riding a turtle after it fully submerges.</p>
        </div>
      </div>
    </div>
  </div>`
}

export { content };