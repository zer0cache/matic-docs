# Matic-Docs

![Forks](https://img.shields.io/github/forks/maticnetwork/matic-docs?style=social)
![Stars](https://img.shields.io/github/stars/maticnetwork/matic-docs?style=social)
![Languages](https://img.shields.io/github/languages/count/maticnetwork/matic-docs) 
![Issues](https://img.shields.io/github/issues/maticnetwork/matic-docs) 
![PRs](https://img.shields.io/github/issues-pr-raw/maticnetwork/matic-docs)
![contributors](https://img.shields.io/github/contributors-anon/maticnetwork/matic-docs)
![size](https://img.shields.io/github/languages/code-size/maticnetwork/matic-docs) 
[![Discord](https://img.shields.io/discord/714888181740339261?color=1C1CE1&label=Polygon%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat-square)](https://discord.gg/zdwkdvMNY2)
[![Twitter Follow](https://img.shields.io/twitter/follow/0xPolygon.svg?style=social)](https://twitter.com/0xPolygon)


![Frame 3808](https://user-images.githubusercontent.com/63050765/148505368-134636fe-84e1-41bd-a30f-0e01907afbc1.png)


Polygon is a scaling solution for public blockchains that combines the best of Ethereum and sovereign Blockchains into a full-stack scaling solution. Polygon documentation website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.


## How to contribute to our Documentation🛠️

### Contribution  Guidelines
We believe one of the things that makes Polygon special is its coherent design and we seek to retain this defining characteristic. From the outset we defined some guidelines to ensure new contributions only ever enhance the Documentation.

**Check out our [Contribution Guidelines]()**
### Submit an issue

- Create a [new issue](https://github.com/maticnetwork/matic-docs/issues/new/choose) (Report a bug, Request a feature or Suggest changes)
- Comment on the issue (if you'd like to be assigned to it) - that way [our team can assign the issue to you](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).
- If you do not have a specific contribution in mind, you can also browse current issues.
- Issues that additionally have the `good first issue` label are considered ideal for first-timers

### Requirements

* Install [Node.js](https://nodejs.org/en/download/) version >= 12.13.0 or above  
* Install [Yarn](https://yarnpkg.com/en/) version >= 1.5  

Note that on macOS you also need Xcode and Command Line Tools.

### Run the documentation locally in your machine

- **Folk the [Repo](https://github.com/maticnetwork/matic-docs)** - If you're not sure, here's how to [fork the repo](https://help.github.com/en/articles/fork-a-repo)

- Clone your Forked repo:

    ```
    git clone git@github.com:[your_github_handle]/matic-docs
    ```
- Navigate into the cloned folder
    ```
    cd matic-docs
    ```
- If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts. To [configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork):

    ```
    git remote add upstream https://github.com/maticnetwork/matic-docs
    ```

- To [sync your fork with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):

    ```
    git checkout master
    git fetch upstream
    git merge upstream/master
    ```
- Install all dependencies
    ```
    yarn install
    ```
- Run docs locally
    ```
    yarn start
    ```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
 yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
 GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Make Changes

- Change the sidebar and configuration design
     - To modify the **Sidebar** navigation, you will need to apply changes to the file called **sidebars.js**
     - To modify the website page layout and deploy Netlify, you will need to apply changes to the file called **docusaurus.config.js**
     - To modify the blocks structure and the footer links, you will need to apply changes to the file called **src/pages/index.js**

- Create new branch for your changes

    ```
    $ git checkout -b [new_branch_name]
    ```

- Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

    Checkout our [Git-Rules](https://docs.polygon.technology/docs/contribute/orientation#git-rules)

    ```
    $ git commit -m "brief description of changes [Fixes #1234]"
    ```

- Push to your GitHub account

    ```
    $ git push
    ```



Note that for editing suggestions you must have a Github account and good knowledge of Markdown syntax.

### Submit your PR

- After your changes are commited to your GitHub fork, submit a pull request (PR) to the `master` branch of the `maticnetwork/matic-docs` repo
- In your PR description, reference the issue it resolves (see [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))

  Add a name to your Commit changes (PR request). For example, if you want to suggest editing to the page [Getting Started](https://docs.polygon.technology/docs/develop/getting-started) you need to name your PR -
  - `Update /docs/develop/getting-started.md`
 
- Write a brief description of changes you have made (Add Screenshots, References if possible)
- Why not say hi and draw attention to your PR in [our discord server](https://discord.gg/zdwkdvMNY2)?

### Wait for review

- The team reviews every PR
- Acceptable PRs will be approved & merged into the `master` branch

<hr style="margin-top: 3em; margin-bottom: 3em;">

## Join our Discord server👋

Join Polygon community  – share your ideas or just say hi over [on Discord](https://discord.gg/zdwkdvMNY2).
