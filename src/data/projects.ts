export const LEGAL_PROJECT_DATA = {
  title: "Semantic Legal Document Retrieval Using NLP and FAISS",
  motivation:
    "To simplify legal research by helping users find relevant court judgments based on the semantic meaning of legal documents rather than exact keyword matching.",
  existingGap:
    "Traditional keyword-based search may fail to identify legally related documents that use different terminology. This project addresses the gap through semantic similarity-based retrieval.",
  architectureStages: [
    {
      step: "01",
      title: "PDF Upload",
      detail: "Users upload full-text legal documents or case briefs in PDF format through the Streamlit interface.",
    },
    {
      step: "02",
      title: "Text Extraction",
      detail: "PyMuPDF (fitz) parses multi-page PDF streams and extracts clean legal text while preserving paragraph flow.",
    },
    {
      step: "03",
      title: "Text Chunking",
      detail: "Documents are segmented into 500-word windows with a 100-word sliding overlap to preserve contextual continuity across boundaries.",
    },
    {
      step: "04",
      title: "Embedding Generation",
      detail: "Sentence Transformers (all-MiniLM-L6-v2) encodes each text chunk into a dense 384-dimensional semantic vector.",
    },
    {
      step: "05",
      title: "FAISS Similarity Search",
      detail: "L2-normalized 384-D vectors are indexed in FAISS IndexFlatIP for exact inner-product (cosine similarity) search.",
    },
    {
      step: "06",
      title: "Judgment Ranking",
      detail: "Candidate chunks are aggregated and scored to rank the Top 5 most semantically aligned Supreme Court judgments.",
    },
    {
      step: "07",
      title: "Results Display",
      detail: "Interactive Streamlit view presents the Top 5 similar judgments, cosine similarity scores, matching passages, and case metadata.",
    },
  ],
  techStack: [
    { category: "Language", value: "Python" },
    { category: "Frontend", value: "Streamlit" },
    { category: "NLP Model", value: "Sentence Transformers – all-MiniLM-L6-v2" },
    { category: "Vector Search", value: "FAISS (IndexFlatIP)" },
    { category: "Libraries", value: "PyMuPDF, NumPy, Sentence Transformers" },
    { category: "Storage", value: "JSON, NumPy (.npy), FAISS index" },
  ],
  datasetStats: [
    { label: "Supreme Court Judgments (2023)", value: "200", suffix: "English Cases" },
    { label: "Generated Text Chunks", value: "4,157", suffix: "Indexed Passages" },
    { label: "Chunk Window Size", value: "500", suffix: "Words / Chunk" },
    { label: "Sliding Window Overlap", value: "100", suffix: "Words Overlap" },
    { label: "Dense Vector Dimension", value: "384", suffix: "Dimensions" },
  ],
  promptUsed:
    '\"Build a Streamlit-based legal document retrieval website with PDF upload, NLP-based text processing, Sentence Transformer embeddings, FAISS similarity search, and ranked results displaying similar judgments and similarity scores.\"',
  contributions: [
    "Streamlit website development.",
    "PDF upload and text extraction.",
    "Text chunking and preprocessing.",
    "Sentence Transformer integration.",
    "FAISS similarity search.",
    "Result ranking and user interface design.",
  ],
  pipeline: [
    "Extract text from legal PDFs using PyMuPDF.",
    "Divide documents into overlapping chunks.",
    "Generate 384-dimensional embeddings using all-MiniLM-L6-v2.",
    "Normalize embeddings and store them in a FAISS index.",
    "Convert uploaded documents into query embeddings.",
    "Retrieve and rank similar judgments using cosine similarity through normalized inner product.",
  ],
  users: ["Law students", "Legal researchers", "Lawyers", "Academic researchers"],
  inputSpec: "Legal documents in PDF format.",
  outputSpec: [
    "Top 5 similar judgments.",
    "Similarity scores.",
    "Relevant matching text passages.",
    "Available case metadata.",
  ],
  resources: {
    videoUrl:
      "https://drive.google.com/drive/folders/1oB_VSQOdifnRjPqAAXTlAhp5NO29fBn9?usp=sharing",
    pptUrl:
      "https://drive.google.com/drive/folders/1YhQlcOgi6WK3_pcrf1ZC_qA7OlJnGGEl?usp=sharing",
  },
  references: [
    {
      id: 1,
      citation: "Reimers & Gurevych (2019). Sentence-BERT.",
      url: "https://doi.org/10.18653/v1/D19-1410",
    },
    {
      id: 2,
      citation: "Johnson et al. (2017). Billion-scale Similarity Search with GPUs.",
      url: "https://arxiv.org/abs/1702.08734",
    },
    {
      id: 3,
      citation: "Sentence Transformers Documentation",
      url: "https://sbert.net/",
    },
    {
      id: 4,
      citation: "FAISS — Facebook AI Similarity Search Repository",
      url: "https://github.com/facebookresearch/faiss",
    },
    {
      id: 5,
      citation: "Streamlit Official Documentation",
      url: "https://docs.streamlit.io/",
    },
  ],
};

