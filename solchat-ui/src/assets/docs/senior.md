[[toc]]

## Advanced Development

## Data Schema

When THChatUI is running, data is stored in two places:
1. Browser cache `LocalStorage`
2. Browser database `IndexedDB`

The data is split into two storage locations: `LocalStorage` stores user settings which can be cleared, while `IndexedDB` stores user conversation data that typically needs to be persisted. Therefore, data that needs to be stored is kept in `IndexedDB`. Additionally, we've implemented object-oriented encapsulation to make it easier for everyone to integrate their own databases. For details, see `thchat-ui/src/schema/`.

### Browser Cache
Below is an example of the data structure stored in THChatUI's browser cache `LocalStorage`:
```json
{
    "settingStorage": {
        // System theme
        theme: 'light',
        // Background image
        bg: bg,
        // Whether to show answer statistics
        chat_detail: true,
        // api_key
        api_key_map: {
            Ali_DashScope: "",
            Baidu_QianFan: "",
            Moonshot_AI: "",
            Xunfei_Spark: "",
            Zhipu_BigModel: "",
            OpenAI: {
                endpoint: "",
                api_key: "",
                model_name: ""
            },
            Local: ""
        },
        // Platform
        platform: 'Xunfei_Spark',
        // Whether it's a multi-turn conversation
        memory: true,
        // History conversation round limit
        memory_limit: 3,
        // Model configuration
        model_config: {
            // Model type
            type: "llm",
            // Model name
            name: "Spark Lite 🆓",
            // Model series
            series: "xunfei",
            // Model version
            version: "spark lite",
            // Pre-processing group index
            pre_method: "text_xunfei",
            // Post-processing group index
            post_method: "add"
        },
        // Number of files uploaded at once
        upload_limit: 1,
        // File types that can be uploaded to the input box (other multi-modal models are not yet integrated, so only fill in images)
        upload_type: "image/",
        // Input box file size limit 2MB
        upload_size: 2,
        // Maximum number of characters in a chunk
        chunk_size: 500,
        // File size limit 5MB
        kb_file_size: 5,
        // Recall count
        recall_count: 3,
        // Selected knowledge base
        selected_repoId: '',
        // Knowledge base enabled status
        kb_enabled: false,
        // Whether to enable internet search
        web_search_enabled: false
    }
}
```

### Browser Database - Activation Status
```
# Table active
# Value 
1715599712260
```

### Browser Database - Conversation Data
```
# Table chatStorage
# Value
{
    "list": [
        {
            "sessionId": 1736680973076,
            "data": [
                {
                    "qaId": 1736680973076,
                    "query": "Hello",
                    "answer": "Hello! I'm happy to help you.",
                    "files": [],
                    "responseTime": 1736680973594,
                    "finishTime": 1736680973694,
                    "series": "qwen",
                    "modelName": "qwen-turbo",
                    "modelType": "llm"
                }
            ]
        }
    ]
}
```

### Browser Database - Knowledge Base Data
```
# Table kbStorage
# Value
{
    "statistics": {
        "totalRepositories": 1,
        "totalFiles": 1,
        "totalChunks": 1
    },
    "list": [
        {
            "repoId": 1736657169289,
            "name": "Research Notes",
            "createTime": "2025/1/12 12:46:09",
            "description": "Sample description",
            "list": [
                {
                    "fileId": 1736668174700,
                    "name": "Kong Yiji.pdf",
                    "createTime": "2025/1/12 15:49:34",
                    "fileType": "pdf",
                    "url": "",
                    "size": 206752,
                    "showChunks": false,
                    "list": [
                        {
                            "chunkId": 1736668174700,
                            "content": "Lu Xun   Kong Yiji   Original Text   The tavern in Lu Town...",
                            "contentLength": 490,
                            "words": [
                                "Lu Xun",
                                "Kong",
                                "Yiji",
                                "Original",
                                "Text",
                                "Lu",
                                "Town",
                                "tavern",
                                ...
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
```

### Browser Database - Conversation Title Data
```
# Table tabStorage
# Value
{
    "list": [
        {
            "title": "Hello",
            "uuid": 1736680973076
        }
    ]
}
```
