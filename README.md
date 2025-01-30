# SolChatUI - Decentralized AI Chat WebUI on Solana

SolChatUI is an open-source large model conversation WebUI designed for data-sensitive individuals/organizations/companies, built with Vue and Element Plus. It allows easy and quick integration with local large models to ensure information security. This project is open-sourced under the Apache 2.0 license and deeply integrates Solana blockchain technology, providing users with a secure, transparent, and decentralized AI conversation experience.

## Why Choose SolChatUI?

### Data Sovereignty Returns to Users
Leveraging Solana's decentralized nature, all conversation data and model call records are encrypted and stored on-chain. Users have full control over their data, eliminating concerns about data breaches or third-party misuse.

### Secure and Transparent Model Calls
Model call billing and revenue distribution are implemented through smart contracts, ensuring all transaction records are publicly transparent and free from hidden operations.

### Rich Model Ecosystem
Supports integration with various mainstream large models, including but not limited to:
- OpenAI
- Alibaba Cloud Bailian
- Baidu Qianfan

Future plans include support for a decentralized AI model marketplace on Solana.

### Convenient Development Experience
Provides simple and easy-to-understand API interfaces and rich example code, facilitating rapid integration and secondary development for developers.

## Features

- **Conversation Management**: Supports conversation creation, deletion, and editing.
- **Knowledge Base Management**: Supports file management, upload, segmentation, text recall, and Q&A (RAG).
- **Multi-turn Dialogue**: Supports multi-turn conversations and dialogue round configuration.
- **Internet Search**: Supports internet search.
- **Multi-platform Integration**: Supports model calls from multiple platforms:
  - Alibaba Cloud Bailian
  - Baidu Qianfan
  - Moonshot AI
  - iFlytek Spark
  - Zhipu AI
  - OpenAI (including OpenAI-like services)
- **System Theme Switching**: Supports light, dark, and frosted glass themes, with customizable background images.
- **Responsive Design**: Supports both PC and mobile devices.
- **Multimodal Support**:
  - Regular conversations, internet search conversations, and knowledge base conversations.
  - Image input models.
  - Image generation models.
- **Internationalization**: Supports Simplified Chinese and English.
- **API Key Management**: Supports adding, deleting, and editing API keys.

## Design Features

- **Lightweight Design**: Pure front-end project, ready to use out of the box, no complicated configuration required.
- **Built with Vue and Element Plus**: Provides a smooth user experience and rich UI components.
- **No Additional Database Needed**: Data is stored in the browser's IndexedDB, ensuring user privacy.
- **Developer-Friendly**: Offers rich interface examples, supporting both local model request modes and third-party HTTP request modes.
- **Highly Customizable**: Provides extensive configuration options internally, with an object-oriented design for the persistence layer, making it easy for developers to perform secondary development and integrate database storage interfaces.

## SolChatai - Ushering in a New Era of Decentralized AI Conversations!

## Quick Development
SolChatai not only provides a front-end project for developers but also offers 12 interface examples based on Python's Flask library.

These interfaces provide the simplest implementation (files containing `_simple_`) and implementations based on LangChain (files containing `_langchain_`). They cover five types of interfaces:
- Regular chat
- Knowledge base retrieval
- Internet search
- Multimodal input
- Image generation

## Installation

### Prerequisites
Before installing the project, install the Node.js environment:

```bash
node -v
```

### Download and Run

```bash
# Clone repository
git clone https://github.com/Unagi-cq/solChatai

# Enter the web UI directory
cd ./solchat-ui

# Install dependencies
npm install

# Run locally
npm run serve
```

### Access

```bash
http://localhost:8080/
```

## Backend Development
For local interface call mode, refer to the `solchat-serve` folder in the repository:

```bash
solchat-serve
├─igm
│      5_zhipuai_ZHIPUAI_igm.py
├─llm
│  ├─chat
│  │      1_simple_local_chat.py
│  │      2_langchain_local_chat.py
│  │      3_langchain_SparkLLM_chat.py
│  │      4_langchain_TongyiQwen_chat.py
│  │      5_langchain_ZHIPUAI_chat.py
│  ├─rag
│  │      1_simple_local_rag.py
│  │      4_langchain_TongyiQwen_rag.py
│  │      rag_example.pdf
│  └─search
│          1_simple_local_search.py
│          3_langchain_SparkLLM_search.py
│          5_langchain_ZHIPUAI_search.py
└─vim
        5_langchain_ZHIPUAI_vim.py
```

Run backend files using Python 3.10:

```bash
# Enter backend directory
cd ./solchat-serve

# Create and activate conda environment
conda_env.sh
conda activate solchat

# Start an interface
python ./llm/chat/1_simple_local_chat.py
```

## Packaging and Deployment

### Frontend Packaging

```bash
npm run build
```

After packaging, upload the `dist` folder to your server.

### Nginx Proxy Configuration
To enable API calls to Alibaba Cloud and Baidu Qianfan, configure Nginx:

```nginx
location ^~ /ali/remote/
    {
        proxy_pass https://dashscope.aliyuncs.com/;
        proxy_ssl_server_name on;
        proxy_set_header Host dashscope.aliyuncs.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_http_version 1.1;
        add_header X-Cache $upstream_cache_status;
    }

location ^~ /baidu/remote/
    {
        proxy_pass https://aip.baidubce.com/;
        proxy_ssl_server_name on;
        proxy_set_header Host dashscope.aliyuncs.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_http_version 1.1;
        add_header X-Cache $upstream_cache_status;
    }
```

For local debugging, no additional configuration is needed.

## Conclusion
SolChatUI provides a decentralized AI chat experience with enhanced security, transparency, and a rich model ecosystem. With its lightweight design and easy integration, it is a powerful tool for developers and organizations looking for a secure AI-powered chat solution.

