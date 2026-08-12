# SmartGroceries

## Plan smarter. Shop intentionally.

A grocery planning and budgeting experience designed to help people organize their shopping, understand their spending, and make more intentional purchasing decisions.

**Role**
Solo UI/UX Designer

**Timeline**
[Your timeline]

**Tools**
Figma · FigJam · [React / Tailwind CSS, if included]

**Platform**
Web Application

---

# 01 — Overview

## Making grocery spending easier to understand

Grocery shopping involves more than simply deciding what to buy.

People need to plan their purchases, estimate costs, stay within a budget, and understand where their money goes over time. When these activities happen separately, it becomes difficult to maintain a clear picture of spending.

**SmartGroceries brings budgeting, grocery planning, shopping, and purchase history into one experience.**

The project was created as a self-directed UI/UX practice project to explore an end-to-end product design process — from problem definition and user understanding to information architecture, interface design, and design systems.

---

# 02 — The Problem

## Grocery shopping is more than making a list.

A shopping list can tell you **what to buy**, but it doesn't necessarily help you understand:

* How much you can afford to spend
* How much you've already spent
* Whether you're staying within your budget
* What you purchased previously
* Where your grocery money goes over time

This can make everyday shopping harder to manage, especially for people working with a limited budget or those who simply want better visibility into their spending.

### The design challenge

**How might we make grocery planning and spending easier to understand and manage in one place?**

---

# 03 — Understanding the User

## Looking beyond the shopping list

To explore the problem space, I created three hypothetical user personas representing different grocery-shopping behaviors and constraints.

| User   | Profile               | Shopping pattern | Core frustration                                            |
| ------ | --------------------- | ---------------- | ----------------------------------------------------------- |
| User 1 | 25, middle income     | Weekly           | Impulse purchases make it difficult to stay within budget   |
| User 2 | 22, low-middle income | Weekly           | Food prices fluctuate and make budgeting difficult          |
| User 3 | 35, higher income     | Biweekly         | Wants a quick spending overview without repetitive planning |

An empathy map was also used to explore common thoughts and behaviors around grocery shopping.

Users may be attracted by discounts or new products while simultaneously questioning whether they actually need them. Staying within budget creates a sense of control, while unexpected purchases can create frustration.

### Key insight

Although the personas have different motivations, they share a common problem:

**They don't necessarily need to plan more. They need to see their spending more clearly.**

This shifted the design direction from simply building a better grocery list toward creating **visibility around budgeting and purchase history**.

---

# 04 — Defining the Experience

## From planning to purchase to reflection

Based on the problem space, I focused the core experience around a simple loop:

**Set Budget → Create List → Shop → Complete Purchase → Review History**

The dashboard acts as the central point of the experience, while profile and account settings remain accessible independently.

### MVP focus

The core experience includes:

**Budget**

* Set a monthly grocery budget
* See remaining budget
* Track spending

**Planning**

* Create grocery lists
* Add items and quantities
* Estimate shopping costs

**Shopping**

* Use the list while shopping
* Mark a shopping session as completed

**Review**

* View previous purchases
* Understand previous spending
* Revisit previous lists

### Future possibilities

Features such as receipt scanning, spending charts, price trends, and smart recommendations were intentionally kept outside the core experience.

The goal was to first establish a useful budgeting and history loop before introducing features that depend on larger amounts of historical data.

---

# 05 — User Flow

## A simple path through the product

The primary user journey moves from initial setup into active shopping and finally into reflection.

**Onboarding → Dashboard → Create Grocery List → Go Shopping → Complete Purchase → View History**

Profile and account management are treated as global destinations rather than steps in the shopping journey.

This separation keeps the primary task flow focused while still making account management accessible when needed.

---

# 06 — Wireframes

## Starting with structure

Before developing the visual language, I mapped the core screens and information hierarchy through wireframes.

The wireframes helped establish:

* Dashboard hierarchy
* Budget visibility
* Grocery list structure
* Purchase history
* Onboarding flow
* Profile and account management
* Primary and secondary actions

At this stage, the focus was **structure and task flow rather than visual polish**.

The goal was to make sure the experience made sense before investing in the final interface.

---

# 07 — Design Direction

## Making financial information feel approachable

The visual direction combines a clean interface with a light, approachable visual language.

Green became the primary brand color because it naturally connects the product to groceries while also communicating positive states such as staying within budget and completing an action.

Supporting colors provide semantic differentiation without competing with the primary information.

**Primary:** Green
**Supporting:** Blue · Orange
**Neutral:** White · Dark Gray

The overall direction prioritizes:

**Clarity over decoration**
**Hierarchy over density**
**Consistency over one-off styling**

---

# 08 — Design System

## Designing the system, not just the screens

Rather than styling every screen independently, I established a reusable design foundation for the product.

### Color

The primary brand color is:

**#47C44C**

Semantic colors are used for:

* Success
* Information
* Warning
* Error

