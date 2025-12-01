# 🎄 Advent of Code 2025 — Solutions TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)
![License](https://img.shields.io/badge/License-ISC-grey)
![AoC](https://img.shields.io/badge/Advent%20of%20Code-2025-brightgreen)

Ce dépôt contient mes solutions pour l'[Advent of Code 2025](https://adventofcode.com/2025). 
Chaque jour est traité comme un mini-projet indépendant, implémenté en **TypeScript** avec un focus sur la propreté du code (Clean Code) et la performance.

## 📋 Table des Matières
- [Progression](#-progression)
- [Architecture & Structure](#-architecture--structure)
- [Prérequis](#-prérequis)
- [Installation & Démarrage](#-installation--démarrage)

## 🏆 Progression

| Jour | Challenge | Étoiles | Solution | Sujets abordés |
|:---:|:---|:---:|:---:|
| 01 | [Secret Entrance](https://adventofcode.com/2025/day/1) | ⭐⭐ | [Voir code](./001/) |
| 02 | *À venir...* | | |
| ... | | | |

## 🏗 Architecture & Structure

Le projet est structuré par dossier journalier. Chaque dossier (ex: `001/`) est un package Node.js autonome avec sa propre configuration et ses tests.

```text
Advent-Of-Code-2025/
├── 001/                # Jour 1
│   ├── src/            # Code source du jour
│   ├── attached_document.txt # Input du puzzle
│   ├── package.json    # Dépendances spécifiques
│   └── README.md       # Explication spécifique du challenge
├── 002/                # Jour 2 (à venir)
├── ...
└── README.md           # Ce fichier (Vue globale)
````

## ⚙️ Prérequis

Pour exécuter les solutions, vous avez besoin de :

  * **Node.js** : v20.19.6 ou supérieur
  * **npm** : v10.x ou supérieur

## 🚀 Installation & Démarrage

Chaque jour étant indépendant, vous devez installer les dépendances dans le dossier correspondant au challenge que vous souhaitez exécuter.

1.  **Cloner le projet :**

    ```bash
    git clone [https://github.com/WilliammCorreia/Advent-Of-Code-2025.git](https://github.com/WilliammCorreia/Advent-Of-Code-2025.git)
    cd Advent-Of-Code-2025
    ```

2.  **Exécuter un challenge spécifique (ex: Jour 1) :**

    ```bash
    cd 001          # Aller dans le dossier du jour
    npm install     # Installer les dépendances locales
    npm run dev     # Lancer la solution
    ```

## 📝 Auteur

  * **William M. Correia** - *Développeur Fullstack*