# Contributing to Level Up
As we build out Level Up, there will be numerous different ways to contribute. If you're interested in making a code or content contribution, please start by creating an issue and discussing the idea with a member of our team in the Level Up Telegram group.

The most impactful contributions you can make right now are:
1. Creating a challenge similar to the [Solidity challenges](src/challenges/solidity).

If you are looking for information about contributing a translation, please see TRANSLATION.md.

We try to keep a clean commit history, so we'll follow a standard process initially created by the Chainlink team whose documentation we forked:

- Create a new issue
    - Comment on the issue if you'd like to be assigned to it
    - Fork the Repo & Create a PR
    - If your PR contains multiple commits, we'll ask you to squash them
- If your PR has conflicts, we'll ask you to rebase it
- Someone will review your PR
    - Your PR will be merged, amended, closed, or you'll be asked for changes

## Standards

- Commit messages
 - Start with a present-tense verb
 - Keep your commit headline short but sufficient to understand the scope and focus of the change.
 - Changes are often formatted like `add doc X`, `fix page Y`, `improve docs for Z`.
 - Example: "update contract addresses for USDC on Scroll Sepolia".
- If you touch any infrastructure, make sure it builds with yarn build
- Trust the autoformatter (prettier)
- Make sure images are optimized and compressed
- Keep images < 20kb whenever possible to keep the site fast and the repo small (try trimage)

## How to rebase a PR
```git fetch
git rebase origin/main
# resolve conflicts
git push -f
```

It's okay to force push over your own PR branch. That's what we want so that the commits are clean.