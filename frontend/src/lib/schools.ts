export type SchoolId = 'soe' | 'law' | 'education' | 'business' | 'science' | 'media'

export interface Achievement {
  name: string
  program?: string
  category: 'Research' | 'Competition' | 'Sports' | 'Award' | 'Publication' | 'MUN'
  title: string
  desc: string
  badge: string
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
      },
      {
        id: 'ece', name: 'Electronics & Communication Engineering', code: 'ECE', icon: '📡',
        description: 'ECE department focuses on cutting-edge electronics, signal processing, and communication systems with strong industry linkages.',
        about: `The ECE department offers B.Tech, M.Tech, and Ph.D. programmes with specialisations in VLSI & Chip Design, Embedded Systems, and Wireless Communication.

It has state-of-the-art labs for signal processing, microelectronics, and IoT, and collaborates with Truechip and CISCO for industry-aligned learning.`,
        upcomingEvents: [
          { title: '2-Day Workshop: Smart Controller Design using Soft Computing (MATLAB)', date: 'April 15–16, 2026' },
          { title: 'VLSI Design Seminar', date: 'April 18, 2026' },
          { title: 'IoT Bootcamp', date: 'May 5, 2026' },
        ],
        completedEvents: [
          { title: '2-Day Workshop: Smart Controller Design using Soft Computing', date: 'April 15–16, 2026', description: 'Students trained on MATLAB to design Smart Controllers using Soft Computing — focused on practice and high-level concepts to improve technical competencies.', slug: 'ece-workshop-apr2026' },
        ],
        studentAchievements: [
          { name: 'R. Uday Kiran', program: 'ECE 4th Semester', category: 'Competition', badge: '🥇', title: '1st Prize — Technical Meme Competition, Inno-Skill 2026', desc: 'Secured 1st prize in the Technical Meme competition at Inno-Skill Competition, April 3–4, 2026. Reflects creativity and technical understanding.' },
          { name: 'Jayasankar', program: 'ECE 4th Semester', category: 'Competition', badge: '🥈', title: '2nd Prize — Technical Meme Competition, Inno-Skill 2026', desc: 'Secured 2nd prize in the Technical Meme competition at Inno-Skill Competition, April 3–4, 2026.' },
          { name: 'Anjesh Kumar, Daksh & Kapil', program: 'ECE 4th Semester', category: 'Competition', badge: '🥈', title: '2nd Prize — Build the Circuit, Inno-Skill 2026', desc: 'Secured 2nd prize in the "Build the Circuit" competition at Inno-Skill 2026, April 3–4, 2026.' },
          { name: 'Ankita Mahapatra & Reeyal', program: 'B.Tech ECE 4th Semester', category: 'Competition', badge: '🥉', title: '3rd Position — State-Level India Skills Competition (Industry 4.0)', desc: 'Participated in the State-Level India Skills Competition (Industry 4.0). Completed tasks based on PLC (Programmable Logic Controller) within a limited time, gaining hands-on experience in industrial automation systems.' },
          { name: 'Harsh Malik, Nitin Pandey, Jhalak Dhingra & G. Kumar Swami', program: 'ECE 2nd & 3rd Year', category: 'Award', badge: '🏅', title: 'Dean\'s List — Top 5% of Class', desc: 'Identified in the Dean\'s List for securing a place in the top 5% of their respective classes. Awarded by the Vice Chancellor, Dean Academics, and Dean Engineering.' },
          { name: 'Sai Devesh Reddy', program: 'ECE 4th Semester', category: 'Award', badge: '⭐', title: 'Dual Internships, Campus Ambassador & AIU Football Representative', desc: 'Pursuing stipend-based internships in Video Editing at MRIIF and Data Fluxion. Campus Ambassador at MRU, President of Digital Nexus, and represented MRU in the AIU North-West Zone football tournament.' },
          { name: 'Manvitha, I V Sanjeev, Anmol & Ranveer', program: 'ECE / CST', category: 'Competition', badge: '🥉', title: '3rd Prize — IDE Bootcamp', desc: 'Won 3rd prize at the IDE Bootcamp along with their team from CST.' },
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
      },
      {
        id: 'ra', name: 'Robotics & Automation', code: 'R&A', icon: '🤖',
        description: 'R&A department is at the forefront of autonomous systems, industrial automation, and intelligent robotics research.',
        about: `The Robotics & Automation department offers specialised B.Tech and M.Tech programmes focused on autonomous systems, drone technology, and industrial automation.

Students work in dedicated robotics labs equipped with collaborative robots, drone simulators, and PLC/SCADA systems, with partnerships with ABB and Fanuc.`,
        upcomingEvents: [
          { title: 'Robo-Wars 2026', date: 'May 10, 2026' },
          { title: 'Drone Tech Expo', date: 'May 18, 2026' },
        ],
      },
      {
        id: 'ce', name: 'Civil Engineering', code: 'CE', icon: '🏗️',
        description: 'CE department covers structural engineering, environmental systems, and smart infrastructure for sustainable urban development.',
        about: `The Civil Engineering department offers B.Tech, M.Tech, and Ph.D. programmes with focus areas in Structural Engineering, Environmental Engineering, and Smart Infrastructure.

The department has well-equipped labs for geotechnical testing, concrete technology, and GIS mapping, with collaborations with CPWD and L&T Construction.`,
        upcomingEvents: [
          { title: 'Green Building Symposium', date: 'April 30, 2026' },
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
    studentAchievements: [
      { name: 'Himanshu Jindal & Vishal Bansal', program: 'LLB Sem 3 / BA LLB Sem I', category: 'Competition', badge: '🥈', title: 'Runner-Up — Maharishi Mahesh Yogi National Client Counseling Competition 2025', desc: 'Secured runner-up position at Maharishi Law School, MUIT Noida, November 20–22, 2025.' },
      { name: 'Riya Suri', program: 'BBA LLB Semester X', category: 'Publication', badge: '📖', title: 'Book Chapter Published — Bharti Publications 2026', desc: '"LGBQTIA+: The Unfold History" in "75 years of the Supreme Court of India: Upholding Democracy and Delivering Justice".' },
      { name: 'Anshika Bansal', program: 'School of Law', category: 'Publication', badge: '📖', title: 'Book Chapter — Khwaab Publication 2025', desc: '"Landmark Judgment Addressing Acid Attacks: An Analysis of Laxmi v. Union of India (2014)" in Socio-Legal and Contemporary Issues, Vol. VII.' },
      { name: 'Yuvika Garg', program: 'School of Law', category: 'Publication', badge: '📖', title: 'Book Chapter — Khwaab Publication 2025', desc: '"Transgender Rights and the Indian Constitution: Post-Nalsa Developments" in Socio-Legal and Contemporary Issues, Vol. VII.' },
      { name: 'Adriel Lawrence', program: 'BA LLB Semester 2', category: 'Publication', badge: '✍️', title: 'Article Published — Record of Law, December 2025', desc: '"The Right to a Healthy Environment: From Principle to Enforcement Right" published on December 09, 2025.' },
      { name: 'Vanshika', program: 'BA LLB Semester IV', category: 'MUN', badge: '🌐', title: 'MUN Participation — AMIFEST\'26, Amity University', desc: 'Represented portfolio of Shri Kalyan Singh Kalvi in the Historic Lok Sabha Committee, February 12–13, 2026.' },
      { name: 'Muskan Gupta', program: 'BBA LLB Semester VIII', category: 'Research', badge: '📄', title: 'Paper Presented — National Conference, Faculty of Law, University of Delhi', desc: '"From Conflict to Harmony: Integrating Gita\'s Dharma & Resolution Mechanisms Dialogue at Workplace Disputes", November 13–15, 2025.' },
      { name: 'Tushar Awana & Aditya Chaudhary', program: 'LLB 2nd Year', category: 'Competition', badge: '🥇', title: '1st Prize — Debate Competition, University of Pécs, Hungary', desc: 'Won first prize in the Debate competition organized by University of Pécs – PECS Summer School, Hungary.' },
      { name: 'Akhilesh Singh', program: 'BA LLB Sem VII', category: 'Sports', badge: '🏏', title: 'Best Bowler & Best Fielder — Cricket Tournament, July 2025', desc: 'Won titles of Best Bowler and Best Fielder at Blue Birds Sports Complex Faridabad, July 27, 2025.' },
      { name: 'Akhilesh Singh', program: 'BA LLB Sem VII', category: 'Sports', badge: '🏆', title: 'Valuable Player — Cricket Tournament, July 2025', desc: 'Won title of Valuable Player at Cricket Club tournament, July 20, 2025.' },
      { name: 'Adriel Lawrence', program: 'BA LLB Semester II', category: 'Award', badge: '🎖️', title: 'Academic Excellence Award — Delhi YMCA, September 2025', desc: 'Received Academic Excellence Award for excellent Board Exam Result, September 26, 2025.' },
    ],
    facultyAchievements: [
      { name: 'Prof. (Dr.) Asha Verma', category: 'Research', badge: '🎤', title: 'Presented at Legal Education Research Conference, UNSW Sydney', desc: '"Revolutionizing Course Design: Decolonizing Content and Enhancing Learning without Curriculum Saturation", November 24–25, 2025.' },
      { name: 'Prof. (Dr.) Asha Verma', category: 'Research', badge: '🪑', title: 'Session Chair — Global Summit on AI, Emerging Tech Law & Governance 2025', desc: 'Chaired a session at GSAIET 2025, India International Centre, New Delhi, July 24, 2025.' },
      { name: 'Prof. (Dr.) Asha Verma', category: 'Award', badge: '🏆', title: 'Outstanding Dean Leadership Award — National Education Conclave', desc: 'Received the Outstanding Dean Leadership Award at Thyagaraj Sports Complex, Delhi, August 06–07, 2025.' },
      { name: 'Prof. (Dr.) Shaharyar Asaf Khan & Dr. Ghazala Abidin', category: 'Research', badge: '🪑', title: 'Session Chairs — International Conference, Asian Law College', desc: '"Globally Changing Facets of Law: Dialogue between Multidisciplinary & Interdisciplinary Approach", November 08, 2025.' },
      { name: 'Dr. Chhavi Kulshreshtha', category: 'Research', badge: '📄', title: 'Paper Presented — SPARK 2026, Career College Bhopal', desc: '"From Human Expression to Machine Mediation: AI\'s Expanding Role in Literary Studies", February 20–21, 2026.' },
      { name: 'Dr. Ghazala Abidin', category: 'Research', badge: '📄', title: 'Paper Presented — Lex Ex Machina 2025, SRM University', desc: '"Rethinking Emerging Technologies: Bitcoin and the Indian Context", November 14–15, 2025.' },
      { name: 'Dr. Ghazala Abidin', category: 'Research', badge: '📄', title: 'Paper Presented — ICLT 2026, MANUU Law School Hyderabad', desc: '"The Illusion of Data Protection in India: A Study of the Digital Personal Data Protection Act", February 03, 2026.' },
      { name: 'Dr. Ghazala Abidin', category: 'Publication', badge: '📰', title: 'Published — Scopus Journal of Environmental Sciences (2 papers)', desc: '"Environmental Factors, Trade Openness and Investment Determinants of Economic Growth in BRICS Nations" & "Sustainability & Urban Planning in India", 2025.' },
      { name: 'Dr. Ghazala Abidin & Dr. Chhavi Kulshreshtha', category: 'Publication', badge: '💡', title: 'Patent Published — Autonomous Biometric Monitoring Wrist-Wearable Device', desc: 'Application No. 202511074241 A, Patent Office Journal No. 35/2025, August 29, 2025.' },
      { name: 'Dr. Superna Venaik', category: 'Competition', badge: '⚖️', title: 'Judge — Philip C. Jessup International Law Moot Court Competition 2026', desc: 'Judged India National Qualifying Rounds at O.P. Jindal Global University, Sonipat, February 13, 2026.' },
      { name: 'Dr. Aarushi Malik', category: 'Award', badge: '🎓', title: 'Completed EDP on ESG, Carbon Markets & Sustainability', desc: 'Executive Development Programme by Dhirubhai Ambani University, School of Law, September 29 – December 20, 2025.' },
      { name: 'Dr. Apala Vatsa & Mr. Aditya Verma', category: 'Research', badge: '📄', title: 'Paper Presented — University of Warwick Conference', desc: '"Imagining Feminist Futures through Protest Cycles and Transnational Solidarity in Ni Una Menos", November 29, 2025.' },
      { name: 'Dr. Yamini Atreya', category: 'Research', badge: '🎤', title: 'Moderator — International Conference, Tantia University', desc: 'Panel discussion on "Reimagining Fundamental Rights under the Indian Constitution in 21st century", November 22, 2025.' },
      { name: 'Dr. Yamini Atreya & Ms. Saloni Mishra', category: 'Research', badge: '📄', title: 'Paper Presented — Benett University & University of Leeds/Birmingham', desc: '"The Role of AI and the Reconceptualization of the Right Against Exploitation of Women in the 21st century", November 24–25, 2025.' },
      { name: 'Dr. Aaratrika Pandey', category: 'Publication', badge: '📖', title: 'Book Chapter Published — Routledge, February 2026', desc: '"Conceptualizing the Anatomy of Green Criminology in South Asia" in "Green Criminology and Climate Justice: A South-Asia Perspective".' },
      { name: 'Ms. Garima Pahwa', category: 'Research', badge: '📄', title: 'Paper Presented — Sharda University International Conference', desc: '"Integrating Traditional Ecological Knowledge of Gond & Baiga Tribes into Wildlife Protection Law Enforcement", January 16–17, 2026.' },
      { name: 'Ms. Garima Pahwa', category: 'Research', badge: '📄', title: 'Paper Presented — 1st International Conference on Clean and Safe Sports, NLU Delhi', desc: '"The Interface between Competition Law and Safe Sport: A Comparative Case Law Analysis", February 14, 2026.' },
      { name: 'Prof. (Dr.) S.K. Bose', category: 'Research', badge: '🎤', title: 'Resource Person — 94th Online Refresher Course: Law', desc: '"From Privacy to Principle: Embedding Data Protection in the Rule of Law", August 25, 2025.' },
      { name: 'Ms. Chaitali Wadhwa', category: 'Publication', badge: '📖', title: 'Multiple Book Chapters & Design Patent Published — 2025', desc: 'Chapters in "The Justice She Deserves", "Bharatiya Jurisprudence and Indian Knowledge System", and "Criminal Minds and Media Trials". Design patent "Interactive Legal Assistance Device" granted August 06, 2025.' },
      { name: 'Ms. Chaitali Wadhwa', category: 'Competition', badge: '⚖️', title: 'Guest Arbitrator — FDI Investment Arbitration International Moot Court Competition 2025', desc: 'Invited as Guest Arbitrator for Regional Rounds, August 2025.' },
      { name: 'Dr. Tarundeep Kaur', category: 'Publication', badge: '📰', title: 'Paper Published — Journal of School of Language, Literature and Culture Studies', desc: '"The Soul of Wellbeing: Integrating Spirituality into the Science of Happiness", ISSN: 0972-9682, 2025.' },
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
        upcomingEvents: [{ title: 'ICEMRB-2026 — International Conference on Energy Materials and Rechargeable Batteries', date: 'Oct 14–17, 2026' }],
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
        upcomingEvents: [],
      },
      {
        id: 'biotechnology', name: 'Biotechnology', code: 'BIO', icon: '🧬',
        description: 'Cutting-edge biotech research in genomics, bioinformatics, and pharmaceutical sciences.',
        about: `The Biotechnology department offers B.Tech Biotechnology, M.Sc. Biotechnology, and Ph.D. programmes. Research areas include genomics, bioinformatics, drug discovery, and agricultural biotechnology. The department has a BSL-2 certified microbiology lab and collaborates with biotech firms in the NCR region.`,
        upcomingEvents: [],
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
