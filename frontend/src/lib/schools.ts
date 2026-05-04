export type SchoolId = 'soe' | 'law' | 'education' | 'business' | 'science' | 'media' | 'dsw'

export interface Achievement {
  name: string
  program?: string
  role?: string
  category: string
  title: string
  desc: string
  badge: string
  photo?: string
  url?: string
}

export interface Department {
  id: string
  name: string
  code: string
  icon: string
  description: string
  about: string
  upcomingEvents: { title: string; date: string }[]
  completedEvents?: { title: string; date: string; description?: string; slug?: string }[]
  studentAchievements?: Achievement[]
  facultyAchievements?: Achievement[]
  recruiters?: { name: string; logo: string }[]
}

export interface School {
  id: SchoolId
  name: string
  tagline: string
  icon: string
  color: string
  about: string
  academicPartners: { name: string; image: string }[]
  departments: Department[]
  studentAchievements?: Achievement[]
  facultyAchievements?: Achievement[]
}

export const schools: School[] = [
  {
    id: 'soe',
    name: 'School of Engineering',
    tagline: 'Innovation & Technology',
    icon: '⚙️',
    color: 'bg-primary',
    about: `The School of Engineering at Manav Rachna University is a distinguished centre of excellence committed to delivering high-quality engineering education.

It offers undergraduate (B.Tech), postgraduate (M.Tech), and doctoral (Ph.D.) programmes across disciplines including Computer Science Engineering, AIML, Cyber Security, GenAI, Full Stack Development, Mechanical Engineering, Smart Manufacturing & Automation, Electric Vehicle Technology, Electronics & Communication Engineering, and VLSI & Chip Design.

The school is NBA accredited (valid till 2026) and NAAC accredited, and has collaborations with leading industry and academic partners such as Google Cloud, Xebia, CISCO, KPMG, L&T Edutech, and Truechip, enriching learning experiences and providing students with real-world exposure.`,
    academicPartners: [
      { name: 'ICT Academy',  image: '/academic-partners/Picture 4.jpg' },
      { name: 'Partner',      image: '/academic-partners/Picture 5.jpg' },
      { name: 'Partner',      image: '/academic-partners/Picture 54.png' },
      { name: 'Partner',      image: '/academic-partners/Picture 7.jpg' },
      { name: 'Partner',      image: '/academic-partners/Picture 8.jpg' },
      { name: 'Partner',      image: '/academic-partners/Picture 87.jpg' },
      { name: 'Partner',      image: '/academic-partners/Picture 89.jpg' },
    ],
    departments: [
      {
        id: 'cse', name: 'Computer Science & Engineering', code: 'CSE', icon: '💻',
        description: 'The CSE department offers comprehensive programmes with hands-on learning, industry exposure, and research opportunities. Events organized by Coding Club.',
        about: `The Department of Computer Science & Engineering at SOE, MRU offers B.Tech, M.Tech, and Ph.D. programmes with specialisations in Artificial Intelligence & Machine Learning, Cyber Security & Threat Intelligence, and Cloud, DevOps & Full Stack Development.

The department has active research labs in AI, IoT, and Data Science, and maintains MoUs with companies like Google, Microsoft, and IBM for curriculum enrichment and placement support.`,
        upcomingEvents: [
          { title: 'Orientation: How to Start DSA', date: 'April 8, 2026' },
          { title: 'ICT Academy Webinar: Blockchain', date: 'April 8, 2026 · 9:00–10:00 AM · B.Tech 6th Sem' },
          { title: 'Coding Contest', date: 'April 20, 2026' },
          { title: '1v1 Face-Off in CP', date: 'April 29, 2026' },
        ],
        completedEvents: [
          { title: 'ICASS 2026', date: 'February 12–13, 2026', description: 'International Conference on Intelligent Computing and Automation for Sustainable Solutions', slug: 'icass-2026' },
        ],
        studentAchievements: [
          { name: 'Bhargavi Devapatla, Manas Jha, Manikanta Kancharla & Sankit Singhal', program: 'AIML', category: 'Hackathon', badge: '🥇', title: '1st Place — Code Sangam, SGT University (Feb 2024)', desc: '36-hour hackathon with 3 rounds. Won ₹15,000 prize.' },
          { name: 'Bhargavi Devapatla', program: 'AIML', category: 'Competition', badge: '🥉', title: '3rd Prize — Altair Data Science Contest, E-Summit\'25 (IIITDM Kancheepuram)', desc: 'Under guidance of Dr. Mamta Arora.' },
          { name: 'Bhargavi Devapatla & Manikanta Kancharla', program: 'AIML', category: 'Hackathon', badge: '🏆', title: 'Top 6 — SOLVE-A-THON', desc: 'Reached Top 6 teams in innovation challenge.' },
          { name: 'Narapureddy Durga Prasad Reddy, Manikanta Kancharla, Dogga Pavan Sekhar & Kodati Sai Teja', program: 'CSE', category: 'Hackathon', badge: '🤖', title: 'Hackaccino 2024 — Bennett University', desc: 'Developed ML-based chatbot for health management.' },
          { name: 'Bhargavi Devapatla', program: 'AIML', category: 'Research', badge: '🧠', title: 'Health Tech Innovations Fest — TinyLife: Fetal Segmentation', desc: 'Deep learning research on fetal brain tumor detection using CNN-based U-Net & SegNet.' },
          { name: 'Rishav, Harsh & Avdhesh (Team Bring Hope)', program: 'AIML 6th Sem', category: 'Competition', badge: '🥉', title: '3rd Place — Sociothon, IIT Roorkee (Feb 2024)', desc: 'Secured 3rd among ~500 participants at National Social Summit\'24.' },
          { name: 'Charu Goyal & Drishti Kemni', program: 'CSE', category: 'Best Paper', badge: '📄', title: 'Best Paper Award — ICICC24 (Feb 2024)', desc: '"Evaluation of ML Techniques for Personality Classification using Myers-Briggs Assessment". Guided by Dr. Mrinal Pandey.' },
          { name: 'Team Shinchan — Harsh Bhardwaj, Swayam Arora, Chhaya Sharma & Khushboo Mehta', program: 'CSE', category: 'Hackathon', badge: '🥉', title: '3rd Prize — HackItUp 1.0, MRSDC MRI (Feb 2024)', desc: '12-hour hackathon.' },
          { name: 'Narapureddy Durga Prasad Reddy', program: 'CSE AIML', category: 'Social', badge: '🤝', title: 'Volunteer — Faridabad Wheelchair Cricket Tournament (Mar 2024)', desc: 'Volunteered at Premier League 2.0 supported by Dr. O.P. Bhalla Foundation & Radio Manav Rachna.' },
          { name: 'Durga Prasad', program: 'CSE AIML 5th Sem', category: 'Academic', badge: '🏅', title: 'Exceptional Performance Award — MR IMPACT Phase 1', desc: 'Facilitated for exceptional academic performance.' },
          { name: 'Jayram', program: 'CSE', category: 'Sports', badge: '🏐', title: '1st Position — Volleyball, 1st MREI Hostel Sports Tournament', desc: 'Won first position in Volleyball.' },
          { name: 'Kanan Arora & Poonam Biswas', program: 'CST', category: 'Research', badge: '🔬', title: 'Becon 2024 — IIT Delhi (Research Quest & Inkshpire)', desc: 'Presented "Automated Plant Disease Detection using AI" at Research Quest.' },
          { name: 'Poonam Biswas, Kanan Arora & Mansi Gusian', program: 'CST', category: 'Sports', badge: '🏏', title: 'Winners — Cricket, 10th MREI Girls Sports Meet (Feb 2024)', desc: 'Won cricket match at 10th MREI Girls Sports Meet.' },
          { name: 'Shivani Sharma', program: 'CSE', category: 'Competition', badge: '🥇', title: '1st Place — Health Innovation Fest (40+ teams)', desc: '"Indoor Navigation for Visually Impaired Using Real-Time Object Detection".' },
        ],
        recruiters: [
          { name: 'Google',                          logo: '/images/cse/recruiters/google.png' },
          { name: 'KPMG',                            logo: '/images/cse/recruiters/kpmg.png' },
          { name: 'CDAC',                            logo: '/images/cse/recruiters/cdac.png' },
          { name: 'HCL GUVI',                        logo: '/images/cse/recruiters/hclguvi.png' },
          { name: 'Xebia',                           logo: '/images/cse/recruiters/xebia.png' },
          { name: 'Quick Heal',                      logo: '/images/cse/recruiters/quickheal.png' },
          { name: 'AWS',                             logo: '/images/cse/recruiters/aws.png' },
          { name: 'Infosys',                         logo: '/images/cse/recruiters/infosys.png' },
          { name: 'Artificially Intelligent Workforce', logo: '/images/cse/recruiters/aiw.png' },
          { name: 'Coding Ninja',                    logo: '/images/cse/recruiters/codingninjas.png' },
          { name: 'NPTEL',                           logo: '/images/cse/recruiters/nptel.png' },
          { name: 'Virtual Labs',                    logo: '/images/cse/recruiters/virtuallabs.png' },
          { name: 'Sofocle Labs',                    logo: '/images/cse/recruiters/sofocle.png' },
        ],
      },
      {
        id: 'ece', name: 'Electronics & Communication Engineering', code: 'ECE', icon: '📡',
        description: 'ECE department focuses on cutting-edge electronics, signal processing, and communication systems with strong industry linkages.',
        about: `The ECE department offers B.Tech, M.Tech, and Ph.D. programmes with specialisations in VLSI & Chip Design, Embedded Systems, and Wireless Communication.

It has state-of-the-art labs for signal processing, microelectronics, and IoT, and collaborates with Truechip and CISCO for industry-aligned learning.`,
        upcomingEvents: [
          { title: '2-Day Workshop: Smart Controller Design using Soft Computing', date: 'April 15–16, 2026' },
        ],
        completedEvents: [
          { title: '2-Day Workshop on Smart Controller Design using Soft Computing', date: 'April 15–16, 2026', description: 'A hands-on workshop covering soft computing techniques for smart controller design, organized by the ECE Department, School of Engineering, MRU.', slug: 'ece-workshop-apr2026' },
        ],
        studentAchievements: [
          { name: 'R. Uday Kiran', program: 'ECE 4th Semester', category: 'Competition', badge: '🥇', title: '1st Prize — Technical Meme Competition, Inno-Skill 2026', desc: 'Secured 1st prize in the Technical Meme competition at Inno-Skill Competition, April 3–4, 2026.', photo: '/images/ece/student-achievements/udaykiran.png' },
          { name: 'Jayasankar', program: 'ECE 4th Semester', category: 'Competition', badge: '🥈', title: '2nd Prize — Technical Meme Competition, Inno-Skill 2026', desc: 'Secured 2nd prize in the Technical Meme competition at Inno-Skill Competition, April 3–4, 2026.' },
          { name: 'Anjesh Kumar, Daksh & Kapil', program: 'ECE 4th Semester', category: 'Competition', badge: '🥈', title: '2nd Prize — Build the Circuit, Inno-Skill 2026', desc: 'Secured 2nd prize in the "Build the Circuit" competition at Inno-Skill 2026, April 3–4, 2026.', photo: '/images/ece/student-achievements/anjesh.png' },
          { name: 'Ankita Mahapatra & Reeyal', program: 'B.Tech ECE 4th Semester', category: 'Competition', badge: '🥉', title: '3rd Position — State-Level India Skills Competition (Industry 4.0)', desc: 'Completed tasks based on PLC (Programmable Logic Controller) within a limited time, gaining hands-on experience in industrial automation systems.', photo: '/images/ece/student-achievements/ankita.png' },
          { name: 'Harsh Malik, Nitin Pandey, Jhalak Dhingra & G. Kumar Swami', program: 'ECE 2nd & 3rd Year', category: 'Award', badge: '🏅', title: "Dean's List — Top 5% of Class", desc: "Identified in the Dean's List for securing a place in the top 5% of their respective classes. Awarded by the Vice Chancellor, Dean Academics, and Dean Engineering.", photo: '/images/ece/student-achievements/harshmalik.png' },
          { name: 'Sai Devesh Reddy', program: 'ECE 4th Semester', category: 'Award', badge: '⭐', title: 'Dual Internships, Campus Ambassador & AIU Football Representative', desc: 'Pursuing stipend-based internships in Video Editing at MRIIF and Data Fluxion. Campus Ambassador at MRU, President of Digital Nexus, and represented MRU in the AIU North-West Zone football tournament.', photo: '/images/ece/student-achievements/deveshreddy.png' },
          { name: 'Manvitha, I V Sanjeev, Anmol & Ranveer', program: 'ECE / CST', category: 'Competition', badge: '🥉', title: '3rd Prize — IDE Bootcamp', desc: 'Won 3rd prize at the IDE Bootcamp along with their team from CST.', photo: '/images/ece/student-achievements/manvitha.png' },
        ],
        facultyAchievements: [
          { name: 'Dr. Shruti Vashist', program: "Dean Academics, Professor (Ph.D.)", category: 'Award', badge: '🏆', title: "Utkrisht: 'Icons of Manav Rachna' 2023 & Cricket Winner", desc: "Received the prestigious 'Icons of Manav Rachna' Utkrisht Award 2023. Also won the inter Cricket Challenger Event at MRU." },
          { name: 'Dr. Piyush Charan', program: 'Associate Professor (Ph.D.)', category: 'Award', badge: '🎓', title: 'Google Certified Educator & SWAYAM NPTEL Elite + Silver Medal (2024–25)', desc: 'Recognized as a Google Certified Educator (Feb 2025) for integrating Google tools into teaching. Awarded Elite + Silver Medal (76%) in Managing Intellectual Properties in Universities from SWAYAM NPTEL, IIT Madras, 2024. Recognized by IEEE, USA.' },
          { name: 'Bhanu Pratap', program: 'Associate Professor (Ph.D.)', category: 'Award', badge: '🏏', title: 'Manav Rachna Corporate Cricket Challenge Winner', desc: 'Won the Manav Rachna Corporate Cricket Challenge organized by Manav Rachna Educational Institutions.' },
          { name: 'Dr. K. Deepa', program: 'ECE Department', category: 'Award', badge: '📜', title: 'Certificate of Appreciation — Reviewer, ICSC 2025', desc: 'Received in recognition of valuable contributions as a Reviewer for the conference held on June 16–17, 2025, in Ho Chi Minh City, Vietnam.' },
        ],
        recruiters: [
          { name: 'Recruiter', logo: '/images/ece/recruiters/image.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 2.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 3.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 4.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 5.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 6.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 7.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 8.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 9.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 10.png' },
          { name: 'Recruiter', logo: '/images/ece/recruiters/image copy 11.png' },
        ],
      },
      {
        id: 'me', name: 'Mechanical Engineering', code: 'ME', icon: '🔧',
        description: 'ME department blends classical engineering with modern manufacturing, robotics, and sustainable design practices.',
        about: `The Mechanical Engineering department offers B.Tech, M.Tech, and Ph.D. programmes with specialisations in Smart Manufacturing & Automation, Electric Vehicle Technology, and Thermal Engineering.

The department has advanced CAD/CAM labs, a 3D printing facility, and an EV research centre, with industry tie-ups with L&T and Maruti Suzuki.`,
        upcomingEvents: [
          { title: 'CAD/CAM Workshop', date: 'April 25, 2026' },
        ],
        studentAchievements: [
          { name: 'Team Fenrir Racing', program: 'ME & R&AI', category: 'Competition', badge: '🏆', title: 'Best Innovation in Combustion Engine — ATVC 2026, Monark University, Ahmedabad', desc: 'Team Fenrir Racing won the Best Innovation in Combustion Engine award at ATVC 2026 organized by Infileague Motorsports. A testament to hands-on learning and interdisciplinary collaboration between ME and R&AI departments.' },
          { name: 'Abhi Tomar & Yashpal', program: 'ME 1st Year', category: 'Competition', badge: '🥇', title: 'Top 5 — Indian Design Week Finale 24-Hr Hackathon, Autodesk & ICT Academy (Apr 2026)', desc: 'Out of 140 teams from across the country at NIET Greater Noida (21–22 April 2026), their team advanced to the final round and secured a position among the Top 5 teams.' },
          { name: 'ME Students', program: 'ME', category: 'Training', badge: '🖥️', title: 'Autodesk Fusion 360 Training — India Design Week Preparation', desc: '3-day hands-on training on Autodesk Fusion 360 covering sketching, parametric modelling, assembly design, and simulation. Organized by the ME department to prepare students for India Design Week (IDW) by ICT Academy.' },
          { name: 'Vighnesh Singh & Mehul Sidana', program: 'ME', category: 'Best Paper', badge: '🥇', title: '1st Prize — Poster Presentation, ICASS 2026, MRU', desc: '"Development of a PWM-Controlled DC Motor Vibration System with Zonal Feedback for Driving Simulators" — a low-cost alternative to conventional haptic systems at ~25% of traditional cost. Guided by Prof. Ajit Katiyar.' },
          { name: 'Vinay Kumar & Team', program: 'ME 3rd Year', category: 'Competition', badge: '🥇', title: '1st Prize — E-Yantra, IIT Bombay', desc: 'Won first prize with team at E-Yantra robotics competition, IIT Bombay.' },
          { name: 'Gurpreet Singh, Fateh Singh, Tushar Gupta & Tushar Sehgal', program: 'ME', category: 'Grant', badge: '💰', title: 'CSR Funding ₹10,544 — E-Vehicle Startup', desc: 'Received CSR grant for E-vehicle startup under mentorship of Dr. J.P. Sharma.' },
          { name: 'Karan Khanjuja', program: 'B.Tech ME 4th Sem', category: 'Sports', badge: '⛳', title: 'FIA JCB Tournament Winner · PGTI Pro-AM Runner-Up', desc: 'Group winner at FIA JCB Tournament, Aravali Golf Club. Runner-up at PGTI Pro-AM Delhi NCR Golf Tournament.' },
          { name: 'Vikram Sharma & Yash Choudhary', program: 'B.Tech ME 7th Sem', category: 'Sports', badge: '🏋️', title: 'Bronze (93KG+) & Gold (74KG) — BOSM 2019, BITS', desc: 'Vikram won Bronze in Free Weight 93KG+; Yash won Gold under 74KG at BITS Open Sports Meet 2019.' },
          { name: 'Shivam Kumar', program: 'B.Tech ME', category: 'Cultural', badge: '💃', title: 'National Level Dance Competitions', desc: 'Performed in multiple national level dance competitions.' },
          { name: 'Prateek Sachdeva & Rajendra Tiruwa', program: 'ME', category: 'Publication', badge: '📄', title: 'Scopus Paper — "Jet Engine Mounting Bracket", MRU Feb 2022', desc: 'Published in Scopus-indexed conference organized by MRU.' },
          { name: 'Anshul Tripathi & Pritam', program: 'ME', category: 'Publication', badge: '📄', title: 'Paper — "Carbon Fiber Composites", MRU Feb 2022', desc: 'Published at MRU conference, February 2022.' },
          { name: 'Sahil Thakur & Tushar Aggarwal', program: 'ME', category: 'Publication', badge: '📄', title: 'Paper — "Structural Analysis of Iron Bridge", MRU Feb 2022', desc: 'Published at MRU conference, February 2022.' },
          { name: 'Mukesh Das', program: 'ME', category: 'Publication', badge: '📄', title: 'Paper — Occupational Health Hazards in Sheet Metal Industry (REBA & RULA)', desc: 'Published at MRU conference, February 2022.' },
          { name: 'Dheeraj Malik, Mohd. Tariq Saifi & Ankit Sharma', program: 'ME', category: 'Competition', badge: '🥉', title: '3rd Prize — Anveshan 2019–20 North Zone · Selected for Nationals', desc: 'Won 3rd prize in Engineering & Technology category at North Zone Anveshan 2019–20.' },
          { name: 'Himanshu Garg', program: 'ME 2019 batch', category: 'Publication', badge: '📄', title: '2 International Conference Papers + Lecture Notes in ME, Springer', desc: 'Published 2 papers in international conferences and 1 in Lecture Notes in Mechanical Engineering, Springer. Received Outstanding Achievement Award in Research.' },
          { name: 'Somesh S', program: 'ME 2020 batch', category: 'Publication', badge: '📄', title: '2 Papers in International Peer-Reviewed Journals', desc: 'Published 2 papers including at NHTSEE2017, YMCA Faridabad (Mar 9–10, 2017).' },
          { name: 'ME Team', program: 'ME', category: 'Competition', badge: '🥉', title: '3rd Prize — Anveshan 19–20 North Zone (Geothermal Energy Project)', desc: '"Use of Geothermal Energy for Cooling & Heat Transfer" — 3rd prize at Student Research Convention, North Zone.' },
          { name: 'Karan Sehgal', program: 'ME 2019 batch', category: 'Grant', badge: '💰', title: 'AICTE New Gen IEDC Grant ₹2.5 Lakhs — Electric Tractor', desc: 'Electric Tractor project sanctioned by AICTE-sponsored New Gen IEDC with ₹2.5 lakh grant.' },
        ],
        facultyAchievements: [
          { name: 'Dr. J. P. Sharma', program: 'Mechanical Engineering', category: 'Award', badge: '🏆', title: 'Best Faculty Award — ATVC 2026, Monark University, Ahmedabad', desc: 'Honored with the Best Faculty Award at ATVC 2026 organized by Infileague Motorsports for outstanding mentorship and guidance of Team Fenrir Racing, which also won Best Innovation in Combustion Engine at the same event.' },
        ],
        recruiters: [
          { name: 'Altair',   logo: '/images/me/recruiters/altair.png' },
          { name: 'Daikin',   logo: '/images/me/recruiters/daikin.png' },
          { name: 'L&T',      logo: '/images/me/recruiters/lnt.png' },
        ],
      },
      {
        id: 'ra', name: 'Robotics & Artificial Intelligence', code: 'R&AI', icon: '🤖',
        description: 'R&AI department is at the forefront of autonomous systems, industrial automation, and intelligent robotics research.',
        about: `The Robotics & Artificial Intelligence department offers specialised B.Tech and M.Tech programmes focused on autonomous systems, drone technology, and industrial automation.

Students work in dedicated robotics labs equipped with collaborative robots, drone simulators, and PLC/SCADA systems, with partnerships with ABB and Fanuc.`,
        upcomingEvents: [
          { title: 'Robo-Wars 2026', date: 'May 10, 2026' },
          { title: 'Drone Tech Expo', date: 'May 18, 2026' },
        ],
        studentAchievements: [
          { name: 'Dev Dixit', program: 'Robotics & AI', category: 'NPTEL', badge: '🥇', title: 'Elite + Gold — Top 2% · IPR & Competition Law', desc: 'Scored 91% in 8-week SWAYAM-NPTEL course, ranking in top 2% of all scorers.' },
          { name: 'Ujjawal Arora', program: 'Robotics & AI', category: 'NPTEL', badge: '🥈', title: 'Elite + Silver — IPR & Competition Law', desc: 'Scored 76% in 8-week SWAYAM-NPTEL course, earning Elite + Silver Certification.' },
          { name: 'Ujjawal Arora & Nitin Kumar (Team Sankat Mochan)', program: 'Robotics & AI', category: 'Competition', badge: '🏆', title: '1st Position — Tech Showcase 2.0, MRU (Mar 2025)', desc: 'Won first place in Tech Showcase 2.0 organized by ECE Dept, MRU on 24 March 2025.' },
          { name: 'Nitin Kumar', program: 'Robotics & AI', category: 'Publication', badge: '📄', title: 'Paper at IEEE SCEECS 2025, MANIT Bhopal', desc: '"Dynamic Equilibrium in Robotics: Techniques and Applications for Self-Balancing Robots" — IEEE International Conference, Jan 18–19, 2025.' },
          { name: 'Satvik Asthana', program: 'Robotics & AI', category: 'Publication', badge: '📄', title: 'Paper at COM-IT-CON-2025 (Taylor & Francis)', desc: '"A Roadside Garbage Detection System using Image Processing" — International Conference, Oct 24–25, 2024.' },
          { name: 'Harshil Aron', program: 'B.Tech R&AI 6th Sem', category: 'Academic', badge: '🎓', title: "Dean's List — B.Tech R&AI, 6th Semester", desc: 'Recognized for exceptional academic excellence and consistent dedication to learning.' },
          { name: 'Parth Dua, Shivam Gupta, Riya Bansal & Neha Mendiratta', program: 'R&AI Final Year (2022–26)', category: 'Internship', badge: '💼', title: 'Paid Internship — DAC Aviation', desc: 'Final year batch securing paid internships at DAC Aviation.' },
          { name: 'Shashank Singh & Gaurvi Khatri', program: 'R&AI Final Year (2022–26)', category: 'Internship', badge: '💼', title: 'Paid Internship — Dr. Herald Innovations, Bhiwadi', desc: 'Final year batch undertaking paid internships at Dr. Herald Innovations.' },
          { name: 'Lakshay Bhadana & Jai Tewatia', program: 'R&AI Final Year (2022–26)', category: 'Internship', badge: '💼', title: 'Internship — Urban Dienst', desc: 'Final year batch pursuing internship at Urban Dienst.' },
        ],
      },
    ],
  },
  {
    id: 'law',
    name: 'School of Law',
    tagline: 'Justice & Governance',
    icon: '⚖️',
    color: 'bg-amber-600',
    about: `The School of Law at Manav Rachna University offers practice-driven and application-based legal education with a transdisciplinary approach.

It offers five-year integrated programmes (BBA LLB Hons., BA LLB Hons.), postgraduate LLM, and doctoral programmes. The school is ranked 51st among law schools in India (India Today 2025) and 4th in Haryana.

The school is accredited by the Bar Council of India (BCI) and has NAAC A++ accreditation. It emphasises moot court practice, legal aid clinics, and internships with top law firms and courts.`,
    academicPartners: [],
    studentAchievements: [
      { name: 'Himanshu Jindal & Vishal Bansal', program: 'LLB Sem 3 & BA LLB Sem I', category: 'Competition', badge: '🥈', title: 'Runner-Up — Maharishi Mahesh Yogi National Client Counseling Competition 2025', desc: 'Secured runner-up at Maharishi Law School, MUIT Noida, November 20–22, 2025.' },
      { name: 'Riya Suri', program: 'BBA LLB Semester X', category: 'Publication', badge: '📖', title: 'Book Chapter — "LGBTQIA+: The Unfold History", Bharti Publications 2026', desc: 'Published in "75 Years of the Supreme Court of India: Upholding Democracy and Delivering Justice".' },
      { name: 'Anshika Bansal', program: 'School of Law', category: 'Publication', badge: '📖', title: 'Book Chapter — "Landmark Judgment Addressing Acid Attacks: Laxmi v. Union of India (2014)"', desc: 'Published in "Socio-Legal and Contemporary Issues", Vol. VII 2025, ISBN: 978-81-994358-2-7, Khwaab Publication.' },
      { name: 'Yuvika Garg', program: 'School of Law', category: 'Publication', badge: '📖', title: 'Book Chapter — "Transgender Rights and the Indian Constitution: Post-Nalsa Developments"', desc: 'Published in "Socio-Legal and Contemporary Issues", Vol. VII 2025, ISBN: 978-81-994358-2-7, Khwaab Publication.' },
      { name: 'Adriel Lawrence', program: 'BA LLB Semester 2', category: 'Publication', badge: '✍️', title: 'Article Published — Record of Law, December 2025', desc: '"The Right to a Healthy Environment: From Principle to Enforcement Right" published on December 09, 2025.' },
      { name: 'Vanshika', program: 'BA LLB Semester IV', category: 'MUN', badge: '🌍', title: 'MUN — AMIFEST\'26, Amity University Haryana (Feb 2026)', desc: 'Represented portfolio of Shri Kalyan Singh Kalvi in the Historic Lok Sabha Committee at Inter-University Fest, February 12–13, 2026.' },
      { name: 'Muskan Gupta', program: 'BBA LLB Semester VIII', category: 'Research', badge: '📄', title: 'Paper at National Conference — University of Delhi (Nov 2025)', desc: '"From Conflict to Harmony: Integrating Gita\'s Dharma & Resolution Mechanisms Dialogue at Workplace Disputes", Faculty of Law, University of Delhi, November 13–15, 2025.' },
      { name: 'Tushar Awana & Aditya Chaudhary', program: 'LLB 2nd Year', category: 'Competition', badge: '🥇', title: '1st Prize — Debate Competition, University of Pécs Summer School, Hungary', desc: 'Won first prize in debate competition organized by University of Pécs, PECS Summer School, Hungary.' },
      { name: 'Akhilesh Singh', program: 'BA LLB Sem VII', category: 'Sports', badge: '🏏', title: 'Best Bowler & Best Fielder — Cricket Tournament (Jul 2025)', desc: 'Won Best Bowler and Best Fielder titles at Blue Birds Sports Complex, Faridabad, July 27, 2025. Also titled Valuable Player at Cricket Club tournament, July 20, 2025.' },
      { name: 'Adriel Lawrence', program: 'BA LLB Semester II', category: 'Award', badge: '🏅', title: 'Academic Excellence Award — Delhi YMCA, September 2025', desc: 'Received Academic Excellence Award for excellent Board Exam Result, September 26, 2025.' },
    ],
    facultyAchievements: [
      { name: 'Prof. (Dr.) Asha Verma', category: 'Research', badge: '🎤', title: 'Presented at Legal Education Research Conference, UNSW Sydney (Nov 2025)', desc: '"Revolutionizing Course Design: Decolonizing Content and Enhancing Learning without Curriculum Saturation", November 24–25, 2025.' },
      { name: 'Prof. (Dr.) Asha Verma', category: 'Research', badge: '🎙️', title: 'Session Chair — GSAIET 2025, India International Centre, New Delhi', desc: 'Chaired session at Global Summit on AI, Emerging Tech Law & Governance 2025, July 24, 2025.' },
      { name: 'Prof. (Dr.) Asha Verma', category: 'Research', badge: '📻', title: 'Radio Session — 107.8 FM Radio Manav Rachna', desc: '"Why choose law? And more importantly — why choose the School of Law, MRU?"' },
      { name: 'Prof. (Dr.) Asha Verma', category: 'Award', badge: '🏅', title: 'Outstanding Dean Leadership Award — National Education Conclave, Delhi (Aug 2025)', desc: 'Received Outstanding Dean Leadership Award at Thyagaraj Sports Complex, Delhi, August 06–07, 2025.' },
      { name: 'Prof. (Dr.) Shaharyar Asaf Khan & Dr. Ghazala Abidin', category: 'Research', badge: '🎤', title: 'Session Chairs — International Conference, Asian Law College (Nov 2025)', desc: '"Globally Changing Facets of Law: Dialogue between Multidisciplinary & Interdisciplinary Approach", November 08, 2025.' },
      { name: 'Dr. Chhavi Kulshreshtha', category: 'Research', badge: '📄', title: 'Paper at SPARK 2026, Career College Bhopal (Feb 2026)', desc: '"From Human Expression to Machine Mediation: AI\'s Expanding Role in Literary Studies", February 20–21, 2026.' },
      { name: 'Dr. Ghazala Abidin', category: 'Research', badge: '🎤', title: 'Session Chair — Student Conclave, DME Noida (Nov 2025)', desc: '"Sustainable Choices, Empowered Voices: Rethinking Consumption through the Lens of Gen Z", November 07–08, 2025.' },
      { name: 'Dr. Ghazala Abidin', category: 'Research', badge: '📄', title: 'Paper at Lex Ex Machina 2025, SRM University (Nov 2025)', desc: '"Rethinking Emerging Technologies: Bitcoin and the Indian Context", November 14–15, 2025.' },
      { name: 'Dr. Ghazala Abidin', category: 'Research', badge: '📄', title: 'Paper at ICLT 2026, MANUU Law School Hyderabad (Feb 2026)', desc: '"The Illusion of Data Protection in India: A Study of the Digital Personal Data Protection Act", February 03, 2026.' },
      { name: 'Dr. Ghazala Abidin', category: 'Publication', badge: '📰', title: '3 Papers Published — Scopus & Indian Journals (2025)', desc: 'Published in International Journal of Environmental Sciences (Scopus, 2 papers) and Indian Journal of Law and Legal Research (2025).' },
      { name: 'Dr. Ghazala Abidin & Dr. Chhavi Kulshreshtha', category: 'Publication', badge: '💡', title: 'Patent Published — Autonomous Biometric Monitoring Wrist-Wearable Device', desc: 'Application No. 202511074241 A, Patent Office Journal No. 35/2025, August 29, 2025.' },
      { name: 'Dr. Superna Venaik', category: 'Award', badge: '⚖️', title: 'Judge — Philip C. Jessup International Law Moot Court 2026, OPJ Sonipat', desc: 'Judged India National Qualifying Rounds, February 13, 2026.' },
      { name: 'Dr. Aarushi Malik', category: 'Award', badge: '🎓', title: 'EDP on ESG, Carbon Markets & Sustainability — Dhirubhai Ambani University', desc: 'Executive Development Programme, September 29 – December 20, 2025.' },
      { name: 'Dr. Apala Vatsa & Mr. Aditya Verma', category: 'Research', badge: '📄', title: 'Paper at University of Warwick Conference (Nov 2025)', desc: '"Imagining Feminist Futures through Protest Cycles and Transnational Solidarity in Ni Una Menos", November 29, 2025.' },
      { name: 'Dr. Yamini Atreya', category: 'Research', badge: '🎤', title: 'Moderator — International Conference, Tantia University (Nov 2025)', desc: '"Reimagining Fundamental Rights under the Indian Constitution in 21st century", November 22, 2025.' },
      { name: 'Dr. Yamini Atreya & Ms. Saloni Mishra', category: 'Research', badge: '📄', title: 'Paper at Bennett University Conference (Nov 2025)', desc: '"The Role of AI and the Reconceptualization of the Right Against Exploitation of Women in the 21st century", November 24–25, 2025.' },
      { name: 'Dr. Aaratrika Pandey', category: 'Publication', badge: '📖', title: 'Book Chapter — Green Criminology and Climate Justice, Routledge (Feb 2026)', desc: '"Conceptualizing the Anatomy of Green Criminology in South Asia", eBook ISBN 9781003385011.' },
      { name: 'Ms. Garima Pahwa', category: 'Research', badge: '📄', title: '3 Conference Papers + POSH Certification (2025–26)', desc: '• Sharda University (Jan 2026) — Wildlife Protection Law\n• NLU Delhi (Feb 2026) — Competition Law & Safe Sport\n• University of Delhi (Nov 2025) — Gita\'s Dharma & Workplace Disputes\n• POSH Certification, NSDC via Skill India Digital Hub, January 24, 2026.' },
      { name: 'Prof. (Dr.) S.K. Bose', category: 'Research', badge: '🎤', title: 'Resource Person — 94th Online Refresher Course: Law (Aug 2025)', desc: '"From Privacy to Principle: Embedding Data Protection in the Rule of Law", August 25, 2025.' },
      { name: 'Dr. Tarundeep Kaur', category: 'Publication', badge: '📄', title: 'Paper Published — Journal of School of Language, Literature and Culture Studies (2025)', desc: '"The Soul of Wellbeing: Integrating Spirituality into the Science of Happiness", ISSN: 0972-9682, 2025.' },
      { name: 'Ms. Chaitali Wadhwa', category: 'Publication', badge: '📖', title: '4 Book Chapters + Design Patent + Guest Arbitrator (2025–26)', desc: '• "Framing Femininity" — The Justice She Deserves, July 2025\n• "Dharmic Dialectics and Gender Jurisprudence" — Bharatiya Jurisprudence, July 2025\n• "Inside the Mind, On the Screen" — Criminal Minds and Media Trials, Jan 2026\n• Design Patent: "Interactive Legal Assistance Device", August 06, 2025\n• Guest Arbitrator, FDI Investment Arbitration Moot Court, August 2025.' },
    ],
    departments: [
      {
        id: 'corporate-law', name: 'Corporate & Commercial Law', code: 'CCL', icon: '🏢',
        description: 'Covers business law, mergers & acquisitions, intellectual property, and corporate governance.',
        about: `The Corporate & Commercial Law stream prepares students for careers in corporate law firms, business consultancies, and regulatory bodies. The curriculum covers company law, taxation, contract law, and intellectual property rights, with regular guest lectures from senior advocates and corporate counsels.`,
        upcomingEvents: [{ title: 'Moot Court Competition', date: 'April 22, 2026' }],
      },
      {
        id: 'criminal-law', name: 'Criminal Law', code: 'CRL', icon: '⚖️',
        description: 'Focuses on criminal procedure, evidence, and justice system reform.',
        about: `The Criminal Law stream provides in-depth study of the Indian Penal Code, Code of Criminal Procedure, and Evidence Act. Students participate in legal aid camps and court visits, gaining practical exposure to the criminal justice system.`,
        upcomingEvents: [{ title: 'Criminal Justice Seminar', date: 'May 6, 2026' }],
      },
      {
        id: 'constitutional-law', name: 'Constitutional Law', code: 'COL', icon: '📜',
        description: 'Deep dive into constitutional rights, judicial review, and governance frameworks.',
        about: `The Constitutional Law stream explores fundamental rights, directive principles, judicial review, and federalism. Students engage with landmark Supreme Court judgements and participate in constitutional law moot courts and policy debates.`,
        upcomingEvents: [],
      },
      {
        id: 'international-law', name: 'International Law', code: 'ILL', icon: '🌐',
        description: 'Explores treaties, human rights law, and international dispute resolution.',
        about: `The International Law stream covers public international law, human rights law, international trade law, and dispute resolution mechanisms. Students participate in Model UN conferences and international moot court competitions.`,
        upcomingEvents: [{ title: 'Model UN Conference', date: 'May 14, 2026' }],
      },
    ],
  },
  {
    id: 'education',
    name: 'School of Education',
    tagline: 'Teaching & Pedagogy',
    icon: '📚',
    color: 'bg-green-600',
    about: `The School of Education at Manav Rachna University nurtures future educators with innovative pedagogy, inclusive teaching practices, and a commitment to lifelong learning.

It offers B.Ed., M.Ed., and Ph.D. programmes recognised by the National Council for Teacher Education (NCTE). The school emphasises activity-based learning, digital pedagogy, and inclusive education strategies.

MRU's School of Education has been recognised for its contribution to teacher training and educational research in the National Capital Region.`,
    academicPartners: [],
    departments: [
      {
        id: 'elementary-ed', name: 'Elementary Education', code: 'ELE', icon: '🎒',
        description: 'Prepares teachers for primary schooling with child psychology and activity-based learning.',
        about: `The Elementary Education programme focuses on child development, learning theories, and activity-based teaching methods. Students undergo extensive school internships and are trained in inclusive classroom management and assessment techniques.`,
        upcomingEvents: [{ title: 'Teaching Innovation Fair', date: 'April 28, 2026' }],
      },
      {
        id: 'special-ed', name: 'Special Education', code: 'SPE', icon: '🤝',
        description: 'Focuses on inclusive education strategies for students with diverse learning needs.',
        about: `The Special Education programme trains educators to support students with diverse learning needs including visual impairment, hearing impairment, and learning disabilities. The curriculum is aligned with the Rights of Persons with Disabilities Act, 2016.`,
        upcomingEvents: [],
      },
      {
        id: 'ed-tech', name: 'Educational Technology', code: 'EDT', icon: '🖥️',
        description: 'Integrates digital tools, e-learning platforms, and instructional design into modern classrooms.',
        about: `The Educational Technology programme equips educators with skills in e-learning design, LMS platforms, gamification, and digital assessment tools. Students develop interactive learning modules and gain hands-on experience with tools like Moodle, Canva for Education, and Google Workspace for Education.`,
        upcomingEvents: [{ title: 'EdTech Summit 2026', date: 'May 8, 2026' }],
      },
    ],
  },
  {
    id: 'business',
    name: 'School of Business',
    tagline: 'Management & Enterprise',
    icon: '📊',
    color: 'bg-secondary',
    about: `The School of Business at Manav Rachna University equips students with strategic thinking, entrepreneurial mindset, and global business acumen.

It offers MBA, BBA, B.Com, and Ph.D. programmes with specialisations in Finance, Marketing, Human Resources, Operations, and Entrepreneurship. The school has received QS I-GAUGE Diamond Rating for excellence in teaching, faculty quality, and employability.

The school has active industry partnerships with KPMG, Deloitte, and EY for curriculum co-creation and placement support, with an 85%+ placement rate in recent batches.`,
    academicPartners: [],
    departments: [
      {
        id: 'mba', name: 'Master of Business Administration', code: 'MBA', icon: '💼',
        description: 'Flagship management programme with specialisations in Finance, Marketing, HR, and Operations.',
        about: `The MBA programme at MRU is a two-year full-time programme with specialisations in Finance, Marketing, Human Resources, and Operations Management. The curriculum is industry-aligned with live projects, case studies, and mandatory internships. The programme has strong placement support with top recruiters from BFSI, consulting, and FMCG sectors.`,
        upcomingEvents: [{ title: 'B-Plan Competition', date: 'April 15, 2026' }, { title: 'Industry Conclave', date: 'May 3, 2026' }],
      },
      {
        id: 'finance', name: 'Finance & Accounting', code: 'FIN', icon: '💰',
        description: 'Covers financial markets, investment analysis, and corporate finance.',
        about: `The Finance & Accounting stream covers financial markets, investment banking, corporate finance, and accounting standards. Students gain exposure to Bloomberg terminals, financial modelling, and CFA/CA exam preparation support.`,
        upcomingEvents: [{ title: 'Stock Market Simulation', date: 'April 24, 2026' }],
      },
      {
        id: 'marketing', name: 'Marketing & Branding', code: 'MKT', icon: '📣',
        description: 'Explores digital marketing, consumer behaviour, and brand strategy.',
        about: `The Marketing & Branding stream covers digital marketing, consumer behaviour, brand management, and marketing analytics. Students work on live brand campaigns and gain certifications in Google Ads, Meta Blueprint, and HubSpot.`,
        upcomingEvents: [],
      },
      {
        id: 'entrepreneurship', name: 'Entrepreneurship & Innovation', code: 'ENT', icon: '🚀',
        description: 'Startup ecosystem, venture capital, and innovation management.',
        about: `The Entrepreneurship & Innovation stream is supported by MRU's incubation centre, which has nurtured 50+ startups. Students learn venture capital, design thinking, and lean startup methodologies, with mentorship from successful entrepreneurs and investors.`,
        upcomingEvents: [{ title: 'Startup Pitch Day', date: 'May 12, 2026' }],
      },
    ],
  },
  {
    id: 'science',
    name: 'School of Science',
    tagline: 'Research & Discovery',
    icon: '🔬',
    color: 'bg-purple-600',
    about: `The School of Science at Manav Rachna University fosters curiosity-driven research, interdisciplinary collaboration, and scientific excellence across fundamental and applied sciences.

It offers B.Sc., M.Sc., and Ph.D. programmes in Physics, Chemistry, Mathematics, and Biotechnology. The school has well-equipped research labs and active collaborations with national research institutions including CSIR and DST-funded projects.

Faculty members have published in high-impact international journals and the school has received research grants totalling over ₹4.5 crore in recent years.`,
    academicPartners: [],
    departments: [
      {
        id: 'physics', name: 'Physics', code: 'PHY', icon: '⚛️',
        description: 'From quantum mechanics to astrophysics — exploring the fundamental laws of the universe.',
        about: `The Physics department offers B.Sc. and M.Sc. programmes with research focus areas in condensed matter physics, quantum computing, and astrophysics. The department has a well-equipped optics and spectroscopy lab and faculty with publications in Nature and Physical Review journals.`,
        upcomingEvents: [{ title: 'Physics Olympiad Prep', date: 'April 19, 2026' }],
      },
      {
        id: 'chemistry', name: 'Chemistry', code: 'CHE', icon: '🧪',
        description: 'Organic, inorganic, and analytical chemistry with strong lab infrastructure.',
        about: `The Chemistry department offers B.Sc. and M.Sc. programmes with specialisations in organic synthesis, analytical chemistry, and green chemistry. The department has HPLC, GC-MS, and NMR facilities, and collaborates with pharmaceutical companies for research projects.`,
        upcomingEvents: [],
      },
      {
        id: 'mathematics', name: 'Mathematics', code: 'MAT', icon: '📐',
        description: 'Pure and applied mathematics including data science and computational methods.',
        about: `The Mathematics department offers B.Sc. and M.Sc. programmes covering pure mathematics, applied mathematics, and computational methods. The department has a strong focus on data science and machine learning applications, with students regularly qualifying for national mathematics olympiads.`,
        upcomingEvents: [{ title: 'Math Fest 2026', date: 'May 7, 2026' }],
      },
      {
        id: 'biotechnology', name: 'Biotechnology', code: 'BIO', icon: '🧬',
        description: 'Cutting-edge biotech research in genomics, bioinformatics, and pharmaceutical sciences.',
        about: `The Biotechnology department offers B.Tech Biotechnology, M.Sc. Biotechnology, and Ph.D. programmes. Research areas include genomics, bioinformatics, drug discovery, and agricultural biotechnology. The department has a BSL-2 certified microbiology lab and collaborates with biotech firms in the NCR region.`,
        upcomingEvents: [{ title: 'BioTech Expo', date: 'May 16, 2026' }],
      },
    ],
  },
  {
    id: 'media',
    name: 'School of Media Studies and Humanities',
    tagline: 'Communication & Culture',
    icon: '🎬',
    color: 'bg-rose-600',
    about: `The School of Media Studies and Humanities at Manav Rachna University offers dynamic programmes in journalism, mass communication, and humanities disciplines.

It offers BA (Journalism & Mass Communication), BA (English), MA, and Ph.D. programmes. The school has state-of-the-art media labs, a campus radio station, and a digital newsroom for hands-on learning.

Students benefit from industry collaborations with leading media houses and regular masterclasses from journalists, filmmakers, and communication professionals.`,
    academicPartners: [],
    departments: [
      {
        id: 'journalism', name: 'Journalism & Mass Communication', code: 'JMC', icon: '📰',
        description: 'Trains future journalists and media professionals with hands-on newsroom experience.',
        about: `The Journalism & Mass Communication department offers BA and MA programmes with specialisations in print, broadcast, and digital media. Students work in a fully equipped digital newsroom and campus radio station.`,
        upcomingEvents: [{ title: 'Media Fest 2026', date: 'April 22, 2026' }],
      },
      {
        id: 'english', name: 'English & Literary Studies', code: 'ENG', icon: '📖',
        description: 'Explores literature, linguistics, and creative writing across global traditions.',
        about: `The English & Literary Studies department offers BA and MA programmes covering British, American, and postcolonial literature, linguistics, and creative writing.`,
        upcomingEvents: [],
      },
      {
        id: 'film', name: 'Film & Digital Media', code: 'FDM', icon: '🎥',
        description: 'Covers filmmaking, video production, and digital content creation.',
        about: `The Film & Digital Media programme equips students with skills in screenwriting, direction, cinematography, and post-production with professional-grade studio facilities.`,
        upcomingEvents: [{ title: 'Short Film Festival', date: 'May 9, 2026' }],
      },
    ],
  },
]
