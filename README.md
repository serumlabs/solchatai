SolChatUI - Decentralized AI Chat WebUI on Solana
SolChatUI is an open-source large model conversation WebUI designed for data-sensitive individuals/organizations/companies, built with Vue and Element Plus. It allows easy and quick integration with local large models to ensure information security. This project is open-sourced under the Apache 2.0 license and deeply integrates Solana blockchain technology, providing users with a secure, transparent, and decentralized AI conversation experience.

Why Choose SolChatUI?

Data Sovereignty Returns to Users: Leveraging Solana's decentralized nature, all conversation data and model call records are encrypted and stored on-chain. Users have full control over their data, eliminating concerns about data breaches or third-party misuse.

Secure and Transparent Model Calls: Model call billing and revenue distribution are implemented through smart contracts, ensuring all transaction records are publicly transparent and free from hidden operations.

Rich Model Ecosystem: Supports integration with various mainstream large models, including but not limited to OpenAI, Alibaba Cloud Bailian, Baidu Qianfan, and more. Future plans include support for a decentralized AI model marketplace on Solana.

Convenient Development Experience: Provides simple and easy-to-understand API interfaces and rich example code, facilitating rapid integration and secondary development for developers.

Features

Conversation Management: Supports conversation creation, deletion, and editing.

Knowledge Base Management: Supports file management, file upload, file segmentation, text recall, and knowledge base Q&A (RAG).

Multi-turn Dialogue: Supports multi-turn conversations and dialogue round configuration.

Internet Search: Supports internet search.

Multi-platform Integration: Supports model calls from the following platforms:

Alibaba Cloud Bailian

Baidu Qianfan

Moonshot AI

iFlytek Spark

Zhipu AI

OpenAI (including OpenAI-like services)

System Theme Switching: Supports light, dark, and frosted glass themes, with customizable background images.

Responsive Design: Supports both PC and mobile devices.

Multimodal Support:

Supports regular conversations, internet search conversations, and knowledge base conversations.

Supports image input models.

Supports image generation models.

Internationalization: Supports Simplified Chinese and English.

API Key Management: Supports adding, deleting, and editing API keys.

Design Features

Lightweight Design: Pure front-end project, ready to use out of the box, no complicated configuration required.

Built with Vue and Element Plus: Provides a smooth user experience and rich UI components.

No Additional Database Needed: Data is stored in the browser's IndexedDB, ensuring user privacy.

Developer-Friendly: Offers rich interface examples, supporting both local model request modes and third-party HTTP request modes.

Highly Customizable: The project provides extensive configuration options internally, with an object-oriented design for the persistence layer, making it easy for developers to perform secondary development and integrate db storage interfaces.

SolChatai, Ushering in a New Era of Decentralized AI Conversations!

Quick Development
SolChatai not only provides a front-end project for developers but also offers 12 interface examples based on Python's Flask library.

These interfaces provide the simplest implementation (files containing _simple_) and implementations based on LangChain (files containing _langchain_). They cover five types of interfaces: regular chat, knowledge base retrieval, internet search, multimodal input, and image generation.

Installation
Before installing the project, please visit the Node.js Chinese Official Website to install the Node.js environment. Versions v14 and above are theoretically supported, but it is recommended to install the latest version. As of now, Node.js has been updated to v20.12.2.

Check if Node.js is installed successfully:

bash
node -v
Download and run:

bash
# Download locally
git clone https://github.com/Unagi-cq/solChatai
# Enter the web UI directory
cd ./solchat-ui
# Install npm dependencies
npm install
# Run locally
npm run serve
Access:

bash
http://localhost:8080/
After the project starts, please refer to the "User Guide" section for usage instructions.

For developers, it is highly recommended to use the local interface call mode. Refer to the thchat-serve folder in the root directory of the repository:

bash
复制
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
The back-end interfaces provide three major categories of request examples: dialogue (llm), multimodal input (igm), and image generation (vim).

In the dialogue (llm) category, examples are provided for regular chat (chat), knowledge base retrieval (rag), and internet search (search).

Each request method provides the simplest implementation (files containing _simple_) and implementations based on LangChain (files containing _langchain_). Each request method also provides examples for loading local models (secure, free, requires GPU) and using a Key to request third-party remote models (security unknown, paid, no GPU resources required).

Running the back-end files requires a Python 3.10 environment. First, create a conda environment by executing:

bash
# Enter the web serve directory
cd ./solchat-serve
# Create a conda environment
conda_env.sh
# Activate the conda environment
conda activate solchat
To start an interface, run:

bash
复制
# Start a specific interface
python ./llm/chat/1_simple_local_chat.py
Note: If the project fails to start, please check if port 8080 for the front-end project and port 5000 for the back-end service are occupied.

Packaging and Deployment
Front-end project packaging:

bash
npm run build
After successful packaging, a dist folder will be generated. Upload the contents of the dist folder to the server.

Additionally, requests to Alibaba Cloud and Baidu Qianfan platforms require proxy configuration. Add the following nginx proxy configuration to the server hosting the site:

bash
复制
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
        # proxy_hide_header Upgrade;
    
        add_header X-Cache $upstream_cache_status;
        #Set Nginx Cache
    
        set $static_file8WLuNoD1 0;
        if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
        {
            set $static_file8WLuNoD1 1;
            expires 1m;
        }
        if ( $static_file8WLuNoD1 = 0 )
        {
            add_header Cache-Control no-cache;
        }
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
        # proxy_hide_header Upgrade;
    
        add_header X-Cache $upstream_cache_status;
        #Set Nginx Cache
    
        set $static_file8WLuNoD1 0;
        if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
        {
            set $static_file8WLuNoD1 1;
            expires 1m;
        }
        if ( $static_file8WLuNoD1 = 0 )
        {
            add_header Cache-Control no-cache;
        }
    }
Note: No additional configuration is needed for local debugging. /ali/remote/ and /baidu/remote/ correspond to the proxy prefixes in the vue.config.js file of the front-end project.

Deploying the back-end interface is straightforward. Configure the Python 3.10 environment, install the required packages, and run it directly.
