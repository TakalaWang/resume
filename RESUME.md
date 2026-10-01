<!-- entry:profile-01 -->

# 王重鈞｜完整履歷資料

Chung-Chun Wang · Takala Wang

Software Engineer / Full-Stack & Cloud Infrastructure

更新日期：2026-09-30。

## 個人資訊

Hsinchu / Taipei, Taiwan

- [ccwangtakala@gmail.com](mailto:ccwangtakala@gmail.com)
- [linkedin.com/in/takalawang](https://www.linkedin.com/in/takalawang/)
- [github.com/TakalaWang](https://github.com/TakalaWang)
- [Blog · takalawang.github.io](https://takalawang.github.io/)
- [作品集 · takalawang.github.io/resume](https://takalawang.github.io/resume/)

### 個人摘要

我是王重鈞，全端與雲端基礎設施工程師、開源專案維護者，擅長把研究原型與 AI 應用做成穩定上線的產品。

## 教育背景

<!-- entry:education-01 -->

### 國立陽明交通大學

National Yang Ming Chiao Tung University

- 學位：資訊科學與工程研究所碩士
- 期間：2025–2027 · 目前就讀
- 地點：Hsinchu, Taiwan

<!-- entry:education-02 -->

### 國立臺灣師範大學

National Taiwan Normal University

- 學位：資訊工程學系學士
- 期間：2021-09–2025-06
- 地點：Taipei, Taiwan
- GPA 4.20 / 4.30
- 3 / 50（Top 6%）
- Teacher Education Program（師資培育課程）

## 工作經歷

<!-- entry:gitroll -->

### GitRoll — Full-Stack Engineer / R&D

期間：2025-12–Present · 兼職

負責 AI Skill Engine 的 AI 協作紀錄評分，以及 Skill Challenge 從出題、作答環境、評分到報告的端到端流程。

- [GitRoll](https://gitroll.io/)

#### AI Skill Engine：可驗證的 LLM 評分器

- **問題**：評估開發者如何與 AI coding agent 協作時，一次讀完整份對話再給分，分數會擠在很窄的區間，分不出熟練者與新手；只調整 prompt 會讓已知樣本變好，保留樣本卻沒有改善。
- **做法**：改為逐輪評分，每輪附上前幾輪作為上下文；另建一套獨立的驗證 benchmark，以合成的使用者樣態、可重現的擾動與 A/B 比較檢驗每次修改，讓變差的修改能被發現並撤回。
- **結果**：在真實資料上，模型與人工評分的差距落在兩位人工評分者彼此的差距之內；設計取捨與驗證過程都以 ADR 記錄。

#### Skill Challenge：從出題到報告的端到端流程

- **問題**：題目、作答環境與評分標準分開維護時容易彼此不一致，評分結果也難以追溯。
- **做法**：設計出題流程，以分階段的人工審查關卡與 AI agent 試作把關；把每題的檢查點拆成最小、可區分的斷言，轉成評分引擎可直接執行的 contract；作答內容以 hash 綁定原始檔案，確保評分證據可追溯。
- **結果**：完成出題、作答環境、評分到報告的完整流程，並串接 Google Classroom 自動收件與同步。
- 另建立 AI coding agent 對話紀錄的本機收集工具，匯出前完成去識別化，並在 macOS、Linux 與 Windows 上驗收。

#### 技術

TypeScript、LLM Evaluation、Rubric Design、Benchmark / A/B Testing、PostgreSQL、Redis、Google Classroom API、Pub/Sub、Docker

<!-- entry:acer-medical -->

### Acer Medical — R&D Summer Intern

期間：2025-07–2025-08

把 aiGait 步態分析模型從開發環境帶到真實的 mobile／edge 使用情境，推論速度約提升 300%。

#### 問題

aiGait 以影像數位化步態評估，協助臨床人員降低人工評估負擔。模型在開發環境可用，但部署到 mobile／edge 裝置時速度不足，而且臨床現場常有醫護人員走進畫面、遮擋受測者。

#### 做法與決策

- 模型是先物件偵測、再估計骨架的 cascade 架構；我把推論從 PyTorch 轉為 ONNX Runtime。
- 把前後處理移到裝置端並向量化，減少額外的執行負擔。
- 以抽幀／跳幀減少需要完整推論的影格，並讓影像擷取與推論以多執行緒非同步進行。
- 偵測到遮擋的影格直接丟棄，或以前後影格補間，避免錯誤骨架影響步態參數。

#### 結果

- 在 mobile／edge 裝置上推論速度約提升 300%。
- 另建立 AI-assisted literature review workflow，整理 100+ 篇步態障礙與復健研究，製作方法比較表與內部知識庫。

#### 技術

PyTorch、ONNX Runtime、Object Detection、Pose Estimation、Mobile / Edge Deployment、Performance Profiling、Multithreading

<!-- entry:cool-english -->

### Cool English — Part-Time Full-Stack Developer

期間：2023-07–Present

與國立臺灣師範大學英語學系及教育部合作，長期開發三個英語學習產品；其中 Speech Examination Platform 由我從零主導，詳見大型專案。

- [Cool English](https://www.coolenglish.edu.tw/)
- [Voice Studio](https://voice-studio.cs.nthu.edu.tw/)
- [Voice Studio · Cool English 登入入口](https://www.coolenglish.edu.tw/voice-studio/)
- [Scenario Chatroom · 需登入](https://www.coolenglish.edu.tw/chat/gpt-4-32k-0613/)
- [Speech Platform](https://cool-english-pre-exam-all.cs.nthu.edu.tw/)

#### 產品與我的角色

- Voice Studio：教師以 SSML 視覺化編輯器設定多人角色、語音、停頓、語氣、速度與音量，直接產生聽力測驗素材。我負責部分前端、API integration 與 audio processing，串接 SvelteKit、Tailwind CSS 與 Azure TTS 輸出；約減少 80% 人工錄音工作。
- English Scenario Chatroom：食、衣、住、行、育、樂等生活情境的英文口語練習，串接語音輸入、chatbot 對話與語音播放。我以 Hugging Face Chat-UI 為基礎整合 Azure Speech Recognition 與 Azure TTS；已用於 10+ 場互動練習。
- Speech Examination Platform：七種題型的口說模擬測驗，由我從零設計與開發，已支援 1,000+ 學生準備考試。
- 在三個產品中長期負責需求釐清、前後端開發、AI／語音服務整合、音訊處理與部署維護。

#### 技術

SvelteKit、TypeScript、Tailwind CSS、Hugging Face Chat-UI、Azure Speech Recognition、Azure TTS、Azure OpenAI、PostgreSQL、BullMQ、SSML、Audio Processing、LLM Integration

#### 現有產品畫面

- [Voice Studio SSML 編輯器](public/projects/cool-english/voice-studio.webp)
- [Cool English 情境聊天室課程](public/projects/cool-english/scenario-course.webp)
- [Cool English 聊天介面](public/projects/cool-english/chatroom.webp)

畫面來源說明：正式登入後的 Voice Studio 與情境課程畫面；Chat UI 已隱藏歷史對話。

## 大型專案

<!-- entry:nojv -->

### NOJV

類型：Open-source online judge

我發起並主要維護的開源線上評測平台，從題目、課程與競賽，到 sandbox、評測排程與 Kubernetes release 都由我設計，目前有正式課程約 300 名以上學生同時使用。

- [Live](https://nojv.tw/)
- [GitHub](https://github.com/NOJV-TW/NOJV)

#### 背景

- 2026-03 發起，團隊目前 3 人；我是發起人與主要維護者，負責整體架構、評測系統與 production release。
- 支援 C、C++、Go、Java、JavaScript、Python、Rust、TypeScript 八種語言，以及 Standard、Checker、Interactive 三種評測方式；提供 ICPC／IOI scoring、即時 scoreboard、freeze、課程作業期限與 Dolos AST 程式相似度檢測。
- 流程：提交寫入 PostgreSQL 與物件儲存後，由 Temporal workflow 派送給 judge worker；每個評測 stage 在 gVisor sandbox 中執行，判決經 Redis 以 SSE 推回瀏覽器，SSE 中斷時前端改以輪詢補上，不會漏掉結果。

#### 評測排程：用 Temporal 原生優先權取代自製協調器

- **問題**：一次重新評測 789 筆提交時，每筆排隊中的 workflow 都在輪詢自製的容量協調器；worker 忙著重播歷史事件，佇列積壓約 700 個任務、長達 16 分鐘，學生即時送出的提交被卡在重新評測後面。
- **做法**：改用 Temporal 原生的 priorityKey 與 fairnessKey，讓考試優先於競賽，再優先於練習、復原與重新評測，並限制每位學生同時只有一筆提交在評測；容量直接由 worker slot 決定，Kubernetes ResourceQuota 作為硬性上限，整個自製協調器因此刪除。評估過 Kueue 與 HPA／KEDA，但在單節點叢集上不划算。
- **結果**：壓力測試中 100 筆提交在 243 秒內全數 AC；逐一刪除 Temporal 的 4 種元件 pod 後，32 筆提交仍全數 AC，沒有遺失任何工作。

#### Sandbox：準確量測時間與記憶體

- **問題**：原本以整個容器的 cgroup CPU 計時，把 runner 自己的開銷算進學生程式，空程式量到 30–60 ms；gVisor 又沒有 memory.peak，記憶體超限可能讓整個容器被 OOM。
- **做法**：自寫約 170 行 C 的 nojv-exec，以 rlimit 限制資源、以 wait4 取得 CPU 時間與 peak RSS，wall clock 只作為看門狗；並改成每個 stage 一個 Pod，prepare、run、judge 各一個容器，標準答案只存在 judge 容器。評估過 Firecracker／Kata 等更重的隔離方案，最後維持 gVisor，把工夫放在量測本身。
- **結果**：空程式的量測降到 0.98 ms；記憶體超限的 smoke test 從約 1/3 失敗變成 6/6 通過。之後再以 seccomp 限制 IPC，並在每筆測資前後清空暫存區，堵住同一 stage 內測資之間的狀態洩漏。

#### Release 與可靠性

- 以 tag 觸發建置，映像附 attestation 並以 digest 寫入 deploy 分支，由 Flux 部署到 Kubernetes，再由外部 status 服務驗證 release、livez 與 readyz。
- sandbox 清理改以 UID 前提條件刪除，無法確認時標為待清理並持久重試；修正 Kubernetes client 每次呼叫都重新建立 TLS 連線的問題後，清理延遲 p50 從約 541 ms 降到 121 ms。
- 建立 reference solution validation，在合併前實際驗證題目、答案與執行環境變更。

#### 技術

SvelteKit、TypeScript、Tailwind CSS、Monaco Editor、Temporal、PostgreSQL、Prisma、Redis、MinIO、gVisor、C、seccomp、Kubernetes、Helm、FluxCD、Dolos AST Similarity、Vitest、Playwright、GitHub Actions、Cloud Build

#### 現有產品畫面

- [NOJV 登入後題庫](public/projects/nojv/problems.webp)
- [NOJV 題目與 Monaco 編輯器](public/projects/nojv/editor.webp)
- [NOJV 瀏覽器 Samples-only 本機測試結果](public/projects/nojv/local-test.webp)

畫面來源說明：登入後的題庫與 Monaco Editor 實際產品畫面。

<!-- entry:hinagiku -->

### Hinagiku

類型：Collaborative learning platform · 2024-09–2025-06

中央研究院資訊科學研究所與國立臺灣師範大學合作的研究計畫，以 Think-Pair-Share 串起教師範本、學生討論、即時轉錄、AI 引導與成果分析，並曾在真實課堂試用。

- [Official site](https://hinagiku-dev.vercel.app/zh)
- [GitHub](https://github.com/hinagiku-dev/Hinagiku)

#### 系統功能與工作範圍

- 以 Think-Pair-Share 支援教師建立討論範本、學生加入小組、個人反思、小組討論與課後分析。
- 提供即時語音轉錄、AI 討論引導、參與度與內容分析、視覺摘要及成果文件匯出。
- 以 Firestore subscription 即時更新資料，並以 server-only write boundary 控制寫入。
- 支援 Firebase／Cloudflare R2 儲存後端，以及 Google、OpenAI 等 Genkit-compatible LLM providers。

#### 個人貢獻與成果

- 負責 LLM chat core，串接討論內容、提示與模型回應。
- 實作 discussion／summary APIs，串接討論資料、AI 分析與摘要生成。
- 完成 PDF parsing、voice records 與 PDF／DOCX export，讓教師從課堂討論直接產出可保存的成果文件。

#### 技術

SvelteKit、TypeScript、Firebase Auth、Firestore、Google Cloud Storage、Cloudflare R2、Genkit、Google Gemini、OpenAI、PDF Parsing、PDF / DOCX Export、Voice Transcription

#### 現有產品畫面

- [Hinagiku 首頁](public/projects/hinagiku/hero.webp)
- [Hinagiku 核心功能](public/projects/hinagiku/features.webp)
- [Hinagiku Think-Pair-Share 流程](public/projects/hinagiku/flow.webp)
- [Hinagiku 社群討論範本](public/projects/hinagiku/templates.webp)

<!-- entry:speech-examination-platform -->

### Speech Examination Platform

類型：Cool English project

我從零主導的英語口說模擬測驗平台，涵蓋七種題型、學生錄音、AI 評分與管理端，已支援 1,000+ 學生準備考試。

- [Live](https://cool-english-pre-exam-all.cs.nthu.edu.tw/)

#### 背景

- 2025-10 開始，由我負責架構、SvelteKit 前後端、Azure Speech 與 Azure OpenAI 整合、PostgreSQL 資料流程與部署。
- 題型包含短文朗讀、對話朗讀、長文朗讀、問答、看圖敘述、資訊回應與觀點陳述；提供中英文介面、簽名會話、速率限制、輸入清理與稽核記錄。
- 流程：瀏覽器錄音後轉成 16 kHz WAV 上傳，評分工作進入 BullMQ；worker 先以 Azure Speech 評估發音與流暢度，再以 Azure OpenAI 評估內容並產生回饋，最後彙整成績。

#### 非同步評分：撐過限流、重啟與同時開考

- **問題**：評分工作原本只嘗試一次，遇到 Azure 限流或逾時就永久失敗；壓力測試中也發現，部署重啟會把待評分工作重複排入佇列。
- **做法**：改為最多 4 次、以小時為單位的指數退避，並以作答 ID 作為 job ID 去重，只有管理員手動重試時才取代舊工作；另自建壓力測試工具模擬整場考試。
- **結果**：2000 個 session 規模的壓力測試 0 失敗。同一輪壓測也抓到 100 名學生同時開考時約 50% 請求失敗的問題，改用 READ COMMITTED 搭配唯一約束與重試後解決。

#### 錄音可靠性：用稽核資料找出真正原因

- **問題**：部分學生的錄音上傳後是空的，但前端只在 console 留下錯誤，無從追查。
- **做法**：整場考試共用裝置檢查時取得的麥克風 stream，依瀏覽器協商實際支援的錄音格式，並把每次錄音的格式、大小、音量峰值與錯誤寫入稽核紀錄；裝置檢查也加上即時波形，拒收音量過小的錄音。
- **結果**：稽核資料顯示 WebKit 的 webm 錄音有 165／291 筆只有 5 bytes，推翻了原本「冷啟動」的假設；改讓 WebKit 使用 mp4 後解決，並據此找出考試中 47 筆受影響的 iPad 作答。

#### 評分公平：不讓語音辨識錯誤變成違規判定

- **問題**：語音辨識把朗讀內容聽錯，觸發 AI 服務的內容過濾；原本流程會連同已算好的發音分數一起丟棄，甚至把整次作答判為違規，上線期間有 11 筆朗讀題因此被誤判。
- **做法**：回饋生成失敗時保留語音分數，並把模型自身輸出被過濾的情況與學生違規分開處理；另依教學需求調整語音與內容的權重，附上不需重新呼叫 AI 的回填腳本。
- **結果**：語音辨識錯誤不再讓作答被判違規或遺失分數，評分規則調整也能直接套用到既有成績。

#### 技術

SvelteKit、TypeScript、Azure Speech、Azure OpenAI、PostgreSQL、Prisma、BullMQ、Redis、MediaRecorder、Vitest、Playwright

#### 現有產品畫面

- [Speech Examination Platform 正式首頁](public/projects/cool-english/speech-examination.webp)

<!-- entry:nycu-life-club -->

### NYCU LIFE — 校園平台與 Kubernetes 基礎設施

期間：2026-04–Present · 學生開源社群（非正式工作）

在學生開源社群參與校園服務與 Kubernetes 叢集的建置並負責維運，也發起了選課查詢網站。

- [Organization](https://github.com/nycu-life)

#### 背景

- 社群以 GitOps 維運一座 Kubernetes 叢集，承載 36 個應用：Argo CD 管理部署，Cilium 負責網路政策，OpenBao 搭配 External Secrets 管理機密，CloudNativePG 與 Longhorn 負責資料與備份，並有完整的 metrics、logs 與 traces 可觀測性。
- 我參與叢集設計與日常 release，並主導下列服務的開發。

#### 零信任的正式環境機密初始化

- **問題**：身分與審核核心服務第一次上正式環境時，需要一個臨時的 Keycloak 管理員與一批服務機密，但不能留下長期有效的高權限憑證。
- **做法**：由 controller 產生機密並寫入 OpenBao，工作負載只讀取同步回來的 Secret；以 Argo CD 的 sync-wave 與 hook 固定順序：建立 Keycloak、執行臨時 reconciler、加固設定、建立正式管理員並驗證，全部通過後才刪除臨時管理員，任何一步失敗就停止。
- **結果**：正式環境不保留任何臨時高權限帳號；完整的機密生命週期寫入文件。

#### 正式環境只接受版本化映像

- **問題**：CI runner 故障期間，正式環境曾暫時接受 latest 標籤的映像，部署內容無法追溯。
- **做法**：先寫計畫文件，再以測試先行實作不依賴其他工具的檢查器，並接入 CI。
- **結果**：正式環境的映像只能使用 SemVer 版本號（可附 digest），不合規的 manifest 無法合併。

#### 我主導的服務

- coz-planner：我發起的陽明交大選課查詢網站，以 Go（Gin、GORM）與 SvelteKit 開發，自行實作 OAuth 授權伺服器（PKCE）與 MCP 工具，支援透過學校 OAuth 同步課表、課程篩選與 ICS／CSV 匯出。
- Core System：社群的身分與審核核心。我從零實作 FXP，讓審核通過的程式以 Kubernetes Job 執行並使用 federated workload identity，也完成兩輪資安修補與 RBAC 強化。
- Events：校園活動系統。我負責 UI 重構、修正 NYCU OAuth token 交換、正式環境 session 強化與問卷功能。

#### 技術

Kubernetes、Argo CD、Kustomize、Cilium、Traefik、Gateway API、OpenBao、External Secrets、cert-manager、CloudNativePG、Longhorn、Prometheus、Grafana、Loki、Keycloak、Temporal、Go、SvelteKit、GitHub Actions

#### 現有產品畫面

- [NYCozU 選課查詢（coz-planner）](public/projects/nycu-life/coz.webp)
- [NYCU LIFE 活動系統](public/projects/nycu-life/activity.webp)

畫面來源說明：取自 NYCU LIFE 官網的產品截圖。

<!-- entry:lttc-gept-assessment -->

### LTTC GEPT 口說評量研究

類型：Research project

與語言訓練測驗中心（LTTC）及臺師大語音與機器智慧實驗室合作，開發結合圖片、題目與語音的全民英檢口說自動評量系統。

#### 系統功能與工作範圍

- 針對看圖敘述與問答等題型，結合圖片、題目與學生語音評估口說表現。
- 整合 acoustic features、language use、image／question analysis、視覺語言模型與 LLM 的多面向評分。

#### 個人貢獻與成果

- 微調 BLIP-2 並設計 T5 語言模型的提示，改善多模態口說評量；熟悉內容準確率 71%，未見內容 68%。
- 成果發表於 O-COCOSDA 2024，並延伸為 SLaTE 2025 第一作者論文的資料增強方法。
- 與 LTTC、NTNU Speech and Machine Intelligence Laboratory 合作；Advisor: Prof. Berlin Chen。

#### 技術

PyTorch、BLIP-2、T5、Whisper、LLM Prompting、Multimodal Assessment、Hugging Face

<!-- entry:delta-ntnu-chatbot -->

### Delta-NTNU ChatBot

類型：Enterprise knowledge retrieval

為企業內部知識查詢比較多種 RAG 與 knowledge graph 檢索架構。

#### 系統功能與工作範圍

- 以 RAG chatbot 讓使用者用自然語言檢索分散的企業內部文件與知識。
- 整合 vector retrieval、semantic indexing 與 knowledge graph，改善關聯知識與多步查詢的召回能力。

#### 個人貢獻與成果

- 設計並比較 GraphRAG、LightRAG、Semantic Indexing 與不同 semantic query 方法。
- 建立檢索實驗與評估流程，分析架構選擇對檢索效率及回答品質的影響，並整理為企業知識問答系統方案。
- 與 Delta Electronics、NTNU Speech and Machine Intelligence Laboratory 合作；Advisor: Prof. Berlin Chen。

#### 技術

RAG、GraphRAG、LightRAG、Semantic Indexing、Vector Retrieval、Knowledge Graphs、LLM Evaluation、Retrieval Experiments

補充說明：企業內部研究專案；此處僅呈現可公開的研究範圍。

## Side Projects

<!-- entry:onstage-tw -->

### OnStage TW

整合臺灣戲劇演出、篩選、地圖、收藏、RSS 與 PWA 的全靜態網站。

- [Live](https://onstage.takalawang.dev/)
- [GitHub](https://github.com/TakalaWang/OnStage)

#### 系統功能與工作範圍

- 聚合 OPENTIX、udn、寬宏、年代、KKTIX、Accupass 六個來源的臺灣戲劇演出資訊；2026-08 的資料快照包含 529 檔節目、1,839 個場次與 186 個場館。
- 提供列表、月曆、地圖與個別節目頁，以及關鍵字、城市、分類、日期、票價、青年席位、售票狀態與來源篩選。
- 支援節目詳情、場次、售票連結、收藏、分享、加入行事曆、RSS、PWA 與離線使用。
- 每個節目具有獨立 title、Open Graph metadata、schema.org Event JSON-LD 與 sitemap。

#### 個人貢獻與成果

- 獨立完成產品設計、跨站資料擷取、欄位正規化、前端體驗、SEO 與部署。
- 針對六個來源整合公開 API、HTML 與 JSON-LD，補齊場次、場館、票價、主辦與開賣資訊。
- 採用全靜態架構，不建立後端與使用者資料庫；收藏與偏好只保存在使用者裝置。
- 建立每日兩次的 GitHub Actions 資料更新；來源失敗、零筆資料與未知場館會自動建立追蹤 issue。

#### 技術

SvelteKit、Svelte 5、TypeScript、Tailwind CSS、adapter-static、Leaflet、node-html-parser、HTML / JSON API / JSON-LD Scraping、GitHub Actions、Vercel、RSS、PWA、SEO Structured Data

#### 現有產品畫面

- [OnStage TW 首頁](public/projects/onstage/home.webp)
- [OnStage TW 資料來源頁](public/projects/onstage/about.webp)

<!-- entry:twlinter -->

### TWLinter

臺灣繁體中文用語檢查與轉換工具。

- [GitHub](https://github.com/TakalaWang/twlinter)
- [Upstream · sysprog21/zhtw-mcp](https://github.com/sysprog21/zhtw-mcp)

#### 系統功能與工作範圍

- 檢查中國大陸用語、標點、字形、翻譯腔與需依上下文判斷的臺灣繁體中文用語。
- 提供 CLI、Chrome extension 與 Discord bot，支援安全的 deterministic fixes 與可選的 Gemini 判斷。
- 保護 Markdown、YAML、code blocks、URL、path、mentions 與 code spans，避免自動修正破壞技術內容。

#### 個人貢獻與成果

- 基於 sysprog21/zhtw-mcp 保留原始 ruleset 與授權，移除 MCP-only transport，整理為可重用的 Rust CoreEngine。
- 建立 CLI、Chrome extension 與 Discord adapter，共用同一套分析與修正核心。
- Gemini 只能針對已偵測的問題，從 ruleset 既有的候選中選擇；修正後重新掃描驗證，不讓任意模型輸出直接修改內容。
- 實作 Discord server／channel 範圍控制、自訂術語與大小寫規則。

#### 技術

Rust、Cargo、CLI、Chrome Extension、JavaScript、Discord Gateway / Slash Commands、Gemini、OpenCC Dictionary Data、Deterministic Rule Engine

#### 現有產品畫面

- [TWLinter CLI 檢查範例](public/projects/twlinter/cli.webp)

畫面來源說明：本機執行 twlinter lint 的真實輸出，範例文字為自行撰寫。

<!-- entry:urtube -->

### urtube

黑客松總冠軍作品：經使用者同意匯入 YouTube 觀看紀錄，以 AI 分析興趣，協助人們找到共同話題。

- [Demo](https://urtube.observe.tw/)
- [GitHub](https://github.com/skyhong2002/urtube.observe.tw)

#### 個人貢獻與成果

- 黑客松：BUILDMODE GEN-AI HACKATHON 2026（FUTUREMODE × SITCON）總冠軍，5 人團隊。
- 負責 AI 興趣分析、資料處理與配對功能：影片語意標籤、版本化語意 embedding 的預先計算與快取、加權的個人興趣分群，以及多主題影片的觀看時間分配。
- 建立 CI 把關的持續部署，以不可變映像發布並在部署後驗證。

#### 技術

TypeScript、LLM Classification、Semantic Embeddings、Clustering、Optimal Transport Matching、Docker、CI/CD

#### 現有產品畫面

- [urtube 首頁](public/projects/urtube/home.webp)

畫面來源說明：正式網站首頁；右側儀表板為網站內建的範例資料。

<!-- entry:weave-in -->

### Weave-In

免註冊、最多 8 人的瀏覽器會議室，由 AI 主持人偵測群體迷思，並在參與者同意後才介入。

- [Live](https://weave.nycu.ai/)
- [GitHub](https://github.com/JacobLinCool/Weave-In)

#### 個人貢獻與成果

- 黑客松：2026 Sea x OpenAI Regional Codex Hackathon Taiwan，30 隊中前 5 名入圍決賽。
- 負責 AI 主持人 Omni：偵測過早收斂、討論離題與發言不均等群體迷思訊號，必須經參與者同意才發言；並負責個人助理 Muse 的語音輸入草稿與「唸給全場聽」功能。
- 撰寫 agent 測試、瀏覽器驗證腳本與群體迷思偵測的設計文件。

#### 技術

TypeScript、React、Vite、Cloudflare Workers、Durable Objects、WebRTC、OpenAI Realtime、Gemini

#### 現有產品畫面

- [Weave-In 首頁](public/projects/weave-in/home.webp)

畫面來源說明：正式網站首頁。

<!-- entry:lookline -->

### lookline

時尚社群電商原型：買衣服就能生成可被改作、搭配與分享的 Look，這些互動再回饋給推薦與製造端。

- [GitHub](https://github.com/JacobLinCool/lookline)

#### 個人貢獻與成果

- 黑客松：2026 梅竹黑客松 × 聚陽 Makalot 企業題。
- 團隊中貢獻最多的成員，負責資料與檢索層：清理並中文化 H&M 商品資料，以視覺模型分片補齊商品屬性並處理限流，修正中文檢索、否定語意解析與顏色篩選的問題。

#### 技術

TypeScript、Cloudflare D1 / R2、Drizzle、Vision Model Enrichment、Explainable Recommendation、Turborepo

#### 現有產品畫面

- [lookline 使用者旅程檢視](public/projects/lookline/journey.webp)
- [lookline 情境檢視](public/projects/lookline/scenarios.webp)

畫面來源說明：取自 lookline repository 文件中的團隊畫面截圖。

<!-- entry:1111-job-scout -->

### 1111 Job Scout

以 1,218,635 筆固定職缺資料建立搜尋平台，以 BM25 正式檢索搭配受驗證門檻控制的混合檢索研究。

- [GitHub](https://github.com/TakalaWang/1111-job-scout)

#### 系統功能與工作範圍

- 競賽：2026 雲湧智生 · 1111 智慧求職，檢索系統評分第二名。
- 固定資料集共 1,218,635 筆職缺，提供關鍵字查詢、條件篩選、排序與 job detail API。
- Tantivy BM25 為正式檢索核心；Qwen embedding、reranker、multi-view 與 Graph retrieval 為離線實驗，須通過 promotion gate 才會啟用。
- SvelteKit Web 與 FastAPI API 部署於同一網域，資料存放於 Aurora PostgreSQL。

#### 個人貢獻與成果

- 建立從競賽 ZIP 安全解壓、39 欄 schema／taxonomy／SHA-256 驗證、Aurora 匯入、索引建置到部署的一鍵 fail-closed pipeline。
- 設計 immutable runtime manifest 與 content-addressed S3 artifacts，確保 dataset、index、model、image 版本可追溯且不可混用。
- 建立 retrieval ablation 與 promotion gate；challenger 只有在固定輸入的 NDCG@10 證據為正向時才可啟用。
- 以 GitHub OIDC、AWS CDK、ECS、CloudFront、SageMaker 完成 production pipeline，加入 image scan、readiness、ranking、job detail 與 Web UI public smoke。

#### 技術

SvelteKit、TypeScript、FastAPI、Python、Aurora PostgreSQL、SQLAlchemy、Alembic、Tantivy BM25、Qwen Embedding / Reranker、AWS CDK、ECS、CloudFront、S3、SageMaker、GitHub OIDC

#### 現有產品畫面

- [1111 Job Scout 本機前端](public/projects/1111/home.webp)
- [1111 Job Scout 範例結果](public/projects/1111/results.webp)

畫面來源說明：原始 SvelteKit 前端在本機執行，以範例職缺展示搜尋、篩選與結果卡片。

<!-- entry:codex-reporter-codex-chronicle -->

### Codex Reporter / codex-chronicle

由 Codex 自動研究、編輯與發布，並依讀者回饋調整內容的個人化電子報 plugin。

- [GitHub](https://github.com/TakalaWang/codex-chronicle)

#### 系統功能與工作範圍

- Reader-owned site、每日排程、immutable editions。
- Like／Less like this 的跨期回饋機制。

#### 個人貢獻與成果

- 完成研究、編輯、發布與回饋循環；初版於 OpenAI Build Week Community Hackathon - Taipei 完成。

#### 技術

Codex Plugin、Static Publishing、Scheduled Workflows、Feedback Loop

#### 現有產品畫面

- [codex-chronicle 產出的一期報紙](public/projects/codex-chronicle/reporter.webp)

畫面來源說明：取自 codex-chronicle repository 的範例畫面，是系統產出的報紙版面；文章由 Codex 自動研究與撰寫。

<!-- entry:civic-signal -->

### Civic Signal

監測白宮直播與官方貼文，產生 Discord 通知、逐字稿、繁中摘要與市場觀察。

- [GitHub](https://github.com/TakalaWang/civic-signal)

#### 系統功能與工作範圍

- 監測白宮 YouTube livestream 與指定官方 X 帳號，將直播通知、逐字稿、繁中摘要與市場觀察傳送到 Discord。
- 支援多 Discord server 訂閱；管理員透過 /subscribe 與 /unsubscribe 選擇通知頻道。
- 直播結束後下載 VOD 音訊、移除靜音，完成 Gemini transcription 與內容分析，並附上完整來源文字。

#### 個人貢獻與成果

- 拆分 Cloudflare Worker 與 residential-network home agent：Worker 處理排程、官方 API、KV queue 與多伺服器通知；agent 處理受 datacenter bot check 限制的影音工作。
- 以 Ed25519 驗證 Discord interactions，並在 Cloudflare KV 保存 subscription 與待處理工作，避免 agent 重啟遺失 queue。
- 串接 YouTube Data API、官方 X API、Silero VAD、Gemini 與 Yahoo Finance 資料，完成事件偵測到報告傳送的端到端流程。

#### 技術

TypeScript、Node.js、Discord API、Cloudflare Workers、KV、Cron Triggers、YouTube Data API、X API、yt-dlp、ffmpeg、Silero VAD、Gemini Transcription / Analysis、Yahoo Finance Data

<!-- entry:routa -->

### Routa

能因淹水、封路、捷運中斷或 YouBike 無車而重新規劃的自然語言行程系統。

- [GitHub](https://github.com/TakalaWang/Routa)

#### 系統功能與工作範圍

- 以自然語言建立一日行程，支援步行、單車、開車與大眾運輸。
- 行程開始後接收淹水、封路、車站／捷運中斷或 YouBike 無車等事件，辨識受影響路段並重新規劃路線。
- 可串接 Google Routes、TDX、中央氣象署與城市事件資料，另有 deterministic route provider 供本機開發與驗證。

#### 個人貢獻與成果

- 建立對話式行程規劃、行程確認、路線建立、事件注入、風險判斷與重新規劃的端到端流程。
- 將 planner 與外部路線 provider 分離，使核心事件處理不呼叫付費 API 也能重現及測試。
- 以 SQLite 保存本機行程 snapshot 與路線更新，支援重新載入與狀態追蹤。

#### 技術

Next.js、TypeScript、SQLite、Gemini、Google Routes、TDX、CWA、Deterministic Planner / Route Provider

#### 現有產品畫面

- [Routa 本機範例行程](public/projects/routa/itinerary.webp)
- [Routa 本機道路封閉重新規劃](public/projects/routa/reroute.webp)

畫面來源說明：原始專案在本機以模擬資料建立行程，並模擬道路封閉與路線更新。

<!-- entry:repo-lens -->

### repo-lens

以 Gemini 分析 Git repository 結構、技術組成與開發歷史的全端平台。

#### 系統功能與工作範圍

- 非同步 repository 掃描、即時進度與 ECharts commit timeline。

#### 個人貢獻與成果

- 以 Next.js、Firebase Auth／Firestore 串起分析任務與即時狀態。

#### 技術

Next.js、Firebase Auth、Firestore、Gemini、ECharts

#### 現有產品畫面

- [repo-lens 本機首頁](public/projects/repo-lens/home.webp)

畫面來源說明：原始專案的本機首頁畫面。

<!-- entry:marginalia-paper-analysis -->

### marginalia-paper-analysis

把論文審閱流程做成可攜的 Agent Skill：重建論文真正的研究問題，並逐條判定作者主張是否有頁碼層級的證據支持。

- [GitHub](https://github.com/TakalaWang/marginalia-paper-analysis)

#### 個人貢獻與成果

- 輸入 arXiv ID、DOI 或 PDF，抽出帶頁碼標記的全文；每條主張標為 supported、partial 或 unsupported，並評估過度宣稱的風險。
- 只依論文本身判斷、不繞過付費牆；圖表抽取失敗時標為限制，而不是判為不支持。
- 以行為層級重新實作 Marginalia 的審閱流程，未複製上游程式碼。

#### 技術

Agent Skill、Codex、PDF Extraction、Structured Output Schema

<!-- entry:behavioral-kit -->

### behavioral-kit

雙語行為面試 Agent Skill：依職缺產生題庫、以 STAR 結構記錄回答，並產出評估報告與錄用建議。

- [GitHub](https://github.com/TakalaWang/behavioral-kit)

#### 個人貢獻與成果

- 涵蓋 13 種職類與 7 個職級，附 STAR／PARADE、1–5 分評分錨點，以及臺灣與東亞職場的文化調整。
- 只用 Python 標準函式庫並以 uv 執行；以 93 項 smoke test 與 46 條觸發評測查詢（其中 15 條中文）把關。

#### 技術

Agent Skill、Python、uv、STAR Interview Method

#### 現有產品畫面

- [behavioral-kit 產生繁中題庫](public/projects/behavioral-kit/cli.webp)

畫面來源說明：2026-09-30 在本機執行 generate-questions.py 的真實輸出（節錄開頭），不需要網路或模型呼叫。

<!-- entry:wasm-oj-forge -->

### wasm-oj/forge — 開源貢獻

為可在瀏覽器或原生伺服器執行的本地優先編譯器與確定性執行器，貢獻 Java 工具鏈與執行期修正。

- [GitHub](https://github.com/wasm-oj/forge)

#### 個人貢獻與成果

- 新增可選用的 Java WASI toolchain，並調整 CI 讓 Java 工具鏈可以發布。
- 修正執行期的標準輸入輸出重導向與 QuickJS stdin 讀取，以及嚴格 CSP 環境下的瀏覽器端執行。

#### 技術

WebAssembly、WASI、Java Toolchain、QuickJS、TypeScript、GitHub Actions

<!-- entry:discord-code-agent -->

### Discord Code Agent

透過 Discord 操作 Claude、Codex 與 Gemini 的個人 coding agent。

- [GitHub](https://github.com/TakalaWang/discord-code-agent)

#### 系統功能與工作範圍

- Project mapping、thread session continuity 與 durable JSON state。

#### 個人貢獻與成果

- 建立跨模型工作入口與可延續的專案工作階段。

#### 技術

Discord API、Claude、Codex、Gemini、JSON State

<!-- entry:claude-quota-guard -->

### Claude Quota Guard

Claude Code 專案級配額控制工具。

- [GitHub](https://github.com/TakalaWang/claude-quota-guard)

#### 系統功能與工作範圍

- 支援 weekly percentage 或 USD budget。
- 超額時透過 hooks 阻擋新 prompt 與執行中的 tool calls。

#### 個人貢獻與成果

- 把配額界線放入開發工作流，避免專案失控消耗。

#### 技術

Claude Code Hooks、CLI、Budget Guard

<!-- entry:readme-waves -->

### readme-waves

為 GitHub profile README 產生音樂等化器動畫 SVG 與影片的工具。

#### 個人貢獻與成果

- 以 Web Audio API 或 ffmpeg 解碼音訊，純 TypeScript FFT 執行 STFT 與頻帶正規化。
- 以 CSS keyframes 產生輕量 animated SVG，以 ffmpeg／ffmpeg.wasm 產出含音訊的 MP4。
- 將同一套處理能力包裝為 Next.js Web App 與可由 npx 執行的 CLI。

#### 技術

Next.js、TypeScript、Web Audio API、STFT / FFT、SVG / CSS Animation、ffmpeg、ffmpeg.wasm、yt-dlp、Commander.js

## 社團與課外經驗

<!-- entry:eva-lab -->

### EVA Lab — System Administrator

期間：2025-12–Present

- 維護實驗室 Linux GPU 主機與容器環境，以 Ansible、SSH 與批次管理工具處理設備操作；使用者環境涵蓋 Docker／Podman、Apptainer 與 HPC／SLURM。
- 獨立開發實驗室 GPU 主機監控與帳號管理系統：FastAPI 與 React 管理介面、Prometheus 與 Alertmanager 告警推送到 Discord、IPMI 電源控制，帳號變更交由 Ansible 執行。
- 完成 29 台主機的帳號與 GPU 資產稽核，找出長期未使用的帳號並核對設備清單。

<!-- entry:gdsc-ntnu-gdg-on-campus-ntnu -->

### GDG on Campus NTNU — Core Team Member · Tech Speaker

期間：2023-09–2024-06

- 擔任 Google Developer Groups on Campus NTNU 的核心成員與技術講者。
- 分享 Git、Docker、macros、Hugging Face 與 AI tools，並組織 study groups，總參與超過 100 人。

<!-- entry:ntnu-programming-course -->

### NTNU Programming Course — Teaching Assistant · 四學期

期間：2023-08–2025-06

- 2023-08–2025-06：程式設計（一）（二）Teaching Assistant，跟隨兩位授課老師，合計四學期。
- 協助 C 語言程式設計基礎與 Linux 環境教學。
- 開發與維護程式作業自動批改系統，批改速度提升 2 倍。

<!-- entry:teaching-practicum -->

### 南港高中、和平高中 — 資訊科實習教師

期間：2025-02–2025-06

- 透過臺師大師資培育課程，於臺北市立南港高中與和平高中擔任資訊科實習教師，參與資訊課程的教學實習。

<!-- entry:ntnu-cs-camp -->

### NTNU CS Camp — Activity & Teaching Teams

期間：2022–2025

- 2022-01–2022-07：Activity Team Member，參與營隊活動籌備與現場執行。
- 2023-01–2023-07：Activity Team Lead，帶領活動組規劃與執行；參與官方網站 backend，完成 API 文件、Docker／Docker Compose、PostgreSQL 開發環境與 lint／pre-commit 設定。
- 2025-02–2025-07：Teaching Team Lead，與另一位組長共同負責，協調教學組籌備時程、任務分配、課程素材與現場教學支援。
- 維護課程範例程式與 Windows 安裝流程；參與官方 Discord Bot，涵蓋課表、經驗值、經濟、成就、AI 互動、虛擬寵物與管理功能。

- [2023 Backend](https://github.com/CSIE-Camp/website-backend)
- [2025 Examples](https://github.com/CSIE-Camp/example-code-2025)
- [2025 Bot](https://github.com/CSIE-Camp/CSIE-CAMP-2025-bot)
- [Official site](https://camp.ntnucsie.info/2025)
- [Blog timeline](https://takalawang.github.io/about/)

#### 現有產品畫面

- [2025 臺師大資工營官網](public/projects/cs-camp/home.webp)

畫面來源說明：營隊官方網站首頁。

<!-- entry:ntnu-csie-student-association -->

### NTNU CSIE Student Association — 第 38、39、40 屆

期間：2022-07–2025-06

- 第 38 屆（2022-07–2023-06）：114 級會員代表、地下活動股員。
- 第 39 屆（2023-07–2024-06）：活動股員。
- 第 40 屆（2024-07–2025-06）：114 級會員代表。
- 跨三屆參與學生代表與活動股工作。

- [Organization](https://github.com/NTNU-CSIE-SA)
- [Blog timeline](https://takalawang.github.io/about/)

<!-- entry:additional-community-leadership -->

### Additional Community & Leadership — Community

期間：2021–2026

- SITCON 2026（2026-03）：機動組成員。
- Academic Ability Competition Assistant Judge：2024 新竹、2025 新北學科能力競賽助理評審。
- NTNU Beaver Camp（2024-06–2024-07）：Teaching Assistant。
- NTNU CSIE Class of 2025 Representative（2021-09–2025-06）：資工系 114 級班代。

## Research & Recognition

### 研究出版

<!-- entry:a-novel-data-augmentation-approach-for-automatic-speaking-assessment-on-opinion-expressions -->

#### A Novel Data Augmentation Approach for Automatic Speaking Assessment on Opinion Expressions

- 作者：Chung-Chun Wang, Jhen-Ke Lin, Hao-Chien Lu, Hong-Yun Lin, Berlin Chen
- 發表：10th Workshop on Speech and Language Technology in Education (SLaTE 2025), pp. 199–203
- 我的角色：第一作者。
- **問題**：觀點陳述題的口說評量缺乏標註錄音，題目多樣性不足，評分的可靠度也因此受限。
- **方法**：以 LLM 產生指定能力等級的多樣回答，透過 speaker-aware TTS 合成語音，並以 dynamic importance loss 依合成與真實語音的特徵分布差異調整訓練樣本權重；再由多模態 LLM 結合文字與語音特徵直接預測能力分數。
- **結果**：在 LTTC 資料集上優於只用真實資料或傳統資料增強的方法，緩解了低資源限制。

- [Paper](https://www.isca-archive.org/slate_2025/wang25_slate.html)
- [DOI](https://doi.org/10.21437/SLaTE.2025-40)

<!-- entry:development-of-an-english-oral-assessment-system-with-the-gept-dataset -->

#### Development of an English Oral Assessment System with the GEPT Dataset

- 作者：Hao-Chien Lu, Chung-Chun Wang, Jhen-Ke Lin, Berlin Chen
- 發表：O-COCOSDA 2024, pp. 1–6
- 貢獻：建立 GEPT 中級口說的多面向自動評量系統，整合 acoustic features、language use、image／question analysis、BLIP-2 與 LLM；熟悉內容準確率 71%，未見內容 68%。

- [Paper](https://ieeexplore.ieee.org/document/10800405)
- [DOI](https://doi.org/10.1109/O-COCOSDA64382.2024.10800405)

<!-- entry:the-ntnu-asr-system-for-formosa-speech-recognition-challenge-2023 -->

#### The NTNU ASR System for Formosa Speech Recognition Challenge 2023

- 作者：Hao-Chien Lu, Chung-Chun Wang, Jhen-Ke Lin, Tien-Hong Lo
- 發表：ROCLING 2023, pp. 397–402
- 貢獻：使用 Whisper 與 LoRA 建立客語 ASR 系統；相關競賽獲客語拼音組第二名、客語漢字組第三名。

- [Paper](https://aclanthology.org/2023.rocling-1.52/)

### 競賽與獎項

<!-- entry:buildmode-gen-ai-hackathon-2026 -->

#### BUILDMODE GEN-AI HACKATHON 2026 — Overall First Place（總冠軍）

- 活動：FUTUREMODE × SITCON；獲獎作品：urtube。
- 系統功能：經使用者同意匯入 YouTube 觀看紀錄，透過 AI 分析興趣，協助人們找到共同話題，探索興趣與價值觀的契合；以真實觀看行為補充自填問卷。
- 團隊：與 4 位隊友協作，我負責 AI 興趣分析、資料處理與配對功能。
- 來源：[LinkedIn 獲獎貼文](https://www.linkedin.com/posts/takalawang_buildmode-sitcon-futuremode-activity-7502762950148136960-xuCw)

<!-- entry:research-05 -->

#### 其他競賽與學業獎項

- 2023 ICPC — International Collegiate Programming Contest — Bronze Medal
- 2023 NCPC — National Collegiate Programming Contest — Fourth Place
- 2023 Formosa Speech Recognition Challenge, Hakka Pinyin — Second Place
- 2023 Formosa Speech Recognition Challenge, Hakka Chinese Characters — Third Place
- 2022 ICPC — International Collegiate Programming Contest — Bronze Medal
- 2022 NCPC — National Collegiate Programming Contest — 佳作
- 2022 CPE — Collegiate Programming Examination — Top 0.6%
- 112 學年度臺師大資工系資訊專題競賽 — 佳作（英語口說評測系統）
- 臺師大資工系智育獎（111-2、112-2）與群育獎（111-2、112-1）
- Certificate of Excellence — 大二上、大二下、大三上、大三下、大四上、大四下，共六學期

## 技術能力

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
