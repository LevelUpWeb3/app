# Contributing to Level Up
As we build out Level Up, there will be numerous different ways to contribute. If you're interested in making a code or content contribution, please start by creating an issue and discussing the idea with a member of our team in the Level Up Telegram group. We are thrilled to support you!

The most impactful contributions you can make right now are:
### Creating a coding challenge on the Level Up website
1. To create a new coding challenge, ensure that the challenge follows the [Challenge specifications](https://scrollzkp.notion.site/Level-Up-Challenge-Specifications-95da29d76e4140089f8d771ce09e6c30#13d77338ed8d491982d01eb873abbbe3)
2. Take a look at our [website](https://www.levelupweb3.xyz/solidity/data-types) and [codebase](src/challenges/solidity) to get a feeling for how it should look like
3. Create an issue following the standards and processes below

# Architecture of a Challenge
Each challenge must have its own dedicated GitHub repository.
If you are looking for an example challenge, take a look at [this repository](https://github.com/Protocol-Explorer/Level-Up/tree/main/Season-1-Defi-Lending).
## Levels
A challenge can consist of one or multiple levels. Each level needs to have an introductory Readme.md file containing an overview of the level.
Levels should live within nested folders in the github repository. For example, the folder for Level 1 should be called `Level 1`.  Each level should include:
- Description of the level
- Educational reading material (eg covering the basics of DeFi smart contract architecture)
- Depending on complexity/flow, you can have several text files 
- you can also add images, graphics, charts, etc. These should live in a folder called `assignment hints`

## Assignment
After you have provided the necessary reading material, you now need to provide instructions. Each level should have an assignment text file that includes:
- detailed step-by-step instructions for how to complete the level
- a smart contract template that has clues and instructions commented into it; this template should be located within the same folder as the Level itself
- The smart contract template should include answer keys

# Standards

We try to keep a clean commit history, so we'll follow a standard process:
- Create a new issue
    - Comment on the issue if you'd like to be assigned to it
- Fork the Repo & Create a PR
- Someone will review your PR
- Your PR will be merged, amended, closed, or you'll be asked for changes

- Commit messages
    - Start with a present-tense verb
    - Keep your commit headline short but sufficient to understand the scope and focus of the change.
    - Changes are often formatted like `add doc X`, `fix page Y`, `improve docs for Z`.
    - Example: "update contract addresses for USDC on Scroll Sepolia".
- If you touch any infrastructure, make sure it builds with ```yarn build```
- Trust the autoformatter (prettier)
- Make sure images are optimized and compressed
- Keep images < 20kb whenever possible to keep the site fast and the repo small (try trimage)

## Style Guide

- **Bold** key terms or any terms the user must absolutely know when reading through your instructions.
- _Italicize_ terms for emphasis but only when necessary.
- Use a consistent voice.
- Use markdown to format.