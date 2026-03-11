export interface Resource {
  name: string;
  url: string;
  icon: string;
  description: string;
}

export interface SubjectTopic {
  name: string;
  resources?: Resource[];
}

export interface Subject {
  id: string;
  name: string;
  examBoard: string;
  specUrl: string;
  colorClass: string;
  glowClass: string;
  bgGradient: string;
  icon: string;
  topics?: SubjectTopic[];
  resources: Resource[];
  tips: string[];
}

export const subjects: Subject[] = [
  {
    id: "maths",
    name: "Mathematics",
    examBoard: "Edexcel",
    specUrl: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html",
    colorClass: "text-subject-maths",
    glowClass: "glow-purple",
    bgGradient: "from-subject-maths/20 to-subject-maths/5",
    icon: "📐",
    resources: [
      {
        name: "Edexcel Maths - Save My Exams",
        url: "https://www.savemyexams.com/gcse/maths/edexcel/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Past papers, revision notes & topic questions",
      },
      {
        name: "Mathsgenie",
        url: "https://www.mathsgenie.co.uk/gcse.html",
        icon: "https://www.google.com/s2/favicons?domain=mathsgenie.co.uk&sz=64",
        description: "Grade-sorted practice questions & videos",
      },
      {
        name: "Corbettmaths",
        url: "https://corbettmaths.com/",
        icon: "https://www.google.com/s2/favicons?domain=corbettmaths.com&sz=64",
        description: "5-a-day, textbook exercises & practice papers",
      },
      {
        name: "PMT - Edexcel Maths",
        url: "https://www.physicsandmathstutor.com/maths-revision/gcse-edexcel/",
        icon: "https://www.google.com/s2/favicons?domain=physicsandmathstutor.com&sz=64",
        description: "Revision notes, worksheets & past papers",
      },
      {
        name: "First Class Maths (YouTube)",
        url: "https://www.youtube.com/@FirstClassMaths",
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
        description: "Walkthrough videos & exam tips",
      },
      {
        name: "DrFrostMaths",
        url: "https://www.drfrostmaths.com/",
        icon: "https://www.google.com/s2/favicons?domain=drfrostmaths.com&sz=64",
        description: "Interactive questions & worksheets",
      },
    ],
    tips: [
      "Practice past papers under timed conditions",
      "Focus on topics you score lowest on first",
      "Use Mathsgenie for grade-targeted practice",
    ],
  },
  {
    id: "combined-science",
    name: "Combined Science (Trilogy)",
    examBoard: "AQA",
    specUrl: "https://www.aqa.org.uk/subjects/science/gcse/combined-science-trilogy-8464",
    colorClass: "text-subject-science",
    glowClass: "glow-green",
    bgGradient: "from-subject-science/20 to-subject-science/5",
    icon: "🧪",
    resources: [
      {
        name: "Save My Exams - AQA Combined Biology",
        url: "https://www.savemyexams.com/gcse/biology/aqa/17/combined/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Combined Biology revision notes & questions",
      },
      {
        name: "Save My Exams - AQA Combined Chemistry",
        url: "https://www.savemyexams.com/gcse/chemistry/aqa/17/combined/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Combined Chemistry revision notes & questions",
      },
      {
        name: "Save My Exams - AQA Combined Physics",
        url: "https://www.savemyexams.com/gcse/physics/aqa/17/combined/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Combined Physics revision notes & questions",
      },
      {
        name: "PMT - AQA Combined Science",
        url: "https://www.physicsandmathstutor.com/science-revision/gcse-aqa-combined-science/",
        icon: "https://www.google.com/s2/favicons?domain=physicsandmathstutor.com&sz=64",
        description: "Combined Science revision notes & past papers",
      },
      {
        name: "Cognito (YouTube)",
        url: "https://www.youtube.com/@Cognitoedu",
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
        description: "Short & clear science explanation videos",
      },
      {
        name: "Freesciencelessons (YouTube)",
        url: "https://www.youtube.com/freesciencelessons",
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
        description: "GCSE science videos for every topic",
      },
      {
        name: "Seneca Learning",
        url: "https://senecalearning.com/en-GB/",
        icon: "https://www.google.com/s2/favicons?domain=senecalearning.com&sz=64",
        description: "Smart revision platform with AQA courses",
      },
      {
        name: "BBC Bitesize - Combined Science",
        url: "https://www.bbc.co.uk/bitesize/examspecs/z8r997h",
        icon: "https://www.google.com/s2/favicons?domain=bbc.co.uk&sz=64",
        description: "AQA Combined Science guides & quizzes",
      },
    ],
    tips: [
      "Learn required practicals inside out",
      "Use specification checklists to track progress",
      "Watch Cognito videos for quick topic overviews",
    ],
  },
  {
    id: "triple-science",
    name: "Triple Science (Separate)",
    examBoard: "AQA",
    specUrl: "https://www.aqa.org.uk/subjects/science/gcse",
    colorClass: "text-subject-science",
    glowClass: "glow-green",
    bgGradient: "from-subject-science/20 to-subject-science/5",
    icon: "🔬",
    topics: [
      { name: "Biology (8461)" },
      { name: "Chemistry (8462)" },
      { name: "Physics (8463)" },
    ],
    resources: [
      {
        name: "Save My Exams - AQA Biology",
        url: "https://www.savemyexams.com/gcse/biology/aqa/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Triple Biology revision notes, questions & mark schemes",
      },
      {
        name: "Save My Exams - AQA Chemistry",
        url: "https://www.savemyexams.com/gcse/chemistry/aqa/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Triple Chemistry revision notes, questions & mark schemes",
      },
      {
        name: "Save My Exams - AQA Physics",
        url: "https://www.savemyexams.com/gcse/physics/aqa/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Triple Physics revision notes, questions & mark schemes",
      },
      {
        name: "PMT - AQA Biology",
        url: "https://www.physicsandmathstutor.com/biology-revision/gcse-aqa/",
        icon: "https://www.google.com/s2/favicons?domain=physicsandmathstutor.com&sz=64",
        description: "Biology revision notes & past papers",
      },
      {
        name: "PMT - AQA Chemistry",
        url: "https://www.physicsandmathstutor.com/chemistry-revision/gcse-aqa/",
        icon: "https://www.google.com/s2/favicons?domain=physicsandmathstutor.com&sz=64",
        description: "Chemistry revision notes & past papers",
      },
      {
        name: "PMT - AQA Physics",
        url: "https://www.physicsandmathstutor.com/physics-revision/gcse-aqa/",
        icon: "https://www.google.com/s2/favicons?domain=physicsandmathstutor.com&sz=64",
        description: "Physics revision notes & past papers",
      },
      {
        name: "Cognito (YouTube)",
        url: "https://www.youtube.com/@Cognitoedu",
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
        description: "Short & clear science explanation videos",
      },
      {
        name: "Freesciencelessons (YouTube)",
        url: "https://www.youtube.com/freesciencelessons",
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
        description: "GCSE science videos for every topic",
      },
      {
        name: "Seneca Learning",
        url: "https://senecalearning.com/en-GB/",
        icon: "https://www.google.com/s2/favicons?domain=senecalearning.com&sz=64",
        description: "Smart revision platform with AQA courses",
      },
      {
        name: "BBC Bitesize - AQA Biology",
        url: "https://www.bbc.co.uk/bitesize/examspecs/zpgcbk7",
        icon: "https://www.google.com/s2/favicons?domain=bbc.co.uk&sz=64",
        description: "AQA Triple Biology guides & quizzes",
      },
    ],
    tips: [
      "Triple has extra content beyond Combined — know the differences",
      "Learn required practicals inside out",
      "Use specification checklists to track progress per science",
      "Watch Cognito videos for quick topic overviews",
    ],
  },
  {
    id: "english-lang",
    name: "English Language",
    examBoard: "AQA",
    specUrl: "https://www.aqa.org.uk/subjects/english/gcse/english-language-8700",
    colorClass: "text-subject-english",
    glowClass: "glow-pink",
    bgGradient: "from-subject-english/20 to-subject-english/5",
    icon: "✍️",
    resources: [
      {
        name: "Save My Exams - English Language",
        url: "https://www.savemyexams.com/gcse/english-language/aqa/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Revision notes & exam practice",
      },
      {
        name: "PMT - AQA English Language",
        url: "https://www.physicsandmathstutor.com/english-language/gcse-aqa/",
        icon: "https://www.google.com/s2/favicons?domain=physicsandmathstutor.com&sz=64",
        description: "Past papers & revision resources",
      },
      {
        name: "Mr Everything English (YouTube)",
        url: "https://www.youtube.com/@MrEverythingEnglish",
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
        description: "AQA English walkthroughs & tips",
      },
      {
        name: "BBC Bitesize - English Language",
        url: "https://www.bbc.co.uk/bitesize/subjects/zr9d7ty",
        icon: "https://www.google.com/s2/favicons?domain=bbc.co.uk&sz=64",
        description: "Reading & writing skills guides",
      },
    ],
    tips: [
      "Practise creative writing under timed conditions",
      "Learn a bank of vocabulary for descriptive writing",
      "Annotate extracts to practise analysis skills",
    ],
  },
  {
    id: "english-lit",
    name: "English Literature",
    examBoard: "AQA",
    specUrl: "https://www.aqa.org.uk/subjects/english/gcse/english-literature-8702",
    colorClass: "text-subject-english",
    glowClass: "glow-pink",
    bgGradient: "from-subject-english/20 to-subject-english/5",
    icon: "📚",
    topics: [
      { name: "Macbeth" },
      { name: "A Christmas Carol" },
      { name: "An Inspector Calls" },
      { name: "Power & Conflict Poetry" },
    ],
    resources: [
      {
        name: "Save My Exams - English Lit",
        url: "https://www.savemyexams.com/gcse/english-literature/aqa/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Text guides, quotes & model answers",
      },
      {
        name: "PMT - AQA English Literature",
        url: "https://www.physicsandmathstutor.com/english-literature/gcse-aqa/",
        icon: "https://www.google.com/s2/favicons?domain=physicsandmathstutor.com&sz=64",
        description: "Revision notes & past papers",
      },
      {
        name: "Mr Bruff (YouTube)",
        url: "https://www.youtube.com/@mrbruff",
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
        description: "Literature analysis & essay tips",
      },
      {
        name: "Sparknotes",
        url: "https://www.sparknotes.com/",
        icon: "https://www.google.com/s2/favicons?domain=sparknotes.com&sz=64",
        description: "Summaries, analysis & character guides",
      },
    ],
    tips: [
      "Memorise 10-15 key quotes per text",
      "Practise writing analytical paragraphs (PEAL)",
      "Watch Mr Bruff for essay structure tips",
    ],
  },
  {
    id: "history",
    name: "History",
    examBoard: "AQA",
    specUrl: "https://www.aqa.org.uk/subjects/history/gcse/history-8145",
    colorClass: "text-subject-history",
    glowClass: "glow-orange",
    bgGradient: "from-subject-history/20 to-subject-history/5",
    icon: "🏛️",
    resources: [
      {
        name: "Save My Exams - History",
        url: "https://www.savemyexams.com/gcse/history/aqa/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Revision notes & exam questions",
      },
      {
        name: "PMT - History",
        url: "https://www.physicsandmathstutor.com/history-revision/gcse-aqa/",
        icon: "https://www.google.com/s2/favicons?domain=physicsandmathstutor.com&sz=64",
        description: "Topic summaries & past papers",
      },
      {
        name: "BBC Bitesize - History",
        url: "https://www.bbc.co.uk/bitesize/subjects/zj26n39",
        icon: "https://www.google.com/s2/favicons?domain=bbc.co.uk&sz=64",
        description: "Interactive guides & quizzes",
      },
      {
        name: "Seneca Learning - History",
        url: "https://senecalearning.com/en-GB/",
        icon: "https://www.google.com/s2/favicons?domain=senecalearning.com&sz=64",
        description: "Smart revision with spaced repetition",
      },
    ],
    tips: [
      "Create timelines for each topic",
      "Practice source analysis questions",
      "Use the AQA spec to check topic coverage",
    ],
  },
  {
    id: "geography",
    name: "Geography",
    examBoard: "AQA",
    specUrl: "https://www.aqa.org.uk/subjects/geography/gcse/geography-8035",
    colorClass: "text-subject-geography",
    glowClass: "glow-cyan",
    bgGradient: "from-subject-geography/20 to-subject-geography/5",
    icon: "🌍",
    resources: [
      {
        name: "Save My Exams - Geography",
        url: "https://www.savemyexams.com/gcse/geography/aqa/",
        icon: "https://www.google.com/s2/favicons?domain=savemyexams.com&sz=64",
        description: "Revision notes & practice questions",
      },
      {
        name: "PMT - Geography",
        url: "https://www.physicsandmathstutor.com/geography-revision/gcse-aqa/",
        icon: "https://www.google.com/s2/favicons?domain=physicsandmathstutor.com&sz=64",
        description: "Notes & past papers",
      },
      {
        name: "Internet Geography",
        url: "https://www.internetgeography.net/",
        icon: "https://www.google.com/s2/favicons?domain=internetgeography.net&sz=64",
        description: "AQA-specific topic guides & case studies",
      },
      {
        name: "BBC Bitesize - Geography",
        url: "https://www.bbc.co.uk/bitesize/subjects/zkw76sg",
        icon: "https://www.google.com/s2/favicons?domain=bbc.co.uk&sz=64",
        description: "Guides & revision activities",
      },
    ],
    tips: [
      "Learn case study facts & statistics",
      "Practice map skills and graph reading",
      "Use Internet Geography for AQA-specific content",
    ],
  },
];
