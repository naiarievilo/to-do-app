# The project will be mounted in /workspace by default.
# Every new shell will open inside the built container.
# On top of this build, we install `zsh`, `git` and `docker` as additional
# Docker layers.

# CodeSandbox supports debian & ubuntu based images
FROM ubuntu

# Update package index files and upgrade packages
RUN apt update -y
RUN apt upgrade -y

# Install basic programs in container
RUN apt install -y curl

# Install current LTS version of Node (v18.x) from a NodeSource's PPA
RUN curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt -y remove nodejs npm
RUN apt -y install nodejs