<div align="center">

# 👁️‍🗨️ SightX: Proactive Automated Surveillance Platform

**Empowering security with real-time, ML-driven threat detection.**

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-blue.svg?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/OpenCV-Vision-green.svg?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV">
  <img src="https://img.shields.io/badge/Models-YOLO-orange.svg?style=for-the-badge" alt="Models">
  <img src="https://img.shields.io/badge/Database-SQLite-lightgrey.svg?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
</p>

</div>

---

## 📌 Overview

**SightX** is an advanced AI‑powered surveillance system engineered to detect violent activity in real-time. 

By integrating a state-of-the-art deep learning model—**YOLO**—with a streamlined, minimal desktop application, SightX delivers a proactive approach to security. The platform prioritizes backend intelligence, ensuring robust threat detection while providing critical alerts, incident logging, and system monitoring through an unobtrusive frontend interface.

---

## 🔄 System Workflow

Here is a high-level representation of how the SightX detection engine processes real-time surveillance:

```mermaid
graph TD
    A[📹 Live Video Feed] --> B[🖼️ Frame Extraction]
    B --> C{🧠 AI Detection Engine}
    
    subgraph Deep Learning Pipeline
        C --> D[🎯 YOLO<br/>Object & Violence Detection]
    end
    
    D --> G{⚔️ Violence Detected?}
    
    G -- No --> A
    
    G -- Yes --> H[🚨 Trigger Alerts]
    
    subgraph Incident Response
        H --> I[🔴 Red Banner & Confidence Score]
        H --> J[🔊 Automated Voice Alerts]
        H --> K[💾 Log to SQLite Database]
    end
    
    I --> L[💻 Minimal Desktop UI]
    J --> L
    K --> L
    L --> M[📈 Monitor System Stats]
```

---

## ⚙️ Key Features

- 🎥 **Real‑Time Video Feed:** Live monitoring with dynamic bounding box detection overlays.
- 🧠 **Violence Classification:** Highly accurate threat detection with live confidence scores.
- 📊 **System Stat Monitoring:** Keep track of hardware performance (RAM, CPU, GPU, FPS).
- 🗄️ **Automated Incident Logging:** Securely stores timestamped threat events into a local SQLite database.
- 🚨 **Instant Threat Alerts:** Triggers visual red banners and automated voice alerts upon threat detection.
- 🎭 **Demo Mode:** Built-in controlled environment for easy demonstrations and testing.

---

## 🌍 Real-World Impact

SightX is designed to save lives and reduce response times across various critical sectors:

- 🏦 **Bank Security:** Proactively detects gunpoint robberies. Integrates with existing CCTV systems to automatically alert law enforcement without requiring human intervention.
- 🏫 **School Safety:** Monitors campuses for weapons or violent altercations, ensuring immediate alerts to authorities to help prevent tragedies.
- 🏙️ **Public Spaces:** Enhances public safety in crowded areas like malls and transit stations through automated, real-time threat reporting.

---

## 🛠 Tech Stack

### Core Technologies
*   **Language:** Python 3.10+
*   **Standard Libraries:** `sys`, `os`, `datetime`, `threading`, `time`
*   **Computer Vision:** `opencv-python` (cv2), `numpy`
*   **System & Utilities:** `psutil` (Hardware monitoring), `pyttsx3` (Voice alerts)
*   **Database:** `sqlite3`

### Machine Learning Frameworks
*   **YOLO:** High-speed object and violence detection.

---

## 📂 Project Structure

```text
SightX/
├── src/          # Source code (frontend + backend integration)
├── assets/       # Logos, icons, and demo videos
├── docs/         # Documentation, design notes, and references
└── README.md     # Project overview and usage instructions
```

---

## 🚀 Getting Started

**Quick Launch:** No setup required! Just run the deployed executable.

1. 📥 **[Download SightX App](https://drive.google.com/file/d/1Q38cCR6Du2H9lOr4tFUhCblvo2FHx2fA/view?usp=drive_link)** (ZIP File)
2. 🗜️ **Extract** the folder and locate `SightX.exe`.
3. 🚀 **Double-click** to launch the dashboard.
4. 🧪 Use **Demo Mode** to instantly test the threat detection!

---

## 📷 Project Visuals

<p align="center">
  <img src="docs/Screenshot%20(17).png" width="300" alt="Dashboard View 1"/>
  <img src="docs/WhatsApp%20Image%202026-03-20%20at%2010.25.53%20PM.jpeg" width="300" alt="Detection Example"/>
</p>

<p align="center">
  <img src="docs/demo.jpeg" width="300" alt="Demo Interface"/>
</p>

---

## 👥 Contributors

| Name | Role | Connect |
| :--- | :--- | :--- |
| **Harshit Sharma** | Project Lead & Frontend | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/harshit-sharma-4a167237b/) |
| **Yash Raj** | Backend Developer & ML | [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/yash-raj-299802383/) |

---

<br>

> **⚠️ Disclaimer:** This repository hosts the deployed application for demo purposes. Please note that any errors occurring due to incorrect user implementation or environmental misconfigurations must not be inferred as a development error.

<div align="center">
  <i>Built to make the world a safer place.</i>
</div>


