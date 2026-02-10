-- ============================================================================
-- AUTHORS DATA - ICASS 2026
-- ============================================================================
-- This file contains all 176 registered authors for ICASS 2026
-- Run authors-schema-update.sql BEFORE running this file
-- ============================================================================

-- Insert all 176 authors
-- NOTE: track stores the track number; run authors-track-no-update.sql AFTER this 
-- to populate track_no and update track to the full name from the tracks table
INSERT INTO public.authors (paper_id, track, paper_title, name, affiliation, participation_mode, email, order_index) VALUES
(61, '3', 'Design of A FCRD9T SRAM cell for Low-Power Wireless Communications', 'DEEPIKA BANSAL', 'Manipal University Jaipur', 'offline', 'deepika.bansal@jaipur.manipal.edu', 1),
(65, '7', 'Size and Strain Analysis of MgFe2O4 Obtained from Citric-acid Assisted Sol-gel route', 'VINOD SINGH', 'Manav Rachna University, Faridabad, Haryana, India', 'offline', 'vinod_singh.phd24@mru.ac.in', 2),
(75, '1', 'IoT-Based Temperature Forecasting System for Smart Agriculture Applications', 'MATHIVANAN P', 'Saveetha School Of Engineering/Saveetha University', 'online', 'pandarimathi@gmail.com', 3),
(76, '8', 'Systematic Literature Review on CNN and Transform Based Plant Disease Detection Techniques', 'KARAN SONI', 'Sardar Beant Singh State University, Gurdaspur, Punjab', 'online', 'kanu8755@gmail.com', 4),
(78, '4', 'A Comprehensive Review of Advanced TFETs Architectures for Biosensing Applications', 'DR. KAUSHAL KUMAR', 'Graphic Era Deemed to be University, Dehradun', 'online', 'kaushaliit0608@gmail.com', 5),
(79, '1', 'Responsible AI in the Algorithmic Era: Ethics, Bias, and Emerging Frontiers', 'DR. TAPSI NAGPAL', 'NDIM, Delhi', 'online', 'tapsiarora@gmail.com', 6),
(103, '2', 'Hybrid CNN-ResNet18 Framework for Accurate Brain Tumor Classification Using MRI', 'PRABHLEEN KAUR', 'K R Mangalam University', 'online', 'meenuhans.83@gmail.com', 7),
(111, '3', 'Towards Sustainable Textile Manufacturing: Implementing Intelligent Predictive Maintenance in the Indian Context', 'DR. HIRENDRA SINGH', 'Chatrapati Shahu Ji Maharaj University, Kanpur, UP', 'online', 'hirendrasingh@csjmu.ac.in', 8),
(112, '8', 'A Hybrid Approach Based on Deep Learning to Classify the Disease of Apple Leaves', 'SANDEEP KUMAR', 'Information Technology Department, PIET, Panipat', 'online', 'sandeep.it@piet.co.in', 9),
(121, '1', 'Radiomics-Based Classification of Hepatocellular Carcinoma Using an Empirical Curvelet–Ridgelet–Wavelet Transform Approach', 'ANUPAMA JAMWAL, DR. SHRUTI JAIN', 'Jaypee University of Technology, Waknaghat Solan', 'online', 'anu17jamwal@gmail.com', 10),
(129, '3', 'Integrating Blockchain and Self-Sovereign Identity for Secure, Scalable, and User-Controlled Digital Identity Systems', 'PARAS MAHAJAN', 'Chandigarh University', 'online', 'mahajanparas115@gmail.com', 11),
(130, '8', 'Adaptive Scheduling for Cost-Efficient and High-Performance Hybrid Data Applications', 'PARAS MAHAJAN', 'UIE, CSE Department Chandigarh University, Punjab, India', 'online', 'mahajanparas115@gmail.com', 12),
(133, '1', 'A Comprehensive Review on Software Forensics: Enhancing Integrity Verification and Legal Accountability in Software Investigations', 'SAHIL MEHTA', 'Copperpod, Mohali', 'online', 'sahil@copperpodip.com', 13),
(150, '8', 'Generative AI in Action: Driving Sustainable Solutions Across Smart Cities, Energy, Agriculture and Healthcare', 'JITENDRA JAIN', 'Infosys, Jaipur', 'offline', 'jitendra_jain04@infosys.com', 14),
(163, '8', 'Sliding K-Means and Progressive Deep Learning for Dynamic Hand Gesture Recognition in Human Computer Interaction', 'ARPNEEK KAUR, SANDHYA BANSAL', 'Maharishi Markandeshwar Deemed to be University, Mullana, Ambala', 'online', 'arpneek@gmail.com', 15),
(167, '3', 'Lean 4.0 Evaluation Framework for MSME Sustainability', 'NEERAJ KUMAR', 'MDU, Rohtak', 'offline', 'Neerajlangayain@gmail.com', 16),
(176, '1', 'An Ensemble Approach for data forecasting from Knowledge Assimilation', 'VIPASHA ABROL', 'School of Engineering & Technology, CGC University, Mohali-140307, Punjab, India.', 'online', 'vipasha.abrol.phd23@nsut.ac.in', 17),
(207, '3', 'Exploring Blockchain Adoption in Supply Chain Networks', 'PRATEEK CHOUDHARY', 'Manav Rachna International Institute of Research and Studies', 'offline', 'prateekchoudhary88105@gmail.com', 18),
(210, '1', 'Ethical Integration of Machine Learning and Vision Systems for Academic Environments', 'DR. RAJEEV KUMAR', 'Mooradabad Institute of Technology, Mooradabad', 'online', 'ankushjoshi1987@gmail.com', 19),
(216, '9', 'A Hybrid Implicit Trust-Aware Framework with Trust Expansion Strategy for Enhanced Rating Prediction in Recommender Systems', 'RISHAV RAJ, ASHUTOSH, ABHISHEK SINGH, ANSHUL NARGE, VAIBHAV PUNDIR', 'Manav Rachna International Institute of Research and Studies Faridabad', 'offline', 'rishabhrajsharma2006@gmail.com', 20),
(234, '9', 'Optimising DDoS Attack Detection Over Cloud', 'BHAGRAJYOTI BEHERA', 'Sharda University, Greater Noida', 'offline', 'bhagrajyotibehera91923118@gmail.com', 21),
(237, '4', 'Metamaterial Inspired Aperture Coupled Patch Antenna for V2X Applications', 'CHIRAG ARORA', 'KIET University, Ghaziabad', 'online', 'c_arora2002@yahoo.co.in', 22),
(247, '8', 'Data-Centric Smart Drip Irrigation: An IoT–InceptionNet Framework for Real-Time Water Demand Prediction', 'ANBARASU R', 'Saveetha Deemed University', 'online', 'anbu1812@gmail.com', 23),
(249, '4', 'Performance Analysis of Equal Gain Combining and Maximal Ratio Combining over Correlated Weibull fading channels – A Review', 'KIRANDEEP KAUR', 'Graphic Era (Deemed to be University), Dehradun', 'online', 'kk5369393@gmail.com', 24),
(259, '7', 'A STUDY ON MECHANICAL BEHAVIOUR OF TERNARY BLENDED GEOPOLYMER CONCRETE', 'AYUSHI GUPTA', 'Delhi Technological University, Delhi', 'offline', 'ayushi_23phdce02@dtu.ac.in', 25),
(261, '3', 'Blockchain Consortium Model for Increased Transparency In School Budget Usage', 'INAYATULLOH', 'Bina Nusantara University, Indonesia', 'online', 'inay@binus.ac.id', 26),
(262, '1', 'HADF: A Hybrid Adaptive Deep Framework for Robust and Mobile-Efficient Plant Disease Detection', 'SEEMA MAITREY', 'KIET Group of Institutions, Ghaziabad', 'online', 'seema.maitrey@kiet.edu', 27),
(264, '4', 'Tunnel to Efficiency: A Deep Dive into TFET and JL-TFET Advancements', 'DR. KAUSHAL KUMAR', 'Graphic Era Deemed to be University, Dehradun', 'online', 'kaushaliit0608@gmail.com', 28),
(279, '9', 'Sensor Fusion and Predictive Modeling in Mobile Robotics: A Deep Learning-Based Framework for Environmental Awareness', 'DR. RENU KUMAWAT', 'Manipal University Jaipur', 'online', 'renu.kumawat@jaipur.manipal.edu', 29),
(280, '9', 'Uncertainty-Aware Decision Making in Robotics Using Bayesian Data Science Techniques', 'DR. RENU KUMAWAT', 'Manipal University Jaipur', 'online', 'renu.kumawat@jaipur.manipal.edu', 30),
(283, '1', 'Comparing LLMs for Phishing Email Detection', 'PRAVEEN KUMAR SHARMA', 'Manav Rachna University, Faridabad', 'offline', 'praveen.ks.4927@gmail.com', 31),
(307, '8', 'Improved Cloud-based Task Scheduling Using Hybrid MCTFFA Model for Enhanced Performance Metrics', 'RASHMI MAKKAR', 'Maharishi Markandeshwar Deemed to be University, Mullana, Ambala', 'online', 'rashmi.bca@piet.co.in', 32),
(314, '11', 'Able Vista: A Technology-Driven Platform for Enhancing Learning Outcomes Among Special Learners', 'ADITYA ARORA', 'Krishna Institute of Engineering & Technology (KIET), Ghaziabad, Delhi-NCR, Uttar Pradesh, India', 'offline', 'akash.goel@kiet.edu', 33),
(318, '2', 'Renyi Fuzzy Decision Tree to Frame Fairer Tax Policies', 'AMAN P.R', 'Manav Rachna University, Faridabad', 'offline', 'shrutig158@gmail.com', 34),
(326, '10', 'Combining Explainable AI and Federated Learning in Data-Centric Frameworks of Edge-Based Intelligence', 'KAMALAKANNAN K', 'ChennaiI Institute of Technology, Chennai, Malayambakkam, Tamil Nadu', 'online', '84infotech.kamal@gmail.com', 35),
(363, '1', 'Optimizing NLP Models for Low-Resource Languages Using Knowledge Distillation', 'PRATIK KUMAR', 'Graphic Era Hill University, Dehradun', 'online', 'mailtopratik.official@gmail.com', 36),
(388, '8', 'An Optimized Deep Learning-based Lesion Segmentation Model for Early Gastric Cancer Diagnosis Using Pre-processed Gastroscopic Images', 'SOURABH BUDHIRAJA', 'Maharishi Markendeshwar (Deemed to be University), Mullana, Ambala, India', 'online', 'er.sourabh.cse@gmail.com', 37),
(390, '1', 'Adaptive Noise-Aware Variational Quantum Classifier for Robust Machine Learning on NISQ Devices', 'PRAVIN P', 'Rajalakshmi Engineering College, Thandalam, Chennai, Tamil Nadu', 'online', 'pravinchandru08@gmail.com', 38),
(421, '11', 'Blockchain for Freelance Workforce Management in the Gig Economy', 'DR. ANEESYA PANICKER', 'Institute of Business Management, GLA University, Mathura, Uttar Pradesh, India', 'online', 'aneesya.panicker@gla.ac.in', 39),
(422, '11', 'The Role of Edge AI in Ultra-Reliable Wireless Networks', 'ANGULAKSHMI M', 'School of computer science Engineering and Information System, Vellore Institute of Technology, Vellore, Tamil Nadu', 'online', 'angulakshmi.m@vit.ac.in', 40),
(424, '8', 'Machine Learning for Predictive Maintenance in Industry 4.0', 'DR. JASJEET SINGH', 'School of Computer Application, Lovely Professional University, Punjab', 'online', 'jasjeets17@gmail.com', 41),
(425, '1', 'Inference of low-bit Deep Neural Networks on FPGAs using Hardcoded Dataflow-style methods', 'ANUSHKA SIKARWAR', 'Graphic Era Deemed to be University, Dehradun', 'online', 'esh052002@gmail.com', 42),
(441, '4', 'Performance Simulation Model under Nakagami-m Fading Channel', 'MANJU DEVRARI', 'Graphic Era (Deemed to be University), Dehradun', 'online', 'manjudevrarisati@gmail.com', 43),
(469, '4', 'Steric Hindrance Effect on Core-Shell Junctionless Nanowire FET Based Biosensor Sensitivity for Breast Cancer Detection', 'BHARTI', 'Delhi Technological University, Delhi', 'online', 'BHARTIGNDIT@GMAIL.COM', 44),
(472, '11', 'Lesion-aware Transformer-based Deep Hybrid Model (LTDHM) for Explainable Diabetic Retinopathy Detection', 'RASHMI BHARDWAJ', 'Sharda University, Greater Noida And NIET, Greater Noida', 'online', 'rashmibhardwaj754@gmail.com', 45),
(487, '4', 'Analysis of Analog and RF Parameter Variations in JLTFETs Due to Different Work Functions', 'DR. KAUSHAL KUMAR', 'Graphic Era Deemed to be University, Dehradun', 'online', 'kaushaliit0608@gmail.com', 46),
(488, '1', 'Machine Learning and Optimization Based Cow Health Prediction', 'DR. PREETI YADAV', 'Mahatma Jyotiba Phule Rohilkhand University, Bareilly, Uttar Pradesh', 'online', 'preeti.yadav@mjpru.ac.in', 47),
(489, '1', 'A Privacy-Respecting Federated Approach for Non-IID ECG Signal Classification using Adaptive Aggregation', 'DR. KAUSHAL KUMAR', 'Graphic Era Deemed to be University, Dehradun', 'online', 'kaushaliit0608@gmail.com', 48),
(510, '1', 'Explainable Toxic Comment Detection and Detoxification in Code-Mixed Languages using Multi-Task Attention', 'SWATHI DONGA', 'Swarnandhra College of Engineering and Technology, Seetharamapuram, Andhra Pradesh', 'online', 'swathidonga71@gmail.com', 49),
(528, '11', 'Real-Time Groundwater Resource Evaluation Using DWLR Data and AI Models', 'SNEHA KANDACHARAM', 'The NorthCap University, Gurugram', 'offline', 'snehakandacharam@ncuindia.edu', 50),
(537, '2', 'Dynamic Data-Driven Framework for Forecasting Employment Trends in the AI Era', 'MAYANK SINGH NEGI', 'Manav Rachna University, Faridabad', 'offline', 'work.mayanknegi@gmail.com', 51),
(545, '4', 'AI-ML based intelligent support system for elderly well-being and safety', 'BASANTA MAHATO', 'IIMT College of Engineering, Greater Noida', 'offline', 'basanta.mahato@gmail.com', 52),
(550, '5', 'Adaptive Control of DSTATCOM Using Hybrid NN-BAT Optimization for Voltage Stability and THD Reduction', 'SURBHI', 'Chandigarh University, Punjab', 'online', 'surbhi.cgc@gmail.com', 53),
(558, '1', 'Evaluating the Generalization Ability of an Ensemble-Based Fake News Detection Model across Multiple Domains', 'JYOTI, YOGESH KUMAR', 'GD Goenka University, Gurugram', 'offline', 'jgoyat08@gmail.com', 54),
(583, '9', 'AI-Enhanced Cybersecurity Operations System for Real-Time Phishing Detection and User Education', 'TEMIENOR NIKATSEKPE', 'University of Greater Manchester (Formely University of Bolton), London', 'online', 'tn2res@bolton.ac.uk', 55),
(589, '2', 'Differentiation of Rapid-Growing Mycobacteria via Handcrafted Image Features and Supervised Classifiers', 'SHAMBHAVI PRIYA', 'Jaypee University of Information Technology, Solan', 'online', 'shambhavijhaa2827@gmail.com', 56),
(595, '11', 'SmartAgri-Net: Intelligent Crop Yield Prediction Using Hybrid Machine Learning Model', 'B.UMAKANTH', 'Annamacharya University, Andhra Pradesh', 'online', 'umakanth.info@gmail.com', 57),
(600, '4', 'Comparison of Multiple Algorithms for Aerial Target Tracking Using IR Dataset in OpenCV', 'ARSHI ZAIDI', 'Amity University Noida', 'offline', 'arshizaidi15@gmail.com', 58),
(606, '1', 'Position-Aware Mobile User Authentication using CNN-LSTM based Keystroke Dynamics', 'BALJIT SINGH SAINI', 'Lovely Professional University, Jalandhar, Punjab', 'online', 'baljitsaini28@gmail.com', 59),
(609, '2', 'Cryptocurrency Price Prediction using Deep Learning: A Comparative Study of Time-Series Models', 'DIVYA PANDEY', 'Bennett University, Greater Noida', 'online', 'divya.pandey@bennett.edu.in', 60),
(610, '5', 'Harnessing Waste Materials for Electricity Production: Toward a Zero-Waste Energy Future', 'RAM ASHISH MAURYA', 'IIMT College of Engineering, Greater Noida', 'offline', 'd.gupta625@gmail.com', 61),
(671, '10', 'Brain Tumor Detection from MRI Scans Using a Fine-Tuned VGG16 Model and Explainable AI', 'BHARAT BHUSHAN', 'Lovely Professional University, Jalandhar, Punjab', 'online', 'shubhamdanthyan@gmail.com', 62),
(674, '1', 'Adaptive Locality-Aware Dynamic Key Distribution for Secure Wireless Sensor Networks', 'MONJUL SAIKIA', 'North Eastern Regional Institute of Science and Technology, Arunachal Pradesh', 'offline', 'monjuls@gmail.com', 63),
(690, '1', 'An AI-Centric Multimodal Framework for Cognitive Productivity and Digital Wellbeing', 'ASHIMA GARG', 'Manav Rachna University, Faridabad', 'offline', 'ashimagarg.cst@mru.edu.in', 64),
(720, '4', 'Performance Investigation of Molybdenum Disulphide (MoS2) Junctionless Symmetric Split-Gate (SymSG) FET for Biosensing Applications', 'CHETNA GARG', 'University of Delhi, South Campus', 'offline', 'chetnagarg68@gmail.com', 65),
(748, '2', 'Machine Learning based Process Optimization in L-PBF Manufacturing of Inconel 718 Spur Gears', 'RAVI KISHOR RANJAN', 'G L Bajaj Institute of Management & Research, Greater Noida', 'online', 'rkranjan2602@gmail.com', 66),
(761, '12', 'Autonomous Mobile Robots (AMRs) for Warehouse and Production-Line Logistics', 'PRACHUR GUPTA', 'Netaji Subhas University of Technology, Dwarka, Delhi', 'online', 'spacetimefabricbender@gmail.com', 67),
(763, '3', 'Ensemble Learning for Stock Market Forecasting: A Stacking-Based Framework Using LSTM and Random Forest', 'NEHA SHARMA', 'Bharati Vidyapeeth''s College of Engineering, Delhi', 'offline', 'neha.sh.2689@gmail.com', 68),
(764, '1', 'A Hybrid Swarm Intelligence and Deep Learning Framework for Energy-Efficient Routing in Wireless Sensor Networks', 'DR. SARITA YADAV', 'Bharati Vidyapeeth''s College of Engineering, Delhi', 'offline', 'sarita1320@yahoo.co.in', 69),
(765, '2', 'Enhancing Hybrid Recommendation Systems with CUR-based Matrix Decomposition and Deep Neural Network Architectures for Consumer Behaviour Prediction', 'ABHIGYAN', 'Indian Institute of Technology Roorkee', 'online', 'abhigyan@ms.iitr.ac.in', 70),
(780, '4', 'Interface and Transport-Layer Engineering for CdS / BaZrS₃ / CuSCN Solar Cells: Device Simulation, Band Alignment and Defect Effects', 'CHANDNI TIWARI', 'Graphic Era (Deemed to be University), Dehradun', 'online', 'chandnitiwari.ece@geu.ac.in', 71),
(781, '4', 'Numerical Investigation of MASnBr3/CsSnGeI3/SnO2 Solar Cell: Understanding the Impact of Absorber LayerParameters', 'CHANDNI TIWARI', 'Graphic Era (Deemed to be University), Dehradoon', 'online', 'chandnitiwari.ece@geu.ac.in', 72),
(782, '3', 'Optimizing Linux Kernel Scheduler Parameters Using Reinforcement Learning', 'HITESH MAKKAR', 'Netaji Subhas University of Technology, Dwarka, Delhi', 'online', 'hiteshmk05@gmail.com', 73),
(787, '6', 'Strategic Crowdsourcing: Bridging the Gap between Ideas and Market Solutions in Indian Capital Goods Sector and a Case Study', 'KUMAR ABHINAV', 'Central Manufacturing Technology Institute, Bengaluru', 'online', 'KUMAR.ABHINAV2026@GMAIL.COM', 74),
(789, '11', 'Evaluating The Robustness Of Yolov5 Object Detection On The KITTI Dataset Under Gaussian Noise And Fgsm Adversarial Attacks', 'SHASHANK GUPTA', 'Dr B R Ambedkar National Institute of Technology Jalandhar', 'online', 'shashankgupta451@gmail.com', 75),
(791, '2', 'An Integrated Predictive Analytics Architecture for Coordinated Sales Demand and Customer Lifetime Value Forecasting', 'JYOTI KUNAL SHAH', 'Independent Researcher, Parsippany, NJ, USA', 'online', 'thejyotishah83@gmail.com', 76),
(793, '1', 'Speech-To-Speech Machine Translation using Attention-Based Neural Models for Indic Languages', 'G Y K VAISHNAVI', 'Swarnandhra College of Engineering and Technology, Seetharamapuram, Andhra Pradesh', 'online', 'gvaishnavi588@gmail.com', 77),
(805, '8', 'AI-Powered Colour Image Retrieval using Hybrid Feature Descriptors', 'YUVI', 'Chandigarh University, Punjab', 'online', '22bai71283@cuchd.in', 78),
(817, '5', 'Traffic Diversion using Convolutional Neural Networks', 'LAKSHYA LAL', 'Netaji Subhas University of Technology, Dwarka', 'offline', 'lakshya.lal.ug22@nsut.ac.in', 79),
(819, '4', 'Wi-Fi Based Room Occupancy Estimation and Prediction Using Clustering Techniques and Deep Learning', 'ANURAG AGARWAL', 'Netaji Subhas University of Technology', 'offline', 'ashutoshgurao615@gmail.com', 80),
(826, '8', 'AI-based navigation browser extension for AWS', 'RIYA KARMAKAR', 'Chandigarh University, Punjab', 'online', 'karmakarriya462@gmail.com', 81),
(829, '1', 'Serverless News Aggregation Through Semantic Event Clustering and Multi-Feed Recommendation', 'PULKIT GOYAL', 'Vivekananda Institute of Professional Studies - Technical Campus, Delhi', 'online', 'pulkitcgoyal@gmail.com', 82),
(835, '3', 'Explainable Deep Learning for Early-Stage Hepatitis B Fibrosis Detection with Multi-Modal Conventional Ultrasound Imaging', 'KUNAL ROY', 'Chandigarh University, Punjab', 'online', 'kunalroy.sm034@gmail.com', 83),
(836, '10', 'Federated Multi-Agent Reinforcement Learning for Resource Optimization in WBANs', 'RAJESH KUMAR BEHERA', 'Chandigarh University, Punjab', 'online', 'rajeshkumarbehera646@gmail.com', 84),
(844, '8', 'Smart Manufacturing Optimization System: An AI-Driven Approach for SME', 'MANAN KANT AGARWAL', 'Manav Rachna International Institute of Research and Studies, Faridabad', 'offline', 'mkantagarwal@gmail.com', 85),
(845, '8', 'AI-Driven Framework for Email Redirection and Communication Optimization in Academic Institutions', 'KUSHAGRA AGRAWAL', 'Manav Rachna International Institute of Research and Studies, Faridabad', 'offline', 'agrawal_kushagra@rediffmail.com', 86),
(864, '9', 'Developing enhanced security protocols for mobile banking applications using MFA in Blockchain', 'TUSHAR VERMA', 'Manav Rachna University, Faridabad', 'offline', 'vtushar910@gmail.com', 87),
(870, '7', 'Synergistic Optimization of Piezoelectric Transducers', 'PANKAJ JHA', 'IIMT College of Engineering, Greater Noida', 'offline', 'pankaj.maahi@gmail.com', 88),
(887, '3', 'Compiler Performance Analysis for AI Workloads on RISC-V: A Comprehensive Comparison of GCC and LLVM', 'SAMARTH DHIMAN', 'Manav Rachna International Institute of Research and Studies, Faridabad', 'offline', 'samarthdhiman2005@gmail.com', 89),
(890, '7', 'Prediction of Yield Strength of Al-Mg-Si Alloys Using Neural Network and XGBoost based on Artificial ageing time', 'SACHIN CHOUDHARY', 'Bennett University, Greater Noida', 'online', 'sachin.phd2020@nituk.ac.in', 90),
(905, '9', 'Prediction of Yield Strength of Al-Mg-Si Alloys Using Neural Network and XGBoost based on Artificial ageing time', 'M.LAKSHMANAN', 'Dayananda Sagar University, Karnataka', 'online', 'tamilamuthancollege24@gmail.com', 91),
(906, '2', 'Hybrid Heuristic and Zero-Knowledge Proof Framework for Patient Data Sanitization and Selective Disclosure in Smart Contracts', 'M.LAKSHMANAN', 'Dayananda Sagar University, Karnataka', 'online', 'tamilamuthancollege24@gmail.com', 92),
(907, '10', 'Federated Augmented Random Search Reinforcement Learning for Edge-Private Autonomous Driving Systems', 'M.LAKSHMANAN', 'Dayananda Sagar University, Karnataka', 'online', 'tamilamuthancollege24@gmail.com', 93),
(910, '2', 'AI-Powered Legal Document Consistency Analyzer', 'SHREYA RAJENDRA KAMAT', 'Savitribai Phule University, Pune', 'online', 'shreyakamat444@gmail.com', 94),
(925, '3', 'Adoption of Blockchain Technology via Mobile Apps to Promote Gender Equality in School Education', 'INAYATULLOH', 'Bina Nusantara University, Indonesia', 'online', 'inay@binus.ac.id', 95),
(934, '9', 'Analysis of Different Cyberattacks on PMSG-Based Wind Turbine Control Systems', 'NISCHAY RANA', 'Delhi Technological University, Delhi', 'offline', 'nischayk12@gmail.com', 96),
(942, '4', 'Performance Analysis of Equal Gain Combining over Weibull and Nakagami-m Fading Channels', 'KIRANDEEP KAUR', 'Graphic Era (Deemed to be University), Dehradun, India', 'online', 'kk5369393@gmail.com', 97),
(961, '1', 'Tri-Modal DeepFusion: A Privacy-Preserving Hybrid Feature–Score Fusion Framework for Multimodal Biometric Authentication Using Face, Fingerprint, and Iris', 'KARUNAKAR KAVURI', 'Swarnandhra College of Engineering and Technology, Seetharamapuram, Andhra Pradesh', 'online', 'karunakar.mtech@gmail.com', 98),
(977, '12', 'Smart Non-Contact Portable Eye Pressure Monitor for Glaucoma Detection', 'SAI GEETHIKA KOLANUPAKA', 'Siddhartha Academy Of Higher Education, Andhra Pradesh', 'online', '238w1a5427@vrsec.ac.in', 99),
(986, '5', 'Scene Segmentation in rural and urban regions from Remote Sensing Data', 'PRASANTH K', 'Rajalakshmi Engineering College, Chennai', 'online', '220701200@rajalakshmi.edu.in', 100),
(990, '4', 'Design and Verification of FIFO using System Verilog', 'NEELAM DEEPTHI SREE', 'KL University, Guntur, Andhra Pradesh', 'online', 'neelamdeepthi83@gmail.com', 101),
(992, '2', 'Early Detection and Classification of Alzheimer''s Disease from MRI Data using Harmonised MCI-SSL', 'PARI BANSAL', 'K R Mangalam University, Gurgaon', 'online', 'meenuhans.83@gmail.com', 102),
(1008, '8', 'Unleashing Precision: Advancements in Digit Recognition through Machine Learning for Enhanced Efficiency', 'ANUJ KUMAR JAIN', 'Department of Computer Science and Engineering, UIE, Chandigarh University, Mohali-140413, Punjab, India', 'online', 'dr.anujkumarjain@gmail.com', 103),
(1009, '8', 'Comparative Analysis of Machine Learning Models for Large-Scale Water Quality Assessment', 'ANUJ KUMAR JAIN', 'Department of Computer Science and Engineering, UIE, Chandigarh University, Mohali-140413, Punjab, India', 'online', 'dr.anujkumarjain@gmail.com', 104),
(1010, '9', 'Active Expression-Driven Face Anti-Spoofing with Deep Reinforcement Learning Agents', 'RAJ SINGH', 'Raj Kumar Goel Institute of Technology, Ghaziabad', 'offline', 'rajsinghh314@gmail.com', 105),
(1011, '8', 'Advanced Welding Defect Detection Using Convolutional Neural Networks and Support Vector Machines', 'BHAVNEET KAUR', 'Department of Computer Science and Engineering, UIE, Chandigarh University, Mohali-140413, Punjab, India', 'online', 'sethi.bhavneet37@gmail.com', 106),
(1020, '8', 'Multi-Modal Lightweight Deep Learning Framework for Robust In-Field Plant/Crop Disease Detection with Explainability (XAI)', 'DR. GARIMA, GHANSHYAM YADAV, BHUPENDRA KR', 'I.T.S. Engg. College, Greater Noida', 'offline', 'ghanshyamyadav.cse@its.edu.in', 107),
(1026, '3', 'Blockchain-Enabled Hybrid QKD–Kyber KEM Framework for Post-Quantum Secure Key Exchange', 'RIYA JALGAONKAR', 'Vellore Institute Of Technology, Vellore', 'online', 'work.riyajalgaonkar@gmail.com', 108),
(1035, '4', 'A Peer-to-Peer Bidirectional Communication Framework for Distributed Embedded Systems Using RS-485', 'MANOJ MYSORE VEERE GOWDA', 'BorgWarner, USA', 'online', 'manojgowda2105@gmail.com', 109),
(1037, '1', 'Hooked Without Knowing: Unveiling the Power of Virtual Unconsciousness in Social Media Loyalty', 'ADELE B L MAILANGKAY', 'Bina Nusantara University, Indonesia', 'online', 'adele.mailangkay@binus.ac.id', 110),
(1058, '5', 'A Geospatial approach for E-waste Facility Locating', 'SARVAGYA PRATAP SINGH', 'KIET Group of Institutions, Ghaziabad', 'offline', 'sarvagya.2226cs1133@kiet.edu', 111),
(1067, '12', 'Deep Hybrid Architecture for Cybersecurity Threat Detection in IIOT Networks: CNN–BiGRU Approach', 'VALLURI DANEESHA', 'Delhi Technological University, Delhi', 'online', 'daneesha.valluri@gmail.com', 112),
(1076, '1', 'Evaluation of a Natural-Language Programming Syntax with White and Black Box Testing', 'CHITRAKSH TARUN', 'Manav Rachna International Institute of Research and Studies, Faridabad', 'offline', 'chitrakshtarun@gmail.com', 113),
(1080, '4', 'A Sustainable Approach to Climate Change Mitigation and Energy Security Enhancement Through Biofuels Integrated with IoT', 'PIYUSH CHARAN', 'Manav Rachna University, Faridabad, India', 'offline', 'piyushcharan@mru.edu.in', 114),
(1086, '11', 'Smart-VISION: A Deep Learning Based Real-Time Violence Detection System for CCTV Surveillance', 'RAVIKANT JANGID', 'KIET Group of Institutions, Ghaziabad', 'online', 'jangidravi0810@gmail.com', 115),
(1088, '11', 'Smart Healthcare: Real-Time Patient Monitoring and Emergency Response Systems for smart cities', 'DR ASHIMA ARYA', 'KIET University, Ghaziabad', 'online', 'ashima.arya@kiet.edu', 116),
(1089, '8', 'Heart Disease Risk Prediction Models and their Accuracies: A Systematic Review', 'PREETI SHARMA', 'MMICTBM (MCA), Maharishi Markandeshwar (Deemed to be University), Mullana-Ambala, Haryana, India.', 'online', 'sharma.preeti0024@gmail.com', 117),
(1093, '4', 'Optimal and Energy-Efficient Demultiplexer in QCA Nanotechnology', 'NANDAN VAID', 'Shri Mata Vaishno Devi University, Katra, Jammu', 'online', 'tovksharma@gmail.com', 118),
(1094, '10', 'Comparative Analysis of Machine Learning Models for Predicting Chess Outcomes Across Skill Strata', 'SUMANYU SINGH', 'Chandigarh University, Punjab', 'online', 'sumanyusingh7689@gmail.com', 119),
(1099, '7', 'Image Encryption and Decryption using AES and Pixel Shuffling Techniques', 'DEV KUMAR SHARMA', 'Manav Rachna International Institute of Research and Studies, Faridabad', 'offline', 'dev716415@gmail.com', 120),
(1102, '1', 'SmartNotice: A Retrieval Augmented Generation System for College Notices', 'ANMOL GUPTA', 'Netaji Subhas University of Technology, Dwarka, Delhi', 'offline', 'saakshat.jain.ug22@nsut.ac.in', 121),
(1139, '3', 'Quantum-Enhanced Representation of Transformer Embeddings for Fake News Detection', 'SHIVANI TUFCHI', 'Bennett University, Greater Noida', 'online', 'shivani.tufchi@bennett.edu.in', 122),
(1203, '8', 'BiasHindi: A Benchmarking Framework for Social Bias in English Hindi Translation', 'JIGYASA PATRA', 'Bennett University, Greater Noida', 'offline', 'E23CSEU1649@bennett.edu.in', 123),
(1206, '2', 'Heterophily-Robust Patient-Similarity Graphs for Parkinson''s Screening from Voice', 'SIDDHANT UJJAIN', 'IIT Delhi', 'offline', 'ujjainsiddhant4@gmail.com', 124),
(1208, '8', 'A Comprehensive Comparison of Vanilla GAN, WGAN, and DCGAN Variations', 'DHAWANI NANDA', 'Amity University Haryana', 'online', 'dhawaninanda30@gmail.com', 125),
(1209, '1', 'Enhanced Alpha-Beta Pruning and Evaluation Function Optimization for Pac-Man AI Agents', 'YUVRAJ RAJNI SACHIN. DESHMUKH', 'NIIT University, Neemrana, Rajasthan', 'offline', 'yuvraj.deshmukh23@st.niituniversity.in', 126),
(1210, '1', 'Comparative Analysis of Enhanced Weighted A* and Theta* Search Algorithms on Pacman Mazes', 'SHLOK BURMI', 'NIIT University, Neemrana, Rajasthan', 'offline', 'shlok.burmi23@st.niituniversity.in', 127),
(1210, '1', 'Comparative Analysis of Enhanced Weighted A* and Theta* Search Algorithms on Pacman Mazes', 'SUJAL KISHORE', 'NIIT University, Neemrana, Rajasthan', 'offline', 'sujal.kishore23@st.niituniversity.in', 128),
(1216, '1', 'Exploring Factors that Influence the Behavioral Intention to use AI-Based Robots in the Education Sector', 'AMADEUS DAVIN DARRYL CHANDRA', 'Bina Nusantara University, Indonesia', 'online', 'amadeus.chandra@binus.ac.id', 129),
(1217, '1', 'Lung Cancer Diagnosis- Visualizing Deep Learning Decision Pathways', 'MANIKANDAKUMAR M', 'Christ University, Bangalore', 'online', 'manikandakumar.m@christuniversity.in', 130),
(1219, '3', 'Graph Neural Networks for Causal Inference in Climate Science: A Novel Approach to Model Modeling Complex Interactions', 'PREETI SETHI', 'J. C. Bose University of Science & Technology, YMCA, Faridabad', 'offline', 'preetisethi22@gmail.com', 131),
(1227, '8', 'Smart Diagnosis: Leveraging Generative AI to Improve Disease Detection in Real-World Healthcare', 'RITU GAUTAM', 'Amity University, Noida', 'online', 'sharma4ritu@gmail.com', 132),
(1268, '7', 'Lung Cancer Diagnosis- Visualizing Deep Learning Decision Pathway', 'OSHEEN SHARMA', 'Manav Rachna University, Faridabad', 'offline', 'OSHEENSHARMA2699@GMAIL.COM', 133),
(1271, '10', 'Enhanced ECG Classification for Cardiac Illnesses Using Grasshopper-Optimized Attention-RNN Classifier', 'M. J. MURALI', 'Bharath Institute of Science and Technology, Bharath Institute of Higher Education and Research, Chennai, Tamil Nadu', 'online', 'karthikalavalapati@yahoo.com', 134),
(1273, '2', 'MPA-Based Opinion Leader Detection for Mental Health in Online Social Networks', 'PRAMOD KUMAR SONI', 'Manipal University Jaipur', 'online', 'pramod.soni@jaipur.manipal.edu', 135),
(1275, '1', 'Privacy Preserving Multi-Keyword Search and Ranked Retrieval Using Homomorphic Encryption in Cloud Environment', 'JASMINE M.S', 'Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology, Chennai', 'online', 'jasmine.srakj@gmail.com', 136),
(1278, '3', 'Threat Detection Through Honeypot Data', 'PRIYANSHI SHARMA', 'NIIT University, Neemrana, Rajasthan', 'offline', 'priyanshi.sharma22@st.niituniversity.in', 137),
(1285, '9', 'Deepfake Video Forensics Using ResNeXt–LSTM Visual Modeling and DSP-Enhanced Audio Spectrogram Analysis', 'TANISH LAL O', 'St. Joseph''s College of Engineering, Chennai', 'online', 'Tanishlal44@gmail.com', 138),
(1292, '7', 'Synthesis of Ni-rich layered cathodes using Sol-gel Method', 'IFFAT KHAN', 'Manav Rachna University, Faridabad', 'offline', 'khaniffat75@gmail.com', 139),
(1296, '1', 'Lung Segmentation in Radiographic Images Using Deep U-Net and Transfer Learning Approaches', 'VAIBHAV KANSAL', 'Amity University, Noida', 'online', 'Kanika.kansal2000@gmail.com', 140),
(1299, '2', 'MediBot: AI-Powered Healthcare Chatbot with Retrieval-Augmented Generation for Accurate Medical Response', 'SHRI KRISHNA MISHRA', 'SRM Institute of Science and Technology, Kattankulathur, Chennai', 'online', 'sm1127@srmist.edu.in', 141),
(1301, '2', 'Machine Learning-Based Arrhythmia Detection: Enhancing ECG Classification for Early Diagnosis', 'NIHAR SHAILESHBHAI DADHANIA', 'SRM Institute of Science and Technology, Kattankulathur, Chennai', 'online', 'nd8288@srmist.edu.in', 142),
(1303, '3', 'Analyzing the Effectiveness of AI-Based Learning Tools on Indonesian Students Using the TAM Model', 'MICHELINE UNVIANA', 'Bina Nusantara University (BINUS), Indonesia', 'online', 'micheline.unviana@binus.ac.id', 143),
(1309, '1', 'ReadSetu: A Scalable Genre-Aware Hybrid Recommendation Framework Integrating Textual Semantics and User Behavior Modeling', 'PRIYANKA SINGH', 'Manav Rachna International Institute of Research and Studies, Faridabad', 'offline', 'priyanka836822@gmail.com', 144),
(1310, '6', 'Legal Governance of Human in the Loop Autonomy - Ensuring Safety and Accountability in Cyber Physical System', 'ASHISH', 'Chandigarh University, Punjab', 'online', 'ashishsabharwal008@gmail.com', 145),
(1313, '10', 'AI-Powered Waste Classification and Recycling Optimisation: Advancing Sustainable Waste Management', 'DR.RASHMI SHARMA', 'Noida Insitute of Engineering, Greater Noida', 'offline', 'drrashmisharma20@gmail.com', 146),
(1394, '3', 'A Rigorous Mathematical Comparison of Retrieval-Augmented Generation and Fine-Tuning for Domain-Specific Language Model Customization', 'RAGHVENDRA KUMAR JHA', 'Manav Rachna University, Faridabad', 'offline', 'raghven11@gmail.com', 147),
(1397, '4', 'Analysis of Atmospheric Attenuation Effects on mmWave Signal Propagation in Future 6G Wireless Communication Networks', 'PALLAVI SEMWAL', 'Graphic Era Hill University, Dehradoon', 'online', 'Tiwaripallavi1400@gmail.com', 148),
(1405, '1', 'Block-chain Enabled Grey Wolf Optimization for Secure Capacitor Placement in Smart Distribution Systems', 'GOLLA LAHARI', 'Madanapalle Institute of Technology & Science, Andhra Pradesh', 'online', 'srinivas.chodagam@gmail.com', 149),
(1406, '11', 'AI Model Manipulation and Adversarial Threats in Internet of Things (AIoT) Environments: Challenges and Defense Mechanisms', 'SK WASIM HAIDAR', 'University of Technology and Applied Sciences, Muscat, Turkey', 'online', 'wasim.haidar@utas.edu.om', 150),
(1415, '5', 'City Scope : A Smart Parking Management System for Real-Time Vehicle Detection and Tracking Using YOLOv5, ANPR(Automatic number plate recognition)', 'PRAKHAR KAUSHIK', 'Ajay Kumar garg engineering college, Ghaziabad', 'offline', 'prakhar10official@gmail.com', 151),
(1417, '1', 'SkillMitra: A Hybrid AI Framework for Intelligent Skill Swapping Using SBERT Embeddings, Collaborative Filtering, and NLP-Driven Micro-Challenge Generation', 'TANUSHKA VERMA', 'Krishna Institute of Engineering & Technology (KIET), Ghaziabad', 'online', 'tanuska.2226cseml10@kiet.edu', 152),
(1429, '1', 'A Heterogeneous Ensemble for Robust Deepfake Detection: Synergistic Integration of Convolutional and Transformer Architectures', 'ASWIN BALA R', 'St. Joseph''s College of Engineering', 'online', 'aswinbala316@gmail.com', 153),
(1432, '1', 'Intelligent Deep Learning Systems for Aquatic Weed Detection: Models, Adaptation Challenges, and Future Directions', 'SAVITA SHARMA', 'Shri Mata Vaishno Devi University, Katra, Jammu', 'online', 'savita205612@gmail.com', 154),
(1417, '1', 'SkillMitra: A Hybrid AI Framework for Intelligent Skill Swapping Using SBERT Embeddings, Collaborative Filtering, and NLP-Driven Micro-Challenge Generation', 'SUNANDA', 'Shri Mata Vaishno Devi University, Katra, Jammu', 'online', 'sunanda.gupta@smvdu.ac.in', 155),
(1417, '1', 'SkillMitra: A Hybrid AI Framework for Intelligent Skill Swapping Using SBERT Embeddings, Collaborative Filtering, and NLP-Driven Micro-Challenge Generation', 'DR. SAKSHI ARORA', 'Shri Mata Vaishno Devi University, Katra, Jammu', 'online', 'sakshi@smvdu.ac.in', 156),
(1435, '12', 'Fault Detection in Healthcare: Patient Bed Exit Alert System using IoT', 'BHAVIK UPPAL', 'Amity University Punjab', 'online', 'bhavikuppalofficial1780@gmail.com', 157),
(1436, '1', 'AI-Enabled Cognitive Health Monitoring: Multimodal Framework for Alzheimer''s Detection using EEG Entropy, HRV and Sleep Signals', 'NABANITA SINHA', 'Deloitte, India', 'online', 'nabanitaroy.sinha@gmail.com', 158),
(1439, '1', 'Data-Driven Prediction of Diabetes Using Machine Learning and Deep Learning Methods', 'ANNETTE NAYANA NELLYET', 'Manav Rachna University, Faridabad', 'online', 'annette.nellyet@gmail.com', 159),
(1441, '1', 'A Piecewise Fuzzy SIER Model for Alzheimer Disease Progression', 'DR.R.NAVEENKUMAR', 'CGC University Mohali, Punjab', 'online', 'rnaveenkumarooty@gmail.com', 160),
(1443, '1', 'Multimodal and Transformer-Driven Bone Tumor Classification: State-of-the-Art Review and Mathematical Modeling Framework', 'DIKSHA', 'Maharishi Markandeshwar University, Mullana, Ambala', 'online', 'dikshasainimmdu@gmail.com', 161),
(1447, '1', 'Farmers'' Transition to Organic Farming: Assessing the Impact of Markets, Policies, and Environmental Awareness', 'DIXIT KALRA', 'School of Management Studies, Punjabi University, Patiala; School of Management Studies, CGC University, Mohali-140307, Punjab, India', 'offline', 'dixitkalra20@gmail.com', 162),
(1448, '1', 'BUILDING A FINANCIALLY INCLUSIVE FUTURE: PATHWAYS TO LITERACY, RESILIENCE, AND SUSTAINABLE GROWTH', 'DIXIT KALRA, MANISHA MITTAL', 'School of Management Studies, CGC University, Mohali- 140307, Punjab, India', 'offline', 'dixitkalra20@gmail.com', 163),
(1449, '3', 'Spectrum Sensing Integration and Cross-Layer Optimisation in Cognitive Radio Routing Protocols', 'NEHA CHAUDHARY', 'Manav Rachna University, Faridabad', 'offline', 'nehachaudhary@mru.edu.in', 164),
(1450, '1', 'AI-Based Smart Surveillance System Using Raspberry Pi and Embedded Vision', 'S.PRABU', 'Mahendra Institute of Technology, UP', 'online', 'vsprabu4u@gmail.com', 165),
(1453, '1', 'IoT-Integrated Embedded System for Smart Waste Management in Urban Areas', 'SALONI MANHAS', 'CGC University Mohali, Punjab', 'online', 'rnaveenkumarooty@gmail.com', 166),
(1456, '1', 'Deep Learning Based Hybrid Model for Accurate Detection of Diabetic Retinopathy', 'DR.R.NAVEENKUMAR', 'CGC University Mohali, Punjab', 'online', 'rnaveenkumarooty@gmail.com', 167),
(1457, '1', 'Explainable AI-Driven Intrusion Detection System Using Hybrid Deep Learning Models for Secure Network Infrastructure', 'PARUL', 'CGC University Mohali, Punjab', 'online', 'parulbhatia822@gmail.com', 168),
(1459, '1', 'Hybrid Artificial Intelligence Internet of Things Platform for Personalized Healthcare Recommendations and Smart Patient Care Services', 'RICHA', 'CGC University Mohali, Punjab', 'online', 'richamahajan292@gmail.com', 169),
(1460, '1', 'Empirical Analysis on Different Techniques Affecting Training Time of Recommendation System', 'SAUMYA GOYAL', 'UIET, Kurukshetra University, Kurukshetra', 'online', 'goyalsaumya4@gmail.com', 170),
(1461, '1', 'EASA: Distributed Agentic Framework for Scalable Federated Edge Intelligence', 'JYOTI RANI', 'Chandigarh University, Punjab', 'online', 'jyoti.e13835@cumail.in', 171),
(1471, '1', 'Performance Comparison of Machine Learning Algorithms for Depression Risk Prediction using PHQ-9 Questionnaire', 'RANVEER CHAUHAN', 'Manav Rachna University, Faridabad', 'offline', 'ranveersc2005@gmail.com', 172),
(1472, '1', 'Manasmitra: An Experimental Study on ML-Driven Mental Health Screening Using PHQ-9 and HRV', 'ANMOL BANSAL', 'Manav Rachna University, Faridabad', 'offline', 'anmolbansal6776@gmail.com', 173),
(1473, '1', 'Hybrid Explainable Framework for Mammographic Breast Cancer Detection using ResNet with Integrated Gradients and Grad-CAM', 'SUGANDHA KAUR', 'Manav Rachna University, Faridabad', 'offline', 'rgc.sugandha@gmail.com', 174),
(1474, '1', 'A Comparative Evaluation of Metrics for Requirements Data Model Quality in Data Warehouses', 'JASPREETI SINGH', 'USICT GGSIP', 'offline', 'jaspreeti_singh@ipu.ac.in', 175),
(1475, '1', 'Real-Time Tea Leaf Disease Detection Using Attention-Driven YOLO Framework for Precision Plantation Management', 'PUNIT KUMAR', 'Poornima University, Jaipur', 'online', 'kpunitk@gmail.com', 176);

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count total authors inserted
SELECT COUNT(*) as total_authors FROM public.authors;

-- View all authors ordered by paper_id
SELECT 
    paper_id,
    track,
    name,
    affiliation,
    participation_mode,
    email
FROM public.authors
ORDER BY paper_id;

-- Count authors by participation mode
SELECT 
    participation_mode,
    COUNT(*) as count
FROM public.authors
GROUP BY participation_mode
ORDER BY participation_mode;

-- Count authors by track
SELECT 
    track,
    COUNT(*) as count
FROM public.authors
GROUP BY track
ORDER BY track::integer;

-- Check for any duplicate paper_id entries (there should be some as multiple authors share same paper)
SELECT 
    paper_id,
    COUNT(*) as author_count
FROM public.authors
GROUP BY paper_id
HAVING COUNT(*) > 1
ORDER BY author_count DESC;
