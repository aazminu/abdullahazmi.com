# Scientific Dataset, Benchmark & Software Provenance (`abdullahazmi.com`)

**Organization:** Computational Genomics & Agentic Systems (CGAS) Lab · Department of Computer Science & Northwestern Institute on Complex Systems (NICO), Northwestern University  
**Lead Researcher:** Abdullah Azmi (`m4u5t4@u.northwestern.edu` · [ORCID: 0009-0005-2720-3347](https://orcid.org/0009-0005-2720-3347))<br />
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
| [`aazminu/markov-music`](https://github.com/aazminu/markov-music) | Variable-Order Markov Musical Generator | Python 3.10+, suffix backoff across orders `k-1..1`, Laplace smoothing, log-sum-exp temperature decoding, consonance evaluation |
| [`aazminu/NYC-Property-Scout`](https://github.com/aazminu/NYC-Property-Scout) | NYC Geospatial BBL & Cap-Rate Valuation | Python 3.10+, FastAPI, canonical 10-digit BBL normalization, dataset discrepancy auditing, Haversine comps, NOI/cap-rate engine |
| [`aazminu/nitro-lab`](https://github.com/aazminu/nitro-lab) | Real-Time Linux & Docker Telemetry Engine | Node.js, Express, SSE streaming, Welford/EWMA thermal anomaly detection, Docker socket-proxy crash-loop & SLA burn-rate auditor |
| [`aazminu/Watch-Engine`](https://github.com/aazminu/Watch-Engine) | Hybrid BM25 + Vector Watch Search Engine | Node.js, Express, React, Okapi BM25 + cosine similarity Reciprocal Rank Fusion (RRF), MAD price anomaly detector, nDCG@K eval |
| [`aazminu/ClaimLess`](https://github.com/aazminu/ClaimLess) | Medical Bill CPT/NCCI Auditing Platform | Next.js, TypeScript, Node.js, GPCI locality-adjusted CMS Medicare fee benchmarker, NCCI unbundling detector, appeal synthesizer |
| [`aazminu/finsim`](https://github.com/aazminu/finsim) | Historical Regime & Portfolio Risk Simulator | TypeScript, Express, React, CAGR/Sharpe/Sortino/VaR/CVaR analytics, cash-safe SELL-first rebalancer, seeded GBM Monte Carlo |

### 1B. Verified Upstream Open-Source Pull Requests Merged (`author:aazminu`)

| Upstream Pull Request | Domain & Upstream Project | Technical Resolution & Verification Suite |
| :--- | :--- | :--- |
| [`exmergo/dex#634`](https://github.com/exmergo/dex/pull/634) | Agent-Native Analytics Engineering (`exmergo/dex`) | Resolved `dbt` node kinds via `self.index.node_kind(name)` inside `_Builder._matches` (`transform/propagate.py`) and verified all `_FILE_NODES` in `_refuse_surviving_reads` so `transform rename seed` and `transform rename snapshot` rewrite downstream `ref()` call sites and YAML references atomically (`pytest` suite) |
| [`exmergo/dex#633`](https://github.com/exmergo/dex/pull/633) | Agent-Native Analytics Engineering (`exmergo/dex`) | Updated `_GENERIC_HEADER` in `_collect_messages` (`transform/build.py`) to accept optional leading `[LEVEL]: ` tags in `dbt-core` 1.12 JSON log headers so root-cause error lines are preserved during `shadow_parse` and `build` (`pytest` suite) |
| [`GustavoBaranda/chatflow-agent#52`](https://github.com/GustavoBaranda/chatflow-agent/pull/52) | Async Multi-Agent Runtime (`GustavoBaranda/chatflow-agent`) | Checkpointed and restored `session.active_agent` and deep-copied `session.metadata` across both in-memory `SessionContext` and persistent `SQLiteSessionContext` (`chatflow_sessions`) when an unhandled exception triggers a turn rollback in `Runner.run_async()` (190 `pytest` tests passing) |
| [`repowise-dev/repowise#3841`](https://github.com/repowise-dev/repowise/pull/3841) | Codebase Intelligence & Dead-Code Graph (`repowise-dev/repowise`) | Extended `_BUILD_NAME_RE` (`code_origin.py`) to recognize version-specific Swift Package Manager manifests (`Package@swift-<version>.swift`) as `build` files without misclassifying ordinary Swift sources, eliminating false-positive dead-code flags (`pytest` unit & dead-code suites) |

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

## 3. Proposed Research Programme

The prospective 6–12-month programme asks whether PaperPulse's source-grounded literature evidence improves the traceability and prioritization of ChromAlphaGenome regulatory variants compared with a fixed baseline. Planned first-six-month artifacts are versioned data manifests, a benchmark, reproducible agent skills, and a fixed-baseline versus agent-assisted evaluation. Months 6–12 are reserved for replication, error analysis, and preparing a methods submission. These are planned activities; this provenance document does not claim completed experimental results. The programme overview is at [`/lab/#programme`](https://abdullahazmi.com/lab/#programme).

## 4. Portal Architecture & Static Asset Inventory

| Asset / File | Purpose |
| :--- | :--- |
| `index.html` | Main researcher & engineering portfolio entry point (`https://abdullahazmi.com/`) |
| `lab/index.html` | Dedicated CGAS Research Lab portal (`https://abdullahazmi.com/lab/`) |
| `research/index.html` | Mirror research portal endpoint (`https://abdullahazmi.com/research/`) |
| `assets/index-2552cda7.js` & `assets/index-VqgN4zkm.js` | Core React 18 application bundle (Hero, 4 Experience appointments, 16 Software & Model cards, Footer) |
| `assets/extension.js` | Progressive enhancement module injecting the Featured Flagship Banner, Interactive Category Filter & Search Bar, 4-Tab Interactive Scientific & Systems Workbench (`#workbench`), 5 Technical Lab Notes (`#lab-notes`), CGAS Lab Overview (`#research-lab`), and Lab Visual Gallery |
| `assets/index-yL4Jrv0C.css` & `assets/extension.css` | Editorial light/dark design system (`Bricolage Grotesque`, `Archivo`, monospace telemetry, responsive grid, interactive workbench styles) |
| `assets/abdullah-azmi-resume.pdf` | Publication-grade 1-page Curriculum Vitae & Systems Engineering Resume (mirrored at `assets/northwestern-student-resume.pdf` for backward link compatibility) |
| `PROFILE_PLAN.md` | Full 28-system architectural specification, benchmark catalog, and verified upstream open-source contribution log |
| `sitemap.xml` & `robots.txt` | Search engine crawl directives and XML sitemap indexing `/`, `/lab/`, `/research/`, and the CV PDF |
| `tests/portfolio.test.mjs` | Automated `node --test` verification suite validating HTML structure, Schema.org JSON-LD, sitemap/robots.txt, binary/text asset integrity, all 28 standalone GitHub repository links, and verified upstream open-source PR links |

### 1C. Quantitative Finance, Systems & Infrastructure Repositories (`github.com/aazminu`)

| Repository | Domain | Primary Stack & Verification Suite |
| :--- | :--- | :--- |
| [`aazminu/bpipe-lob-engine`](https://github.com/aazminu/bpipe-lob-engine) | Price-Time Priority Limit Order Book | Python 3.11+, L2/L3 depth, micro-price, order-flow imbalance (OFI), `pytest` & CLI diagnostics |
| [`aazminu/fix-dropcopy-reconciler`](https://github.com/aazminu/fix-dropcopy-reconciler) | FIX 4.2/4.4 Execution Reconciler | Python 3.11+, `ClOrdID`/`ExecID` drop-copy state machine, sequence-gap detector, `pytest` & CLI diagnostics |
| [`aazminu/yield-curve-oas-engine`](https://github.com/aazminu/yield-curve-oas-engine) | Par-to-Zero Curve & OAS Lattice Engine | Python 3.11+, Nelson-Siegel-Svensson fitter, key-rate DV01, binomial OAS pricer, `pytest` & CLI diagnostics |
| [`aazminu/sec-edgar-13f-alpha`](https://github.com/aazminu/sec-edgar-13f-alpha) | Institutional 13F-HR Factor Pipeline | Python 3.11+, CUSIP holdings delta parser, crowding HHI, conviction tilt engine, `pytest` & CLI diagnostics |
| [`aazminu/haven-fanniemae`](https://github.com/aazminu/haven-fanniemae) | Conforming Mortgage & MI Underwriter | Python 3.11+, DTI/LTV/FICO eligibility matrix, LLPA grid, amortization engine, `pytest` & CLI diagnostics |
| [`aazminu/borrower-check-risk-engine`](https://github.com/aazminu/borrower-check-risk-engine) | Credit Underwriting & Fair-Lending Engine | Python 3.11+, WOE/IV binning, calibrated log-odds PD scorecard, 80% disparate impact audit, `pytest` & CLI |
| [`aazminu/raft-wal-kv`](https://github.com/aazminu/raft-wal-kv) | Raft Consensus & CRC32 WAL Engine | Python 3.11+, leader election, log replication, safety invariants, crash-safe WAL recovery, `pytest` & CLI |
| [`aazminu/llm-kv-paged-allocator`](https://github.com/aazminu/llm-kv-paged-allocator) | Paged KV-Cache Block Manager | Python 3.11+, copy-on-write prefix sharing, LRU eviction, token-budget preemption, `pytest` & CLI diagnostics |
| [`aazminu/otel-ebpf-span-aggregator`](https://github.com/aazminu/otel-ebpf-span-aggregator) | OpenTelemetry DAG & Tail-Sampling Engine | Python 3.11+, W3C TraceContext assembler, HDR histogram percentiles, anomaly tail sampler, `pytest` & CLI |
| [`aazminu/bitboard-uci-chess`](https://github.com/aazminu/bitboard-uci-chess) | 64-Bit Bitboard Chess Engine | Python 3.11+, Perft move generator, Zobrist hashing, PVS + MVV-LVA + killer heuristic search, `pytest` & CLI |
| [`aazminu/mta-gtfs-nyc-tracker`](https://github.com/aazminu/mta-gtfs-nyc-tracker) | NYC Subway Headway & Bunching Analytics | Python 3.11+, GTFS-Realtime feed reconciler, Excess Wait Time (EWT), bunching detector, `pytest` & CLI |
| [`aazminu/utilitrack-cbre`](https://github.com/aazminu/utilitrack-cbre) | Commercial Portfolio 3R Utility Baselines | Python 3.11+, weather-normalized HDD/CDD regression, ENERGY STAR EUI, CUSUM drift alerts, `pytest` & CLI |
| [`aazminu/chatphd-triage`](https://github.com/aazminu/chatphd-triage) | Clinical Acuity Triage & ICD-10 Coding | Python 3.11+, ESI 1-5 red-flag detector, hybrid BM25 + semantic ICD-10-CM/CPTgrounded coder, `pytest` & CLI |
| [`aazminu/park-ez-vision`](https://github.com/aazminu/park-ez-vision) | Spatial Lot Occupancy & Dynamic Pricing | Python 3.11+, polygon IoU occupancy classifier, temporal hysteresis smoother, surge pricing, `pytest` & CLI |
| [`aazminu/espresso-pid-telemetry`](https://github.com/aazminu/espresso-pid-telemetry) | Anti-Windup PID & Extraction Profiling | Python 3.11+, derivative-on-measurement thermal loop, 9-bar pre-infusion profiler, `pytest` & CLI |
| [`aazminu/ergo-keymap-optimizer`](https://github.com/aazminu/ergo-keymap-optimizer) | Split-Keyboard QMK Layout Annealer | Python 3.11+, corpus bigram/trigram analyzer, SFB/scissor cost function, simulated annealing, `pytest` & CLI |
