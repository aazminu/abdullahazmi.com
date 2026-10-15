# Scientific Dataset, Benchmark & Software Provenance (`abdullahazmi.com`)

**Organization:** Computational Genomics & Agentic Systems (CGAS) Lab · Department of Computer Science & Northwestern Institute on Complex Systems (NICO), Northwestern University  
**Lead Researcher:** Abdullah Azmi (`m4u5t4@u.northwestern.edu` · `erlokix@gmail.com` · [ORCID: 0009-0004-8172-6394](https://orcid.org/0009-0004-8172-6394))  
**Primary Portals:** [https://abdullahazmi.com/](https://abdullahazmi.com/) · [https://abdullahazmi.com/lab/](https://abdullahazmi.com/lab/) · [https://github.com/aazminu](https://github.com/aazminu)

---

## 1. Open-Source Software Repositories (`github.com/aazminu`)

All core research packages, full-stack applications, and open-source platform contributions linked from `abdullahazmi.com` and `abdullahazmi.com/lab/` are publicly hosted and inspectable under [`github.com/aazminu`](https://github.com/aazminu):

| Repository | Domain | Primary Stack & Verification Suite |
| :--- | :--- | :--- |
| [`aazminu/paper-pulse`](https://github.com/aazminu/paper-pulse) | Autonomous Scientific Knowledge Graphs | Python 3.11+, FastAPI, PostgreSQL (`pgvector`), Neo4j, Celery, Redis, Next.js 14; multi-hop DOI/arXiv claim provenance |
| [`aazminu/chrom-alphagenome`](https://github.com/aazminu/chrom-alphagenome) | Regulatory Genomics & Variant Attribution | Python 3.10+, NumPy, SciPy, AlphaGenome tracks, ChromBPNet/DeepLIFT, MaxEntScan $\Delta\text{PSI}$, `pytest` suite, `SKILL.md` |
| [`aazminu/bayes-kalman-trace`](https://github.com/aazminu/bayes-kalman-trace) | Recursive Bayesian State-Space Inference | Python 3.10+, NumPy, SciPy, Kalman Filter + RTS Smoother, analytic missing-data marginalization, `pytest` suite, `SKILL.md` |
| [`aazminu/fold-energetics-xtb`](https://github.com/aazminu/fold-energetics-xtb) | Structural Pocket Partitioning & QM Triage | Python 3.10+, AlphaFold 3 (`pLDDT`/`PAE`), Foldseek 3Di, `GFN2-xTB`, ChEMBL `pChEMBL`, `pytest` suite, `SKILL.md` |
| [`aazminu/airtight-container`](https://github.com/aazminu/airtight-container) | Full-Stack Yard Inventory & Billing | React 18, TypeScript, Node.js/Express, PostgreSQL, Prisma, AWS EC2; 25 migrations, 275+ automated unit/integration tests |
| [`aazminu/LeadAI`](https://github.com/aazminu/LeadAI) | Async Entity Enrichment & Qualification | Python, FastAPI, bounded async queue (`pipeline_queue.py`), PostgreSQL, structured extraction & retry recovery |
| [`aazminu/odyssey`](https://github.com/aazminu/odyssey) | University Learning Platform (MDX/React) | Next.js, TypeScript, Strapi CMS, PostgreSQL; recursive nested block preview fix & Jest regression test suites |
| [`aazminu/mermaid`](https://github.com/aazminu/mermaid) | Declarative Diagramming & Charting Engine | TypeScript, SVG/D3 rendering, Vitest & Cypress regression suites for configurable bar-chart data labels & journey layout |
| [`aazminu/FarmData2`](https://github.com/aazminu/FarmData2) | Operational Recordkeeping Platform | Node.js, Vue.js, PostgreSQL, Docker, Cypress end-to-end integration test suites |
| [`aazminu/data-cleaning-hackumass`](https://github.com/aazminu/data-cleaning-hackumass) | ScrubData Tabular Cleaning Engine | Node.js, AWS S3, AWS Glue, statistical median/mode imputation & MAD z-score outlier winsorization |
| [`aazminu/python-riscv-simulator`](https://github.com/aazminu/python-riscv-simulator) | Cycle-Accurate RISC-V RV32I Simulator | Python 3.11+, single-cycle & 5-stage pipelined RV32I cores, EX/MEM/WB forwarding, load-use stalling, `pytest` suite |
| [`aazminu/dividend-capture-spark`](https://github.com/aazminu/dividend-capture-spark) | Dividend Capture & Streaming Alpha | Python, Apache Spark, SPY-adjusted drop ratios, k-NN/centroid sector imputation, temporal-split GBDT scoring |
| [`aazminu/world-model-compression-mpc`](https://github.com/aazminu/world-model-compression-mpc) | Low-Rank SVD World-Model Compression | PyTorch, Weight SVD vs. Activation-Aware SVD (ASVD), CEM MPC on `TwoRoom`/`PushT`, Hybrid KL + Elite distillation |
| [`aazminu/adaptive-ml-moderation`](https://github.com/aazminu/adaptive-ml-moderation) | Adaptive Real-Time ML Moderation | Python, hybrid word/char TF-IDF & transformer cascade, priority triage queue, leakage-safe splitting, PSI drift monitor |
| [`aazminu/agentic-scrape-repair`](https://github.com/aazminu/agentic-scrape-repair) | Agentic Scrape-Repair & ChatOps Sync | Python, self-healing DOM selector repair gated on schema verification, idempotent Slack-to-ServiceNow/Rally/GitHub sync |
| [`aazminu/movie-recc`](https://github.com/aazminu/movie-recc) | WebSocket Group Movie Recommender | Python, FastAPI WebSockets, React, residual bias-corrected collaborative filtering & equal member weighting |
| [`aazminu/sp500_platform`](https://github.com/aazminu/sp500_platform) | S&P 500 Portfolio Analytics & Optimizer | Python, React, Sharpe/Sortino/drawdown analytics, capped water-filling LLM conviction weights, Alpaca rebalancing |
| [`aazminu/AP-Study-Guide-Generator`](https://github.com/aazminu/AP-Study-Guide-Generator) | Sliding-Window RAG Study Guide Generator | Python, FAISS, overlapping word-window chunking, zero-norm-safe cosine similarity, Recall@K/MRR/nDCG@K evaluation |
| [`aazminu/Environmental-Disaster-Classifier`](https://github.com/aazminu/Environmental-Disaster-Classifier) | Spatiotemporal Disaster Classifier | Python, 10-year NASA EONET dataset, 3D unit-sphere geospatial projection, inverse-frequency weighted k-NN |
| [`aazminu/grab-pic`](https://github.com/aazminu/grab-pic) | Event Photo Sharing & Selfie Search | Java Spring Boot, Next.js, Python GhostFaceNet + RetinaFace worker, cosine-similarity embedding matcher |
| [`aazminu/comic-subscription`](https://github.com/aazminu/comic-subscription) | Marvel Series Tracker & Delta Notifier | Node.js, Express, Marvel API hash authentication, chapter-delta detection & automated email alerts |
| [`aazminu/motorcycle-rideability-index`](https://github.com/aazminu/motorcycle-rideability-index) | Motorcycle Rideability Scoring Service | Node.js, Express, weather-driven rideability score clamping (`[0, 10]`), snow detection & risk tier classification |

---

## 2. Scientific Reference Databases & Benchmark Provenance

The CGAS Lab software suite integrates publicly accessible, non-commercial scientific reference databases:

1. **Literature & Citation Metadata (`PaperPulse`):**
   - **ArXiv OAI-PMH / REST API:** Preprints across `cs.AI`, `cs.LG`, `cs.CL`, `q-bio.GN`, `q-bio.QM`, and `stat.ML`.
   - **Semantic Scholar Academic Graph API (`S2AG`) & OpenAlex:** Citation edges, author disambiguation, and concept taxonomy nodes.
   - **NCBI PubMed / Entrez E-Utilities:** Peer-reviewed biomedical abstracts and MeSH ontology descriptors.
2. **Regulatory Genomics & Human Variant Cohorts (`ChromAlphaGenome`):**
   - **AlphaGenome Atlas & ENCODE v4 cCREs:** Long-range enhancer–promoter 3D contact weights and cell-type-specific DNase-seq / ATAC-seq accessibility tracks.
   - **ClinVar & gnomAD v4.1:** Pathogenic/likely-pathogenic non-coding regulatory and splice-region variants contrasted against population-matched common controls ($\text{MAF} > 0.01$).
3. **Biophysical Trajectory & Kinematic Regimes (`BayesKalmanTrace`):**
   - **500-Sample Noisy Velocity Trajectories:** Multi-regime state-space benchmark spanning diffusive Brownian motion, directed active transport, and intermittent sensor dropout masks ($p_{\text{drop}} \in [0.05, 0.45]$) calibrated over a 250,000-measurement empirical volatility corpus.
4. **Structural Proteomics & Semiempirical Quantum Chemistry (`FoldEnergetics-xTB`):**
   - **AlphaFold Protein Structure Database (AFDB v4 / AF3):** Residue-level confidence (`pLDDT`) and pairwise Predicted Aligned Error (`PAE`) matrices.
   - **Foldseek 3Di Structural Alphabet & ChEMBL v34:** Structural pocket conservation alignments paired with standardized `pChEMBL` ($-\log_{10}\text{M}$) bioactivity priors and `GFN2-xTB` tight-binding electronic energetics.

---

## 3. Portal Architecture & Static Asset Inventory

| Asset / File | Purpose |
| :--- | :--- |
| `index.html` | Main researcher & engineering portfolio entry point (`https://abdullahazmi.com/`) |
| `lab/index.html` | Dedicated CGAS Research Lab portal (`https://abdullahazmi.com/lab/`) |
| `research/index.html` | Mirror research portal endpoint (`https://abdullahazmi.com/research/`) |
| `assets/index-VqgN4zkm.js` | Core React 18 application bundle (Hero, 4 Experience appointments, 16 Software & Model cards, Footer) |
| `assets/extension.js` | Progressive enhancement module injecting the Featured Flagship Banner, Interactive Category Filter & Search Bar, 4-Tab Interactive Scientific & Systems Workbench (`#workbench`), 5 Technical Lab Notes (`#lab-notes`), CGAS Lab Overview (`#research-lab`), and Lab Visual Gallery |
| `assets/index-yL4Jrv0C.css` & `assets/extension.css` | Editorial light/dark design system (`Bricolage Grotesque`, `Archivo`, monospace telemetry, responsive grid, interactive workbench styles) |
| `assets/abdullah-azmi-resume.pdf` | Publication-grade 1-page Curriculum Vitae & Systems Engineering Resume (mirrored at `assets/northwestern-student-resume.pdf` for backward link compatibility) |
| `PROFILE_PLAN.md` | Full 16-system architectural specification and benchmark catalog |
