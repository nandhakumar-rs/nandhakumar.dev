# Mermaid Diagram Authoring Guide

This guide describes how to author Mermaid diagrams for experiment pages so they stay consistent with the app's dark theme and palette.

## Where diagrams live

- Diagram source files are plain Mermaid text with a `.mmd` extension.
- They are stored under `public/experiments/<slug>/images/`, for example:
  `public/experiments/aws-ecr-and-ecs-deployment/images/architecture.mmd`
- Reference a diagram from the experiment's `index.mdx` frontmatter using a path relative to that experiment:

```yaml
architectureImage: "./images/architecture.mmd"
```

## How rendering works

- `.mmd` files are read at build time (see `src/lib/experiments.ts`) and the raw
  text is passed to the client.
- The text is rendered by `src/components/experiments/mermaid-diagram.component.tsx`,
  which dynamically imports `mermaid` (so it is not in the main bundle) and
  initializes a dark theme with palette-matched `themeVariables`.
- On an experiment page, the architecture diagram is shown in the **Architecture**
  tab via `<ExperimentArchitectureDiagram />`, which reads the resolved chart from
  context. The Architecture tab only appears when `index.mdx` contains an
  `<ExperimentArchitecture>` block:

```mdx
<ExperimentArchitecture>

<ExperimentArchitectureDiagram />

</ExperimentArchitecture>
```

Text, lists, and images can be added inside that block around the diagram.

## Color palette

Use these `classDef` styles so diagrams match the app. Each layer keeps a distinct
accent stroke, deep dark fill, and light (`#F3FBFF`, the app's `app-primary-100`)
label text. Copy this block into the bottom of a diagram and assign classes per node:

```
classDef user fill:#0D1117,stroke:#94A3B8,color:#F3FBFF,stroke-width:1.5px
classDef edge fill:#0E2A33,stroke:#38BDF8,color:#F3FBFF,stroke-width:1.5px
classDef frontend fill:#10233A,stroke:#60A5FA,color:#F3FBFF,stroke-width:1.5px
classDef backend fill:#1E1B4B,stroke:#A78BFA,color:#F3FBFF,stroke-width:1.5px
classDef ai fill:#06312A,stroke:#34D399,color:#F3FBFF,stroke-width:1.5px
classDef security fill:#2B1508,stroke:#F59E0B,color:#F3FBFF,stroke-width:1.5px
```

Assign classes with `class <NodeIds> <className>`:

```
class U user
class ALB,LRULES edge
class FTG,FES,FFT,FECR,FCW frontend
class BTG,BES,BFT,BECR,BCW backend
class LLM,PROVIDER ai
class SG1,SG2,SSM,IAM security
```

Guidance for choosing a class:

- `user` - external actors (browser, client, end user).
- `edge` - public entry points (load balancer, listener rules, CDN, gateway).
- `frontend` - frontend service, its image, target group, and logs.
- `backend` - backend service, its image, target group, and logs.
- `ai` - LLM providers and model abstraction layers.
- `security` - security groups, IAM roles, secrets, and parameter stores.

Do not set `background`, `clusterBkg`, or subgraph colors inside the `.mmd` file;
those come from the component's `themeVariables` so all diagrams stay uniform.
Subgraph container background, border, and title color are handled globally.

## Authoring conventions

- **Direction**: prefer `flowchart LR` for layered infrastructure diagrams; use
  `flowchart TB` when vertical layering reads better.
- **Subgraphs as layers**: group related nodes into subgraphs with explicit IDs and
  bracketed labels, e.g. `subgraph EDGE["Edge Layer"]`.
- **Node IDs**: use short, uppercase, no-space IDs (`ALB`, `BFT`, `SSM`) and put the
  human-readable text in the label: `ALB["Application Load Balancer<br/>Public URL"]`.
- **Labels**: use `<br/>` for line breaks inside node labels. Keep labels concise.
- **Edges**:
  - Solid arrows (`-->`) for primary traffic and data flow.
  - Dotted arrows (`-.->`) for configuration, permissions, and security
    associations (e.g. a security group applied to a task).
- **Edge labels**: wrap labels containing special characters in quotes:
  `LRULES -->|"API route /api/*"| BTG`.
- **Reserved words**: never use `end`, `subgraph`, `graph`, or `flowchart` as node IDs.

## Dark-theme and security constraints

- The renderer uses `securityLevel: 'strict'`. Do not rely on click events or
  injected raw HTML; only simple `<br/>` label breaks are used.
- Test a diagram after editing by opening the experiment page and switching to the
  Architecture tab. Wide diagrams scroll horizontally inside their container.
