Exercise 0.6 New note in Single page app diagram
```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: "message":"note created", saves data on server
    deactivate server
    Note right of browser: After click, JS code adds new note to the local data.json and renders it
```
