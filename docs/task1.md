---
sidebar_position: 2
---

# (Task 1) User State and Account Management

## State Transitions

This diagram shows the different stages a user can go through in the system, from initial registration to becoming inactive and potentially being reactivated. The arrows represent how users move between these stages based on actions or events like completing verification, getting promoted or demoted, or exceeding usage limits.

```mermaid
stateDiagram
    [*] --> Guest: Initial Registration
    Guest --> Basic: KYC Approved
    Guest --> Idle: Limits Exceeded

    Basic --> Advanced
    Basic --> Idle: Limits Exceeded
  
    Company --> Advanced
      
    Advanced --> Company
    Advanced --> Basic

    Idle --> [*] : Reactivation Requested
```

## State Descriptions

This diagram outlines the different types of user accounts in the system and their associated limitations. 
Each user type has specific restrictions on usage, such as time limits and allowed operations.

| Type     | Limits                                                            |
|----------|-------------------------------------------------------------------|
| Guest    | Session Limit: 20 minutes <br></br>Operation Limit: 5/day, 20/week |
| Basic    | Operation Limit: 20/day, 50/week                                  |
| Company  | No Limits                                                         |
| Advanced | No Limits                                                         |
| Idle     | Inactive User                                                     |
