# **App Name**: GrappleGauge

## Core Features:

- Dynamic Visualizations: Interactive bar graphs to visualize attribute scores.
- Partner Profiles: Profile selection to assess different training partners.
- Archetypal Characters: Add static archetypal characters: The Spazz, The Brute, The Frail old guy, The Frail technical lady, The killer green belt, The professor, The competitor, The Chess Player, The Natural Athlete, The Hobbyist, The Flaky Talent, The Injury Collector, The One-Trick Pony, The Gear Obsessed.
- Pattern Connector: Visual connector lines to see the 'shape' of strengths and weaknesses.
- AI-Powered Recommendations: Use an AI tool to analyze the data and suggest specific drills or areas of focus for improvement based on the assessment results.
- Add Training Partner: Functionality to add a new training partner, name it, and fill in the attribute fields.
- Compare Visual Patterns: Option to compare the visual patterns of several different training partners.
- Frail/Robust Score: Score to measure how frail or robust a training partner is.

## Style Guidelines:

- Primary color: Deep blue (#2c3e50) for a professional look.
- Secondary color: Light gray (#ecf0f1) for backgrounds and subtle contrasts.
- Accent color: Teal (#1abc9c) for interactive elements and highlights.
- Clean and modern layout with a central focus on the assessment data.
- Use simple, consistent icons to represent different attributes.
- Smooth transitions and animations for a better user experience.

## Original User Request:
we will create a web app to assess the quality of Grappling training partners.

here is the starting code for an idea.
we can change everything, this is just the proof of concept.

once we replicate the basic PoC, we will commit it to GitHub and start adding functionalities.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BJJ Training Partner Assessment</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }
    .assessment-container {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .category {
      margin-bottom: 30px;
    }
    .category-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #444;
      border-bottom: 2px solid #ddd;
      padding-bottom: 5px;
    }
    .attribute {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    .attribute-name {
      width: 35%;
      font-weight: 500;
      padding-right: 15px;
    }
    .bar-container {
      position: relative;
      height: 25px;
      background-color: #eee;
      border-radius: 4px;
      overflow: hidden;
      flex-grow: 1;
    }
    .zone {
      position: absolute;
      height: 100%;
      top: 0;
    }
    .zone-red {
      left: 0;
      width: 30%;
      background-color: rgba(255, 99, 71, 0.3);
    }
    .zone-yellow {
      left: 30%;
      width: 40%;
      background-color: rgba(255, 205, 86, 0.3);
    }
    .zone-green {
      left: 70%;
      width: 30%;
      background-color: rgba(75, 192, 192, 0.3);
    }
    .bar {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #3498db;
      border-radius: 4px;
      transition: width 0.5s ease;
      z-index: 1;
    }
    .score-label {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-weight: bold;
      z-index: 2;
      color: #333;
    }
    .scale {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      padding: 0 5px;
      width: 65%;
      margin-left: auto;
    }
    .controls {
      margin-bottom: 20px;
      text-align: center;
    }
    button {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 4px;
      margin: 0 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #2980b9;
    }
    .person-select {
      margin-bottom: 15px;
      text-align: center;
    }
    select {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ddd;
      width: 200px;
    }
    .legend {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    .legend-item {
      display: flex;
      align-items: center;
      margin: 0 10px;
    }
    .legend-color {
      width: 15px;
      height: 15px;
      margin-right: 5px;
      border-radius: 3px;
    }
    .red {
      background-color: rgba(255, 99, 71, 0.7);
    }
    .yellow {
      background-color: rgba(255, 205, 86, 0.7);
    }
    .green {
      background-color: rgba(75, 192, 192, 0.7);
    }
    .blue {
      background-color: #3498db;
    }
    .dot {
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: #2c3e50;
      border-radius: 50%;
      bottom: -6px;
      transform: translateX(-50%);
      z-index: 3;
      border: 2px solid white;
    }
    .connector-line {
      position: absolute;
      width: 2px;
      background-color: rgba(44, 62, 80, 0.5);
      z-index: 2;
    }
    #patternContainer {
      position: relative;
    }
  </style>
</head>
<body>
  <div class="assessment-container">
    <h1>BJJ Training Partner Assessment</h1>
    
    <div class="person-select">
      <select id="personSelect">
        <option value="self">Self Assessment</option>
        <option value="partner1">Training Partner 1</option>
        <option value="partner2">Training Partner 2</option>
      </select>
    </div>
    
    <div class="legend">
      <div class="legend-item">
        <div class="legend-color red"></div>
        <span>Needs Work (1-3)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color yellow"></div>
        <span>Developing (4-7)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color green"></div>
        <span>Excellent (8-10)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color blue"></div>
        <span>Score</span>
      </div>
    </div>
    
    <div class="scale">
      <span>0</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>10</span>
    </div>

    <div class="controls">
      <button id="randomBtn">Generate Random Scores</button>
      <button id="resetBtn">Reset Scores</button>
    </div>
    
    <div id="patternContainer">
      <div id="assessmentData">
        <!-- Technical Attributes -->
        <div class="category">
          <div class="category-title">Technical Attributes</div>
          
          <div class="attribute">
            <div class="attribute-name">Controlled Movements</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="controlledMovements" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Controlled Submissions</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="controlledSubmissions" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Modular Intensity</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="modularIntensity" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Depth of Knowledge</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="depthOfKnowledge" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Knowledgeable about injury patterns</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="injuryKnowledge" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Ability to work on specifics/give "looks"</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="specificWork" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
        </div>
        
        <!-- Mindset & Attitude -->
        <div class="category">
          <div class="category-title">Mindset & Attitude</div>
          
          <div class="attribute">
            <div class="attribute-name">Controlled Ego</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="controlledEgo" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Friendly, playful attitude</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="friendlyAttitude" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">R&D mindset (discover & troubleshoot)</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="rdMindset" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Not overtalking/over-explaining</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="notOvertalking" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Communicative about boundaries and injuries</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="communicative" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Feedback receptivity</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="feedbackReceptivity" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Safety consciousness</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="safetyConsciousness" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Recovery awareness</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="recoveryAwareness" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Ability to identify weaknesses & improvements</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="identifyWeaknesses" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
        </div>
        
        <!-- Others -->
        <div class="category">
          <div class="category-title">Others</div>
          
          <div class="attribute">
            <div class="attribute-name">Hygiene</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="hygiene" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
          
          <div class="attribute">
            <div class="attribute-name">Reliability</div>
            <div class="bar-container">
              <div class="zone zone-red"></div>
              <div class="zone zone-yellow"></div>
              <div class="zone zone-green"></div>
              <div class="bar" data-attribute="reliability" style="width: 0%"></div>
              <div class="score-label">0</div>
              <div class="dot" style="display: none;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Sample data for different profiles
    const profiles = {
      self: {},
      partner1: {
        controlledMovements: 7,
        controlledSubmissions: 8,
        modularIntensity: 6,
        depthOfKnowledge: 5,
        injuryKnowledge: 6,
        specificWork: 7,
        controlledEgo: 9,
        friendlyAttitude: 8,
        rdMindset: 7,
        notOvertalking: 6,
        communicative: 8,
        feedbackReceptivity: 9,
        safetyConsciousness: 8,
        recoveryAwareness: 7,
        identifyWeaknesses: 6,
        hygiene: 9,
        reliability: 8
      },
      partner2: {
        controlledMovements: 9,
        controlledSubmissions: 9,
        modularIntensity: 8,
        depthOfKnowledge: 9,
        injuryKnowledge: 7,
        specificWork: 8,
        controlledEgo: 6,
        friendlyAttitude: 7,
        rdMindset: 9,
        notOvertalking: 5,
        communicative: 6,
        feedbackReceptivity: 7,
        safetyConsciousness: 8,
        recoveryAwareness: 7,
        identifyWeaknesses: 9,
        hygiene: 8,
        reliability: 7
      }
    };
    
    // Function to update the bar visualization
    function updateBar(attribute, score) {
      const bar = document.querySelector(`.bar[data-attribute="${attribute}"]`);
      const scoreLabel = bar.nextElementSibling;
      const dot = scoreLabel.nextElementSibling;
      
      // Update width and score label
      bar.style.width = `${score * 10}%`;
      scoreLabel.textContent = score;
      
      // Update bar color based on score
      if (score <= 3) {
        bar.style.backgroundColor = 'rgba(255, 99, 71, 0.7)';
      } else if (score <= 7) {
        bar.style.backgroundColor = 'rgba(255, 205, 86, 0.7)';
      } else {
        bar.style.backgroundColor = 'rgba(75, 192, 192, 0.7)';
      }
      
      // Position the dot
      if (score > 0) {
        const position = score * 10;
        dot.style.left = `${position}%`;
        dot.style.display = 'block';
      } else {
        dot.style.display = 'none';
      }
    }
    
    // Function to draw connector lines between dots
    function drawConnectorLines() {
      // Remove existing connector lines
      document.querySelectorAll('.connector-line').forEach(line => {
        line.remove();
      });
      
      const dots = Array.from(document.querySelectorAll('.dot')).filter(dot => 
        dot.style.display !== 'none'
      );
      
      if (dots.length < 2) return;
      
      const container = document.getElementById('patternContainer');
      const containerRect = container.getBoundingClientRect();
      
      for (let i = 0; i < dots.length - 1; i++) {
        const currentDot = dots[i];
        const nextDot = dots[i + 1];
        
        const currentDotRect = currentDot.getBoundingClientRect();
        const nextDotRect = nextDot.getBoundingClientRect();
        
        const x1 = currentDotRect.left + currentDotRect.width / 2 - containerRect.left;
        const y1 = currentDotRect.top + currentDotRect.height / 2 - containerRect.top;
        const x2 = nextDotRect.left + nextDotRect.width / 2 - containerRect.left;
        const y2 = nextDotRect.top + nextDotRect.height / 2 - containerRect.top;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        const line = document.createElement('div');
        line.className = 'connector-line';
        line.style.width = `${length}px`;
        line.style.height = '2px';
        line.style.position = 'absolute';
        line.style.top = `${y1}px`;
        line.style.left = `${x1}px`;
        line.style.transformOrigin = '0 0';
        line.style.transform = `rotate(${angle}deg)`;
        
        container.appendChild(line);
      }
    }
    
    // Function to load a profile
    function loadProfile(profileName) {
      const profile = profiles[profileName];
      
      // If profile data exists, update the bars
      if (profile) {
        for (const attribute in profile) {
          updateBar(attribute, profile[attribute]);
        }
      } else {
        // Reset all bars if no profile data
        document.querySelectorAll('.bar').forEach(bar => {
          const attribute = bar.getAttribute('data-attribute');
          updateBar(attribute, 0);
        });
      }
      
      // Draw connector lines after updating all dots
      setTimeout(drawConnectorLines, 600); // Wait for animations to complete
    }
    
    // Function to generate random scores
    function generateRandomScores() {
      const attributes = document.querySelectorAll('.bar');
      const currentProfile = document.getElementById('personSelect').value;
      
      if (!profiles[currentProfile]) {
        profiles[currentProfile] = {};
      }
      
      // Generate random scores for each attribute
      attributes.forEach(bar => {
        const attribute = bar.getAttribute('data-attribute');
        const score = Math.floor(Math.random() * 10) + 1; // Random score from 1-10
        
        // Update the current profile's data
        profiles[currentProfile][attribute] = score;
        
        // Update the visualization
        updateBar(attribute, score);
      });
      
      // Draw connector lines after updating all dots
      setTimeout(drawConnectorLines, 600); // Wait for animations to complete
    }
    
    // Function to reset scores
    function resetScores() {
      const attributes = document.querySelectorAll('.bar');
      const currentProfile = document.getElementById('personSelect').value;
      
      // Reset scores for each attribute
      attributes.forEach(bar => {
        const attribute = bar.getAttribute('data-attribute');
        
        // Clear the current profile's data for this attribute
        if (profiles[currentProfile]) {
          profiles[currentProfile][attribute] = 0;
        }
        
        // Update the visualization
        updateBar(attribute, 0);
      });
      
      // Remove connector lines
      document.querySelectorAll('.connector-line').forEach(line => {
        line.remove();
      });
    }
    
    // Function to handle window resize
    function handleResize() {
      // Redraw connector lines when window size changes
      drawConnectorLines();
    }
    
    // Event listeners
    document.getElementById('personSelect').addEventListener('change', (e) => {
      loadProfile(e.target.value);
    });
    
    document.getElementById('randomBtn').addEventListener('click', generateRandomScores);
    document.getElementById('resetBtn').addEventListener('click', resetScores);
    
    window.addEventListener('resize', handleResize);
    
    // Initialize
    loadProfile('self');
  </script>
</body>
</html>
  
  