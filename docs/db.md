```mermaid
erDiagram
Customer ||--o{ Order : places
Customer {
int id PK
string name
string email
}
Order {
int id PK
string orderDate
int customerId FK
}
```
