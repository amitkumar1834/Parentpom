# umpg-uppm-mulesoft-parent-pom

## Getting started
These are the steps needed to update the Parent POM file that handles core Mulesoft Anypoint deployment configuration for the reference architecture.

After cloning this repository, please setup project specific git hooks by running the following command from the root of the repo

```
git config core.hooksPath .githooks
```

This ensures your commit messages conform to conventional commits specification and helps us build a viable changelog.

After you commit, github will update the version of the pom.xml based on your commit message so ensure you git pull
to obtain the new version number.

Update the reference template project and all existing projects that reference the parent-pom to the new version.
