export interface ChapterMeta {
  id: number;
  number: string;
  code: string;
  title: string;
  subtitle: string;
  readingTime: string;
  summary: string;
  keywords: string[];
}

export const STUDENT_INFO = {
  websiteTitle: "NLP PORTFOLIO",
  courseName: "NATURAL LANGUAGE PROCESSING AND COMPUTATIONAL LINGUISTICS",
  courseNameTitleCase: "Natural Language Processing and Computational Linguistics",
  courseCode: "CSI4001",
  studentName: "Abijit I B",
  registrationNumber: "23MIC0013",
  programme: "Integrated M.Tech in Computer Science and Engineering",
  institution: "Vellore Institute of Technology (VIT), Vellore",
  institutionShort: "Vellore Institute of Technology, Vellore",
  semester: "Fall Semester 2026–27",
  faculty: "Dr. Sharmila Banu",
  classActivityRecognition: "10 Stars Earned",
  githubProfile: "https://github.com/abijitabi47",
};

export const CHAPTERS: ChapterMeta[] = [
  {
    id: 1,
    number: "01",
    code: "CHAPTER 01",
    title: "About Me",
    subtitle: "Academic Identity, Research Philosophy & Core Computational Linguistics Interests",
    readingTime: "3 min read",
    summary:
      "Academic profile of Abijit I B, an Integrated M.Tech student in Computer Science and Engineering at VIT Vellore focusing on NLP, semantic search, and research-driven AI.",
    keywords: [
      "Natural Language Processing",
      "Computational Linguistics",
      "Machine Learning",
      "Semantic Search",
      "Information Retrieval",
      "Language Technology",
      "Research-driven AI applications",
    ],
  },
  {
    id: 2,
    number: "02",
    code: "CHAPTER 02",
    title: "Featured NLP Project",
    subtitle: "Semantic Legal Document Retrieval Using NLP and FAISS",
    readingTime: "8 min read",
    summary:
      "An end-to-end semantic legal document retrieval engine indexing 2000 English Supreme Court judgments (4,157 chunks) with 384-dimensional Sentence-BERT embeddings and FAISS IndexFlatIP.",
    keywords: [
      "Python",
      "Streamlit",
      "all-MiniLM-L6-v2",
      "FAISS IndexFlatIP",
      "PyMuPDF",
      "Semantic Retrieval",
    ],
  },
  {
    id: 3,
    number: "03",
    code: "CHAPTER 03",
    title: "Hands-on NLP Session",
    subtitle: "Hands-on NLP Practice and Implementation",
    readingTime: "4 min read",
    summary:
      "Practical laboratory implementations, linguistic preprocessing experiments, and notebook exercises documented in a dedicated GitHub repository.",
    keywords: [
      "Hands-on NLP Activities",
      "Practical Implementation",
      "Tokenization & Embeddings",
      "Experimentation",
    ],
  },
  {
    id: 4,
    number: "04",
    code: "CHAPTER 04",
    title: "Medium Publication",
    subtitle: "The Silent Language of Passive Aggression: Understanding What People Don't Say",
    readingTime: "5 min read",
    summary:
      "An editorial investigation into pragmatic implication, subtext, and how indirect human communication encodes unstated emotional intent.",
    keywords: [
      "Pragmatics",
      "Subtext Analysis",
      "Discourse & Intent",
      "Editorial Publication",
    ],
  },
  {
    id: 5,
    number: "05",
    code: "CHAPTER 05",
    title: "Creative NLP Explorations",
    subtitle: "Metaphor Semantics ('My Teacher Is a Tiger in NLP') & Malayalam Song Translation Analysis",
    readingTime: "7 min read",
    summary:
      "Dual exploration of figurative metaphor interpretation and cross-lingual lexical/semantic evaluation on the Malayalam song 'Aaradhike' (Ambili, 2019).",
    keywords: [
      "Figurative Language",
      "Contextual Meaning",
      "Jaccard Lexical Analysis",
      "Cosine Semantic Comparison",
      "Malayalam-English Translation",
    ],
  },
  {
    id: 6,
    number: "06",
    code: "CHAPTER 06",
    title: "Research Exploration: Historical Chinese Text NLP",
    subtitle: "NLP Applications in Historical Chinese Text Analysis & CBDB Methodologies",
    readingTime: "9 min read",
    summary:
      "A 13-node interactive research exploration mapping potential NLP architectures—from Classical script preprocessing and NER to Knowledge Graphs and RAG—for historical Chinese corpora and CBDB.",
    keywords: [
      "CBDB",
      "Classical Chinese NLP",
      "NER & Entity Linking",
      "Knowledge Graphs",
      "Temporal & Geo NLP",
      "RAG & Transformers",
    ],
  },
  {
    id: 7,
    number: "07",
    code: "CHAPTER 07",
    title: "Industry Research",
    subtitle: "NLP Startup Study: Uniphore",
    readingTime: "6 min read",
    summary:
      "Comprehensive industry case study tracing Uniphore from its 2008 IIT Madras incubation to a global multimodal enterprise AI and conversational intelligence leader.",
    keywords: [
      "Uniphore",
      "Conversational AI",
      "Speech & Emotion AI",
      "Business AI Cloud",
      "Enterprise NLP",
    ],
  },
  {
    id: 8,
    number: "08",
    code: "CHAPTER 08",
    title: "Class Memories",
    subtitle: "The People Behind the Learning — CSI4001 Fall Semester 2026–27",
    readingTime: "3 min read",
    summary:
      "Commemorating our CSI4001 Natural Language Processing and Computational Linguistics cohort and faculty mentor Dr. Sharmila Banu at VIT Vellore.",
    keywords: [
      "CSI4001 Cohort",
      "Dr. Sharmila Banu",
      "VIT Vellore",
      "Fall Semester 2026–27",
    ],
  },
];
