[[toc]]

## Introduction

THChatUI V2.0.0 is an **open-source large model conversation WebUI** designed for **data-sensitive individuals/organizations/companies**, developed based on Vue and Element Plus. It enables quick and easy integration with local large models while protecting information security. This project is open-sourced under the Apache 2.0 license.

The frontend is built with Vue for better development experience.

The backend uses Python's Flask for quick API setup, with several example implementations provided (optional).

No additional database required - data is stored in the browser's **IndexedDB**.

## Features Overview

### API Request Modes
This project supports two modes: **Custom Model Interface** and **Third-party HTTP Requests**:
1. (Developer-friendly) **Custom Model Interface**: Requires loading local models and running THChatUI's Python scripts. Provides SSE and WS request template implementations, supports all HF platform conversation models, and completely protects privacy from third-party access. We have provided several examples in the `/thchat-server` directory for reference.
2. (User-friendly) **Third-party HTTP Requests**: Only requires obtaining a KEY from third-party platforms and entering it in "Settings" — "API KEY". This project permanently provides iFlytek Spark Lite model for platform experience.

### Features
The project supports the following features:
- Conversation Management: Support for creating, deleting, and editing conversations
- Knowledge Base Management: Support for file management, file upload, file segmentation, text retrieval, and knowledge base Q&A (RAG)
- Multi-turn Dialogue: Support for multi-turn conversations and dialogue round configuration
- Web Search: Support for internet search
- Multi-platform Integration, supporting models from:
    - Alibaba Cloud Bailian
    - Baidu Qianfan
    - Moonshot AI
    - iFlytek Spark
    - Zhipu AI
    - OpenAI
- System Theme Switching: Support for light, dark, and frosted glass themes, with custom background image support
- Responsive Design: Support for PC and mobile devices
- Multimodal:
    - Support for regular conversations, web search conversations, and knowledge base conversations
    - Support for image input models
    - Support for image generation models
- Internationalization: Support for English and Simplified Chinese
- API KEY Management: Support for adding, deleting, and editing API KEYs

### Design Features
This project has the following characteristics:
- Focused on lightweight design, pure frontend project, out-of-the-box usage without complex configuration
- Fully developed based on Vue and Element Plus
- No additional database needed, data stored in browser's IndexedDB
- Rich interface examples provided for developers, supporting both local model request mode and third-party HTTP request mode
- Rich configuration options provided internally, persistence layer uses object-oriented design for easy secondary development and database storage interface integrations