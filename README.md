# PyMatrix: Python 互动学习平台

PyMatrix 是一个充满“科技感”与“赛博朋克”暗黑美学的 Python 互动学习网站。本项目基于纯原生 HTML / CSS / JavaScript 开发，并采用 Vite 作为前端构建工具，旨在为零基础到进阶的开发者提供一个沉浸式、极客风的在线学习体验。

## 🌟 核心特性

- **极致的视觉体验**：全局暗黑模式，搭配赛博朋克风的荧光蓝/紫点缀、毛玻璃（Glassmorphism）特效以及流畅的微动画。
- **系统化学习图谱**：清晰展示各个阶段的学习目标（从基础语法、逻辑控制流到面向对象与网络爬虫），并带有动态进度条。
- **互动式编程模拟**：高仿的 VS Code 暗黑代码编辑器界面，带有一键“运行代码”和模拟终端输出的交互功能，让学习更具沉浸感。
- **轻量级 & 高性能**：剥离繁重的 UI 框架，采用最纯粹的 Web 基础技术栈结合 Vite 极速构建。

## 📂 项目结构

```text
python-learning-site/
├── index.html       # 首页：展示平台愿景与核心课程概览
├── courses.html     # 学习图谱页：按节点化展示 Python 学习进度
├── lesson.html      # 互动编程页：左侧图文教程，右侧模拟代码编辑器与终端
├── src/
│   ├── main.js      # 全局交互逻辑（包含终端运行动画、数字动态递增等）
│   └── style.css    # 全局样式系统（定义了暗黑主题、色彩变量与关键帧动画）
├── public/          # 静态资源存放目录
├── package.json     # 项目依赖与运行脚本
└── vite.config.js   # (如需自定义) Vite 配置文件
```

## 🚀 快速启动

要在本地运行该网站，请确保您的系统中已安装 [Node.js](https://nodejs.org/)。

### 1. 安装依赖
在项目根目录下执行：
```bash
npm install
```

### 2. 启动开发服务器
继续执行：
```bash
npm run dev
```

启动成功后，打开浏览器访问终端中提示的本地地址（默认通常为 `http://localhost:5173/`），即可预览网站的全部动态效果。

### 3. 构建生产版本（可选）
如果您需要将网站部署到线上服务器，可以运行打包命令：
```bash
npm run build
```
这将在根目录下生成一个 `dist` 文件夹，您可以将其托管至任何静态网站服务器（如 Vercel, Netlify, GitHub Pages 或 Nginx）。

## 🛠️ 技术栈

- **HTML5** (Semantic structure)
- **CSS3** (Vanilla, CSS Variables, Flexbox/Grid, Animations)
- **JavaScript** (ES6+, DOM Manipulation)
- **Vite** (Next Generation Frontend Tooling)

## 🤝 贡献与修改

本平台的所有样式及交互逻辑均在 `src/style.css` 和 `src/main.js` 中进行了模块化管理。如需调整主题颜色，只需在 `style.css` 顶部的 `:root` 变量中修改相应色值即可。
