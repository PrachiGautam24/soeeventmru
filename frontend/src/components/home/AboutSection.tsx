'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function AboutSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const sections = [
    {
      id: 'about-icass',
      title: 'About ICASS-2026',
      content: `The 1st International Conference on Intelligent Computing and Automation for Sustainable Solutions (ICASS-2026) is a prestigious platform that will bring together researchers, academicians, industry experts, and practitioners to discuss and share advancements in the fields of intelligent computing, automation, and sustainable technologies.

Themed at "Harnessing AI for a Digital Future", the conference is envisioned as a premier platform to deliberate on the transformative role of intelligent computing and automation in building a sustainable and technology-driven world.

The conference is aimed at addressing the growing need for innovative solutions that integrate cutting-edge technology with sustainability principles to address global challenges. The conference is scheduled to be conducted in hybrid mode from 12th-13th February, 2026.`,
    },
    {
      id: 'scope',
      title: 'Scope of ICASS-2026',
      content: `The scope of ICASS-2026 encompasses a broad range of interdisciplinary domains that integrate intelligent computing and automation with sustainable practices.

Key focus areas include (but not limited to) artificial intelligence, machine learning, deep learning, data science, robotics, Internet of Things (IoT), cyber-physical systems, green computing, energy-efficient architectures, smart materials, next gen communication etc. to address the challenges of sustainable industrial development.

ICASS-2026 highlights the role of intelligent technologies in domains such as smart cities, healthcare, agriculture, education, industry, and environmental monitoring etc. where technology-driven solutions are vital for achieving long-term sustainability and societal well-being.`,
    },
    {
      id: 'about-mru',
      title: 'About Manav Rachna University',
      content: `Manav Rachna University (MRU) was established under the Haryana State Legislature Act No. 26 of 2014 and is one of the leading private state universities in Haryana, India.

It is recognized by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, 1956, and is dedicated to providing world-class education with a global outlook.

The university has been awarded an "A" grade by NAAC (2024–2029), and its B.Tech Computer Science & Engineering program has received NBA accreditation (2023–2026).

In a landmark achievement, MRU became the first university in India to be accredited by the International Baccalaureate (IB), underscoring its alignment with international educational standards.`,
    },
    {
      id: 'about-soe',
      title: 'About School of Engineering',
      content: `The School of Engineering at Manav Rachna University is a distinguished center of excellence committed to delivering high-quality engineering education.

It offers a comprehensive range of undergraduate, postgraduate, and Ph.D. programs across disciplines such as Computer Science Engineering, AIML, Cyber Security, GenAI, Full Stack Development, Mechanical Engineering, Smart Manufacturing & Automation, Electric Vehicle Technology, Electronics & Communication Engineering, and VLSI & Chip Design.

The school has collaborations with leading industry and academic partners such as Google Cloud, Xebia, CISCO, KPMG, L&T Edutech, and Truechip, enriching learning experiences and providing students with real-world exposure.`,
    },
  ]

  return (
    <div className="px-4 py-6 bg-gray-50">
      <h3 className="text-xl font-bold text-gray-800 mb-4">About the Conference</h3>
      
      <div className="space-y-3">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => setExpandedSection(
                expandedSection === section.id ? null : section.id
              )}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-800 text-left">
                {section.title}
              </span>
              <ChevronRight
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  expandedSection === section.id ? 'rotate-90' : ''
                }`}
              />
            </button>
            
            {expandedSection === section.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-5 pb-4"
              >
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
