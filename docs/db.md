```mermaid
erDiagram
User ||--o{ Article : "created by user"

User {
    id  String
    name string
}

Article {
    id  String PK
    user_id String FK
    content String "Markdwon"
}
```