Each semantic color is structured around reusable interaction states where needed.

### Typography

The interface uses **Roboto** with a structured hierarchy across:

* Display
* Title
* Label
* Paragraph

Defined typography tokens help maintain predictable hierarchy across different screens and components.

### Layout

The desktop interface follows a **12-column grid with 24px gutters**, while tighter contexts use an **8-column grid with 16px gutters**.

### Other foundations

The design system also defines:

* Spacing tokens
* Border tokens
* Radius tokens
* Component states
* Reusable UI patterns

Creating these foundations made it possible to build screens from consistent rules rather than repeatedly making individual visual decisions.

---

# 09 — Key Screens

## Dashboard

### Understand your budget at a glance

The dashboard acts as the user's financial overview.

It prioritizes the information users need most frequently:

* Remaining budget
* Amount spent
* Days remaining
* Spending information
* Current shopping activity

The intention was to make the user's financial position understandable **without requiring them to navigate through multiple screens**.

The dashboard therefore became the primary expression of the project's central insight:

**Visibility first.**

---

## Grocery List

### Turn planning into an actionable checklist

The grocery list transforms a shopping plan into something users can actively use while shopping.

Users can:

* Add grocery items
* Organize quantities
* Track items
* Estimate the cost of their shopping

The interface keeps important information visible while minimizing unnecessary interaction.

The list is not designed to be an elaborate planning tool — it is designed to get users from **"I need these things" to "I'm ready to shop."**

---

## Shopping History

### Understand where the money went

History provides the reflection layer of the product.

Instead of treating every shopping trip as an isolated event, users can look back at previous purchases and spending.

This creates a connection between:

**What I planned → What I bought → What I spent**

The history experience was intentionally designed to make spending information easy to scan rather than turning it into a dense financial dashboard.

---

## Profile

### Keep account management out of the shopping flow

The profile area brings account information and settings together without interfering with the core grocery experience.

It provides access to:

* Personal information
* Account settings
* Budget-related settings
* Preferences
* Account management

Keeping these actions separate helps preserve the dashboard and grocery list as task-focused spaces.

---

# 10 — Onboarding

## Establishing the foundation first

The onboarding experience introduces users to the product progressively.

**Create Account → Verify Email → Set Password → Set Budget**

The budget step is particularly important because it establishes the reference point for the rest of the experience.

Once a budget exists, spending and remaining-budget information become meaningful throughout the product.

Rather than asking users for everything at once, the flow breaks setup into smaller steps to reduce cognitive load.

---

# 11 — Components

## Building reusable UI

Recurring interface patterns were turned into reusable components rather than recreated screen by screen.

These include:

* Buttons
* Inputs
* Cards
* Navigation
* Budget indicators
* List items
* Form elements
* Feedback states
* Modal interactions

Component reuse helps maintain consistent spacing, typography, states, and interaction behavior throughout the product.

It also makes future screens easier to build because new experiences can be assembled from an established component language.

---

# 12 — Final Design

## One experience. Three core needs.

The final experience brings together three major parts of grocery management:

### PLAN

Create a list and decide what to buy.

### BUDGET

Understand how much has been spent and how much remains.

### REVIEW

Look back at previous purchases and spending.

Together, these create a continuous experience:

**Planning → Shopping → Spending → Reflection**

Instead of treating grocery planning and budgeting as separate tasks, SmartGroceries connects them into one product experience.

---

# 13 — Reflection

## Designing the system behind the screen

This project helped me move beyond designing individual interfaces and start thinking about the product as a connected system.

One of the biggest lessons was understanding how a problem statement can influence product decisions.

The initial problem could easily have led to a feature-heavy grocery planning application. However, focusing on **visibility rather than simply planning more** helped prioritize budgeting, spending, and purchase history as core parts of the experience.

I also learned to think more deliberately about:

* Information hierarchy
* User flows
* Product scope
* Design systems
* Component architecture
* Visual consistency
* Reusable patterns
* The relationship between UX decisions and UI decisions

### What I would test next

Because the personas and research in this project were hypothetical, the next step would be validating the experience with real users.

I would particularly want to test:

**Does the dashboard communicate budget status quickly enough?**

**Is the shopping flow efficient during an actual grocery trip?**

**Does the history view help users understand their spending without requiring additional analysis?**

**Do users find the visual hierarchy clear and trustworthy?**

---

# 14 — What's Next

The current experience establishes the core budgeting and shopping loop.

Future iterations could explore:

* Spending visualizations
* Price trends
* Receipt scanning
* Smart recommendations
* More advanced spending insights

These features would be introduced only after collecting enough real usage data to ensure they provide meaningful value rather than simply adding visual complexity.

---

# Final Thought

**SmartGroceries explores how thoughtful information architecture, visual hierarchy, and a consistent design system can turn an everyday task into a clearer digital experience.**

More importantly, the project represents a shift from designing screens individually to thinking about **how an entire product works as a system.**
