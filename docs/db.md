```mermaid
erDiagram
User ||--o{ Article : "created by user"

User {
    id  String
}

Article {
    id  String PK
    user_id String FK
    content String "Markdwon"
}
```
