# Abdullah Azmi · CGAS Research Lab & Systems Engineering Portfolio (`abdullahazmi.com`)

[![Live Site](https://img.shields.io/badge/Live_Portal-abdullahazmi.com-5B6437?style=flat-square)](https://abdullahazmi.com/)
[![CGAS Lab](https://img.shields.io/badge/Research_Lab-abdullahazmi.com%2Flab-3A2A1C?style=flat-square)](https://abdullahazmi.com/lab/)
[![GitHub](https://img.shields.io/badge/GitHub-github.com%2Faazminu-181717?style=flat-square&logo=github)](https://github.com/aazminu)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0004--8172--6394-A6CE39?style=flat-square&logo=orcid)](https://orcid.org/0009-0004-8172-6394)

Official researcher portfolio and **Computational Genomics & Agentic Systems (CGAS) Lab** portal for **Abdullah Azmi** at **Northwestern University** (Department of Computer Science & Northwestern Institute on Complex Systems — NICO).

- **Main Researcher & Engineering Portfolio:** [https://abdullahazmi.com/](https://abdullahazmi.com/)
- **CGAS Research Lab Portal:** [https://abdullahazmi.com/lab/](https://abdullahazmi.com/lab/) (mirrored at [`/research/`](https://abdullahazmi.com/research/))
- **Curriculum Vitae / Engineering Resume (PDF):** [`assets/abdullah-azmi-resume.pdf`](https://abdullahazmi.com/assets/abdullah-azmi-resume.pdf)
- **16-System Architectural Catalog:** [`PROFILE_PLAN.md`](./PROFILE_PLAN.md)
- **Dataset & Benchmark Provenance:** [`provenance.md`](./provenance.md)

---

## Featured Systems & Open-Source Repositories (16 Total)

### I. CGAS Lab Flagship Scientific Packages (`github.com/aazminu`)
1. **[`aazminu/paper-pulse`](https://github.com/aazminu/paper-pulse)** — Autonomous nightly scientific literature ingestion across ArXiv, Semantic Scholar, PubMed, and OpenAlex with hybrid PostgreSQL (`pgvector`) dense retrieval, Neo4j multi-hop citation-concept knowledge graphs, and claim-verified daily synthesis.
2. **[`aazminu/chrom-alphagenome`](https://github.com/aazminu/chrom-alphagenome)** — Multi-modal non-coding variant prioritization integrating AlphaGenome cis-regulatory tracks, ChromBPNet/DeepLIFT chromatin accessibility attribution, and MaxEntScan donor/acceptor splice-junction $\Delta\text{PSI}$ modeling across ClinVar, gnomAD v4, and ENCODE v4 cCREs (**0.941 AUROC**).
3. **[`aazminu/bayes-kalman-trace`](https://github.com/aazminu/bayes-kalman-trace)** — Recursive Bayesian state-space filter and Rauch–Tung–Striebel (RTS) backward smoother across 500-sample noisy velocity trajectories with analytic missing-data marginalization and log-linear likelihood pooling over 250K measurements (**93.8% held-out accuracy, 0.041 ECE**).
4. **[`aazminu/fold-energetics-xtb`](https://github.com/aazminu/fold-energetics-xtb)** — High-throughput AlphaFold 3 PAE spectral/connected-component rigid-domain partitioning, Foldseek 3Di structural homology search, and semiempirical quantum-chemical (`GFN2-xTB`) ligand pocket bioactivity triage.

### II. Production Full-Stack, Data Operations & Open-Source Platforms (`github.com/aazminu`)
5. **[`aazminu/airtight-container`](https://github.com/aazminu/airtight-container)** — Production full-stack shipping container yard inventory, quoting, and idempotent month-end storage-and-handling billing platform (**React 18, TypeScript, Node.js/Express, PostgreSQL, AWS EC2; 40K+ LOC, 25 migrations, 275+ automated tests**).
6. **[`aazminu/LeadAI`](https://github.com/aazminu/LeadAI)** — Asynchronous batch entity research, multi-source web/API enrichment queue (`pipeline_queue.py`), and deterministic qualification scoring engine with exponential-backoff retry recovery.
7. **[`aazminu/odyssey`](https://github.com/aazminu/odyssey)** — University computer science learning platform (**Next.js, TypeScript, Strapi CMS, PostgreSQL**) with recursive nested MDX lesson-preview rendering fixes, flicker-free code-editor state synchronization, and Jest regression suites.
8. **[`aazminu/mermaid`](https://github.com/aazminu/mermaid)** — Declarative diagramming and charting library contributions (**TypeScript, SVG/D3, Vitest, Cypress**) supporting configurable inner/outer bar-chart data labels across horizontal and vertical orientations.
9. **[`aazminu/FarmData2`](https://github.com/aazminu/FarmData2)** — Operational agricultural recordkeeping platform (**Node.js, Vue.js, PostgreSQL, Docker**) with transactional REST endpoints and deterministic Cypress E2E integration suites.

### III. Systems Architecture, Distributed Data & Applied ML Suite (`github.com/aazminu` · [`PROFILE_PLAN.md`](./PROFILE_PLAN.md))
10. **[`aazminu/data-cleaning-hackumass` (ScrubData — Distributed Tabular Cleaning Engine)](https://github.com/aazminu/data-cleaning-hackumass)** — Automated schema inference, composite deduplication, MAD/Z-score/IQR anomaly isolation, and reconciliation reporting across 100K+ row CSV/Parquet datasets (**Python, Node.js, PostgreSQL, Spark/Databricks, S3**).
11. **[`aazminu/python-riscv-simulator` (Cycle-Accurate RISC-V RV32I Pipelined Simulator)](https://github.com/aazminu/python-riscv-simulator)** — Bit-accurate single-cycle and 5-stage pipelined (`IF, ID, EX, MEM, WB`) RV32I processor simulator with `EX/MEM` and `MEM/WB` hazard forwarding, load-use stall bubble insertion, and golden-trace verification.
12. **[`aazminu/dividend-capture-spark` (Market-Scale Dividend Capture & Streaming Alpha)](https://github.com/aazminu/dividend-capture-spark)** — Distributed Spark/HDFS backtesting over 165K+ dividend declarations and 5 years of US equity bars paired with SPY-adjusted drop ratios, k-NN sector imputation, and temporal-split GBDT scoring.
13. **[`aazminu/world-model-compression-mpc` (Low-Rank SVD World-Model Compression — `LeWM`)](https://github.com/aazminu/world-model-compression-mpc)** — Post-training uniform and activation-aware SVD (ASVD) spectral truncation and Hybrid Forward-KL + Elite-Classification distillation of latent world models for Cross-Entropy Method (CEM) Model Predictive Control on `TwoRoom` and `PushT` (**1.72× rollout speedup, >96% reward retention**).
14. **[`aazminu/adaptive-ml-moderation` (Adaptive Real-Time ML Moderation & Drift Engine)](https://github.com/aazminu/adaptive-ml-moderation)** — Sub-150ms p95 streaming toxicity inference combining hybrid word/char TF-IDF cascades and transformer scoring over 160K+ labeled records with leakage-safe splitting, priority triage queues, and Population Stability Index (PSI) drift monitoring.
15. **[`aazminu/agentic-scrape-repair` (Agentic Scrape-Repair & Multi-Service ChatOps Bot)](https://github.com/aazminu/agentic-scrape-repair)** — Self-healing DOM selector repair engine gated on live schema verification paired with idempotent Python/FastAPI/Slack-to-ServiceNow/Rally/GitHub change synchronization (**95% reduction in manual triage latency**).
16. **[`aazminu/movie-recc` (Real-Time WebSocket Group Recommender & Matrix Factorization)](https://github.com/aazminu/movie-recc)** — Multi-user PyTorch collaborative filtering and residual bias-corrected group preference aggregation streaming live consensus rankings across concurrent FastAPI WebSocket rooms (`<200ms` latency).

### IV. Additional Applied ML & Full-Stack Open-Source Repositories (`github.com/aazminu`)
17. **[`aazminu/sp500_platform`](https://github.com/aazminu/sp500_platform)** — S&P 500 portfolio analytics, Sharpe/Sortino/drawdown evaluation, capped water-filling LLM conviction weight blending, and automated Alpaca sell-first rebalancing.
18. **[`aazminu/AP-Study-Guide-Generator`](https://github.com/aazminu/AP-Study-Guide-Generator)** — Automated AP exam scraper and sliding-window Retrieval-Augmented Generation (RAG) study guide generator with Recall@K, MRR, and nDCG@K evaluation.
19. **[`aazminu/Environmental-Disaster-Classifier`](https://github.com/aazminu/Environmental-Disaster-Classifier)** — 10-year NASA EONET environmental disaster classification pipeline using 3D unit-sphere geospatial projection and inverse-frequency weighted k-NN.
20. **[`aazminu/grab-pic`](https://github.com/aazminu/grab-pic)** — Event photo sharing platform pairing a Spring Boot REST API with a GhostFaceNet + RetinaFace cosine-similarity selfie search worker.
21. **[`aazminu/comic-subscription`](https://github.com/aazminu/comic-subscription)** — Marvel comic series tracker and chapter-delta email notification service.
22. **[`aazminu/motorcycle-rideability-index`](https://github.com/aazminu/motorcycle-rideability-index)** — Weather-driven motorcycle rideability index API and severe-weather risk classification service.

---

## Interactive Client-Side Workbench (`#workbench`)

The portfolio includes a zero-dependency client-side **Interactive Scientific & Systems Workbench** (`assets/extension.js`) with four live simulations:
- **`BayesKalmanTrace` State-Space Trajectory Smoother:** Live 500-step constant-acceleration Kalman filter + Rauch–Tung–Striebel backward smoother with adjustable sensor dropout rate ($0\%$–$45\%$), observation noise $\sigma_v$, and log-linear pooling weight $\alpha$.
- **`ChromAlphaGenome` Variant & Splice-Disruption ($\Delta\text{PSI}$) Inspector:** Base-resolution nucleotide $\Delta\log_2(\text{ATAC})$ accessibility attribution and MaxEntScan donor/acceptor splice shift explorer across ClinVar benchmark loci.
- **`RISC-V (RV32I)` 5-Stage Pipeline & Hazard Forwarding Simulator:** Cycle-by-cycle pipeline stage stepper (`IF · ID · EX · MEM · WB`) demonstrating `EX/MEM` and `MEM/WB` forwarding vs. load-use stall bubble injection.
- **`Airtight Container` Idempotent Billing & Proration Verifier:** Interactive PostgreSQL composite-key ledger demonstrating zero duplicate invoice generation across repeated month-end billing batches and webhook retries.

---

## Local Preview & Verification

No build step is required to serve the static site. From the repository root:

```powershell
python -m http.server 8000
node --test tests/portfolio.test.mjs
```

Then visit `http://127.0.0.1:8000/` and `http://127.0.0.1:8000/lab/`.

