# build clone of https://www.garmin.com.sg/minisite/fenix/fenix-8/ website with al...

## Execution Summary
Governed runtime execution plan for `vibe` in mode interactive_governed.

## Skill Search Guide
- 先拆任务，再拆模块
- 会按模块搜索本地 skills
- 每个模块单独搜索本地 skills
- 会先看候选 skill 名和短描述，再打开并阅读候选 `SKILL.md`
- 每个模块最多保留 3 个候选，避免上下文污染
- 以候选 `SKILL.md` 的真实用途为准，不按词面碰撞判断
- 会给出 `L` / `XL` 两套 skills 组织方案，并说明每个 skill 的职责
- 优先选择真正负责该模块的 owner，不选只沾边的 helper
- 一个 skill 可以覆盖多个模块
- explicit_only skills 只有在用户明确点名时才可入选
- 不得跨越候选 skill 声明的负边界或适用限制
- 没有 owner 时必须报缺口，不得伪装覆盖
- 没有 owner 的模块会明确标出缺口
- requirement 阶段公开搜索办法，并在请用户选择前由 Agent 分别给出 L / XL 的具体工作流和候选 skill 名称；这些名称必须标为尚未正式选定或使用，不得公开程序候选排名或预选结果
- xl_plan 阶段公开模块、候选、最终采用和缺口
- execute 阶段公开本次实际启用的 skills

## Task Modules
- `asset_and_structure_ingestion`: Extract and ingest DOM structure, styling rules, typography, and media sources from the reference Garmin Fenix 8 website.
- `ui_component_and_layout_construction`: Construct the responsive single-page structure replicating the Garmin Fenix 8 minisite sections.
- `animations_and_interactive_behavior`: Implement scroll-driven animations, product showcase toggles, sticky nav, and video playback.
- `tdd_verification_and_quality_assurance`: Implement automated test suites and verify end-to-end functionality and asset integrity.

## Candidate Skills By Module
- `asset_and_structure_ingestion`: `frontend-developer`
- `ui_component_and_layout_construction`: `frontend-developer`
- `animations_and_interactive_behavior`: `frontend-developer`
- `tdd_verification_and_quality_assurance`: `test-driven-development`

## Uncovered Modules
- None. Every declared module is covered by an Agent-selected local Skill.

## L / XL Organization Difference
- L: Run modules in a single serial execution pipeline with unified verification.
- XL: Execute across bounded phases: asset extraction, structure build, animation integration, and automated QA verification.
- Selected workflow level: `XL`

## Frozen Inputs
- Requirement doc: C:\Users\user\fenix8\docs\requirements\2026-08-27-build-clone-of-https-www-garmin-com-sg-minisite-fenix-fenix-8-we.md
- Source task: build clone of https://www.garmin.com.sg/minisite/fenix/fenix-8/ website with all animations and structure and media sources. it should work identically same with that reference website Update: build clone of https://www.garmin.com.sg/minisite/fenix/fenix-8/ website with all animations and structure and media sources. it should work identically same with that reference website Update: build clone of https://www.garmin.com.sg/minisite/fenix/fenix-8/ website with all animations and structure and media sources. it should work identically same with that reference website

## Wave Plan
- Wave 1 (`sequential`): `asset_and_structure_ingestion` via skill `frontend-developer` as `owner`
- Wave 2 (`sequential`): `ui_component_and_layout_construction` via skill `frontend-developer` as `owner`
- Wave 3 (`sequential`): `animations_and_interactive_behavior` via skill `frontend-developer` as `owner`
- Wave 4 (`sequential`): `tdd_verification_and_quality_assurance` via skill `test-driven-development` as `owner`

## Delivery Acceptance Plan
- Freeze downstream product acceptance inside the governed requirement doc and reuse it rather than inventing closeout claims later.
- Emit a per-run delivery-acceptance report during `phase_cleanup` so runtime/process success is kept separate from project-delivery success.
- Delivery-acceptance report: C:\Users\user\fenix8\outputs\runtime\vibe-sessions\20260827T061615Z-f13e3cad\delivery-acceptance-report.json
- If manual spot checks are declared in the requirement doc, final completion wording stays blocked until they are cleared or explicitly downgraded to manual review.
- Release truth aggregation remains an outer-layer gate; this run emits the per-run delivery-truth report only.

