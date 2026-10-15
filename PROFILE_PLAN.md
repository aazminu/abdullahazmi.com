# Abdullah Azmi · CGAS Lab & Systems Engineering Catalog (28 Systems)

**Lead Researcher & Principal Systems Architect:** Abdullah Azmi (`m4u5t4@u.northwestern.edu` · `erlokix@gmail.com`)  
**Affiliations:** Computational Genomics & Agentic Systems (CGAS) Lab · Department of Computer Science & Northwestern Institute on Complex Systems (NICO), Northwestern University  
**Portals:** [abdullahazmi.com](https://abdullahazmi.com/) · [abdullahazmi.com/lab](https://abdullahazmi.com/lab/) · [github.com/aazminu](https://github.com/aazminu) · [ORCID: 0009-0004-8172-6394](https://orcid.org/0009-0004-8172-6394)

---

## Architectural Synthesis Overview

This specification documents the 28 scientific, full-stack, distributed-data, applied-ML, and open-source systems showcased on [abdullahazmi.com](https://abdullahazmi.com/). The portfolio unifies two complementary engineering tracks:

1. **Computational Genomics & Agentic Systems (CGAS) Lab Research Suite (Systems 01–04):** Autonomous multi-hop scientific literature synthesis (`PaperPulse`), base-resolution cis-regulatory and splice-disruption variant attribution (`ChromAlphaGenome`), exact recursive Bayesian state-space trajectory filtering (`BayesKalmanTrace`), and AlphaFold 3 PAE domain partitioning coupled with semiempirical tight-binding quantum pocket energetics (`FoldEnergetics-xTB`).
2. **Production Full-Stack, Distributed Data, Applied ML & Open-Source Systems (Systems 05–28):** Idempotent container-yard inventory and month-end billing (`Airtight Container`), bounded asynchronous entity enrichment (`LeadAI`), reviewed open-source platform engineering (`Khoury Odyssey`, `Mermaid`, `FarmData2`), distributed tabular validation (`ScrubData`), cycle-accurate processor simulation (`RISC-V RV32I`), streaming financial alpha pipelines (`Spark/Kafka Dividend Capture`), spectral world-model compression (`LeWM SVD`), low-latency ML moderation (`DistilBERT`), multi-service ChatOps orchestration, real-time WebSocket collaborative filtering, S&P 500 conviction optimization, sliding-window RAG study generation, geospatial hazard classification, GhostFaceNet selfie search, variable-order Markov musical synthesis (`markov-music`), NYC BBL geospatial valuation (`NYC-Property-Scout`), SSE Docker fleet telemetry (`nitro-lab`), hybrid BM25+vector RRF search (`Watch-Engine`), deterministic CPT/NCCI medical bill auditing (`ClaimLess`), and quantitative portfolio simulation (`finsim`).

---

## Part I · CGAS Lab Flagship Scientific Systems (01–04)

### 1. PaperPulse — Autonomous Literature & Citation Knowledge Graph Engine
- **Repository:** [`github.com/aazminu/paper-pulse`](https://github.com/aazminu/paper-pulse)
- **Stack:** Python 3.11+, FastAPI, PostgreSQL (`pgvector`), Neo4j, Celery, Redis, Next.js 14, TypeScript, Docker
- **Architecture & Verification:**
  - Scheduled nightly ingestion pipelines query **ArXiv, Semantic Scholar, PubMed, and OpenAlex**, normalizing metadata, abstracts, full-text sections, and citation edges.
  - Dual storage layer combines dense semantic vector embeddings in **PostgreSQL (`pgvector` HNSW indexes)** with a multi-hop **Neo4j** property graph (`(:Paper)-[:CITES]->(:Paper)`, `(:Paper)-[:evaluates]->(:Dataset)`, `(:Paper)-[:proposes]->(:Method)`).
  - Enforces **deterministic claim-level provenance**: every synthesized literature digest, hypothesis link, or audio briefing requires verifiable primary-source DOI/arXiv citations and supporting passage spans.

### 2. ChromAlphaGenome — Regulatory Genomics & Non-Coding Variant Attribution
- **Repository:** [`github.com/aazminu/chrom-alphagenome`](https://github.com/aazminu/chrom-alphagenome)
- **Stack:** Python 3.10+, NumPy, SciPy, AlphaGenome Atlas Tracks, ChromBPNet / DeepLIFT Attribution, MaxEntScan $\Delta\text{PSI}$, ClinVar & gnomAD v4, Antigravity `SKILL.md`
- **Architecture & Verification:**
  - Integrates long-range enhancer–promoter contact weights from the **AlphaGenome Atlas** with base-resolution **ChromBPNet / DeepLIFT** chromatin accessibility log-fold-change ($\lvert\Delta\log_2\text{ATAC}\rvert$) tracks across ENCODE v4 candidate cis-regulatory elements (cCREs).
  - Couples transcription-factor motif disruption scoring with **MaxEntScan** 5' donor and 3' acceptor splice-junction $\lvert\Delta\text{PSI}\rvert$ modeling and automated Sashimi coverage visualization.
  - Achieves **0.941 AUROC** and **0.887 AUPRC** on held-out ClinVar pathogenic vs. gnomAD v4 common non-coding variant benchmarks.

### 3. BayesKalmanTrace — Recursive Bayesian State-Space Trajectory Estimator
- **Repository:** [`github.com/aazminu/bayes-kalman-trace`](https://github.com/aazminu/bayes-kalman-trace)
- **Stack:** Python 3.10+, NumPy, SciPy, Constant-Acceleration Kalman Filter, Rauch–Tung–Striebel (RTS) Smoother, Log-Linear Likelihood Pooling, Antigravity `SKILL.md`
- **Architecture & Verification:**
  - Propagates exact Gaussian state-space posteriors $\mathcal{N}(\hat{x}_{t|T}, P_{t|T})$ across **500-sample** noisy 2D/3D velocity trajectories using forward Kalman filtering and backward **Rauch–Tung–Striebel (RTS)** smoothing.
  - Handles intermittent sensor dropouts ($p_{\text{drop}} \in [0.05, 0.45]$) via **exact analytical state-transition marginalization** ($P_{t|t-1} = F P_{t-1|t-1} F^\top + Q$) without heuristic linear interpolation bias.
  - Fuses Laplace-smoothed rolling-volatility empirical likelihood tables (calibrated over **250,000 trajectory measurements**) with instantaneous velocity posteriors via **log-linear (Product-of-Experts) pooling**, improving held-out regime classification accuracy from **74.2% to 93.8%** (**0.041 ECE**).

### 4. FoldEnergetics-xTB — AlphaFold 3 PAE Partitioning & Quantum-Chemical Pocket Triage
- **Repository:** [`github.com/aazminu/fold-energetics-xtb`](https://github.com/aazminu/fold-energetics-xtb)
- **Stack:** Python 3.10+, AlphaFold 3 (`pLDDT` / `PAE`), Foldseek 3Di, GFN2-xTB Semiempirical QM, ChEMBL `pChEMBL`, NetworkX, Antigravity `SKILL.md`
- **Architecture & Verification:**
  - Filters disordered surface loops via residue-level $\text{pLDDT} \ge 70$ thresholds and partitions **AlphaFold 3 Predicted Aligned Error (PAE)** matrices into rigid structural modules via graph connected components and spectral clustering.
  - Detects cryptically conserved binding pockets using **Foldseek 3Di** structural homology alignments and evaluates candidate ligand poses using **GFN2-xTB** semiempirical tight-binding interaction energies ($\Delta E_{\text{bind}}$), HOMO–LUMO electronic gap stability, and **ChEMBL (`pChEMBL`)** potency priors.

---

## Part II · Production Full-Stack, Data Operations & Open-Source Platforms (05–09)

### 5. Airtight Container — Full-Stack Yard Inventory & Idempotent Billing Platform
- **Repository:** [`github.com/aazminu/airtight-container`](https://github.com/aazminu/airtight-container)
- **Stack:** React 18, TypeScript, Node.js, Express, PostgreSQL, Prisma, AWS EC2, 275+ Automated Tests
- **Architecture & Verification:**
  - Full-stack operational shipping-container yard management, quoting, and recurring billing platform (**40K+ lines of code, 25 relational schema migrations, 275+ unit and integration tests**) managing **240+ active containers**.
  - Implements deterministic, **idempotent month-end storage-and-handling billing** (`buildLinesForBox`, `generateShMonthEnd`) supporting both `ANNIVERSARY` and `MONTH_END` proration modes.
  - Enforces composite uniqueness invariants (`(box_id, billing_period_start, billing_mode)`) inside serializable PostgreSQL transactions so re-running month-end billing batches or webhook retries produces **zero duplicate invoice line items**.

### 6. LeadAI — Asynchronous Multi-Source Entity Enrichment & Qualification Queue
- **Repository:** [`github.com/aazminu/LeadAI`](https://github.com/aazminu/LeadAI)
- **Stack:** Python 3.11+, FastAPI, Async Task Queue (`pipeline_queue.py`), PostgreSQL, Structured LLM Extraction, Deterministic Retry & Recovery
- **Architecture & Verification:**
  - Asynchronous batch company research, multi-source web/API enrichment queue, and explicit rule-and-LLM qualification engine.
  - Implements bounded worker concurrency, per-provider rate-limit token buckets, exponential backoff with jitter, dead-letter inspection, and schema-validated JSON extraction before generating audit-logged outreach drafts.

### 7. Khoury Odyssey — University Learning Platform & Recursive MDX Preview Engine
- **Repository:** [`github.com/aazminu/odyssey`](https://github.com/aazminu/odyssey)
- **Stack:** Next.js, TypeScript, React, Strapi CMS, PostgreSQL, Jest Regression Suites, GitHub Actions CI
- **Architecture & Verification:**
  - Repaired recursive AST block conversion in the MDX lesson preview pipeline so deeply indented paragraphs, nested lists, and multi-level headings preserve their hierarchy instead of silently dropping children during live author previews.
  - Refactored embedded code-editor state synchronization to diff file-tree descriptors before re-mounting editor instances, eliminating UI reload flicker when adding or renaming lesson files.
  - Shipped **Jest** unit and component regression suites covering paragraph children, heading children, and 3-level nested block trees.

### 8. Mermaid Diagramming Engine — Configurable Bar-Chart Labels & Layout Formatting
- **Repository:** [`github.com/aazminu/mermaid`](https://github.com/aazminu/mermaid)
- **Stack:** TypeScript, SVG / D3 Rendering, Jison / Langium AST Parsers, Vitest, Cypress Visual Regression
- **Architecture & Verification:**
  - Implemented configurable inner/outer data-value labels inside bar-chart primitives across both vertical and horizontal chart orientations, handling text bounding-box overflow and contrast-aware label placement.
  - Refined journey-diagram label alignment and added unit + Cypress visual regression tests verifying deterministic SVG output across viewport sizes.

### 9. FarmData2 — Transactional Operational Recordkeeping & Cypress E2E Verification
- **Repository:** [`github.com/aazminu/FarmData2`](https://github.com/aazminu/FarmData2)
- **Stack:** Node.js, Vue.js, PostgreSQL, REST APIs, Docker, Cypress End-to-End Testing
- **Architecture & Verification:**
  - Engineered transactional **PostgreSQL + Node.js** operational recordkeeping endpoints and reactive **Vue.js** field-entry components with strict client/server schema validation.
  - Authored deterministic **Cypress** end-to-end integration test suites validating multi-step seeding, transplanting, and harvest log workflows inside containerized **Docker** environments.

---

## Part III · Systems Architecture, Distributed Data & Applied ML Suite (10–16)

### 10. ScrubData — Distributed Tabular Cleaning Engine
- **Repository:** [`github.com/aazminu/data-cleaning-hackumass`](https://github.com/aazminu/data-cleaning-hackumass)
- **Category:** Data Operations & Distributed ETL
- **Stack:** Python, Node.js/Express, PostgreSQL, Apache Spark / Databricks, AWS S3, Pandas / Polars
- **Problem & Architecture:**
  - Recurring operational datasets frequently arrive with mixed date formats, schema drift, duplicate composite keys, and extreme numerical outliers that corrupt downstream SQL reporting and ML training.
  - **ScrubData** provides an upload $\rightarrow$ schema inference $\rightarrow$ distributed transformation $\rightarrow$ audit-report pipeline over **100,000+ row CSV/Parquet files**:
    1. **Automated Schema & Type Inference:** Detects column types, null fractions, and candidate primary/composite keys.
    2. **Deterministic Reconciliation:** Deduplicates records by configurable composite keys (`keep='latest_timestamp'`), normalizes currency/date strings, and applies robust **median/MAD/IQR** or **Z-score ($\lvert z \rvert > 3.0$)** anomaly isolation.
    3. **Verification & Exception Reporting:** Emits both the cleaned dataset and a structured reconciliation manifest detailing exact row counts modified, quarantined anomalies, and column-level KS-test distribution shifts.

### 11. Cycle-Accurate RISC-V (RV32I) Pipelined Simulator
- **Repository:** [`github.com/aazminu/python-riscv-simulator`](https://github.com/aazminu/python-riscv-simulator)
- **Category:** Computer Architecture & Systems Programming
- **Stack:** Python 3.11+, C, RISC-V RV32I Base Integer ISA, 5-Stage Pipeline (`IF`, `ID`, `EX`, `MEM`, `WB`), Golden-Trace Verification
- **Problem & Architecture:**
  - Implements both a **single-cycle reference core** and a **cycle-accurate 5-stage pipelined RV32I processor core** with full instruction decoding across R-type, I-type, S-type, B-type, U-type, and J-type formats (`ADD`, `SUB`, `AND`, `OR`, `XOR`, `SLL`, `SRL`, `SRA`, `SLT`, `LW`, `SW`, `BEQ`, `BNE`, `JAL`, `LUI`).
  - **Hazard Detection & Forwarding Unit:**
    - **EX/MEM & MEM/WB Data Forwarding:** Routes ALU and memory results directly back to the Execute (`EX`) stage MUXes to resolve Read-After-Write (RAW) hazards without stalling.
    - **Load-Use Stall & Bubble Insertion:** Detects when an instruction in `ID` reads a register targeted by an in-flight `LW` in `EX`, freezing `PC` and `IF/ID` for 1 cycle while injecting a deterministic `NOP` bubble into `ID/EX`.
    - **Control Hazard Flushing:** Flushes misfetched `IF/ID` pipeline latches on taken branches (`BEQ`/`BNE`/`JAL`) and verifies final 32-register (`x0`–`x31`) and byte-addressed data-memory dumps bit-for-bit against golden architectural traces.

### 12. Market-Scale Dividend Capture & Streaming Alpha
- **Repository:** [`github.com/aazminu/dividend-capture-spark`](https://github.com/aazminu/dividend-capture-spark)
- **Category:** Distributed Data Engineering & Quantitative ML
- **Stack:** Apache Spark, PySpark, HDFS, Apache Kafka Structured Streaming, Gradient-Boosted Trees (Spark MLlib / XGBoost), Parquet
- **Problem & Architecture:**
  - Analyzes **165,000+ historical dividend declarations** joined with **5 years of daily OHLCV US equity bars** across **HDFS / Apache Spark** to quantify ex-dividend price-drop recovery dynamics and transaction-cost-adjusted capture alpha.
  - Engineers SPY-adjusted drop ratios, k-NN/centroid sector imputation, rolling liquidity, and payout ratio features to train a temporal-split **Gradient-Boosted Tree (GBT)** classifier predicting post-ex-dividend recovery probability.
  - Connects a live **Apache Kafka $\rightarrow$ Spark Structured Streaming** consumer that scores incoming market ticks and dividend announcements in real time with watermarked stateful aggregations.

### 13. Low-Rank SVD World-Model Compression (LeWM)
- **Repository:** [`github.com/aazminu/world-model-compression-mpc`](https://github.com/aazminu/world-model-compression-mpc)
- **Category:** Deep Learning Systems & Model Predictive Control (MPC)
- **Stack:** PyTorch, Singular Value Decomposition (SVD), Activation-Aware SVD, Cross-Entropy Method (CEM) MPC, `TwoRoom` & `PushT` Continuous Control
- **Problem & Architecture:**
  - Latent world models (`LeWM`) enable sample-efficient planning via **Cross-Entropy Method (CEM) Model Predictive Control (MPC)**, but dense MLP/Transformer transition predictors incur high per-rollout FLOPs and memory bandwidth when evaluating thousands of candidate action trajectories per control step.
  - Applies post-training **uniform spectral SVD truncation** ($W \approx U_k \Sigma_k V_k^\top$), **activation-aware SVD (ASVD)**, and **Hybrid Forward-KL + Elite-Classification distillation** across latent transition layers.
  - Maps the **Rank-vs-Planning-Reward Pareto Frontier** on continuous-action `TwoRoom` navigation and `PushT` manipulation benchmarks, retaining **>96% planning success rate at 45% parameter compression** while accelerating batched CEM horizon rollouts by **1.72×**.

### 14. Adaptive Real-Time ML Moderation & Drift Engine
- **Repository:** [`github.com/aazminu/adaptive-ml-moderation`](https://github.com/aazminu/adaptive-ml-moderation)
- **Category:** Applied NLP, Streaming Inference & MLOps
- **Stack:** PyTorch, HuggingFace `DistilBERT`, Scikit-Learn TF-IDF Baselines, FastAPI, MinIO Object Storage, Active Learning
- **Problem & Architecture:**
  - Delivers **sub-150ms p95 latency** multi-label toxicity and policy-compliance classification trained and evaluated on **160,000+ labeled comments**.
  - Pairs a quantized **fine-tuned `DistilBERT`** encoder with a fast calibrated **word/char TF-IDF + Logistic Regression** cascade, priority triage queue, leakage-safe splitting, and Population Stability Index (PSI) drift monitor.
  - Stores immutable model checkpoints and evaluation manifests in **MinIO** and routes high-entropy predictions ($H(p) > \tau$) into a human-in-the-loop active-learning retraining queue to mitigate covariate shift.

### 15. Multi-Service ChatOps Workflow & Incident Bot
- **Repository:** [`github.com/aazminu/agentic-scrape-repair`](https://github.com/aazminu/agentic-scrape-repair)
- **Category:** Enterprise Integrations & Event-Driven Automation
- **Stack:** Python 3.11+, FastAPI, Slack Bolt SDK, GitHub Webhooks & Actions API, PostgreSQL, Idempotent State Machine
- **Problem & Architecture:**
  - Eliminates manual context switching across messaging, source control, and change-management ticketing by bridging **Slack**, **GitHub Issues/PRs**, **ServiceNow**, and **Rally** alongside a self-healing DOM selector repair engine gated on live schema verification.
  - Parses structured slash-command and modal requests, validates service-level preconditions, provisions linked tickets and branches, syncs merged PR changelogs, and broadcasts deployment readiness signals.
  - Enforces webhook delivery deduplication via `X-GitHub-Delivery` / Slack event IDs in PostgreSQL, reducing end-to-end change-request handling latency by **95%** (from ~22 minutes of manual coordination to `<60 seconds`).

### 16. Real-Time WebSocket Group Recommender & Matrix Factorization
- **Repository:** [`github.com/aazminu/movie-recc`](https://github.com/aazminu/movie-recc)
- **Category:** Real-Time Distributed State & Collaborative Filtering
- **Stack:** PyTorch, FastAPI, WebSockets, Neural Matrix Factorization, Redis Pub/Sub, React & TypeScript
- **Problem & Architecture:**
  - Multi-user group recommendation engine where 2–12 participants join shared rooms via **FastAPI WebSockets** (`<200ms` state synchronization latency across 10+ concurrent rooms).
  - Combines learned **PyTorch Neural Matrix Factorization (NMF)** user/item embeddings with residual bias correction and an interactive **Pareto-fair group utility aggregator** (balancing mean group affinity against least-misery $\min_{u \in G} s(u, i)$ fairness constraints) that updates live rankings immediately as members swipe or re-weight genre constraints.

---

## Part IV · Additional Applied ML, Quantitative Finance & Full-Stack Systems (17–28)

### 17. S&P 500 Portfolio Analytics & Conviction Optimizer
- **Repository:** [`github.com/aazminu/sp500_platform`](https://github.com/aazminu/sp500_platform)
- **Stack:** Python, React, Alpaca API, Quantitative Risk Analytics
- **Architecture & Verification:** Computes annualized Sharpe, Sortino, and maximum drawdown diagnostics, blends fundamental metrics with LLM conviction scores via capped water-filling weight optimization, and executes sell-first rebalancing orders.

### 18. Sliding-Window RAG AP Study Guide Generator
- **Repository:** [`github.com/aazminu/AP-Study-Guide-Generator`](https://github.com/aazminu/AP-Study-Guide-Generator)
- **Stack:** Python, FAISS, Dense Embeddings, Retrieval Evaluation
- **Architecture & Verification:** Scrapes structured curriculum units, applies overlapping word-window chunking with zero-norm-safe cosine similarity search, and evaluates retrieval quality using Recall@K, MRR, and nDCG@K benchmarks.

### 19. Spatiotemporal Environmental Disaster Classifier
- **Repository:** [`github.com/aazminu/Environmental-Disaster-Classifier`](https://github.com/aazminu/Environmental-Disaster-Classifier)
- **Stack:** Python, Scikit-Learn, NASA EONET 10-Year Dataset
- **Architecture & Verification:** Projects latitude/longitude coordinates onto a 3D unit sphere with cyclical seasonal encodings and trains an inverse-frequency class-weighted k-NN classifier across global natural hazard events.

### 20. Event Photo Sharing & Facial Embedding Search (`grab-pic`)
- **Repository:** [`github.com/aazminu/grab-pic`](https://github.com/aazminu/grab-pic)
- **Stack:** Java Spring Boot, Next.js, Python, GhostFaceNet, RetinaFace
- **Architecture & Verification:** Pairs a Spring Boot event-gallery backend with a Python RetinaFace detection and GhostFaceNet 512-D cosine-similarity selfie matching worker.

### 21. Marvel Comic Series Tracker & Delta Notifier
- **Repository:** [`github.com/aazminu/comic-subscription`](https://github.com/aazminu/comic-subscription)
- **Stack:** Node.js, Express, MongoDB, Marvel REST API
- **Architecture & Verification:** Authenticates against the Marvel Developer API via MD5 timestamp-key hashing, detects newly released issue deltas per subscriber, and dispatches automated email digests.

### 22. Weather-Driven Motorcycle Rideability Index
- **Repository:** [`github.com/aazminu/motorcycle-rideability-index`](https://github.com/aazminu/motorcycle-rideability-index)
- **Stack:** Node.js, Express, OpenWeatherMap API
- **Architecture & Verification:** Evaluates temperature, precipitation, wind gusts, visibility, and snow hazards to compute a clamped `[0, 10]` rideability score and categorical risk tier.

### 23. Variable-Order Markov Musical Sequence Generator (`markov-music`)
- **Repository:** [`github.com/aazminu/markov-music`](https://github.com/aazminu/markov-music)
- **Stack:** Python 3.10+, Variable-Order Suffix Backoff, Music21 / MIDI, Pytest
- **Architecture & Verification:** Implements $k$-th order Markov transition tables with recursive suffix backoff across orders $k-1 \dots 1$, additive Laplace smoothing, log-sum-exp numerically stable temperature decoding (supporting greedy $\tau \le 0$ limits), per-transition perplexity scoring, and pitch-class entropy / diatonic scale / interval consonance evaluation.

### 24. NYC Geospatial BBL Valuation & Data-Quality Auditor (`NYC-Property-Scout`)
- **Repository:** [`github.com/aazminu/NYC-Property-Scout`](https://github.com/aazminu/NYC-Property-Scout)
- **Stack:** Python 3.10+, FastAPI, Geospatial Haversine Comps, PLUTO / Tax Analytics, Pytest
- **Architecture & Verification:** Normalizes and decomposes canonical 10-digit NYC Borough-Block-Lot (BBL) identifiers, audits multi-source property records for duplicate ZPIDs, borough-prefix mismatches, and MAD price-per-sqft outliers, matches spatial Haversine comparables, and computes mortgage amortization, Net Operating Income (NOI), cap rate, and cash-on-cash returns.

### 25. Real-Time Linux & Docker Fleet Telemetry Engine (`nitro-lab`)
- **Repository:** [`github.com/aazminu/nitro-lab`](https://github.com/aazminu/nitro-lab)
- **Stack:** Node.js, Express, Server-Sent Events (SSE), Docker Socket-Proxy, Welford / EWMA Anomaly Detection
- **Architecture & Verification:** Streams real-time Linux `/proc` and `/sys` hardware telemetry and Docker container fleet health over SSE, featuring counter-wraparound-safe CPU delta calculation, online Welford variance + EWMA thermal/memory anomaly detection, 24-character Coolify container prefix matching, OOM (`exitCode=137`) crash-loop detection, and SLA error-budget burn-rate tracking.

### 26. Hybrid BM25 + Dense Vector Watch Search Engine (`Watch-Engine`)
- **Repository:** [`github.com/aazminu/Watch-Engine`](https://github.com/aazminu/Watch-Engine)
- **Stack:** Node.js, Express, React, Okapi BM25, Reciprocal Rank Fusion (RRF), Supabase
- **Architecture & Verification:** Combines structured natural-language query parsing (brand, reference, price, diameter, movement, complications) with Okapi BM25 lexical scoring, zero-norm-safe cosine similarity over dense embeddings, weighted Reciprocal Rank Fusion (RRF), MAD z-score cross-marketplace price anomaly detection, and Recall@K / MRR / nDCG@K evaluation.

### 27. Deterministic CPT/HCPCS Medical Bill Auditor (`ClaimLess`)
- **Repository:** [`github.com/aazminu/ClaimLess`](https://github.com/aazminu/ClaimLess)
- **Stack:** Next.js, TypeScript, Node.js, CMS Medicare Fee Schedule, NCCI Edits Engine
- **Architecture & Verification:** Parses itemized hospital statements, benchmarks CPT/HCPCS line items against GPCI locality-adjusted CMS Medicare fee schedules, flags duplicate same-day charges (respecting distinct-service modifiers `-59`/`-76`/`-91`), detects NCCI mutually exclusive unbundling pairs and unitemized revenue codes, reconciles EOB contractual adjustments, and synthesizes patient appeal strategies.

### 28. Historical Market Regime & Quantitative Portfolio Simulator (`finsim`)
- **Repository:** [`github.com/aazminu/finsim`](https://github.com/aazminu/finsim)
- **Stack:** TypeScript, Express, React, Quantitative Risk Engine, Seeded Monte Carlo GBM
- **Architecture & Verification:** Computes CAGR, annualized volatility, Sharpe/Sortino ratios, maximum drawdown, and historical 95% VaR/CVaR across historical macro regimes, generates cash-conserving SELL-first drift rebalancing trades, and runs deterministic seeded Box–Muller Geometric Brownian Motion (GBM) Monte Carlo wealth fan-chart projections.

