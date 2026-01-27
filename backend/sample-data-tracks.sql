-- ============================================================================
-- ICASS 2026 - Sample Tracks Data
-- ============================================================================
-- This file contains all 12 conference tracks with topics
-- Run this SQL in your Supabase SQL Editor after creating the schema
-- ============================================================================

INSERT INTO tracks (code, name, description, topics, color, order_index) VALUES

-- Track 1
('Track-1', 'Computational Intelligent Systems and Applications', 
'Focus on AI, ML, and intelligent systems for various applications',
ARRAY[
    'AI, Machine Learning & its Applications',
    'Human-Computer Interaction',
    'Computer Vision and Image Processing',
    'Natural Language Processing, Understanding & Generation',
    'Cognitive and Computational Neuroscience',
    'Soft Computing Techniques in Decision-Making',
    'Applications of Fuzzy Systems in Industry and Research',
    'Cloud Computing and IoT in Manufacturing',
    'Privacy-Preserving Computation and Data Handling',
    'Intelligent Optimization Techniques',
    'Nature-Inspired Algorithms',
    'Security and Privacy in Intelligent Systems'
], '#1E3A8A', 1),

-- Track 2
('Track-2', 'Data Analytics and Decision Sciences',
'Comprehensive coverage of data analytics and decision-making systems',
ARRAY[
    'Data Analytics and Big Data Technologies with Applications',
    'AI-Driven Decision Support Systems',
    'Predictive and Prescriptive Analytics',
    'Data Engineering and Management',
    'Computational Complexity in Decision-Making Models',
    'Human-Centric Data Science',
    'Decision and Statistical Inference',
    'Cognitive and Behavioral Aspects of Data Interpretation',
    'Data Integrity and Security',
    'Business Intelligence and Data Mining'
], '#DC2626', 2),

-- Track 3
('Track-3', 'Futuristic Tools, Technologies & Applications',
'Emerging technologies and next-generation computing systems',
ARRAY[
    'Computational Mechanics and Simulations',
    'Artificial Intelligence and Machine Learning in Mechanical Systems',
    'Generative AI and LLMs',
    'Edge and Fog Computing',
    'Autonomic Computing',
    'AR/VR Technology',
    'Hybrid Intelligent Systems',
    'Bio-Inspired Engineering',
    'AI & Emotions',
    'Quantum Computing',
    'DNA Computing',
    'Blockchain Systems'
], '#F59E0B', 3),

-- Track 4
('Track-4', 'Smart Electronics and Next-Gen Communication',
'Advanced electronics, communication systems, and renewable energy',
ARRAY[
    '5G and 6G Technology',
    'Electronic Devices, Circuits, and Systems',
    'Renewable Energy Sources and Technology including hydrogen',
    'RF, Microwaves, Wireless and Optical Communication',
    'VLSI and Low Power Electronics',
    'Biosensors',
    'Robotics, Control, Automation and Instrumentation',
    'Power Electronics and Applications',
    'Power Generation, Transmission and Distribution',
    'Solar, Wind, and Battery Technology',
    'Biomedical Electronics',
    'Photonic Technologies'
], '#EA580C', 4),

-- Track 5
('Track-5', 'Smart Cities and Sustainability',
'Technologies for sustainable urban development and energy systems',
ARRAY[
    'Smart Energy Efficient Systems',
    'Sustainable Manufacturing Practices',
    'Smart Grids and Green Energy Systems',
    'Smart Internet of Things',
    'Energy Efficiency in Mechanical Systems',
    'Renewable Energy Systems',
    'Sustainable Transportation and Mobility',
    'Smart Waste Management Systems'
], '#10B981', 5),

-- Track 6
('Track-6', 'Industry 5.0 and Cyber Physical Systems',
'Advanced manufacturing, robotics, and human-machine interaction',
ARRAY[
    'Advanced Robotics and Automation',
    'Additive Manufacturing and 3D Printing',
    'Smart Sensors and Actuators',
    'Smart Buildings',
    'Digital Manufacturing and Smart Factories',
    'Human-Machine Interaction',
    'Autonomous vehicles',
    'Smart Healthcare'
], '#8B5CF6', 6),

-- Track 7
('Track-7', 'Smart Materials for Sustainable Technology',
'Innovative materials and AI applications in materials science',
ARRAY[
    'Eco-friendly Smart Materials',
    'Recyclable and Reusable Smart Materials',
    'Smart Materials for Energy Applications',
    'Green Synthesis of Smart Materials',
    'Solid State and Thin-film Batteries',
    'Smart Materials for Sensors and Related Technology',
    'Applications of AI for Sustainable Technology',
    'Artificial Intelligence and Materials Innovation',
    'Energy Storage and Sustainability',
    'AI for Materials Synthesis & Discovery',
    'AI for batteries, supercapacitors, and other energy devices',
    'Smart materials & AI for data storage'
], '#EC4899', 7),