## Code Task TDD Evidence Plan
- Reuse the frozen `Code Task TDD Evidence Requirements` section from the requirement doc rather than inventing late closeout claims.
- Reuse the frozen `Code Task TDD Exceptions` section when strict failing-first sequencing is intentionally exempted.
- Map each frozen requirement or exception to an implementation step, a targeted verification command, and a proof artifact.
- If strict failing-first sequencing is blocked, execution must record the bounded reason and fallback evidence explicitly.

## Module Work Plan
- `asset_and_structure_ingestion`: Extract and ingest DOM structure, styling rules, typography, and media sources from the reference Garmin Fenix 8 website.
  Required: `True`; dependencies: none; Execution mode: `skill_assigned`
  Work: skill `frontend-developer` as `owner` - Extract and ingest reference assets, media, and structural elements.
  Acceptance: `assets-extracted` (automated) - All visual assets, media references, and layout structures are ingested and mapped.
- `ui_component_and_layout_construction`: Construct the responsive single-page structure replicating the Garmin Fenix 8 minisite sections.
  Required: `True`; dependencies: `asset_and_structure_ingestion`; Execution mode: `skill_assigned`
  Work: skill `frontend-developer` as `owner` - Build responsive layout, semantic markup, and CSS styling.
  Acceptance: `layout-constructed` (automated) - All sections, components, typography, and responsive layouts match the reference site.
- `animations_and_interactive_behavior`: Implement scroll-driven animations, product showcase toggles, sticky nav, and video playback.
  Required: `True`; dependencies: `ui_component_and_layout_construction`; Execution mode: `skill_assigned`
  Work: skill `frontend-developer` as `owner` - Implement scroll animations, interactive state toggles, and video playback.
  Acceptance: `animations-interactive` (automated) - Interactive animations, video play states, and UI state switches function smoothly and match the reference site.
- `tdd_verification_and_quality_assurance`: Implement automated test suites and verify end-to-end functionality and asset integrity.
  Required: `True`; dependencies: `animations_and_interactive_behavior`; Execution mode: `skill_assigned`
  Work: skill `test-driven-development` as `owner` - Author and run test suites validating component loading, asset resolution, and user interactions.
  Acceptance: `qa-verified` (automated) - All automated test suites pass and deliverable matches acceptance criteria.
- Dispatch frontend-developer as owner.
  Binding profile: module_work_unit; dispatch phase: in_execution; lane policy: module_dependency_contract; parallel in XL: True
  Write scope: src/assets/**; review mode: module_acceptance; execution priority: 50
  Reason: approved_module_work_plan
  Required inputs: 
  Expected outputs: src/assets/media_manifest.json
  Verification: Verify asset presence and manifest.
- Dispatch frontend-developer as owner.
  Binding profile: module_work_unit; dispatch phase: in_execution; lane policy: module_dependency_contract; parallel in XL: True
  Write scope: src/**; review mode: module_acceptance; execution priority: 50
  Reason: approved_module_work_plan
  Required inputs: 
  Expected outputs: index.html, src/styles.css, src/main.js
  Verification: Verify visual layout and responsive breakpoints.
- Dispatch frontend-developer as owner.
  Binding profile: module_work_unit; dispatch phase: in_execution; lane policy: module_dependency_contract; parallel in XL: True
  Write scope: src/js/**; review mode: module_acceptance; execution priority: 50
  Reason: approved_module_work_plan
  Required inputs: 
  Expected outputs: src/js/animations.js, src/js/interactions.js
  Verification: Verify animation triggers and user interactions.
- Dispatch test-driven-development as owner.
  Binding profile: module_work_unit; dispatch phase: in_execution; lane policy: module_dependency_contract; parallel in XL: True
  Write scope: tests/**; review mode: module_acceptance; execution priority: 50
  Reason: approved_module_work_plan
  Required inputs: 
  Expected outputs: tests/e2e.test.js
  Verification: Run test suite and ensure 100% pass rate.

## Verification Commands
- Run every verification command frozen for the module work units and retain its real result.
- Reconcile every module acceptance criterion against the returned execution evidence.
- Review the delivery-acceptance report emitted during `phase_cleanup` before using full completion language.

## Rollback Plan
- If verification fails, revert only changes inside the approved module write scopes.
- Do not roll back unrelated user changes.

## Phase Cleanup Contract
- Remove temporary artifacts created by the approved module work only.
- Write cleanup receipt before completion.
