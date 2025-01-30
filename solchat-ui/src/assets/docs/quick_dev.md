[[toc]]

THChatUI not only provides a frontend project for developers but also includes 12 API examples based on Python's Flask library.

These APIs provide both minimal implementation (files with _simple_) and langchain-based implementation (files with _langchain_), covering five types of interface examples: regular chat, knowledge base retrieval, web search, multimodal input, and image generation.


### Installation
Before installing the project, please visit the [Node.js official website](https://nodejs.org/en/download/) to install the Node.js environment. Any version above v14 should work, but we recommend installing the latest version. As of now, Node.js has been updated to v20.12.2.

To check if Node.js is installed successfully:

```bash
node -v
```

Download and run:

```bash
# Download to local
git clone https://github.com/Unagi-cq/THChatUI
# Enter web ui directory
cd ./thchat-ui
# Install npm dependencies
npm install
# Local run
npm run serve
```

Access:

```bash
http://localhost:8080/
```

After the project starts, please refer to the "Usage Tutorial" column for instructions.

For developers, it is strongly recommended to use the local interface call mode. Please refer to the **thchat-serve** folder under the repository root directory:

```bash
thchat-serve
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

The backend APIs provide three types of request examples: dialog (llm), multimodal input (igm), and image generation (vim).

In dialog (llm), regular chat (chat), knowledge base retrieval (rag), and web search (search) examples are provided.

Each request type provides both minimal implementation (files with _simple_) and langchain-based implementation (files with _langchain_).
Each request type provides examples of loading local models (safe, free, requires a GPU) and using KEY to request remote models from third parties (safe unknown, paid, no need for GPU resources).

The backend file requires python3.10 environment. First, create a conda image, which can be executed:

```bash
# Enter web serve directory
cd ./thchat-serve
# Create conda image
conda_env.sh
# Activate conda image
conda activate thchat
```

The interface can be started by running:
```bash
# Start a specific interface
python ./llm/chat/1_simple_local_chat.py
```

> [Note] If the project fails to start, please check if the frontend project port 8080 and the backend service port 5000 are occupied.

### Packaging and Deployment
Frontend project packaging:

```bash
npm run bulid
```

If packaging is successful, a dist folder will be generated. Upload the contents of the dist folder to the server.

The backend interface deployment is very simple. Configure the python3.10 environment, install the package, and run directly.