-- Track 8 (Special Track)
('Track-8', 'Generative AI in Action: Driving Sustainable Solutions',
'Applications of Generative AI across multiple domains',
ARRAY[
    'Applications of Generative AI in Complex System Simulation',
    'Optimizing Real-World Systems with Generative AI',
    'Synthetic Data Generation for Low-Resource Environments',
    'Leveraging Generative AI to Solve Data Scarcity Issues',
    'Cross-Domain Impact of Generative AI in Environmental Sustainability',
    'Generative AI for Climate Change Modeling and Prediction',
    'Generative AI in Urban Planning and Sustainable Cities',
    'Challenges in Creating Ethical and Transparent Generative AI Systems',
    'Designing Trustworthy Generative AI Frameworks for Critical Applications',
    'Generative AI for Solving Water and Food Security Issues',
    'Societal Impacts of Generative AI in Healthcare Systems',
    'Cross-Sector Collaboration in Generative AI for Sustainability',
    'Evaluating the Ethical Implications of Synthetic Data Use',
    'Real-World Case Studies of Generative AI Driving Social Good',
    'Advancements in Generative AI for Environmental Monitoring'
], '#06B6D4', 8),

-- Track 9 (Special Track)
('Track-9', 'AI-Driven Cybersecurity and Digital Forensics',
'Cybersecurity, forensics, and AI security applications',
ARRAY[
    'AI and ML for intelligent threat detection and response',
    'Digital forensics in AI-driven and IoT-based environments',
    'Cybersecurity frameworks for smart cities and Industry 5.0',
    'Blockchain and distributed ledgers for secure automation',
    'Privacy-preserving AI and federated learning in cyber-physical systems',
    'Adversarial machine learning and robust AI security models',
    'Intrusion detection/prevention systems powered by AI',
    'Forensic readiness in intelligent and automated infrastructures',
    'Green AI and energy-efficient security mechanisms',
    'Legal, ethical, and societal issues in AI-driven cybersecurity'
], '#F43F5E', 9),

-- Track 10 (Special Track)
('Track-10', 'AI and Data-Driven Automation for Sustainable Development',
'AI applications for sustainability and intelligent automation',
ARRAY[
    'AI and Machine Learning applications for sustainability',
    'Intelligent automation and control systems',
    'Data analytics for smart and sustainable decision-making',
    'Internet of Things (IoT) and Edge Computing for energy efficiency',
    'Green computing and eco-friendly intelligent systems',
    'Smart city frameworks and sustainable urban planning',
    'Autonomous systems for environmental monitoring',
    'Predictive analytics in renewable energy systems',
    'AI for water, waste, and resource management',
    'Sustainable manufacturing and Industry 5.0'
], '#14B8A6', 10),

-- Track 11 (Special Track)
('Track-11', 'AI-Enabled Big Data for Climate, Agriculture, and Smart Cities',
'Big data analytics and AI for environmental and urban applications',
ARRAY[
    'AI-driven Big Data frameworks for climate monitoring, carbon forecasting, and renewable energy optimization',
    'Precision agriculture using data analytics, computer vision, and predictive modeling',
    'Smart city intelligence leveraging IoT, digital twins, and real-time analytics',
    'Federated and privacy-preserving learning for distributed environmental data',
    'Green and ethical AI frameworks for sustainable data processing',
    'Integration of edge, cloud, and quantum computing for large-scale analytics'
], '#A855F7', 11),

-- Track 12 (Special Track)
('Track-12', 'Next-Generation Cyber-Physical Systems Empowered by AI and IoT',
'Advanced cyber-physical systems with AI and IoT integration',
ARRAY[
    'AI-driven architectures and frameworks for intelligent Cyber-Physical Systems',
    'Internet of Things (IoT) integration and communication models for CPS',
    'Edge and Fog Computing for real-time data analytics and decision-making',
    'Machine Learning and Deep Learning applications in IoT-enabled CPS',
    'Security, privacy, and trust management in IoT-based Cyber-Physical Systems',
    'Human–Machine Interaction and ethical AI in smart cyber-physical ecosystems',
    'Applications of IoT and CPS in smart cities, healthcare, transportation'
], '#FB923C', 12);

-- Verify the insert
SELECT COUNT(*) as total_tracks FROM tracks;

-- ============================================================================
-- End of Sample Tracks Data
-- ============================================================================
