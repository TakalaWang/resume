<!-- source-sha256: 6b97ff63f28ebb793549e9588ab24f4f161745e6e2c38596fbce3a851051622a
Derived English translation of ../../RESUME.md. RESUME.md is the sole editable master.
Refresh the complete translation after editing the master; only then update this stamp.
-->

<!-- entry:profile-01 -->

# Chung-Chun Wang｜Complete resume

Chung-Chun Wang · Takala Wang

Software Engineer / Full-Stack & Cloud Infrastructure

Updated: 2026-09-30.

## Profile

Hsinchu / Taipei, Taiwan

- [ccwangtakala@gmail.com](mailto:ccwangtakala@gmail.com)
- [linkedin.com/in/takalawang](https://www.linkedin.com/in/takalawang/)
- [github.com/TakalaWang](https://github.com/TakalaWang)
- [Blog · takalawang.github.io](https://takalawang.github.io/)

### Personal summary

I am Chung-Chun Wang, a full-stack and cloud infrastructure engineer and open-source maintainer who turns research prototypes and AI applications into reliable production systems.

## Education

<!-- entry:education-01 -->

### National Yang Ming Chiao Tung University

- Degree: Master of Science, Institute of Computer Science and Engineering
- Period: 2025–2027 · Currently enrolled
- Location: Hsinchu, Taiwan

<!-- entry:education-02 -->

### National Taiwan Normal University

- Degree: Bachelor of Science in Computer Science and Information Engineering
- Period: 2021-09–2025-06
- Location: Taipei, Taiwan
- GPA 4.20 / 4.30
- 3 / 50 (Top 6%)
- Teacher Education Program

## Work experience

<!-- entry:gitroll -->

### GitRoll — Full-Stack Engineer / R&D

Period: 2025-12–Present · Part-time

Owns the AI-collaboration scoring in the AI Skill Engine and the end-to-end Skill Challenge flow, from question design and the answering environment to scoring and reports.

- [GitRoll](https://gitroll.io/)

#### AI Skill Engine: an LLM grader you can verify

- **Problem:** When assessing how developers work with AI coding agents, scoring a whole conversation in one pass squeezed scores into a narrow band that could not separate experts from beginners; tuning the prompt improved known samples but not held-out ones.
- **Approach:** Switched to turn-by-turn scoring, giving each turn its preceding turns as context, and built an independent validation benchmark—synthetic user personas, reproducible perturbations, and A/B comparisons—so that a regression is caught and rolled back.
- **Result:** On real data, the gap between model and human scores falls within the gap between two human raters; the design trade-offs and validation are recorded as ADRs.

#### Skill Challenge: end to end, from question design to reports

- **Problem:** When questions, answering environments, and grading criteria are maintained separately, they drift apart and results become hard to trace.
- **Approach:** Designed a question-authoring process gated by staged human reviews and trial runs by an AI agent; decomposed each challenge's checkpoints into minimal, discriminating assertions and turned them into contracts the grading engine executes directly; bound submissions to the original files by hash so the grading evidence is traceable.
- **Result:** Delivered the full flow from question design and answering environment to scoring and reports, with automatic submission intake and sync through Google Classroom.
- Also built a local collection tool for AI coding agent transcripts that de-identifies data before export, validated on macOS, Linux, and Windows.

#### Technologies

TypeScript, LLM Evaluation, Rubric Design, Benchmark / A/B Testing, PostgreSQL, Redis, Google Classroom API, Pub/Sub, Docker

<!-- entry:acer-medical -->

### Acer Medical — R&D Summer Intern

Period: 2025-07–2025-08

Took the aiGait gait-analysis model from the development environment into real mobile/edge use, making inference about 300% faster.

#### Problem

aiGait digitizes video-based gait assessment to reduce clinicians' manual workload. The model worked in development but was too slow on mobile/edge devices, and in clinics medical staff often stepped into the frame and blocked the patient.

#### Approach and decisions

- The model is a cascade that detects objects first and then estimates the skeleton; I moved inference from PyTorch to ONNX Runtime.
- Moved pre- and post-processing onto the device and vectorized it to cut overhead.
- Used frame sampling and skipping to reduce the frames needing full inference, and ran capture and inference asynchronously on multiple threads.
- Dropped frames where occlusion was detected, or interpolated them from neighboring frames, so bad skeletons would not distort gait parameters.

#### Result

- Inference on mobile/edge devices became about 300% faster.
- Also built an AI-assisted literature review workflow covering 100+ studies on gait disorders and rehabilitation, producing a method comparison table and an internal knowledge base.

#### Technologies

PyTorch, ONNX Runtime, Object Detection, Pose Estimation, Mobile / Edge Deployment, Performance Profiling, Multithreading

<!-- entry:cool-english -->

### Cool English — Part-Time Full-Stack Developer

Period: 2023-07–Present

Long-term development of three English-learning products with the NTNU Department of English and Taiwan's Ministry of Education; I led the Speech Examination Platform from scratch (see Major projects).

- [Cool English](https://www.coolenglish.edu.tw/)
- [Voice Studio](https://voice-studio.cs.nthu.edu.tw/)
- [Voice Studio · Cool English sign-in entry](https://www.coolenglish.edu.tw/voice-studio/)
- [Scenario Chatroom · Sign-in required](https://www.coolenglish.edu.tw/chat/gpt-4-32k-0613/)
- [Speech Platform](https://cool-english-pre-exam-all.cs.nthu.edu.tw/)

#### Products and my role

- Voice Studio: Teachers configure multiple characters, voices, pauses, tone, speed, and volume in a visual SSML editor to produce listening-test material directly. I built parts of the frontend, API integration, and audio processing, connecting SvelteKit, Tailwind CSS, and Azure TTS output; it cut manual recording work by about 80%.
- English Scenario Chatroom: Spoken-English practice in everyday scenarios such as food, clothing, housing, transport, education, and leisure, connecting voice input, chatbot dialogue, and speech playback. I integrated Azure Speech Recognition and Azure TTS on top of Hugging Face Chat-UI; it has been used in 10+ interactive practice sessions.
- Speech Examination Platform: A speaking mock exam with seven task types, designed and built by me from scratch, which has supported 1,000+ students preparing for exams.
- Across all three products I handle requirements, frontend and backend development, AI/speech service integration, audio processing, and deployment and maintenance.

#### Technologies

SvelteKit, TypeScript, Tailwind CSS, Hugging Face Chat-UI, Azure Speech Recognition, Azure TTS, Azure OpenAI, PostgreSQL, BullMQ, SSML, Audio Processing, LLM Integration

#### Current product screens

- [Voice Studio SSML editor](public/projects/cool-english/voice-studio.webp)
- [Cool English scenario chatroom courses](public/projects/cool-english/scenario-course.webp)
- [Cool English chat interface](public/projects/cool-english/chatroom.webp)

Screenshot provenance: Voice Studio and scenario-course screens captured after production sign-in; historical conversations have been hidden in the Chat UI.

## Major projects

<!-- entry:nojv -->

### NOJV

Type: Open-source online judge

An open-source online judge I founded and maintain. I designed everything from problems, courses, and contests to the sandbox, judge scheduling, and Kubernetes releases, and it currently serves about 300 or more students concurrently in real courses.

- [Live](https://nojv.tw/)
- [GitHub](https://github.com/NOJV-TW/NOJV)

#### Background

- Started in 2026-03 with a team of 3 today; as founder and main maintainer I own the overall architecture, the judging system, and production releases.
- Supports eight languages—C, C++, Go, Java, JavaScript, Python, Rust, and TypeScript—and three judging modes: Standard, Checker, and Interactive; provides ICPC/IOI scoring, a live scoreboard, freeze, course assignment deadlines, and Dolos AST code-similarity detection.
- Flow: a submission is written to PostgreSQL and object storage, then a Temporal workflow dispatches it to a judge worker; each judging stage runs in a gVisor sandbox, and the verdict returns to the browser over SSE via Redis—if SSE drops, the frontend falls back to polling, so no result is lost.

#### Judge scheduling: replacing a custom coordinator with Temporal's native priorities

- **Problem:** During a rejudge of 789 submissions, every queued workflow kept polling a custom capacity coordinator; workers were busy replaying event history, the queue backed up by about 700 tasks for 16 minutes, and students' live submissions were stuck behind the rejudge.
- **Approach:** Switched to Temporal's native priorityKey and fairnessKey so exams outrank contests, which outrank practice, recovery, and rejudges, with at most one submission per student being judged at a time; capacity now comes directly from worker slots with a Kubernetes ResourceQuota as the hard cap, which let the custom coordinator be deleted entirely. Kueue and HPA/KEDA were evaluated but not worth it on a single-node cluster.
- **Result:** In a load test, 100 submissions were all AC within 243 seconds; after deleting the pods of Temporal's 4 component types one by one, 32 submissions were still all AC with no lost work.

#### Sandbox: measuring time and memory accurately

- **Problem:** Timing by the whole container's cgroup CPU charged the runner's own overhead to student code, so an empty program measured 30–60 ms; gVisor also lacks memory.peak, so a memory overrun could OOM the whole container.
- **Approach:** Wrote nojv-exec, about 170 lines of C that limits resources with rlimit and takes CPU time and peak RSS from wait4, with wall-clock time only as a watchdog; moved to one Pod per stage with separate prepare, run, and judge containers, keeping expected answers only in the judge container. Heavier isolation such as Firecracker/Kata was evaluated, but I kept gVisor and focused the effort on measurement itself.
- **Result:** An empty program now measures 0.98 ms, and the memory-limit smoke test went from about 1/3 failing to 6/6 passing. I later restricted IPC with seccomp and cleared scratch space before and after each test case, closing state leaks between test cases within a stage.

#### Release and reliability

- A tag triggers the build; images carry attestations and are written by digest to a deploy branch, Flux deploys them to Kubernetes, and an external status service verifies release, livez, and readyz.
- Sandbox cleanup now deletes with UID preconditions and durably retries anything it cannot confirm; after fixing a Kubernetes client that opened a new TLS connection on every call, cleanup latency p50 dropped from about 541 ms to 121 ms.
- Built reference solution validation that actually verifies problems, answers, and runtime environment changes before merging.

#### Technologies

SvelteKit, TypeScript, Tailwind CSS, Monaco Editor, Temporal, PostgreSQL, Prisma, Redis, MinIO, gVisor, C, seccomp, Kubernetes, Helm, FluxCD, Dolos AST Similarity, Vitest, Playwright, GitHub Actions, Cloud Build

#### Current product screens

- [NOJV problem library after sign-in](public/projects/nojv/problems.webp)
- [NOJV problem and Monaco editor](public/projects/nojv/editor.webp)
- [NOJV browser Samples-only local test result](public/projects/nojv/local-test.webp)

Screenshot provenance: Real product screens of the signed-in problem library and Monaco Editor.

<!-- entry:hinagiku -->

### Hinagiku

Type: Collaborative learning platform · 2024-09–2025-06

A research project with Academia Sinica's Institute of Information Science and National Taiwan Normal University that connects teacher templates, student discussion, live transcription, AI guidance, and outcome analysis through Think-Pair-Share, and has been piloted in real classrooms.

- [Official site](https://hinagiku-dev.vercel.app/en)
- [GitHub](https://github.com/hinagiku-dev/Hinagiku)

#### System scope

- Uses Think-Pair-Share to support teacher discussion templates, student group joining, individual reflection, group discussion, and post-class analysis.
- Provides live speech transcription, AI discussion guidance, participation and content analysis, visual summaries, and outcome-document export.
- Updates data live through Firestore subscriptions and controls writes through a server-only write boundary.
- Supports Firebase/Cloudflare R2 storage backends and Genkit-compatible LLM providers such as Google and OpenAI.

#### Contributions and outcomes

- Owned the LLM chat core, connecting discussion content, prompts, and model responses.
- Implemented discussion/summary APIs that connect discussion data, AI analysis, and summary generation.
- Completed PDF parsing, voice records, and PDF/DOCX export so teachers can produce preservable outcome documents directly from classroom discussion.

#### Technologies

SvelteKit, TypeScript, Firebase Auth, Firestore, Google Cloud Storage, Cloudflare R2, Genkit, Google Gemini, OpenAI, PDF Parsing, PDF / DOCX Export, Voice Transcription

#### Current product screens

- [Hinagiku home page](public/projects/hinagiku/hero.webp)
- [Hinagiku core features](public/projects/hinagiku/features.webp)
- [Hinagiku Think-Pair-Share flow](public/projects/hinagiku/flow.webp)
- [Hinagiku community discussion templates](public/projects/hinagiku/templates.webp)

<!-- entry:speech-examination-platform -->

### Speech Examination Platform

Type: Cool English project

An English speaking mock-exam platform I led from scratch, covering seven task types, student recording, AI scoring, and administration, which has supported 1,000+ students preparing for exams.

- [Live](https://cool-english-pre-exam-all.cs.nthu.edu.tw/)

#### Background

- Started in 2025-10; I own the architecture, the SvelteKit frontend and backend, Azure Speech and Azure OpenAI integration, the PostgreSQL data flow, and deployment.
- Task types are short-passage reading, dialogue reading, long-passage reading, question answering, picture description, information response, and opinion expression; it offers Chinese and English interfaces, signed sessions, rate limiting, input sanitization, and audit logs.
- Flow: the browser records audio and uploads it as 16 kHz WAV, and scoring jobs enter BullMQ; a worker first scores pronunciation and fluency with Azure Speech, then scores content and generates feedback with Azure OpenAI, and finally aggregates the result.

#### Async scoring: surviving rate limits, restarts, and simultaneous exam starts

- **Problem:** A scoring job originally ran once and failed permanently on any Azure rate limit or timeout; a stress test also showed that a deployment restart re-enqueued pending jobs as duplicates.
- **Approach:** Moved to up to 4 attempts with hour-scale exponential backoff, deduplicated by using the answer ID as the job ID, and replaced an existing job only on a manual admin retry; also built a load-testing tool that simulates an entire exam.
- **Result:** A load test at the scale of 2000 sessions had 0 failures. The same round caught a problem where, with 100 students starting an exam at once, about 50% of requests failed; it was fixed by switching to READ COMMITTED with a unique constraint and retries.

#### Recording reliability: finding the real cause with audit data

- **Problem:** Some students' recordings arrived empty, but the frontend only logged errors to the console, leaving nothing to investigate.
- **Approach:** Reused the microphone stream obtained during the device check for the whole exam, negotiated the recording format each browser actually supports, and wrote every recording's format, size, peak volume, and error to the audit log; the device check also gained a live waveform and rejects recordings that are too quiet.
- **Result:** Audit data showed 165/291 WebKit webm recordings were only 5 bytes, disproving the original "cold start" hypothesis; switching WebKit to mp4 fixed it and identified 47 affected iPad answers from the exam.

#### Scoring fairness: keeping speech-recognition errors from becoming violations

- **Problem:** Speech recognition misheard read-aloud content and triggered the AI service's content filter; the old flow discarded the already-computed pronunciation score and could even flag the whole attempt as a violation, and 11 read-aloud answers were misjudged this way while live.
- **Approach:** Kept the speech score when feedback generation fails and separated the model's own filtered output from student violations; also rebalanced speech and content weights for teaching needs, with a backfill script that needs no new AI calls.
- **Result:** Speech-recognition errors no longer flag an attempt or lose its score, and scoring-rule changes can be applied directly to existing results.

#### Technologies

SvelteKit, TypeScript, Azure Speech, Azure OpenAI, PostgreSQL, Prisma, BullMQ, Redis, MediaRecorder, Vitest, Playwright

#### Current product screens

- [Speech Examination Platform production home page](public/projects/cool-english/speech-examination.webp)

<!-- entry:nycu-life-club -->

### NYCU LIFE — Campus platforms and Kubernetes infrastructure

Period: 2026-04–Present · Student open-source community (not formal employment)

Helps build campus services and a Kubernetes cluster in a student open-source community, owns operations work, and founded a course-search site.

- [Organization](https://github.com/nycu-life)

#### Background

- The community runs a Kubernetes cluster with GitOps, hosting 36 applications: Argo CD manages deployment, Cilium enforces network policy, OpenBao with External Secrets manages secrets, CloudNativePG and Longhorn handle data and backups, and there is full metrics, logs, and traces observability.
- I take part in cluster design and day-to-day releases, and lead development of the services below.

#### Zero-trust secret bootstrap for production

- **Problem:** When the identity and review core service first went to production, it needed a temporary Keycloak administrator and a set of service secrets, without leaving any long-lived privileged credentials behind.
- **Approach:** A controller generates secrets and writes them to OpenBao, and workloads only read the Secrets synced back; Argo CD sync-waves and hooks fix the order—create Keycloak, run a temporary reconciler, harden the configuration, create and verify the real administrator—and only when everything passes is the temporary administrator deleted, stopping at any failed step.
- **Result:** No temporary privileged account remains in production, and the full secret lifecycle is documented.

#### Production accepts only versioned images

- **Problem:** While a CI runner was broken, production temporarily accepted images tagged latest, making deployments untraceable.
- **Approach:** Wrote a plan document first, then implemented a dependency-free checker test-first and wired it into CI.
- **Result:** Production images must use a SemVer version (optionally with a digest), and non-compliant manifests cannot be merged.

#### Services I lead

- coz-planner: An NYCU course-search site I founded, built with Go (Gin, GORM) and SvelteKit, with a self-implemented OAuth authorization server (PKCE) and MCP tools; it syncs timetables through the university's OAuth, filters courses, and exports ICS/CSV.
- Core System: The community's identity and review core. I implemented FXP from scratch so approved programs run as Kubernetes Jobs with federated workload identity, and completed two rounds of security fixes and RBAC hardening.
- Events: A campus event system. I led the UI overhaul, fixed the NYCU OAuth token exchange, hardened production sessions, and built the survey feature.

#### Technologies

Kubernetes, Argo CD, Kustomize, Cilium, Traefik, Gateway API, OpenBao, External Secrets, cert-manager, CloudNativePG, Longhorn, Prometheus, Grafana, Loki, Keycloak, Temporal, Go, SvelteKit, GitHub Actions

#### Current product screens

- [NYCozU course search (coz-planner)](public/projects/nycu-life/coz.webp)
- [NYCU LIFE event system](public/projects/nycu-life/activity.webp)

Screenshot provenance: Product screenshots from the NYCU LIFE official site.

<!-- entry:lttc-gept-assessment -->

### LTTC GEPT Speaking Assessment Research

Type: Research project

With the Language Training and Testing Center (LTTC) and the NTNU Speech and Machine Intelligence Laboratory, developed an automatic GEPT speaking assessment system that combines pictures, questions, and speech.

#### System scope

- Assesses spoken answers to task types such as picture description and question answering by combining the picture, the question, and the student's speech.
- Integrates multi-aspect scoring from acoustic features, language use, image/question analysis, vision-language models, and LLMs.

#### Contributions and outcomes

- Fine-tuned BLIP-2 and designed prompts for the T5 language model to improve multimodal speaking assessment; accuracy was 71% on familiar content and 68% on unseen content.
- Published at O-COCOSDA 2024 and extended into the data augmentation method of the first-author SLaTE 2025 paper.
- Collaborated with LTTC and the NTNU Speech and Machine Intelligence Laboratory; Advisor: Prof. Berlin Chen.

#### Technologies

PyTorch, BLIP-2, T5, Whisper, LLM Prompting, Multimodal Assessment, Hugging Face

<!-- entry:delta-ntnu-chatbot -->

### Delta-NTNU ChatBot

Type: Enterprise knowledge retrieval

Compares multiple RAG and knowledge-graph retrieval architectures for internal enterprise knowledge queries.

#### System scope

- Uses a RAG chatbot so users can retrieve distributed internal enterprise documents and knowledge in natural language.
- Integrates vector retrieval, semantic indexing, and knowledge graphs to improve recall for related knowledge and multi-step queries.

#### Contributions and outcomes

- Designed and compared GraphRAG, LightRAG, Semantic Indexing, and different semantic query methods.
- Built retrieval experiments and an evaluation workflow, analyzed how architecture choices affect retrieval efficiency and answer quality, and organized the results into an enterprise knowledge question-answering system proposal.
- Collaborated with Delta Electronics and the NTNU Speech and Machine Intelligence Laboratory; Advisor: Prof. Berlin Chen.

#### Technologies

RAG, GraphRAG, LightRAG, Semantic Indexing, Vector Retrieval, Knowledge Graphs, LLM Evaluation, Retrieval Experiments

Additional note: This is an internal enterprise research project; only the publicly shareable research scope is presented here.

## Side projects

<!-- entry:onstage-tw -->

### OnStage TW

A fully static site that aggregates Taiwanese theatre performances with filtering, maps, favorites, RSS, and PWA support.

- [Live](https://onstage.takalawang.dev/)
- [GitHub](https://github.com/TakalaWang/OnStage)

#### System scope

- Aggregates Taiwanese theatre listings from six sources: OPENTIX, udn, Kham, ERA, KKTIX, and Accupass; the 2026-08 data snapshot contains 529 productions, 1,839 performances, and 186 venues.
- Provides list, calendar, map, and individual production views, with filters for keyword, city, category, date, ticket price, youth seats, sales status, and source.
- Supports production details, performances, ticket links, favorites, sharing, add-to-calendar, RSS, PWA, and offline use.
- Each production has its own title, Open Graph metadata, schema.org Event JSON-LD, and sitemap.

#### Contributions and outcomes

- Independently completed product design, cross-site data extraction, field normalization, frontend experience, SEO, and deployment.
- Integrated public APIs, HTML, and JSON-LD across the six sources to complete performance, venue, price, organizer, and on-sale information.
- Uses a fully static architecture with no backend or user database; favorites and preferences remain only on the user's device.
- Built twice-daily GitHub Actions data updates; source failures, zero-record results, and unknown venues automatically create tracking issues.

#### Technologies

SvelteKit, Svelte 5, TypeScript, Tailwind CSS, adapter-static, Leaflet, node-html-parser, HTML / JSON API / JSON-LD Scraping, GitHub Actions, Vercel, RSS, PWA, SEO Structured Data

#### Current product screens

- [OnStage TW home page](public/projects/onstage/home.webp)
- [OnStage TW data source page](public/projects/onstage/about.webp)

<!-- entry:twlinter -->

### TWLinter

A Taiwan Traditional Chinese wording checker and conversion tool.

- [GitHub](https://github.com/TakalaWang/twlinter)
- [Upstream · sysprog21/zhtw-mcp](https://github.com/sysprog21/zhtw-mcp)

#### System scope

- Checks mainland Chinese terminology, punctuation, character forms, translationese, and context-dependent Taiwan Traditional Chinese usage.
- Provides a CLI, Chrome extension, and Discord bot, supporting safe deterministic fixes and optional Gemini judgment.
- Protects Markdown, YAML, code blocks, URLs, paths, mentions, and code spans so automatic fixes do not damage technical content.

#### Contributions and outcomes

- Built on sysprog21/zhtw-mcp while retaining its original ruleset and license, removed the MCP-only transport, and reorganized it into a reusable Rust CoreEngine.
- Built CLI, Chrome extension, and Discord adapters that share the same analysis and correction core.
- Gemini may only choose among the ruleset's existing candidates for already-detected issues; fixes are rescanned for verification, so arbitrary model output never edits content directly.
- Implemented Discord server/channel scope controls, custom terminology, and capitalization rules.

#### Technologies

Rust, Cargo, CLI, Chrome Extension, JavaScript, Discord Gateway / Slash Commands, Gemini, OpenCC Dictionary Data, Deterministic Rule Engine

#### Current product screens

- [TWLinter CLI check example](public/projects/twlinter/cli.webp)

Screenshot provenance: Real output of twlinter lint run locally on self-written sample text.

<!-- entry:urtube -->

### urtube

Hackathon overall winner: imports YouTube viewing history with user consent and uses AI to analyze interests, helping people find common topics.

- [Demo](https://urtube.observe.tw/)
- [GitHub](https://github.com/skyhong2002/urtube.observe.tw)

#### Contributions and outcomes

- Hackathon: BUILDMODE GEN-AI HACKATHON 2026 (FUTUREMODE × SITCON), overall first place with a team of 5.
- Owned AI interest analysis, data processing, and matching: semantic video tags, precomputed and cached versioned semantic embeddings, weighted personal interest clustering, and watch-time allocation across multi-topic videos.
- Built CI-gated continuous deployment that ships immutable images and verifies after each deploy.

#### Technologies

TypeScript, LLM Classification, Semantic Embeddings, Clustering, Optimal Transport Matching, Docker, CI/CD

#### Current product screens

- [urtube home page](public/projects/urtube/home.webp)

Screenshot provenance: The production home page; the dashboard on the right is the site's built-in sample data.

<!-- entry:weave-in -->

### Weave-In

A no-signup browser meeting room for up to 8 people, where an AI facilitator detects groupthink and steps in only after participants consent.

- [Live](https://weave.nycu.ai/)
- [GitHub](https://github.com/JacobLinCool/Weave-In)

#### Contributions and outcomes

- Hackathon: 2026 Sea x OpenAI Regional Codex Hackathon Taiwan, top-5 finalist out of 30 teams.
- Owned the AI facilitator Omni, which detects groupthink signals such as premature convergence, drifting off topic, and unequal participation and speaks only with participant consent; also owned the personal assistant Muse's voice-input drafts and "read aloud to the room" feature.
- Wrote the agent tests, browser verification scripts, and the design document for groupthink detection.

#### Technologies

TypeScript, React, Vite, Cloudflare Workers, Durable Objects, WebRTC, OpenAI Realtime, Gemini

#### Current product screens

- [Weave-In home page](public/projects/weave-in/home.webp)

Screenshot provenance: The production home page.

<!-- entry:lookline -->

### lookline

A fashion social-commerce prototype: buying clothes creates a Look that others can remix, pair, and share, and those interactions feed back into recommendation and manufacturing.

- [GitHub](https://github.com/JacobLinCool/lookline)

#### Contributions and outcomes

- Hackathon: 2026 Meichu Hackathon × Makalot corporate challenge.
- The team's largest contributor, owning the data and retrieval layer: cleaned and localized the H&M product data into Chinese, filled in product attributes with a sharded vision-model pipeline that handles rate limits, and fixed Chinese retrieval, negation parsing, and color filtering.

#### Technologies

TypeScript, Cloudflare D1 / R2, Drizzle, Vision Model Enrichment, Explainable Recommendation, Turborepo

#### Current product screens

- [lookline user journey view](public/projects/lookline/journey.webp)
- [lookline scenario view](public/projects/lookline/scenarios.webp)

Screenshot provenance: Team screenshots from the lookline repository documentation.

<!-- entry:1111-job-scout -->

### 1111 Job Scout

A search platform over a fixed dataset of 1,218,635 job postings, using BM25 as production retrieval alongside hybrid-retrieval research controlled by verified gates.

- [GitHub](https://github.com/TakalaWang/1111-job-scout)

#### System scope

- Competition: 2026 Yunyong Zhisheng · 1111 Smart Job Search, where the retrieval system scored second.
- The fixed dataset contains 1,218,635 job postings and provides keyword search, filtering, sorting, and a job detail API.
- Tantivy BM25 is the production retrieval core; Qwen embedding, reranker, multi-view, and Graph retrieval are offline experiments that must pass a promotion gate before going live.
- The SvelteKit Web app and FastAPI API were deployed on one domain, with data in Aurora PostgreSQL.

#### Contributions and outcomes

- Built a one-command fail-closed pipeline from safe competition ZIP extraction and 39-column schema/taxonomy/SHA-256 validation through Aurora import, index building, and deployment.
- Designed an immutable runtime manifest and content-addressed S3 artifacts so dataset, index, model, and image versions are traceable and cannot be mixed.
- Built retrieval ablation and a promotion gate; a challenger can be enabled only when fixed-input NDCG@10 evidence is positive.
- Completed the production pipeline with GitHub OIDC, AWS CDK, ECS, CloudFront, and SageMaker, adding image scan, readiness, ranking, job detail, and Web UI public smoke checks.

#### Technologies

SvelteKit, TypeScript, FastAPI, Python, Aurora PostgreSQL, SQLAlchemy, Alembic, Tantivy BM25, Qwen Embedding / Reranker, AWS CDK, ECS, CloudFront, S3, SageMaker, GitHub OIDC

#### Current product screens

- [1111 Job Scout local frontend](public/projects/1111/home.webp)
- [1111 Job Scout sample results](public/projects/1111/results.webp)

Screenshot provenance: The original SvelteKit frontend runs locally, showing search, filtering, and result cards with three fixture jobs conforming to the production API contract; these are not actual search results from the production dataset.

<!-- entry:codex-reporter-codex-chronicle -->

### Codex Reporter / codex-chronicle

A personalized newsletter plugin that Codex researches, edits, and publishes automatically, adapting content to reader feedback.

- [GitHub](https://github.com/TakalaWang/codex-chronicle)

#### System scope

- Reader-owned site, daily scheduling, and immutable editions.
- Cross-edition Like/Less like this feedback mechanism.

#### Contributions and outcomes

- Completed the research, editing, publishing, and feedback loop; the first version was built at OpenAI Build Week Community Hackathon - Taipei.

#### Technologies

Codex Plugin, Static Publishing, Scheduled Workflows, Feedback Loop

#### Current product screens

- [An edition produced by codex-chronicle](public/projects/codex-chronicle/reporter.webp)

Screenshot provenance: A sample screen from the codex-chronicle repository showing a generated newspaper layout; the articles were researched and written automatically by Codex.

<!-- entry:civic-signal -->

### Civic Signal

Monitors White House livestreams and official posts to produce Discord notifications, transcripts, Traditional Chinese summaries, and market observations.

- [GitHub](https://github.com/TakalaWang/civic-signal)

#### System scope

- Monitors White House YouTube livestreams and designated official X accounts, sending livestream alerts, transcripts, Traditional Chinese summaries, and market observations to Discord.
- Supports subscriptions across multiple Discord servers; administrators choose notification channels with /subscribe and /unsubscribe.
- After a livestream ends, downloads VOD audio, removes silence, completes Gemini transcription and content analysis, and attaches the complete source text.

#### Contributions and outcomes

- Split the system into a Cloudflare Worker and a residential-network home agent: the Worker handles scheduling, official APIs, the KV queue, and multi-server notifications; the agent handles media work restricted by datacenter bot checks.
- Verifies Discord interactions with Ed25519 and stores subscriptions and pending work in Cloudflare KV so agent restarts do not lose the queue.
- Integrated the YouTube Data API, official X API, Silero VAD, Gemini, and Yahoo Finance data into an end-to-end flow from event detection to report delivery.

#### Technologies

TypeScript, Node.js, Discord API, Cloudflare Workers, KV, Cron Triggers, YouTube Data API, X API, yt-dlp, ffmpeg, Silero VAD, Gemini Transcription / Analysis, Yahoo Finance Data

<!-- entry:routa -->

### Routa

A natural-language itinerary system that replans around flooding, road closures, MRT disruptions, or unavailable YouBike bikes.

- [GitHub](https://github.com/TakalaWang/Routa)

#### System scope

- Creates one-day itineraries in natural language, supporting walking, cycling, driving, and public transit.
- After an itinerary starts, receives flooding, road-closure, station/MRT disruption, or unavailable-YouBike events, identifies affected route segments, and replans routes.
- Can connect Google Routes, TDX, the Central Weather Administration, and city event data, with a deterministic route provider for local development and verification.

#### Contributions and outcomes

- Built the end-to-end flow for conversational itinerary planning, itinerary confirmation, route creation, event injection, risk assessment, and replanning.
- Separated the planner from external route providers so core event handling can be reproduced and tested without calling paid APIs.
- Uses SQLite to store local itinerary snapshots and route updates, supporting reloads and state tracking.

#### Technologies

Next.js, TypeScript, SQLite, Gemini, Google Routes, TDX, CWA, Deterministic Planner / Route Provider

#### Current product screens

- [Routa local sample itinerary](public/projects/routa/itinerary.webp)
- [Routa local road-closure replanning](public/projects/routa/reroute.webp)

Screenshot provenance: The original project, run locally with mock data, creating an itinerary and simulating a road closure and route update.

<!-- entry:repo-lens -->

### repo-lens

A full-stack platform that uses Gemini to analyze Git repository structure, technical composition, and development history.

#### System scope

- Asynchronous repository scanning, live progress, and an ECharts commit timeline.

#### Contributions and outcomes

- Connected analysis jobs and live status with Next.js and Firebase Auth/Firestore.

#### Technologies

Next.js, Firebase Auth, Firestore, Gemini, ECharts

#### Current product screens

- [repo-lens local home page](public/projects/repo-lens/home.webp)

Screenshot provenance: The original project's home page, run locally.

<!-- entry:marginalia-paper-analysis -->

### marginalia-paper-analysis

A portable Agent Skill for paper review: it reconstructs a paper's real research question and checks, claim by claim, whether the authors' claims are backed by page-level evidence.

- [GitHub](https://github.com/TakalaWang/marginalia-paper-analysis)

#### Contributions and outcomes

- Takes an arXiv ID, DOI, or PDF and extracts full text with page markers; labels each claim supported, partial, or unsupported and assesses its overclaim risk.
- Judges only from the paper itself and never bypasses paywalls; when figure extraction fails it is recorded as a limitation, not as a lack of support.
- Reimplements Marginalia's review workflow at the behavioral level without copying upstream code.

#### Technologies

Agent Skill, Codex, PDF Extraction, Structured Output Schema

<!-- entry:behavioral-kit -->

### behavioral-kit

A bilingual behavioral-interview Agent Skill that builds question banks for a role, records answers in STAR structure, and produces an assessment report with a hiring recommendation.

- [GitHub](https://github.com/TakalaWang/behavioral-kit)

#### Contributions and outcomes

- Covers 13 job families and 7 seniority levels, with STAR/PARADE, 1–5 scoring anchors, and cultural adjustments for Taiwanese and East Asian workplaces.
- Uses only the Python standard library and runs with uv; guarded by 93 smoke tests and 46 trigger-evaluation queries (15 in Chinese).

#### Technologies

Agent Skill, Python, uv, STAR Interview Method

#### Current product screens

- [behavioral-kit generating a Traditional Chinese question bank](public/projects/behavioral-kit/cli.webp)

Screenshot provenance: Real output (opening excerpt) of generate-questions.py run locally on 2026-09-30, with no network or model calls.

<!-- entry:wasm-oj-forge -->

### wasm-oj/forge — Open-source contributions

Contributed a Java toolchain and runtime fixes to a local-first compiler and deterministic runner that runs in the browser or on native servers.

- [GitHub](https://github.com/wasm-oj/forge)

#### Contributions and outcomes

- Added an opt-in Java WASI toolchain and adjusted CI so the Java toolchain can be published.
- Fixed redirected standard I/O and QuickJS stdin handling in the runtime, and browser-side execution under a strict CSP.

#### Technologies

WebAssembly, WASI, Java Toolchain, QuickJS, TypeScript, GitHub Actions

<!-- entry:discord-code-agent -->

### Discord Code Agent

A personal coding agent for operating Claude, Codex, and Gemini through Discord.

- [GitHub](https://github.com/TakalaWang/discord-code-agent)

#### System scope

- Project mapping, thread session continuity, and durable JSON state.

#### Contributions and outcomes

- Built a cross-model work entry point and continuable project work sessions.

#### Technologies

Discord API, Claude, Codex, Gemini, JSON State

<!-- entry:claude-quota-guard -->

### Claude Quota Guard

A project-level quota control tool for Claude Code.

- [GitHub](https://github.com/TakalaWang/claude-quota-guard)

#### System scope

- Supports weekly percentage or USD budget limits.
- Uses hooks to block new prompts and in-progress tool calls when a project exceeds its quota.

#### Contributions and outcomes

- Put quota boundaries into the development workflow to prevent runaway project consumption.

#### Technologies

Claude Code Hooks, CLI, Budget Guard

<!-- entry:readme-waves -->

### readme-waves

A tool that generates animated music-equalizer SVGs and videos for GitHub profile READMEs.

#### Contributions and outcomes

- Decodes audio with the Web Audio API or ffmpeg, then performs STFT and band normalization with a pure TypeScript FFT.
- Generates lightweight animated SVG with CSS keyframes and produces MP4 files with audio through ffmpeg/ffmpeg.wasm.
- Packages the same processing capabilities as a Next.js Web App and a CLI runnable through npx.

#### Technologies

Next.js, TypeScript, Web Audio API, STFT / FFT, SVG / CSS Animation, ffmpeg, ffmpeg.wasm, yt-dlp, Commander.js

## Community

<!-- entry:eva-lab -->

### EVA Lab — System Administrator

Period: 2025-12–Present

- Maintains the lab's Linux GPU hosts and container environments, handling equipment operations with Ansible, SSH, and batch management tools; user environments cover Docker/Podman, Apptainer, and HPC/SLURM.
- Independently built the lab's GPU host monitoring and account management system: a FastAPI and React admin interface, Prometheus and Alertmanager alerts pushed to Discord, IPMI power control, and account changes executed through Ansible.
- Completed an account and GPU asset audit of 29 hosts, finding long-unused accounts and reconciling the equipment inventory.

<!-- entry:gdsc-ntnu-gdg-on-campus-ntnu -->

### GDG on Campus NTNU — Core Team Member · Tech Speaker

Period: 2023-09–2024-06

- Core team member and tech speaker for Google Developer Groups on Campus NTNU.
- Shared Git, Docker, macros, Hugging Face, and AI tools, and organized study groups, with more than 100 participants in total.

<!-- entry:ntnu-programming-course -->

### NTNU Programming Course — Teaching Assistant · Four semesters

Period: 2023-08–2025-06

- 2023-08–2025-06: Teaching Assistant for Programming I and II under two instructors, four semesters in total.
- Taught C programming fundamentals and the Linux environment.
- Developed and maintained a programming assignment automated grading system, making grading 2× faster.

<!-- entry:teaching-practicum -->

### Nangang and Heping Senior High Schools — Computer Science Intern Teacher

Period: 2025-02–2025-06

- Through the NTNU Teacher Education Program, served as a computer science intern teacher at Taipei Municipal Nangang and Heping Senior High Schools, taking part in teaching practice for computing classes.

<!-- entry:ntnu-cs-camp -->

### NTNU CS Camp — Activity & Teaching Teams

Period: 2022–2025

- 2022-01–2022-07: Activity Team Member, participating in camp activity planning and on-site execution.
- 2023-01–2023-07: Activity Team Lead, leading activity planning and execution; contributed to the official website backend, completing API documentation, Docker/Docker Compose, a PostgreSQL development environment, and lint/pre-commit configuration.
- 2025-02–2025-07: Teaching Team Lead, co-leading with another team lead and coordinating the teaching team's preparation schedule, task assignment, course materials, and on-site teaching support.
- Maintained course example programs and the Windows installation process; contributed to the official Discord Bot covering schedules, experience points, economy, achievements, AI interaction, virtual pets, and administration features.

- [2023 Backend](https://github.com/CSIE-Camp/website-backend)
- [2025 Examples](https://github.com/CSIE-Camp/example-code-2025)
- [2025 Bot](https://github.com/CSIE-Camp/CSIE-CAMP-2025-bot)
- [Official site](https://camp.ntnucsie.info/2025)
- [Blog timeline](https://takalawang.github.io/about/)

#### Current product screens

- [2025 NTNU CSIE Camp official site](public/projects/cs-camp/home.webp)

Screenshot provenance: The camp's official home page.

<!-- entry:ntnu-csie-student-association -->

### NTNU CSIE Student Association — Terms 38, 39, and 40

Period: 2022-07–2025-06

- Term 38 (2022-07–2023-06): Class of 2025 member representative and informal events team member.
- Term 39 (2023-07–2024-06): Activities staff member.
- Term 40 (2024-07–2025-06): Class of 2025 member representative.
- Served in student representative and activities roles across three terms.

- [Organization](https://github.com/NTNU-CSIE-SA)
- [Blog timeline](https://takalawang.github.io/about/)

<!-- entry:additional-community-leadership -->

### Additional Community & Leadership — Community

Period: 2021–2026

- SITCON 2026 (2026-03): Roaming support crew.
- Academic Ability Competition Assistant Judge: assistant judge for the 2024 Hsinchu and 2025 New Taipei academic ability competitions.
- NTNU Beaver Camp (2024-06–2024-07): Teaching Assistant.
- NTNU CSIE Class of 2025 Representative (2021-09–2025-06): class representative for the Department of Computer Science and Information Engineering.

## Research & recognition

### Research publications

<!-- entry:a-novel-data-augmentation-approach-for-automatic-speaking-assessment-on-opinion-expressions -->

#### A Novel Data Augmentation Approach for Automatic Speaking Assessment on Opinion Expressions

- Authors: Chung-Chun Wang, Jhen-Ke Lin, Hao-Chien Lu, Hong-Yun Lin, Berlin Chen
- Publication: 10th Workshop on Speech and Language Technology in Education (SLaTE 2025), pp. 199–203
- My role: First author.
- **Problem:** Speaking assessment on opinion expressions lacks labeled recordings, which limits prompt diversity and undermines scoring reliability.
- **Method:** An LLM generates diverse responses at a given proficiency level, speaker-aware TTS synthesizes them into speech, and a dynamic importance loss reweights training instances by the feature-distribution gap between synthesized and real speech; a multimodal LLM then combines text and speech features to predict proficiency scores directly.
- **Result:** On the LTTC dataset, the approach outperforms methods relying on real data or conventional augmentation, easing the low-resource constraint.

- [Paper](https://www.isca-archive.org/slate_2025/wang25_slate.html)
- [DOI](https://doi.org/10.21437/SLaTE.2025-40)

<!-- entry:development-of-an-english-oral-assessment-system-with-the-gept-dataset -->

#### Development of an English Oral Assessment System with the GEPT Dataset

- Authors: Hao-Chien Lu, Chung-Chun Wang, Jhen-Ke Lin, Berlin Chen
- Publication: O-COCOSDA 2024, pp. 1–6
- Contribution: Built a multi-aspect automatic assessment system for GEPT intermediate speaking, integrating acoustic features, language use, image/question analysis, BLIP-2, and LLMs; accuracy was 71% on familiar content and 68% on unseen content.

- [Paper](https://ieeexplore.ieee.org/document/10800405)
- [DOI](https://doi.org/10.1109/O-COCOSDA64382.2024.10800405)

<!-- entry:the-ntnu-asr-system-for-formosa-speech-recognition-challenge-2023 -->

#### The NTNU ASR System for Formosa Speech Recognition Challenge 2023

- Authors: Hao-Chien Lu, Chung-Chun Wang, Jhen-Ke Lin, Tien-Hong Lo
- Publication: ROCLING 2023, pp. 397–402
- Contribution: Built a Hakka ASR system using Whisper and LoRA; the related competition won second place in Hakka Pinyin and third place in Hakka Chinese Characters.

- [Paper](https://aclanthology.org/2023.rocling-1.52/)

### Competitions and awards

<!-- entry:buildmode-gen-ai-hackathon-2026 -->

#### BUILDMODE GEN-AI HACKATHON 2026 — Overall First Place

- Event: FUTUREMODE × SITCON; winning project: urtube.
- System: Imports YouTube viewing history with user consent and uses AI to analyze interests, helping people find common topics and explore compatibility in interests and values; it supplements self-reported questionnaires with real viewing behavior.
- Team: Collaborated with 4 teammates; I owned AI interest analysis, data processing, and matching.
- Source: [LinkedIn award post](https://www.linkedin.com/posts/takalawang_buildmode-sitcon-futuremode-activity-7502762950148136960-xuCw)

<!-- entry:research-05 -->

#### Other competitions and academic awards

- 2023 ICPC — International Collegiate Programming Contest — Bronze Medal
- 2023 NCPC — National Collegiate Programming Contest — Fourth Place
- 2023 Formosa Speech Recognition Challenge, Hakka Pinyin — Second Place
- 2023 Formosa Speech Recognition Challenge, Hakka Chinese Characters — Third Place
- 2022 ICPC — International Collegiate Programming Contest — Bronze Medal
- 2022 NCPC — National Collegiate Programming Contest — Honorable Mention
- 2022 CPE — Collegiate Programming Examination — Top 0.6%
- NTNU CSIE Undergraduate Project Competition, 2023–24 — Honorable Mention (English speaking assessment system)
- NTNU CSIE Academic Achievement Award (111-2, 112-2) and Service Award (111-2, 112-1)
- Certificate of Excellence — sophomore fall, sophomore spring, junior fall, junior spring, senior fall, and senior spring; six semesters in total

## Skills

<!-- entry:languages -->

### Languages

- TypeScript
- Python
- Rust
- Go
- C / C++
- JavaScript

<!-- entry:full-stack-engineering -->

### Full-Stack Engineering

- Svelte / SvelteKit
- React / Next.js
- Astro
- Node.js / Express / Hono
- FastAPI
- Tailwind CSS / Vite
- Prisma / Drizzle
- REST APIs / PWA
- Vitest / Playwright

<!-- entry:ai-data-research -->

### AI / Data / Research

- PyTorch
- Hugging Face
- scikit-learn
- Pandas / NumPy
- LLM / VLM fine-tuning
- BLIP-2 / T5 / Whisper / LoRA
- RAG / GraphRAG / LightRAG
- Semantic Indexing / vector retrieval / knowledge graphs
- OpenAI / Gemini / Azure Speech / Azure OpenAI
- YOLO / ONNX Runtime

<!-- entry:cloud-infrastructure -->

### Cloud / Infrastructure

- PostgreSQL / MySQL / SQLite / Firebase / Redis
- Docker / OCI images / GHCR
- Kubernetes / k3s / k3d
- Helm / Kustomize / FluxCD / Argo CD
- Ansible / Apptainer / SLURM
- Temporal / BullMQ
- GitHub Actions / CI/CD / release automation
- Prometheus / health checks / rollout verification
- Linux administration / SSH / production troubleshooting
- Google Cloud Platform / Microsoft Azure
- Cloudflare Workers & Pages / Vercel
