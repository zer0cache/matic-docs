# Matic Documentation

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


Polygon is a scaling solution for public blockchains that combines the best of Ethereum and sovereign Blockchains into a full-stack scaling solution.

[Polygon documentation website](https://docs.polygon.technology/) is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## How to contribute to our Documentation

We believe one of the things that makes Polygon special is its coherent design and we seek to retain this defining characteristic. From the outset we defined some guidelines to ensure new contributions only ever enhance the Documentation.

### Requirements to run the docs website locally

* Install [Node.js](https://nodejs.org/en/download/) version >= 12.13.0 or above  
* Install [Yarn](https://yarnpkg.com/en/) version >= 1.5  

Note that on macOS you also need Xcode and Command Line Tools.

### Run the documentation locally in your machine

1. Fork the [Repo](https://github.com/maticnetwork/matic-docs), check [how to fork the repo](https://help.github.com/en/articles/fork-a-repo)

2. Clone your forked repo
    ```
    git clone git@github.com:[your_github_handle]/matic-docs
    ```
3. Navigate into the cloned folder
    ```
    cd matic-docs
    ```
4. If you have already forked the repo, you need to ensure that the fork is configured and up to date to avoid potential merge conflicts. Check [how to configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
```
git remote add upstream https://github.com/maticnetwork/matic-docs
```
[Sync your fork with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):
```
git checkout master
git fetch upstream
git merge upstream/master
```
5. Install all dependencies
    ```
    yarn install
    ```
6. Run docs locally, this command starts a local development server and opens up a browser window *http://localhost:3000*. Most changes are reflected live without having to restart the server:
    ```
    yarn start
    ```

### Make changes using Git GUI and code editor

After running the docs locally on your machine, you need to use a code editor such as Atom to start applying your changes and then submit your PR using a Github tool such as GitHub Desktop. Please, fork our docs repo and create a new GitHub brunch for each PR that you want to make.

1. Create new branch for your changes
    ```
    $ git checkout -b [new_branch_name]
    ```

2. Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves. check [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) and our [Git-Rules](https://docs.polygon.technology/docs/contribute/orientation#git-rules)
    ```
    $ git commit -m "brief description of changes [Fixes #1234]"
    ```
3. Push to your GitHub account
    ```
    $ git push
    ```
4. Submit a pull request (PR) to the `master` branch of the `maticnetwork/matic-docs` repo (only after your changes are commited to your GitHub fork)
5. In your PR description, reference the issue it resolves. Check [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)
6. Add a name to your Commit changes (PR request). For example, if you want to suggest editing to the page [Getting Started](https://docs.polygon.technology/docs/develop/getting-started), you need to name your PR *Update /docs/develop/getting-started.md*
7. Write a brief description of changes you have made (add screenshots and references if possible)

Note that for editing suggestions you must have a Github account and good knowledge of Markdown syntax.

You can apply UI changes, sidebar and configuration design, through the following files:

- To modify the **Sidebar** navigation, you will need to apply changes to the file **sidebars.js**
- To modify the website page layout, you will need to apply changes to the file **docusaurus.config.js**
- To modify the blocks structure and the footer links, you will need to apply changes to the file **src/pages/index.js**

### Make changes using our docs website

You can easily submit an edit suggestion:

1. Navigate to the [Polygon documentation page](https://docs.polygon.technology/docs/develop/getting-started/) that you want to edit
2. Scroll down until the end of that page
3. Click on the button **Edit this page**, it will forward you to the same page (markdown format) hosted on Github
4. On the related Github page, click on the button **Edit this file**
5. Apply your edits suggestions by modifying the Markdown file
6. After you finish your editing, scroll down until the end of that page
7. Add a name to your Commit changes (PR request). For example, if you want to suggest editing to the page [Getting Started](https://docs.polygon.technology/docs/develop/getting-started) you need to name your PR *Update /docs/develop/getting-started.md*
8. Click on the green button **Propose channges** to submit your changes in the form of a new PR. Note that submitting a change will write it to a new branch in your fork, so you can send a pull request.
9. After that we will review your PR and either accept it or submit our review on it. Acceptable PRs will be approved & merged into the `master` branch

## Submit an issue

- Create a [new issue](https://github.com/maticnetwork/matic-docs/issues/new/choose) to report a bug, request a feature, or suggest changes
- Comment on the issue if you want to be assigned to it so [our team can assign the issue to you](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).
- If you do not have a specific contribution in mind, you can also browse current issues.
- Issues that additionally have the `good first issue` label are considered ideal for first-timers

## Build

This command generates static content into the `build` directory and can be served using any static contents hosting service:

```
$ yarn build
```

## Deployment

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```