export interface HistoricalNLPNode {
  id: number;
  title: string;
  category: string;
  description: string;
  cbdbApplication: string;
  connectedTo: number[];
}

export const HISTORICAL_NLP_NODES: HistoricalNLPNode[] = [
  {
    id: 1,
    title: "Text Preprocessing",
    category: "Foundation Layer",
    description: "Cleaning historical Chinese text and handling different Chinese scripts.",
    cbdbApplication:
      "Normalizing classical literary Chinese (Wenyanwen), resolving traditional/variant character glyphs (Yitizi), punctuation segmentation, and OCR noise removal prior to downstream parsing.",
    connectedTo: [2, 5, 10, 12],
  },
  {
    id: 2,
    title: "Named Entity Recognition (NER)",
    category: "Entity Layer",
    description: "Identifying people, places, dynasties, diseases, food and other entities.",
    cbdbApplication:
      "Detecting historical person names, courtesy names (Zi), posthumous titles, imperial reign eras, administrative prefectures, historical pathologies, and dietary nouns in dynastic records.",
    connectedTo: [3, 4, 8, 9],
  },
  {
    id: 3,
    title: "Relation Extraction",
    category: "Structural Layer",
    description: "Finding relationships among people, family members, rulers and officials.",
    cbdbApplication:
      "Extracting kinship ties, mentor-disciple lineages, bureaucratic patronage, imperial appointments, and epistolary networks for prosopographical analysis.",
    connectedTo: [4, 7],
  },
  {
    id: 4,
    title: "Entity Linking",
    category: "Entity Layer",
    description: "Identifying the correct person when multiple people have similar names.",
    cbdbApplication:
      "Disambiguating homonymous historical figures across dynastic biographies by cross-referencing birthplaces, active reign periods, and office-holding records in CBDB.",
    connectedTo: [6, 7],
  },
  {
    id: 5,
    title: "Text Classification",
    category: "Semantic Layer",
    description: "Categorising historical texts into religion, medicine, education and culture.",
    cbdbApplication:
      "Automatically organizing local gazetteers (Difangzhi), imperial edicts, medical treatises, Buddhist/Daoist canons, and civil examination essays into thematic corpora.",
    connectedTo: [6, 10],
  },
  {
    id: 6,
    title: "Information Retrieval",
    category: "Access Layer",
    description: "Searching and retrieving relevant information using semantic search.",
    cbdbApplication:
      "Enabling historians to query classical archives by conceptual meaning across shifting dynastic terminology rather than rigid character string matching.",
    connectedTo: [11, 12],
  },
  {
    id: 7,
    title: "Knowledge Graphs",
    category: "Structural Layer",
    description: "Representing family relationships, social connections and career histories.",
    cbdbApplication:
      "Structuring China Biographical Database (CBDB) triples into multi-relational graphs linking biographical entities, kinship networks, bureaucratic posts, and geographical mobilities.",
    connectedTo: [8, 9, 11],
  },
  {
    id: 8,
    title: "Temporal NLP",
    category: "Spatio-Temporal Layer",
    description: "Studying changes in careers, culture, language and technology across dynasties.",
    cbdbApplication:
      "Mapping imperial reign-year calendar expressions to chronological timelines to track semantic shifts, institutional evolution, and official career trajectories over centuries.",
    connectedTo: [7, 9, 10],
  },
  {
    id: 9,
    title: "Geographical NLP",
    category: "Spatio-Temporal Layer",
    description: "Extracting historical place names and analysing locations.",
    cbdbApplication:
      "Linking historical prefectures and counties to historical GIS coordinates to visualize bureaucratic postings, migration corridors, and regional scholarly clusters.",
    connectedTo: [7, 8],
  },
  {
    id: 10,
    title: "Topic Modelling",
    category: "Semantic Layer",
    description: "Discovering major themes in historical documents.",
    cbdbApplication:
      "Uncovering latent intellectual, economic, and policy discourses across massive collections of memorials, poetry, and dynastic histories.",
    connectedTo: [5, 8, 12],
  },
  {
    id: 11,
    title: "RAG (Retrieval-Augmented Generation)",
    category: "Generative & QA Layer",
    description: "Building a chatbot that answers questions based on CBDB data and historical texts.",
    cbdbApplication:
      "Grounding conversational queries in verified CBDB biographical records and primary classical passages to prevent hallucination during historical research.",
    connectedTo: [6, 7, 12, 13],
  },
  {
    id: 12,
    title: "LLMs and Transformers",
    category: "Generative & QA Layer",
    description: "Using BERT and suitable language models for historical text analysis.",
    cbdbApplication:
      "Leveraging classical-Chinese pre-trained Transformers (such as SikuBERT / GuwenBERT) and domain-adapted LLMs for punctuation restoration, translation, and deep contextual encoding.",
    connectedTo: [1, 2, 6, 11, 13],
  },
  {
    id: 13,
    title: "Model Evaluation",
    category: "Verification Layer",
    description: "Checking accuracy and verifying extracted information.",
    cbdbApplication:
      "Benchmarking precision, recall, F1, and historical factual fidelity against expert-curated CBDB gold-standard annotations.",
    connectedTo: [2, 3, 4, 11, 12],
  },
];
