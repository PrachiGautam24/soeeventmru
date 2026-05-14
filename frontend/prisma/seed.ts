import 'dotenv/config'
import bcrypt from 'bcryptjs'
import prisma from '../src/lib/prisma.ts'

async function main() {
  console.log('🌱 Seeding SOE Engage database…')

  // ── Badges ────────────────────────────────────────────────────────────
  const badges = [
    { slug: 'welcome',       name: 'Welcome Aboard',   description: 'Joined SOE Engage',          emoji: '👋', color: '#3b82f6', rarity: 'common',    xpReward: 0 },
    { slug: 'first-post',    name: 'First Voice',      description: 'Created your first post',    emoji: '📣', color: '#ef4444', rarity: 'common',    xpReward: 10 },
    { slug: 'quiz-master',   name: 'Quiz Master',      description: 'Scored 100% on any quiz',    emoji: '🧠', color: '#a855f7', rarity: 'rare',      xpReward: 50 },
    { slug: 'week-warrior',  name: 'Week Warrior',     description: '7-day login streak',          emoji: '🔥', color: '#f97316', rarity: 'rare',      xpReward: 100 },
    { slug: 'social-star',   name: 'Social Star',      description: '50 likes on your posts',     emoji: '⭐', color: '#eab308', rarity: 'epic',      xpReward: 150 },
    { slug: 'event-hunter',  name: 'Event Hunter',     description: 'Check in to 5 events',        emoji: '🎟️', color: '#14b8a6', rarity: 'rare',      xpReward: 100 },
    { slug: 'top-10',        name: 'Top 10',           description: 'Break into the top 10',       emoji: '🏆', color: '#f59e0b', rarity: 'legendary', xpReward: 250 },
    { slug: 'linkedin-dsa',  name: 'DSA Learner',      description: 'Completed DSA learning pathway', emoji: '🌳', color: '#16a34a', rarity: 'rare', xpReward: 80 },
    { slug: 'linkedin-os',   name: 'OS Operator',      description: 'Completed Operating Systems pathway', emoji: '⚙️', color: '#0284c7', rarity: 'rare', xpReward: 80 },
    { slug: 'linkedin-ml',   name: 'ML Explorer',      description: 'Completed AI/ML pathway', emoji: '🤖', color: '#7c3aed', rarity: 'epic', xpReward: 120 },
    { slug: 'linkedin-cloud',name: 'Cloud Starter',    description: 'Completed cloud foundations pathway', emoji: '☁️', color: '#2563eb', rarity: 'rare', xpReward: 90 },
  ]
  for (const b of badges) {
    await prisma.badge.upsert({ where: { slug: b.slug }, create: b, update: b })
  }

  // ── Demo users ────────────────────────────────────────────────────────
  const demoUsers = [
    { email: 'aarav@mru.edu.in',  name: 'Aarav Sharma',   department: 'CSE',  xp: 2450, level: 8,  coins: 180, streak: 12 },
    { email: 'isha@mru.edu.in',   name: 'Isha Verma',     department: 'ECE',  xp: 2100, level: 7,  coins: 145, streak: 9  },
    { email: 'kabir@mru.edu.in',  name: 'Kabir Singh',    department: 'ME',   xp: 1780, level: 6,  coins: 120, streak: 4  },
    { email: 'maya@mru.edu.in',   name: 'Maya Iyer',      department: 'CSE',  xp: 1450, level: 6,  coins: 95,  streak: 6  },
    { email: 'rohan@mru.edu.in',  name: 'Rohan Gupta',    department: 'IT',   xp: 980,  level: 5,  coins: 60,  streak: 2  },
    { email: 'neha@mru.edu.in',   name: 'Neha Kapoor',    department: 'CSE',  xp: 720,  level: 4,  coins: 40,  streak: 3  },
    { email: 'arjun@mru.edu.in',  name: 'Arjun Reddy',    department: 'EEE',  xp: 540,  level: 3,  coins: 25,  streak: 1  },
    { email: 'priya@mru.edu.in',  name: 'Priya Nair',     department: 'CSE',  xp: 300,  level: 2,  coins: 15,  streak: 5  },
  ]

  const hash = await bcrypt.hash('password123', 10)
  for (const u of demoUsers) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: {
        name: u.name, department: u.department,
        xp: u.xp, level: u.level, coins: u.coins, streakCount: u.streak,
        role: 'STUDENT',
      },
      create: {
        email: u.email,
        name: u.name,
        passwordHash: hash,
        department: u.department,
        xp: u.xp,
        level: u.level,
        coins: u.coins,
        streakCount: u.streak,
        lastActiveDay: new Date(),
        role: 'STUDENT',
      },
    })
  }

  // Demo player for manual testing: demo@mru.edu.in / demo1234
  const demo = await prisma.user.upsert({
    where: { email: 'demo@mru.edu.in' },
    update: {},
    create: {
      email: 'demo@mru.edu.in',
      name: 'Demo Student',
      passwordHash: await bcrypt.hash('demo1234', 10),
      department: 'CSE',
      year: '3rd',
      bio: 'Testing SOE Engage.',
      xp: 120,
      level: 2,
      coins: 30,
      streakCount: 1,
      lastActiveDay: new Date(),
      role: 'STUDENT',
    },
  })

  // Admin user for completion review: admin@mru.edu.in / admin1234
  await prisma.user.upsert({
    where: { email: 'admin@mru.edu.in' },
    update: {
      name: 'SOE Admin',
      role: 'ADMIN',
      department: 'SOE',
    },
    create: {
      email: 'admin@mru.edu.in',
      name: 'SOE Admin',
      passwordHash: await bcrypt.hash('admin1234', 10),
      department: 'SOE',
      role: 'ADMIN',
      year: 'Staff',
      bio: 'Learning pathways reviewer',
      xp: 0,
      level: 1,
      coins: 0,
      streakCount: 0,
    },
  })

  // ── Challenges ────────────────────────────────────────────────────────
  const challenges = [
    { title: 'Check the feed',        description: 'Scroll the campus feed today. #feed',           type: 'DAILY',   emoji: '📰', goal: 1, xpReward: 25,  coinReward: 5  },
    { title: 'Vote in a poll',        description: 'Cast one vote in any active poll. #poll',       type: 'DAILY',   emoji: '🗳️', goal: 1, xpReward: 30,  coinReward: 5  },
    { title: 'Play daily trivia',     description: 'Complete one trivia quiz. #quiz',                type: 'DAILY',   emoji: '🧠', goal: 1, xpReward: 50,  coinReward: 10 },
    { title: 'Make your voice heard', description: 'Post something to the feed. #post',             type: 'DAILY',   emoji: '📣', goal: 1, xpReward: 40,  coinReward: 8  },
    { title: 'Event explorer',        description: 'Check in to a campus event this week. #checkin', type: 'WEEKLY',  emoji: '🎟️', goal: 3, xpReward: 150, coinReward: 30 },
    { title: 'Quiz grinder',          description: 'Complete 5 quizzes this week. #quiz',           type: 'WEEKLY',  emoji: '🏋️', goal: 5, xpReward: 200, coinReward: 40 },
    { title: 'Streak survivor',       description: 'Hit a 7-day login streak.',                     type: 'SPECIAL', emoji: '🔥', goal: 7, xpReward: 300, coinReward: 50 },
  ] as const

  for (const c of challenges) {
    const existing = await prisma.challenge.findFirst({ where: { title: c.title } })
    if (existing) {
      await prisma.challenge.update({ where: { id: existing.id }, data: c })
    } else {
      await prisma.challenge.create({ data: c })
    }
  }

  // ── Campus events ────────────────────────────────────────────────────
  const now = new Date()
  const in2d = new Date(now.getTime() + 2 * 24 * 3600 * 1000)
  const in5d = new Date(now.getTime() + 5 * 24 * 3600 * 1000)
  const in10d = new Date(now.getTime() + 10 * 24 * 3600 * 1000)

  const events = [
    { slug: 'icass-opening', title: 'ICASS 2026 Opening Keynote',   location: 'Main Auditorium', startsAt: in2d,  xpReward: 60, coinReward: 10, checkinCode: 'ICASS26', description: 'Join the opening ceremony of ICASS 2026.' },
    { slug: 'hackathon',     title: 'Build-App-in-a-Day Hackathon', location: 'SOE Lab Block',   startsAt: in5d,  xpReward: 100, coinReward: 25, checkinCode: 'HACKMRU', description: 'Code. Collaborate. Ship.' },
    { slug: 'robotics',      title: 'WRO Robotics Workshop',        location: 'Innovation Lab',  startsAt: in10d, xpReward: 80, coinReward: 15, checkinCode: 'ROBO26', description: 'Design, build, program competing robots.' },
  ]

  for (const e of events) {
    await prisma.campusEvent.upsert({ where: { slug: e.slug }, create: e, update: e })
  }

  // ── Polls ────────────────────────────────────────────────────────────
  const existingPoll = await prisma.poll.findFirst({ where: { question: 'Best MRU canteen dish?' } })
  if (!existingPoll) {
    await prisma.poll.create({
      data: {
        question: 'Best MRU canteen dish?',
        description: 'Vote your favourite — results go live!',
        emoji: '🍔',
        xpReward: 20,
        options: {
          create: [
            { label: 'Maggi',          emoji: '🍜', order: 0 },
            { label: 'Chole Bhature', emoji: '🥙', order: 1 },
            { label: 'Veg Momos',      emoji: '🥟', order: 2 },
            { label: 'Cold Coffee',    emoji: '🧋', order: 3 },
          ],
        },
      },
    })
  }

  const p2 = await prisma.poll.findFirst({ where: { question: 'What tech excites you most?' } })
  if (!p2) {
    await prisma.poll.create({
      data: {
        question: 'What tech excites you most?',
        description: 'Shape the next SOE workshop line-up.',
        emoji: '🚀',
        xpReward: 25,
        options: {
          create: [
            { label: 'AI / ML',             emoji: '🤖', order: 0 },
            { label: 'Robotics',            emoji: '🦾', order: 1 },
            { label: 'Cybersecurity',       emoji: '🔐', order: 2 },
            { label: 'Web3 / Blockchain',   emoji: '⛓️', order: 3 },
          ],
        },
      },
    })
  }

  // ── Quizzes ──────────────────────────────────────────────────────────
  const existingQuiz = await prisma.quiz.findFirst({ where: { title: 'MRU Fast Facts' } })
  if (!existingQuiz) {
    await prisma.quiz.create({
      data: {
        title: 'MRU Fast Facts',
        description: 'Quick trivia about your campus.',
        emoji: '🎓',
        xpPerQ: 20,
        timeLimit: 20,
        questions: {
          create: [
            { order: 0, prompt: 'In which city is MRU located?',       choices: ['Gurugram', 'Faridabad', 'Noida', 'Delhi'],    answerIdx: 1 },
            { order: 1, prompt: 'What does SOE stand for?',            choices: ['School of Economics', 'School of Engineering', 'School of Ethics', 'School of Electronics'], answerIdx: 1 },
            { order: 2, prompt: 'Which colour is MRU\'s brand red?',  choices: ['#ff0000', '#b12a2e', '#dc2626', '#c7353a'],    answerIdx: 1 },
            { order: 3, prompt: 'Which event is SOE\'s flagship conference?', choices: ['ICASS', 'SPICE', 'TEDx MRU', 'MUN'], answerIdx: 0 },
            { order: 4, prompt: 'Approximate number of MRU alumni globally?', choices: ['4,000+', '12,000+', '43,000+', '100,000+'], answerIdx: 2 },
          ],
        },
      },
    })
  }

  const q2 = await prisma.quiz.findFirst({ where: { title: 'Computer Science 101' } })
  if (!q2) {
    await prisma.quiz.create({
      data: {
        title: 'Computer Science 101',
        description: 'Foundational CS warm-up.',
        emoji: '💻',
        xpPerQ: 25,
        timeLimit: 25,
        questions: {
          create: [
            { order: 0, prompt: 'Big-O of binary search on a sorted array?', choices: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], answerIdx: 1 },
            { order: 1, prompt: 'Which data structure is FIFO?',             choices: ['Stack', 'Queue', 'Heap', 'Tree'],          answerIdx: 1 },
            { order: 2, prompt: 'TCP is a…',                                  choices: ['Transport layer protocol', 'Network layer', 'Application layer', 'Physical layer'], answerIdx: 0 },
            { order: 3, prompt: 'Which is NOT a JavaScript type?',           choices: ['number', 'symbol', 'character', 'bigint'], answerIdx: 2 },
          ],
        },
      },
    })
  }

  // ── Rewards ──────────────────────────────────────────────────────────
  const rewards = [
    { title: 'Free Canteen Coffee',    description: 'Grab one cold coffee at the SOE canteen.',     emoji: '☕', cost: 50,  stock: 20 },
    { title: 'Library Late-Fee Waiver', description: 'Waives one ₹50 late-return fee.',              emoji: '📚', cost: 75,  stock: 10 },
    { title: 'MRU Sticker Pack',       description: 'A pack of 5 branded laptop stickers.',         emoji: '🎨', cost: 100, stock: 50 },
    { title: 'Priority Event Seat',    description: 'Front-row seat at any SOE event.',             emoji: '🎟️', cost: 150, stock: 8  },
    { title: 'MRU T-Shirt',            description: 'Exclusive SOE Engage tee.',                     emoji: '👕', cost: 500, stock: 25 },
    { title: 'Meet the Dean',          description: '15-min mentoring chat with the Dean.',         emoji: '🤝', cost: 1000, stock: 3 },
  ]
  for (const r of rewards) {
    const existing = await prisma.reward.findFirst({ where: { title: r.title } })
    if (existing) await prisma.reward.update({ where: { id: existing.id }, data: r })
    else await prisma.reward.create({ data: r })
  }

  // ── E-learning pathways (curated LinkedIn Learning) ───────────────────
  const pathways = [
    {
      slug: 'cse-sem4-core',
      title: 'CSE Core — Semester 4',
      description: 'Essential semester-4 LinkedIn Learning tracks for core CSE foundations.',
      department: 'CSE',
      semester: '4',
      tags: ['cse', 'semester-4', 'core'],
      courses: [
        { title: 'Arrays and Hashing Fundamentals', description: 'Core DSA patterns for indexing and lookup.', url: 'https://www.linkedin.com/learning/paths/arrays-and-hashing-fundamentals', duration: '2h 10m', difficulty: 'Beginner', xpReward: 40, badgeSlug: 'linkedin-dsa' },
        { title: 'Linked Lists and Pointer Logic', description: 'Build linked list intuition with coding walkthroughs.', url: 'https://www.linkedin.com/learning/paths/linked-lists-and-pointer-logic', duration: '1h 40m', difficulty: 'Beginner', xpReward: 45, badgeSlug: 'linkedin-dsa' },
        { title: 'Trees and Graphs Essentials', description: 'Understand BFS/DFS and graph modeling.', url: 'https://www.linkedin.com/learning/paths/trees-and-graphs-essentials', duration: '2h 35m', difficulty: 'Intermediate', xpReward: 50, badgeSlug: 'linkedin-dsa' },
        { title: 'Dynamic Programming Basics', description: 'Solve optimization-style interview problems.', url: 'https://www.linkedin.com/learning/paths/dynamic-programming-basics', duration: '1h 55m', difficulty: 'Intermediate', xpReward: 55, badgeSlug: 'linkedin-dsa' },
      ],
    },
    {
      slug: 'ai-ml-track',
      title: 'AI / ML Track',
      description: 'Recommended AI/ML learning path using free access from MRU domain accounts.',
      department: 'CSE',
      semester: '5',
      tags: ['ai', 'ml', 'data'],
      courses: [
        { title: 'Machine Learning Foundations', description: 'Supervised/unsupervised concepts and pipelines.', url: 'https://www.linkedin.com/learning/paths/machine-learning-foundations', duration: '4h 30m', difficulty: 'Beginner', xpReward: 60, badgeSlug: 'linkedin-ml' },
        { title: 'Python for Data Science', description: 'Numpy/Pandas workflows for data analysis.', url: 'https://www.linkedin.com/learning/paths/python-for-data-science', duration: '3h 15m', difficulty: 'Beginner', xpReward: 50, badgeSlug: 'linkedin-ml' },
        { title: 'Applied Neural Networks', description: 'Core deep learning architecture concepts.', url: 'https://www.linkedin.com/learning/paths/applied-neural-networks', duration: '2h 45m', difficulty: 'Intermediate', xpReward: 70, badgeSlug: 'linkedin-ml' },
      ],
    },
    {
      slug: 'cloud-foundations',
      title: 'Cloud Foundations',
      description: 'Cloud literacy and deployment basics for modern engineering roles.',
      department: 'CSE',
      semester: '4',
      tags: ['cloud', 'devops', 'aws'],
      courses: [
        { title: 'AWS Cloud Foundations', description: 'Compute/storage/networking essentials.', url: 'https://www.linkedin.com/learning/paths/aws-cloud-foundations', duration: '5h', difficulty: 'Beginner', xpReward: 55, badgeSlug: 'linkedin-cloud' },
        { title: 'Intro to DevOps Practices', description: 'CI/CD, environments, and release basics.', url: 'https://www.linkedin.com/learning/paths/introduction-to-devops-practices', duration: '2h 20m', difficulty: 'Intermediate', xpReward: 45, badgeSlug: 'linkedin-cloud' },
      ],
    },
  ] as const

  for (const p of pathways) {
    const pathway = await prisma.learningPathway.upsert({
      where: { slug: p.slug },
      update: {
        title: p.title,
        description: p.description,
        department: p.department,
        semester: p.semester,
        tags: [...p.tags],
        active: true,
      },
      create: {
        slug: p.slug,
        title: p.title,
        description: p.description,
        department: p.department,
        semester: p.semester,
        tags: [...p.tags],
        active: true,
      },
    })

    for (const [index, c] of p.courses.entries()) {
      const existing = await prisma.learningCourse.findFirst({
        where: { pathwayId: pathway.id, title: c.title },
      })
      if (existing) {
        await prisma.learningCourse.update({
          where: { id: existing.id },
          data: {
            description: c.description,
            url: c.url,
            duration: c.duration,
            difficulty: c.difficulty,
            order: index,
            xpReward: c.xpReward,
            badgeSlug: c.badgeSlug,
            active: true,
          },
        })
      } else {
        await prisma.learningCourse.create({
          data: {
            pathwayId: pathway.id,
            title: c.title,
            description: c.description,
            provider: 'LINKEDIN',
            url: c.url,
            duration: c.duration,
            difficulty: c.difficulty,
            order: index,
            xpReward: c.xpReward,
            badgeSlug: c.badgeSlug,
            active: true,
          },
        })
      }
    }
  }

  // ── Seed some demo posts ─────────────────────────────────────────────
  const allUsers = await prisma.user.findMany({ take: 5 })
  const sampleContents = [
    'First day back at MRU — vibes are unreal 🔥',
    'Who\'s coming to the Build-App-in-a-Day hackathon?',
    'Canteen Maggi >>> everything else. Fight me.',
    'Just claimed my first daily quest. Let\'s goooo!',
    'Anyone forming a team for ICASS poster presentation?',
  ]
  for (let i = 0; i < sampleContents.length && i < allUsers.length; i++) {
    const author = allUsers[i]
    const existing = await prisma.post.findFirst({ where: { authorId: author.id, content: sampleContents[i] } })
    if (!existing) {
      await prisma.post.create({
        data: { authorId: author.id, content: sampleContents[i], eventTag: i === 1 ? 'hackathon' : null },
      })
    }
  }

  // Give demo user the welcome badge
  const welcome = await prisma.badge.findUnique({ where: { slug: 'welcome' } })
  if (welcome) {
    await prisma.userBadge.upsert({
      where: { userId_badgeId: { userId: demo.id, badgeId: welcome.id } },
      update: {},
      create: { userId: demo.id, badgeId: welcome.id },
    })
  }

  console.log('✅ Seeding complete.')
  console.log('   Demo login → demo@mru.edu.in / demo1234')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
