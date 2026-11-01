# NLP PORTFOLIO — Immersive 3D Digital Research Journal

**Course:** Natural Language Processing and Computational Linguistics (`CSI4001`)  
**Student:** Abijit I B (`23MIC0013`)  
**Programme:** Integrated M.Tech in Computer Science and Engineering  
**Institution:** Vellore Institute of Technology (VIT), Vellore  
**Semester:** Fall Semester 2026–27  
**Faculty:** Dr. Sharmila Banu  

---

## Overview

An interactive 3D academic research journal and course portfolio built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Three.js / React Three Fiber**, and **Lucide React**.

### Key Highlights
- **Academic Cover & 3D Portrait Frame:** High-priority display of `NATURAL LANGUAGE PROCESSING AND COMPUTATIONAL LINGUISTICS` and `CSI4001`, complete academic metadata, and an interactive 3D portrait frame using `public/images/profile.jpg`.
- **Class Activity Recognition:** Dedicated recognition banner showcasing `10 Stars Earned` through class activities with interactive 3D gold stars.
- **Interactive Digital Book & 8 Chapters:**
  - **Chapter 01 — About the Researcher:** Academic profile and core research domains.
  - **Chapter 02 — Featured NLP Project:** *Semantic Legal Document Retrieval Using NLP and FAISS* (200 Supreme Court judgments from 2023, 4,157 chunks, 500-word window, 100-word overlap, 384-D `all-MiniLM-L6-v2` embeddings, `FAISS IndexFlatIP`, video and PPT resource panels, and academic references).
  - **Chapter 03 — Hands-on NLP Session:** Dedicated laboratory repository (`https://github.com/abijitabi47/NLP`).
  - **Chapter 04 — Medium Publication:** Editorial feature for *"The Silent Language of Passive Aggression: Understanding What People Don't Say"*.
  - **Chapter 05 — Creative NLP Explorations:** Metaphor exploration (*"My Teacher Is a Tiger in NLP"*) and Malayalam song translation comparison (*"Aaradhike"*, *Ambili*, 2019).
  - **Chapter 06 — Research Exploration: Historical Chinese Text NLP:** Interactive 13-node knowledge map for CBDB and classical Chinese text analysis.
  - **Chapter 07 — Industry Research:** Comprehensive startup study on **Uniphore**.
  - **Chapter 08 — Class Memories:** Full-width uncropped group photograph (`public/images/class-photo.jpg`) with a full-screen lightbox.

---

## Local Execution

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## Deployment on Vercel (Free Initial Deployment)

1. **Create a GitHub Repository:**
   - Go to [https://github.com/new](https://github.com/new) and create a new repository named `nlp-portfolio`.

2. **Push the Source Code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CSI4001 3D NLP Portfolio Journal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/nlp-portfolio.git
   git push -u origin main
   ```

3. **Import into Vercel:**
   - Sign in to [https://vercel.com](https://vercel.com) with your GitHub account.
   - Click **Add New... → Project** and select your `nlp-portfolio` repository.
   - Vercel automatically detects **Next.js** (`npm run build`).

4. **Deploy the Website:**
   - Click **Deploy**. Both `public/images/profile.jpg` and `public/images/class-photo.jpg` are bundled inside `public/images/` and will be served automatically on your `.vercel.app` domain.

5. **Updating the Deployment:**
   - Whenever you modify any component or content locally, commit and push to `main`:
     ```bash
     git add .
     git commit -m "Update portfolio content"
     git push
     ```
   - Vercel automatically triggers a fresh production build and updates your live URL.
