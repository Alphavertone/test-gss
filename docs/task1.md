# User State and Account Management

## State Transitions

This diagram shows the different stages a user can go through in the system, from initial registration to becoming inactive and potentially being reactivated. The arrows represent how users move between these stages based on actions or events like completing verification, getting promoted or demoted, or exceeding usage limits.

**Diagram 1: State Transitions**

```mermaid
stateDiagram
    [*] --> Guest: Initial State
    Guest --> Basic: KYC Approved
    Basic --> Advanced: Promotion
    Advanced --> Basic: Demotion
    Basic --> Guest: Demotion
    Company --> Advanced: Promotion
    Advanced --> Company: Promotion
    Guest --> Idle: Limits Exceeded
    Idle --> [*] : Reactivation
```

## State Descriptions

This diagram outlines the different types of user accounts in the system and their associated limitations. Each user type has specific restrictions on usage, such as time limits and allowed operations. Understanding these different user types and their capabilities is crucial for managing user access and ensuring a smooth user experience.

**Diagram 2: State Descriptions**

```mermaid
classDiagram
    class Guest {
        Session Limit: 20 minutes
        Operation Limit: 5/day, 20/week
    }
    class Basic {
        Session Limit: Increased
        Operation Limit: 20/day, 50/week
    }
    class Company {
        No Limits
    }
    class Advanced {
        No Limits
    }
    class Idle {
        Inactive User
    }

    %% Transitions based on Partner Configuration
```